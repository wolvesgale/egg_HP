import Link from "next/link";

export const metadata = {
  title: "TENKU AI Agent | 株式会社egg",
  description: "技能実習（TITP）・特定技能（SSW）・特定活動（TA）を1システムで統合管理 — egg が開発・提供する SaaS プロダクト TENKU AI Agent",
};

const features = [
  {
    icon: "fa-id-card",
    title: "在留資格の統合管理",
    desc: "技能実習（TITP）・特定技能（SSW）・特定活動（TA）の3区分を1つのダッシュボードで一元管理。複雑な在留資格の違いを意識せず運用できます。",
  },
  {
    icon: "fa-file-alt",
    title: "書類自動生成",
    desc: "在留資格申請・更新に必要な書類をAIが自動生成。入力項目を埋めるだけで申請書類セットが完成し、行政書士への依頼コストを大幅に削減。",
  },
  {
    icon: "fa-bell",
    title: "期限・更新通知",
    desc: "在留期限・契約更新日・定期報告期限を自動追跡。担当者にアラートを送信し、コンプライアンス違反リスクを未然に防ぎます。",
  },
  {
    icon: "fa-robot",
    title: "AI Agent サポート",
    desc: "複雑な在留資格要件の判定・Q&A対応をAIがサポート。業務ノウハウをシステムに集約し、担当者が変わっても品質を維持します。",
  },
  {
    icon: "fa-chart-bar",
    title: "労働者分析ダッシュボード",
    desc: "在籍人数・国籍構成・資格区分・在留期限分布をビジュアルで確認。経営判断・採用計画をデータドリブンで行えます。",
  },
  {
    icon: "fa-cloud",
    title: "クラウドネイティブ SaaS",
    desc: "AWS 上に構築されたマルチテナント SaaS。初期費用不要で即日利用開始でき、利用規模に応じたスケーリングが可能です。",
  },
];

const plans = [
  {
    name: "Starter",
    target: "〜10名",
    price: "応相談",
    items: ["在留資格管理（TITP/SSW/TA）", "書類自動生成", "期限通知"],
    accent: "border-white/15",
    badge: null,
  },
  {
    name: "Business",
    target: "〜50名",
    price: "応相談",
    items: ["Starterの全機能", "AIエージェントサポート", "ダッシュボード分析", "優先サポート"],
    accent: "border-aws-orange/50",
    badge: "おすすめ",
  },
  {
    name: "Enterprise",
    target: "51名〜",
    price: "カスタム",
    items: ["Businessの全機能", "カスタム統合・API", "専任サポート", "SLA保証"],
    accent: "border-aws-blue/40",
    badge: null,
  },
];

