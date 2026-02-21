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
];

export function getPortfolioItem(slug) {
  return portfolioItems.find((item) => item.slug === slug) ?? null;
}

export function getCaseStudies() {
  return portfolioItems.filter((item) => item.type === "case-study");
}
