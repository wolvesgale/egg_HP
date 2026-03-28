"use client";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "HACCP AI | 株式会社egg",
  description: "業種を選ぶだけでHACCPプランが5分で完成。食品衛生管理のAI自動化サービス。",
};

const features = [
  {
    icon: "fa-magic",
    title: "HACCPプラン自動生成",
    desc: "業種・メニュー・製造工程を入力するだけで、厚労省手引書準拠のHACCPプランをAIが数分でドラフト生成。コンサル費用30〜100万円が不要に。",
  },
  {
    icon: "fa-clipboard-check",
    title: "毎日の記録をスマホで完結",
    desc: "温度・衛生チェック・異常記録をスマホから入力。紙の記録票・Excelへの転記作業を完全に排除します。",
  },
  {
    icon: "fa-exclamation-triangle",
    title: "異常検知・アドバイス自動生成",
    desc: "記録データの異常パターンをAIが検知し、「冷蔵庫の温度上昇が続いています。ドアパッキンの確認を推奨」など具体的な対処法を自動提案。",
  },
  {
    icon: "fa-file-pdf",
    title: "保健所対応レポート即時出力",
    desc: "立入検査の前日でも大丈夫。記録データから保健所提出用サマリーレポートをワンクリックで自動生成。",
  },
  {
    icon: "fa-globe",
    title: "多言語対応（外国人スタッフ）",
    desc: "スタッフが母国語で入力→日本語記録として自動保存。外国人スタッフの多い現場でも記録品質を維持。",
  },
  {
    icon: "fa-sync-alt",
    title: "メニュー変更時の自動更新提案",
    desc: "新メニュー追加時に影響するCCPと更新箇所をAIが自動提案。プランの形骸化を防ぎます。",
  },
];

const targets = [
  { icon: "fa-utensils", label: "弁当・惣菜製造" },
  { icon: "fa-cookie-bite", label: "食品加工業" },
  { icon: "fa-store", label: "飲食店・カフェ" },
  { icon: "fa-birthday-cake", label: "和菓子・洋菓子製造" },
  { icon: "fa-hotel", label: "ホテル・旅館厨房" },
  { icon: "fa-school", label: "給食センター" },
];

const plans = [
  {
    name: "Free",
    target: "まずお試し",
    price: "無料",
    items: ["HACCPプラン生成（1件）", "毎日の記録管理", "基本レポート出力"],
    accent: "border-white/15",
    badge: null,
  },
  {
    name: "Basic",
    target: "中小飲食・食品製造",
    price: "¥9,800",
    unit: "/月",
    items: ["HACCPプラン生成（無制限）", "毎日の記録管理", "異常検知・アドバイス", "保健所レポート自動出力", "メールサポート"],
    accent: "border-aws-orange/50",
    badge: "おすすめ",
  },
  {
    name: "Pro",
    target: "複数拠点・食品製造業",
    price: "¥29,800",
    unit: "/月",
    items: ["Basicの全機能", "複数拠点管理", "多言語対応", "監査対応サポート", "優先サポート"],
    accent: "border-aws-blue/40",
    badge: null,
  },
];

