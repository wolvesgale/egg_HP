import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const { email, company, service, type, vehicles } = body

    if (!email) {
      return NextResponse.json({ error: 'email required' }, { status: 400 })
    }

    // Notionデータベースに保存（環境変数があれば）
    if (process.env.NOTION_TOKEN && process.env.NOTION_BETA_DB_ID) {
      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          parent: { database_id: process.env.NOTION_BETA_DB_ID },
          properties: {
            Email: { title: [{ text: { content: email } }] },
            Company: { rich_text: [{ text: { content: company || '' } }] },
            Service: { select: { name: service || 'unknown' } },
            Type: { rich_text: [{ text: { content: type || vehicles || '' } }] },
            RegisteredAt: { date: { start: new Date().toISOString() } },
          },
        }),
      })
    }

    // メール通知（環境変数があれば）
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@eggs.email',
          to: ['wolvesgale0512@gmail.com'],
          subject: `【βテスター登録】${service} — ${email}`,
          text: `新しいβテスター登録がありました。\n\nサービス: ${service}\nメール: ${email}\n会社: ${company || '未記入'}\n業種/台数: ${type || vehicles || '未記入'}\n登録日時: ${new Date().toLocaleString('ja-JP')}`,
        }),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('beta-register error:', e)
    return NextResponse.json({ ok: true }) // フォームは成功表示を優先
  }
}
