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
      demo: "TENKU_DEMO_URL",
      purchase: "TENKU_PURCHASE_URL",
      signup: "TENKU_SIGNUP_URL",
    },
  },

  // ── 案件実績 ──────────────────────────────────────────────────────

  {
    slug: "wholesale-system-renewal",
    type: "case-study",
    featured: false,
    title: "Webシステム刷新プロジェクト",
    tagline: "卸売業企業向け統合管理システム",
    description:
      "卸売業の受発注・在庫・請求管理をクラウドネイティブ構成にリニューアル。" +
      "Next.js 15 × AWS Lambda × RDS (PostgreSQL) でサーバーレスアーキテクチャを採用し、" +
      "業務の自動化と可視化を実現しました。Amplify による DevOps も刷新。",
    thumbnail: "/images/case-wholesale-thumb.png",
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
    thumbnail: "/images/case-store-thumb.png",
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
    slug: "inventory-field-maintenance",
    type: "case-study",
    featured: false,
    title: "在庫棚卸管理システム",
    tagline: "入出庫・棚卸・月次レポートをWebで一元管理",
    description:
      "在庫の入出庫登録・棚卸・在庫台帳・月次レポートを一元管理するWebシステム。" +
      "マネージャー承認フローや在庫台帳のリアルタイム更新を実装し、" +
      "現場担当者からマネージャーまで使いやすいUI設計を実現しました。",
    thumbnail: "/images/case-inventory-thumb.png",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "承認フロー", "在庫管理"],
    results: [
      "入出庫登録・承認フローのデジタル化",
      "在庫台帳のリアルタイム可視化",
      "月次棚卸・レポート自動生成",
      "マネージャー承認画面で業務効率化",
    ],
    screenshots: [],
  },

  {
    slug: "saiya",
    type: "case-study",
    featured: false,
    title: "イベント・売上管理システム",
    tagline: "代理店・会場・仲介を横断したイベントカレンダー管理",
    description:
      "イベントの代理店・会場・仲介業者・ユーザーを統合管理するダークテーマのWebシステム。" +
      "カレンダービューでのスケジュール可視化・売上管理・売上レポート機能を備え、" +
      "複雑な関係者構造をシンプルなUIで管理できます。",
    thumbnail: "/images/case-saiya-thumb.png",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "カレンダー", "売上管理", "ダークUI"],
    results: [
      "代理店・会場・仲介を横断した一元管理",
      "カレンダービューでのスケジュール可視化",
      "売上データのリアルタイム集計・レポート",
      "複雑な関係者構造をシンプルに管理",
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
    slug: "hojo-ai",
    type: "case-study",
    featured: false,
    title: "HojoAI",
    tagline: "補助金申請書をAIが自動生成",
    description:
      "AIが補助金申請書を自動生成し、採択率の高い申請書を数分で作成できるSaaS。" +
      "Gemini 2.5 Flash × Next.js × Clerk構成で、サンプルPDFプレビューやX自動投稿機能も搭載。" +
      "FreeプランからProプランまでのフリーミアム構成。",
    thumbnail: "/images/case-hojo-ai-thumb.png",
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
