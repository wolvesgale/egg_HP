/**
 * DXポートフォリオ データ管理ファイル
 *
 * 案件を追加する場合は、以下の配列に新しいオブジェクトを追加してください。
 * slug はURLになります（英数字・ハイフンのみ）。
 */

export const portfolioItems = [
  {
    slug: "tenku",
    type: "product",         // "product" | "case-study"
    featured: true,
    title: "TENKU",
    tagline: "クラウドネイティブ SaaS プロダクト",
    description:
      "TENKUは、egg が開発・提供するSaaSプロダクトです。" +
      "詳細・デモ・お申込みは製品ページをご覧ください。",
    thumbnail: null,         // 画像パスを設定: "/images/tenku-thumb.png"
    tags: ["SaaS", "AWS", "クラウド"],
    links: {
      demo: "TENKU_DEMO_URL",         // TODO: 実際のデモURLに変更
      purchase: "TENKU_PURCHASE_URL", // TODO: 実際の購入URLに変更
      signup: "TENKU_SIGNUP_URL",     // TODO: 実際の申込URLに変更
    },
  },
  // ── 案件実績はここから追加 ──────────────────────────────────────────────
  // {
  //   slug: "case-sample",
  //   type: "case-study",
  //   featured: false,
  //   title: "案件タイトル",
  //   tagline: "業種・会社概要",
  //   description: "案件の説明。課題・取り組み・成果を記載。",
  //   thumbnail: "/images/cases/sample-thumb.png",
  //   tags: ["AWS", "DX", "業務改善"],
  //   results: ["成果1", "成果2"],
  //   screenshots: [
  //     { src: "/images/cases/sample-01.png", caption: "画面キャプション" },
  //   ],
  // },
];

export function getPortfolioItem(slug) {
  return portfolioItems.find((item) => item.slug === slug) ?? null;
}

export function getCaseStudies() {
  return portfolioItems.filter((item) => item.type === "case-study");
}
