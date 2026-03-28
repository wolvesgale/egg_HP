"use client";
import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "運送AI | 株式会社egg",
  description: "ドライバーが話すだけで点呼記録・運行日報が完成。運送業のデジタル化をAIが支援。",
};

const features = [
  {
    icon: "fa-microphone",
    title: "音声入力で日報完成",
    desc: "「今日は〇〇から〇〇まで走りました」と話すだけ。AIが自動で運行日報フォーマットに整形。ITが苦手なドライバーでも使えます。",
  },
  {
    icon: "fa-map-marked-alt",
    title: "走行データから日報自動生成",
    desc: "GPS・走行データと連携し、経路・時刻・走行距離を自動入力。手書き転記の二度手間をゼロにします。",
  },
  {
    icon: "fa-wine-glass",
    title: "点呼記録をワンクリックで",
    desc: "毎日9割が同じ内容の点呼記録。前日パターンを学習し、異常があった時だけ修正するだけで完了。",
  },
  {
    icon: "fa-shield-alt",
    title: "アルコール異常の自動フラグ",
    desc: "検知値の時系列異常・連続超過をAIが自動検知。管理者に即時アラート。記録改ざんリスクを排除。",
  },
  {
    icon: "fa-file-alt",
    title: "行政監査対応レポート即時出力",
    desc: "運輸局の監査前日でも大丈夫。法定フォーマットに合わせた帳票をワンクリックでPDF出力。",
  },
  {
    icon: "fa-sync",
    title: "法改正に自動対応",
    desc: "帳票フォーマットや記録要件が変わるたびに手作業で修正していた作業が不要に。AIが変更内容を反映します。",
  },
];

const plans = [
  {
    name: "Free",
    target: "まずお試し",
    price: "無料",
    items: ["点呼記録（月30件）", "運行日報（月10件）", "基本レポート出力"],
    accent: "border-white/15",
    badge: null,
  },
  {
    name: "Standard",
    target: "〜50台規模",
    price: "¥9,800",
    unit: "/月",
    items: ["点呼記録（無制限）", "音声入力日報", "走行データ連携", "アルコール異常検知", "監査レポート自動出力"],
    accent: "border-aws-orange/50",
    badge: "おすすめ",
  },
  {
    name: "Enterprise",
    target: "50台以上・複数拠点",
    price: "応相談",
    items: ["Standardの全機能", "複数拠点・グループ管理", "API連携", "専任サポート"],
    accent: "border-aws-blue/40",
    badge: null,
  },
];

export default function TransportPage() {
  const [form, setForm] = useState({ email: "", company: "", vehicles: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: "transport" }),
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_20%,rgba(20,110,180,0.15),transparent_60%)]" />
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
            <span className="text-aws-orange text-sm font-mono">運送AI</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aws-blue/30 bg-aws-blue/10 text-aws-blue text-xs font-mono mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-aws-blue animate-pulse" />
            βテスター募集中
          </div>
          <h1 className="text-4xl md:text-6xl font-cormorant font-light text-white leading-tight mb-6">
            ドライバーが<span className="italic text-aws-orange">話すだけ</span>で、<br />
            日報が完成する。
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            音声入力＋AI構造化で、点呼記録・運行日報の入力工数をゼロにします。
            法定書類の自動出力で、行政監査も恐れません。
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
            IT導入補助金対象予定。実質ゼロ円での導入を目指しています。
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-aws-darker border-y border-white/5 py-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "62,000社", label: "国内運送事業者数" },
              { num: "60〜70%", label: "が手書き記録" },
              { num: "毎日", label: "法定記録義務" },
              { num: "IT補助金", label: "対象予定" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-cormorant text-aws-orange mb-1">{s.num}</div>
                <div className="text-gray-500 text-xs font-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-aws-darker">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-cormorant text-white text-center mb-4">主な機能</h2>
          <p className="text-gray-500 text-center mb-14 font-mono text-sm">「入力する」から「話すだけ」へ</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-white/10 bg-aws-card hover:border-aws-orange/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-aws-blue/10 flex items-center justify-center mb-4">
                  <i className={`fa ${f.icon} text-aws-blue`} />
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
          <p className="text-gray-500 text-center mb-14 font-mono text-sm">βテスター期間中は全プラン無料</p>
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
            先着30社限定。βテスター期間中は全機能を無料でお試しいただけます。
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
                <label className="block text-gray-400 text-sm mb-2 font-mono">会社名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-aws-card border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-aws-orange/50 text-sm"
                  placeholder="〇〇運送株式会社"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2 font-mono">保有車両台数</label>
                <select
                  value={form.vehicles}
                  onChange={(e) => setForm({ ...form, vehicles: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-aws-card border border-white/10 text-white focus:outline-none focus:border-aws-orange/50 text-sm"
                >
                  <option value="">選択してください</option>
                  <option value="1-9">1〜9台</option>
                  <option value="10-29">10〜29台</option>
                  <option value="30-49">30〜49台</option>
                  <option value="50+">50台以上</option>
                </select>
              </div>
              <button
                type="submit" disabled={loading}
                className="w-full py-3 bg-aws-orange text-white font-medium rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-wait"
              >
                {loading ? "送信中..." : "βテスターに登録する（無料）"}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-12 px-6 bg-aws-dark border-t border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-500 text-sm font-mono mb-2">株式会社egg 提供</p>
          <p className="text-gray-600 text-xs">本サービスはβテスト段階です。</p>
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