export default function TenkuPage() {
  return (
    <main className="pb-20">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aws-darker to-aws-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(255,153,0,0.10),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto max-w-4xl relative">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-10 font-mono">
            <Link href="/dx-consulting" className="hover:text-aws-orange transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-aws-orange">TENKU AI Agent</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-aws-orange/10 border border-aws-orange/30 text-aws-orange text-xs font-mono px-4 py-1.5 rounded-full mb-6">
            <i className="fas fa-robot text-xs" />
            SaaS PRODUCT BY EGG
          </div>

          <h1 className="text-[clamp(3.5rem,9vw,7rem)] font-bold text-white leading-[0.9] tracking-tight mb-4">
            TENKU<br />
            <span className="text-aws-orange text-[clamp(1.5rem,4vw,3rem)] font-semibold tracking-widest">AI Agent</span>
          </h1>

          <p className="text-gray-200 text-xl md:text-2xl font-light mb-4 max-w-2xl leading-snug">
            技能実習（TITP）／特定技能（SSW）／特定活動（TA）を<br />
            <span className="text-aws-orange font-semibold">「1システムで統合管理」</span>
          </p>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10">
            外国人労働者の在留資格管理・書類生成・更新通知を自動化し、
            煩雑なコンプライアンス業務を丸ごとDXします。
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 bg-aws-orange text-aws-dark font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors text-sm tracking-wide shadow-lg">
              <i className="fas fa-file-signature" /> お申込み・料金を見る
            </a>
            <a href="#features" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-7 py-3.5 rounded-xl hover:border-white/40 hover:text-white transition-colors text-sm">
              <i className="fas fa-list-check" /> 機能を見る
            </a>
          </div>
        </div>
      </section>

      {/* ── 3 pillars ── */}
      <section className="py-14 px-6 bg-aws-darker border-y border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "fa-id-card",        label: "技能実習",  en: "TITP", color: "text-aws-orange" },
              { icon: "fa-user-check",     label: "特定技能",  en: "SSW",  color: "text-aws-blue" },
              { icon: "fa-file-signature", label: "特定活動",  en: "TA",   color: "text-emerald-400" },
            ].map(({ icon, label, en, color }) => (
              <div key={en} className="flex items-center gap-4 bg-aws-card/50 rounded-xl px-5 py-4 border border-white/5">
                <div className="w-11 h-11 rounded-lg bg-aws-dark flex items-center justify-center shrink-0">
                  <i className={`fas ${icon} ${color} text-lg`} />
                </div>
                <div>
                  <p className="text-white font-semibold">{label}</p>
                  <p className={`font-mono text-xs ${color} opacity-70`}>{en}</p>
                </div>
                <i className="fas fa-check-circle text-green-500/60 ml-auto text-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-aws-orange font-mono text-xs tracking-[0.3em] uppercase mb-3">Key Features</p>
            <h2 className="text-4xl font-bold text-white">主な機能</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="group bg-aws-card rounded-xl p-6 border border-white/5 hover:border-aws-orange/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-aws-orange/10 flex items-center justify-center mb-5 group-hover:bg-aws-orange/20 transition-colors">
                  <i className={`fas ${icon} text-aws-orange text-lg`} />
                </div>
                <h3 className="text-white font-semibold mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 px-6 bg-aws-darker border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-aws-orange font-mono text-xs tracking-[0.3em] uppercase mb-3">Pricing</p>
            <h2 className="text-4xl font-bold text-white mb-4">料金プラン</h2>
            <p className="text-gray-500">詳しい料金はお問い合わせください</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {plans.map(({ name, target, price, items, accent, badge }) => (
              <div key={name} className={`relative rounded-xl border ${accent} bg-aws-card p-7 flex flex-col`}>
                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-aws-orange text-aws-dark text-xs font-bold px-3 py-1 rounded-full">
                    {badge}
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-aws-orange font-mono text-xs tracking-widest uppercase mb-1">{name}</p>
                  <h3 className="text-white text-2xl font-bold mb-1">{price}</h3>
                  <p className="text-gray-600 text-sm">{target}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                      <i className="fas fa-check text-aws-orange/70 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/#contact"
                  className="block text-center border border-aws-orange/50 text-aws-orange text-sm font-bold py-2.5 rounded-lg hover:bg-aws-orange hover:text-aws-dark transition-colors">
                  お問い合わせ
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-aws-card rounded-2xl p-10 border border-aws-orange/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,153,0,0.06),transparent_60%)]" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-3">まずはお問い合わせを</h3>
              <p className="text-gray-400 mb-7 text-sm leading-relaxed">
                TENKU AI Agent の詳細・デモ・カスタマイズについてお気軽にご相談ください。
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/#contact"
                  className="inline-flex items-center gap-2 bg-aws-orange text-aws-dark font-bold py-3 px-8 rounded-xl hover:bg-yellow-400 transition-colors text-sm">
                  <i className="fas fa-envelope" /> お問い合わせ
                </a>
                <Link href="/dx-consulting"
                  className="inline-flex items-center gap-2 border border-white/15 text-gray-400 py-3 px-8 rounded-xl hover:border-white/30 hover:text-white transition-colors text-sm">
                  ← Portfolio に戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
