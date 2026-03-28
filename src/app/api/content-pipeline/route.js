import { NextResponse } from 'next/server'

// コンテンツパイプライン
// GET  /api/content-pipeline?topic=haccp|transport — 記事・投稿を生成
// POST /api/content-pipeline — cronから呼び出し（自動生成＆キュー保存）

const TOPICS = {
  haccp: {
    label: 'HACCP・食品衛生管理',
    keywords: ['HACCP', '食品衛生', '衛生管理', '保健所', '食品製造', '弁当製造'],
    xPrompt: `あなたは食品衛生・HACCP専門のSNSライターです。
中小食品事業者・飲食店経営者に向けて、HACCPや食品衛生管理に関する実用的な投稿を作成してください。
【条件】
- 140文字以内（日本語）
- 具体的な数字や事例を含める
- 「HACCP AI」や「株式会社egg」の宣伝は最後の1文だけ
- ハッシュタグ2〜3個
【テーマ案】衛生管理の落とし穴/保健所立入検査のポイント/HACCPプラン作成の手順/記録管理のコツ`,
    notePrompt: `あなたは食品衛生・HACCP専門のライターです。
中小食品事業者・飲食店経営者向けに、実用的なnote記事を作成してください。
【条件】
- タイトル: 「【保存版】〜」または「〜完全ガイド」形式
- 本文: 1,500〜2,500文字
- 見出し3〜5個（H2形式）
- 具体的な手順・チェックリストを含める
- 末尾にHACCP AIのβテスター案内を自然な形で追加（eggs.email/dx-consulting/haccp）
【テーマ案】HACCPプランの作り方/保健所立入検査の準備/食品製造の記録管理/衛生管理のデジタル化`,
  },
  transport: {
    label: '運送業・物流DX',
    keywords: ['運送業', '点呼記録', '運行日報', 'ドライバー管理', '物流DX', 'アルコール検知'],
    xPrompt: `あなたは運送業・物流DX専門のSNSライターです。
運送会社の経営者・運行管理者に向けて、点呼記録・運行日報・ドライバー管理に関する実用的な投稿を作成してください。
【条件】
- 140文字以内（日本語）
- 具体的な数字や法規制情報を含める
- 「運送AI」や「株式会社egg」の宣伝は最後の1文だけ
- ハッシュタグ2〜3個
【テーマ案】点呼記録の法定要件/アルコール検知義務化対応/運行日報のデジタル化/ドライバー不足対策`,
    notePrompt: `あなたは運送業・物流DX専門のライターです。
運送会社の経営者・運行管理者向けに、実用的なnote記事を作成してください。
【条件】
- タイトル: 「【2026年版】〜」または「〜完全解説」形式
- 本文: 1,500〜2,500文字
- 見出し3〜5個（H2形式）
- 法規制情報・具体的な手順を含める
- 末尾に運送AIのβテスター案内を自然な形で追加（eggs.email/dx-consulting/transport）
【テーマ案】点呼記録の義務と作り方/アルコール検知器義務化への対応/運行日報のデジタル化手順/IT導入補助金で運送DX`,
  },
}

async function generateWithClaude(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set')

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  })
  const data = await res.json()
  return data.content?.[0]?.text || ''
}

async function saveToQueue(content, type, topic) {
  // HojoAIのpost_queueと同様の構造でVercel KV or 外部DBに保存
  // ここではログ出力（DB接続は環境変数次第）
  console.log(`[content-pipeline] saved: type=${type} topic=${topic} length=${content.length}`)
  return { id: Date.now(), content, type, topic, status: 'pending' }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const topic = searchParams.get('topic') || 'haccp'
  const type = searchParams.get('type') || 'x' // x | note

  const config = TOPICS[topic]
  if (!config) {
    return NextResponse.json({ error: 'invalid topic' }, { status: 400 })
  }

  try {
    const prompt = type === 'note' ? config.notePrompt : config.xPrompt
    const content = await generateWithClaude(prompt)
    const saved = await saveToQueue(content, type, topic)

    return NextResponse.json({ ok: true, content, saved })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function POST(req) {
  // cronから呼び出し: 両トピック×両タイプを一括生成
  const results = []

  for (const topic of ['haccp', 'transport']) {
    for (const type of ['x', 'note']) {
      try {
        const config = TOPICS[topic]
        const prompt = type === 'note' ? config.notePrompt : config.xPrompt
        const content = await generateWithClaude(prompt)
        const saved = await saveToQueue(content, type, topic)
        results.push({ topic, type, ok: true, id: saved.id })
      } catch (e) {
        results.push({ topic, type, ok: false, error: e.message })
      }
    }
  }

  return NextResponse.json({ ok: true, results, generatedAt: new Date().toISOString() })
}
