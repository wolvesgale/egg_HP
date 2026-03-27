/**
 * DXポートフォリオ データ管理ファイル
 * slug はURLになります（英数字・ハイフンのみ）。
 */

export const portfolioItems = [
  {
    slug: "tenku",
    type: "product",
    featured: true,
    title: "TENKU AI Agent",
    tagline: "技能実習・特定技能・特定活動を1システムで統合管理",
    description:
      "TENKU-AI（TENKU AI Agent）は、技能実習（TITP）／特定技能（SSW）／特定活動（TA）の在留資格管理・書類生成・更新通知を「1システムで統合管理」するクラウドネイティブ SaaS プロダクトです。" +
      "煩雑な外国人労働者の在留管理業務を自動化し、コンプライアンスリスクの低減と業務効率化を同時に実現します。",
    thumbnail: null,
    tags: ["SaaS", "AWS", "技能実習 TITP", "特定技能 SSW", "特定活動 TA", "AI Agent", "在留資格管理"],
    links: {
      demo:     "TENKU_DEMO_URL",
      purchase: "TENKU_PURCHASE_URL",
      signup:   "TENKU_SIGNUP_URL",
    },
  },

  // ── 案件実績 ──────────────────────────────────────────────────────────────

  {
    slug: "wholesale-system-renewal",
    type: "case-study",
    featured: false,
    title: "Webシステム刷新プロジェクト",
    tagline: "卸売業企業向け統合管理システム",
    description:
      "卸売業の受発注・在庫・請求管理をクラウドネイティブ構成にリニューアル。" +
      "Next.js 15 × AWS Lambda × RDS (PostgreSQL) でサーバーレスアーキテクチャを採用し、" +
      "業務の自動化と可視化を実現しました。Amplify によるホスティングで DevOps も刷新。",
    thumbnail: null,
    tags: ["Next.js 15", "AWS Lambda", "Amazon RDS", "PostgreSQL", "Amplify", "TypeScript", "サーバーレス"],
    results: [
      "受発注処理の自動化・ペーパーレス化",
      "在庫データのリアルタイム可視化",
      "システム運用コスト大幅削減",
      "Amplify CI/CD による開発速度向上",
    ],
    screenshots: [],
  },

  {
    slug: "store-management-system",
    type: "case-study",
    featured: false,
    title: "店舗管理統合システム",
    tagline: "勤怠・レジ・売上管理の一元化",
    description:
      "複数店舗の勤怠打刻・POSレジ・売上データをリアルタイムに一元管理するシステムを構築。" +
      "Supabase をバックエンドに据えたモバイルファーストの設計で、" +
      "現場スタッフがスマートフォンから直感的に操作できる UX を実現しました。",
    thumbnail: null,
    tags: ["Supabase", "Next.js", "TypeScript", "モバイル対応", "リアルタイム DB", "PWA"],
    results: [
      "勤怠管理の完全デジタル化",
      "売上データのリアルタイム集計・可視化",
      "複数店舗間のデータ共有・比較分析",
      "スマートフォン対応でペーパーレス運用",
    ],
    screenshots: [],
  },
  {
    slug: "cardvoice",
    type: "case-study",
    featured: false,
    title: "CardVoice",
    tagline: "撮って、話して、つながる名刺管理アプリ",
    description:
      "名刺をカメラで撮影するだけでOCRが情報を自動読み取り、音声メモで印象や会話内容をその場で記録。" +
      "AIが名刺データを自動整理し、検索・分類を効率化します。" +
      "Next.js × Supabase × Anthropic API × Stripe によるフリーミアム構成で、" +
      "PersonalプランとTeamプランの2段階で提供するモバイルファーストのSaaSです。",
    thumbnail: "/images/case-cardvoice-thumb.png",
    tags: ["Next.js", "Supabase", "Anthropic API", "Stripe", "Vercel", "OCR", "音声入力", "SaaS"],
    links: { demo: "https://cardvoice.vercel.app/" },
    results: [
      "カメラ撮影 → OCR による名刺情報の自動入力",
      "音声メモでリアルタイムに会話内容を記録",
      "AIによる自動タグ付け・分類・検索",
      "PersonalプランとTeamプランのフリーミアム構成",
    ],
    screenshots: [],
  },
  {
    slug: "wagashi-atelier",
    type: "case-study",
    featured: false,
    title: "和菓子アトリエ",
    tagline: "季節の和菓子レシピと体験予約サービス",
    description:
      "和菓子レシピのサブスクリプションサービスと体験教室予約を一体化したWebアプリ。" +
      "Stripe決済・Neon DB・Brave Search API連携による管理ダッシュボードも搭載。",
    thumbnail: "/images/case-wagashi-atelier-thumb.png",
    tags: ["Next.js", "Stripe", "Neon PostgreSQL", "Vercel", "SaaS", "和菓子"],
    links: { demo: "https://wagashi-atelier.vercel.app/" },
    results: [
      "レシピのサブスクリプション配信",
      "体験教室のオンライン予約",
      "Stripe連携による決済処理",
      "管理ダッシュボードで運営効率化",
    ],
    screenshots: [],
  },
  {
    slug: "tenku-game",
    type: "case-study",
    featured: false,
    title: "TENKU-GAME",
    tagline: "未成年向け安全ゲームコミュニティプラットフォーム",
    description:
      "未成年者を対象とした安全なゲームコミュニティプラットフォーム。" +
      "Steam API連携・フォロー/相互フォロー機能・DMチャンネル作成を備えた" +
      "Next.js × Neon PostgreSQL構成のWebアプリです。",
    thumbnail: null,
    tags: ["Next.js", "Neon PostgreSQL", "Steam API", "Vercel", "コミュニティ"],
    links: { demo: "https://tenku-game.vercel.app/" },
    results: [
      "Steam API連携によるゲーム情報取得",
      "フォロー・相互フォロー機能",
      "安全なDMチャンネル機能",
      "未成年向け安全設計",
    ],
    screenshots: [],
  },
  {
    slug: "hojo-ai",
    type: "case-study",
    featured: false,
    title: "HojoAI",
    tagline: "補助金申請書をAIが自動生成",
    description:
      "AIが補助金申請書を自動生成し、採択率の高い申請書を数分で作成できるSaaS。" +
      "Gemini 2.5 Flash × Next.js × Clerk構成で、サンプルPDFプレビューやX自動投稿機能も搭載。" +
      "FreeプランからProプランまでのフリーミアム構成。",
    thumbnail: null,
    tags: ["Next.js", "Gemini AI", "Clerk", "Vercel", "Stripe", "SaaS"],
    links: { demo: "https://hojyokin-saas-wolvesgales-projects.vercel.app/" },
    results: [
      "補助金申請書をAIが数分で自動生成",
      "サンプルPDFプレビュー機能搭載",
      "X（Twitter）自動投稿機能",
      "フリーミアムプラン構成",
    ],
    screenshots: [],
  },
];

export function getPortfolioItem(slug) {
  return portfolioItems.find((item) => item.slug === slug) ?? null;
}

export function getCaseStudies() {
  return portfolioItems.filter((item) => item.type === "case-study");
}
