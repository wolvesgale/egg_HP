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
    title: "Webシステムリニューアルプロジェクト",
    tagline: "卸売業企業向け統合管理システムの現代化",
    description:
      "卸売業の受発注・在庫・請求管理をクラウドネイティブ構成にリニューアル。" +
      "Next.js 15 × AWS Lambda × RDS (PostgreSQL) でサーバーレスアーキテクチャを採用し、" +
      "業務の自動化と可視化を実現。Amplify によるホスティングで DevOps も刷新しました。",
    thumbnail: "/images/portfolio/case-wholesale-thumb.png",
    tags: ["Next.js 15", "AWS Lambda", "Amazon RDS", "PostgreSQL", "AWS S3", "CloudFront", "Amazon SES", "JWT認証"],
    results: [
      "発注グループ化により承認・キャンセル・メール送信を一元管理",
      "日時フォーマット統一（formatDateJP）でUI一貫性を向上",
      "管理者画面のグループ化で承認業務効率化",
      "メール署名自動切替（4グループ対応）で運用効率化",
    ],
    screenshots: [],
  },

  {
    slug: "store-management-system",
    type: "case-study",
    featured: false,
    title: "店舗勤怠・レジ・売上管理システム",
    tagline: "小規模店舗向けの総合管理ソリューション",
    description:
      "複数店舗の勤怠打刻・POSレジ（写真証跡付き）・売上データをリアルタイムに一元管理。" +
      "Supabase をバックエンドに据えたモバイルファーストの設計で、" +
      "スマートフォンから直感的に操作できる UX を実現しました。",
    thumbnail: "/images/portfolio/case-store-thumb.jpg",
    tags: ["Supabase", "Next.js", "TypeScript", "モバイル対応", "リアルタイム DB", "PWA", "CSV出力"],
    results: [
      "勤怠打刻・勤務時間の自動集計（15分単位）でペーパーレス化",
      "レジ開閉に写真証跡を必須化し、現金管理の透明性を確保",
      "日次・月次売上をリアルタイム集計・グラフ化",
      "CSV出力対応で既存業務フローとシームレスに連携",
    ],
    screenshots: [],
  },

  {
    slug: "saiji-management-saas",
    type: "case-study",
    featured: false,
    title: "催事販売管理 マルチテナント SaaS",
    tagline: "催事の「裏方情報」をチームの資産に変える、売上ガバナンス付き管理プラットフォーム",
    description:
      "催事会場ごとの搬入ルール・現金規定・ゴミ出し情報を構造化データとして蓄積し組織ナレッジ化。" +
      "日次売上の未入力を Cron で自動検知し AWS SES で督促通知するガバナンス機能を実装。" +
      "Next.js 14 × Vercel × Supabase (PostgreSQL) のマルチテナント SaaS として本番稼働中です。",
    thumbnail: "/images/portfolio/case-saiji-thumb.png",
    tags: ["Next.js 14", "Vercel", "Supabase", "Prisma ORM v5", "AWS SES", "Google Sheets", "マルチテナント", "Cron"],
    results: [
      "会場ノウハウをメモ・添付ファイルでデータ化し、組織資産として再利用可能に",
      "21時締め・未入力を Cron 自動検知 → SES で代理店・管理者に即時通知",
      "売上データを Google Sheets へ 15 分間隔で自動同期",
      "SuperAdmin / Admin / Agent の RBAC で権限とテナントを完全分離",
    ],
    screenshots: [],
  },

  {
    slug: "wagashi-atelier",
    type: "case-study",
    featured: false,
    title: "和菓子アトリエ — 秘伝のレシピ帖",
    tagline: "AIとWeb検索で毎回異なるカスタマイズレシピを生成する、和菓子特化のレシピSaaS",
    description:
      "大福・団子・饅頭のカスタマイズレシピをAIがリアルタイムWeb検索で旬のトレンドを取り込みながらランダムに生成。" +
      "生成したレシピを永久保存・蓄積できる仕組みを備え、初日無料・年額¥100の手軽な価格設定で提供するWebサービスです。",
    thumbnail: null,
    externalUrl: "https://wagashi-atelier.vercel.app/",
    tags: ["Next.js", "AI", "Webリアルタイム検索", "Vercel", "レシピ生成"],
    results: [
      "AIリアルタイムWeb検索で旬の素材を反映したレシピを毎回自動生成",
      "生成レシピを永久保存・蓄積し、和菓子ノウハウをデータ資産化",
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