export default function HaccpPage() {
  const [form, setForm] = useState({ email: "", company: "", type: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: "haccp" }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pb-20">

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aws-darker to-aws-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,rgba(255,153,0,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container mx-auto max-w-5xl relative">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/dx-consulting" className="text-gray-500 hover:text-aws-orange text-sm font-mono transition-colors">
              DX Portfolio
            </Link>
            <span className="text-gray-600 font-mono">›</span>
            <span className="text-aws-orange text-sm font-mono">HACCP AI</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aws-orange/30 bg-aws-orange/10 text-aws-orange text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-aws-orange animate-pulse" />
            βテスター募集中
          </div>
          <h1 className="text-4xl md:text-6xl font-cormorant font-light text-white leading-tight mb-6">
            HACCPプランを、<br />
            <span className="text-aws-orange italic">AIが5分で作る</span>。
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            業種を選んで事業内容を入力するだけ。厚労省手引書準拠のHACCPプランをAIが自動生成。
            コンサルタントへの依頼費用（30〜100万円）を不要にします。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#register" className="inline-flex items-center gap-2 px-6 py-3 bg-aws-orange text-white font-medium rounded-lg hover:bg-orange-500 transition-colors">
              <i className="fa fa-rocket text-sm" />
              βテスターに登録する
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:border-aws-orange/50 transition-colors">
              機能を見る
              <i className="fa fa-arrow-down text-sm" />
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            無料プランあり。クレジットカード不要。
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-aws-darker border-y border-white/5 py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "2021年", label: "全事業者に義務化" },
              { num: "5分", label: "HACCPプラン生成時間" },
              { num: "60〜70%", label: "の食品事業者が手書き管理" },
              { num: "¥0", label: "コンサル費不要" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-cormorant text-aws-orange mb-1">{s.num}</div>
                <div className="text-gray-500 text-xs font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-16 px-6 bg-aws-dark">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-cormorant text-white text-center mb-10">対応業種</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {targets.map((t) => (
              <div key={t.label} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/5">
                <i className={`fa ${t.icon} text-aws-orange`} />
                <span className="text-gray-300 text-sm">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-aws-darker">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-cormorant text-white text-center mb-4">主な機能</h2>
          <p className="text-gray-500 text-center mb-14 font-mono text-sm">「記録するだけ」から「記録して気づきを得る」へ</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-white/10 bg-aws-card hover:border-aws-orange/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-aws-orange/10 flex items-center justify-center mb-4">
                  <i className={`fa ${f.icon} text-aws-orange`} />
                </div>
                <h3 className="text-white font-medium mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-aws-dark">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-cormorant text-white text-center mb-4">料金プラン</h2>
          <p className="text-gray-500 text-center mb-14 font-mono text-sm">βテスター期間中は全プラン50%OFF</p>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`relative p-6 rounded-xl border ${p.accent} bg-aws-card`}>
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-aws-orange text-white text-xs font-mono rounded-full">
                    {p.badge}
                  </div>
                )}
                <div className="mb-4">
                  <div className="text-white font-medium mb-1">{p.name}</div>
                  <div className="text-gray-500 text-xs font-mono mb-3">{p.target}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-cormorant text-aws-orange">{p.price}</span>
                    {p.unit && <span className="text-gray-500 text-sm">{p.unit}</span>}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                      <i className="fa fa-check text-aws-orange mt-0.5 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#register" className="block text-center py-2 rounded-lg border border-aws-orange/50 text-aws-orange text-sm hover:bg-aws-orange hover:text-white transition-colors">
                  βテスターに登録
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="py-20 px-6 bg-aws-darker">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-cormorant text-white text-center mb-4">βテスター登録</h2>
          <p className="text-gray-500 text-center mb-10 text-sm font-mono">
            先着50社限定。βテスター期間中は全機能を無料でお試しいただけます。<br />
            正式リリース時に優先案内をお送りします。
          </p>
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-aws-orange/10 flex items-center justify-center mx-auto mb-4">
                <i className="fa fa-check text-aws-orange text-2xl" />
              </div>
              <p className="text-white font-medium mb-2">登録完了しました</p>
              <p className="text-gray-500 text-sm">リリース時に優先してご案内いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">メールアドレス *</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-aws-card border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-aws-orange/50 text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">会社・屋号名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-aws-card border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-aws-orange/50 text-sm"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">業種</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-aws-card border border-white/10 text-white focus:outline-none focus:border-aws-orange/50 text-sm"
                >
                  <option value="">選択してください</option>
                  <option value="bento">弁当・惣菜製造</option>
                  <option value="food-processing">食品加工業</option>
                  <option value="restaurant">飲食店・カフェ</option>
                  <option value="wagashi">和菓子・洋菓子製造</option>
                  <option value="hotel">ホテル・旅館厨房</option>
                  <option value="catering">給食センター</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <button
                type="submit" disabled={loading}
                className="w-full py-3 bg-aws-orange text-white font-medium rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-wait"
              >
                {loading ? "送信中..." : "βテスターに登録する（無料）"}
              </button>
              <p className="text-gray-600 text-xs text-center">
                登録情報は本サービスの案内にのみ使用します。
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-6 bg-aws-dark border-t border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-500 text-sm font-mono mb-2">株式会社egg 提供</p>
          <p className="text-gray-600 text-xs">
            本サービスはβテスト段階です。正式リリース時期は登録者に優先案内いたします。
          </p>
          <div className="mt-4">
            <Link href="/dx-consulting" className="text-gray-500 hover:text-aws-orange text-sm transition-colors font-mono">
              ← DX Portfolio に戻る
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
