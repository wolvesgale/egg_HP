"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { portfolioItems, getCaseStudies } from "../../data/dx-portfolio";

function useVisible(threshold = 0.12) {
  const ref  = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

function Reveal({ children, className = "", delay = "" }) {
  const [ref, v] = useVisible();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${delay} ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const techLogos = [
  { icon: "fa-aws",       label: "AWS",         color: "#FF9900" },
  { icon: "fa-react",     label: "React",        color: "#61DAFB" },
  { icon: "fa-database",  label: "PostgreSQL",   color: "#336791" },
  { icon: "fa-docker",    label: "Docker",       color: "#2496ED" },
  { icon: "fa-git-alt",   label: "Git",          color: "#F05032" },
  { icon: "fa-node",      label: "Node.js",      color: "#339933" },
];

export default function DxConsultingPage() {
  const featured = portfolioItems.find((item) => item.featured);
  const cases    = getCaseStudies();

  return (
    <main className="pb-20">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aws-darker to-aws-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,153,0,0.08),transparent_60%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto max-w-5xl relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-aws-orange" />
            <p className="text-aws-orange font-mono text-xs tracking-[0.3em] uppercase">egg DX & Products</p>
          </div>

          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-[0.95] tracking-tight mb-6">
            Digital<br />
            <span className="text-aws-orange">Trans&shy;formation</span>
          </h1>

          <p className="text-gray-400 max-w-xl text-lg leading-relaxed mb-10 font-light">
            外資大手パブリッククラウド・スタートアップまで経験したコンサルタントが、
            DX推進・クラウド活用・業務改革をトータルサポートします。
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#tenku" className="inline-flex items-center gap-2 bg-aws-orange text-aws-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors text-sm tracking-wide">
              <i className="fas fa-cloud" />
              TENKU-AI を見る
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm tracking-wide">
              <i className="fas fa-yen-sign" />
              料金・メニュー
            </a>
            <a href="#cases" className="inline-flex items-center gap-2 border border-white/20 text-gray-300 px-6 py-3 rounded-lg hover:border-white/40 hover:text-white transition-colors text-sm">
              <i className="fas fa-folder-open" />
              導入実績
            </a>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-10 px-6 bg-aws-darker border-y border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {techLogos.map(({ icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity">
                <i className={`fab ${icon} text-xl`} style={{ color }} />
                <span className="text-gray-400 text-sm font-mono">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TENKU AI Agent ── */}
      {featured && (
        <section id="tenku" className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px flex-1 bg-aws-orange/20" />
                <span className="text-aws-orange text-xs font-mono tracking-[0.3em] uppercase">Featured Product</span>
                <div className="h-px flex-1 bg-aws-orange/20" />
              </div>
            </Reveal>

            <Reveal delay="animation-delay-100">
              <div className="relative rounded-2xl overflow-hidden border border-aws-orange/25 bg-gradient-to-br from-aws-card to-aws-darker hover:border-aws-orange/50 transition-all duration-400 group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,153,0,0.06),transparent_60%)] group-hover:opacity-150 transition-opacity" />

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="inline-flex items-center gap-1.5 bg-aws-orange text-aws-dark text-xs font-bold px-3 py-1.5 rounded-full tracking-widest">
                          <i className="fas fa-robot text-xs" />
                          TENKU-AI
                        </span>
                        <span className="text-gray-500 text-xs font-mono border border-white/10 px-2 py-1 rounded">
                          SaaS PRODUCT BY EGG
                        </span>
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                        TENKU AI Agent
                      </h2>
                      <p className="text-aws-orange text-lg font-medium mb-5">{featured.tagline}</p>

                      <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">{featured.description}</p>

                      {/* Key points */}
                      <div className="grid sm:grid-cols-3 gap-3 mb-8">
                        {[
                          { icon: "fa-id-card",       label: "技能実習 TITP" },
                          { icon: "fa-user-check",    label: "特定技能 SSW" },
                          { icon: "fa-file-signature", label: "特定活動 TA" },
                        ].map(({ icon, label }) => (
                          <div key={label} className="flex items-center gap-2 bg-aws-dark/60 rounded-lg px-3 py-2.5 border border-white/5">
                            <i className={`fas ${icon} text-aws-orange text-sm`} />
                            <span className="text-gray-300 text-sm font-medium">{label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featured.tags.map((tag) => (
                          <span key={tag} className="bg-aws-darker text-gray-500 text-xs px-2.5 py-1 rounded-full border border-white/8">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a href={featured.links.demo} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-aws-orange text-aws-dark font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors text-sm">
                          <i className="fas fa-play-circle" /> デモを見る
                        </a>
                        <a href={featured.links.signup} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-aws-orange text-aws-orange font-bold px-5 py-2.5 rounded-lg hover:bg-aws-orange hover:text-aws-dark transition-colors text-sm">
                          <i className="fas fa-file-signature" /> お申込み
                        </a>
                        <Link href="/dx-consulting/tenku"
                          className="inline-flex items-center gap-2 border border-white/15 text-gray-400 px-5 py-2.5 rounded-lg hover:border-white/30 hover:text-white transition-colors text-sm">
                          詳細を見る →
                        </Link>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="lg:w-72 w-full">
                      <div className="relative rounded-xl bg-aws-darker border border-white/8 overflow-hidden aspect-square flex items-center justify-center">
                        {featured.thumbnail ? (
                          <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-center p-8">
                            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-aws-orange/10 border border-aws-orange/20 flex items-center justify-center">
                              <i className="fas fa-robot text-aws-orange text-3xl" />
                            </div>
                            <p className="text-gray-600 font-mono text-xs tracking-widest mb-1">TENKU-AI</p>
                            <p className="text-gray-700 font-mono text-[10px]">AI Agent Platform</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="relative border-t border-white/5 px-8 md:px-12 py-4 flex items-center justify-between bg-aws-darker/50">
                  <span className="text-gray-600 text-sm font-mono">外国人労働者の在留資格管理を、丸ごとDX</span>
                  <Link href="/dx-consulting/tenku" className="text-aws-orange text-sm hover:underline font-mono">
                    製品詳細 →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Case Studies ── */}
      <section id="cases" className="py-16 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/8" />
              <span className="text-gray-500 text-xs font-mono tracking-[0.3em] uppercase">Case Studies</span>
              <div className="h-px flex-1 bg-white/8" />
            </div>
          </Reveal>

          {cases.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-5">
              {cases.map((item, i) => (
                <Reveal key={item.slug} delay={`animation-delay-${(i + 1) * 100}`}>
                  <Link href={`/dx-consulting/${item.slug}`}>
                    <div className="group rounded-xl overflow-hidden bg-aws-card hover:bg-[#354a60] transition-all duration-300 border border-white/5 hover:border-aws-orange/20 hover:-translate-y-1 h-full">
                      {/* Thumbnail */}
                      <div className="aspect-video bg-aws-darker flex items-center justify-center relative overflow-hidden">
                        {item.thumbnail ? (
                          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-center">
                            <i className="fas fa-laptop-code text-aws-orange/20 text-6xl" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-aws-card/80 to-transparent" />
                      </div>

                      <div className="p-6">
                        <p className="text-aws-orange text-xs font-mono tracking-widest mb-2 uppercase">Case Study</p>
                        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-aws-orange transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">{item.tagline}</p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="bg-aws-darker text-gray-500 text-xs px-2 py-0.5 rounded border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {item.results && (
                          <ul className="space-y-1">
                            {item.results.slice(0, 2).map((r) => (
                              <li key={r} className="flex items-start gap-2 text-gray-500 text-xs">
                                <i className="fas fa-check text-aws-orange/60 mt-0.5 text-[10px] shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-white/8 rounded-2xl">
              <i className="fas fa-folder-open text-white/8 text-7xl mb-5" />
              <p className="text-gray-600 font-mono text-sm">案件実績は随時追加予定です</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 px-6 border-t border-white/5 bg-aws-darker/40">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <p className="text-aws-orange font-mono text-xs tracking-[0.3em] uppercase mb-3">Service & Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">料金・サービスメニュー</h2>
            <p className="text-gray-400 max-w-xl mx-auto">初回相談は無料です。まずはお気軽にご連絡ください。</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: "fa-comments",
                label: "スポット DX 相談",
                price: "¥30,000",
                unit: "/ 回（2時間）",
                color: "border-white/10",
                highlight: false,
                features: [
                  "現状業務ヒアリング＋改善提案",
                  "ツール選定アドバイス（AI・クラウド・SaaS）",
                  "議事録・提案資料を後日送付",
                ],
                cta: "まず相談する",
                target: "「何から始めればいいか分からない」経営者の方向け",
              },
              {
                icon: "fa-laptop-code",
                label: "業務デジタル化支援",
                price: "¥150,000〜",
                unit: "/ プロジェクト",
                color: "border-white/10",
                highlight: false,
                features: [
                  "業務フロー整理 → ツール導入 → 定着支援",
                  "Notion・Slack・クラウド会計・電帳法対応など",
                  "期間：1〜2ヶ月",
                ],
                cta: "詳細を相談する",
                target: "紙・Excel業務をデジタル化したい事業者向け",
              },
              {
                icon: "fa-robot",
                label: "AI 導入・自動化構築",
                price: "¥300,000〜",
                unit: "/ プロジェクト",
                color: "border-aws-orange/40",
                highlight: true,
                features: [
                  "生成AI（Claude・Gemini）を活用した業務自動化",
                  "見積書作成・レポート生成・在庫管理など",
                  "自社プロダクト HojoAI / TENKU-AI の導入支援",
                  "期間：2〜3ヶ月",
                ],
                cta: "AI導入を相談する",
                target: "繰り返し業務をAIで置き換えたい企業向け",
              },
              {
                icon: "fa-code",
                label: "Web / アプリ開発",
                price: "¥500,000〜",
                unit: "/ プロジェクト",
                color: "border-white/10",
                highlight: false,
                features: [
                  "業務管理システム・社内ツール開発",
                  "技術スタック：Next.js / Firebase / AWS / PostgreSQL",
                  "受発注・勤怠・在庫・現場管理など実績多数",
                ],
                cta: "開発を相談する",
                target: "専用システムを一から構築したい企業向け",
              },
            ].map((plan, i) => (
              <Reveal key={plan.label} delay={`animation-delay-${(i + 1) * 100}`}>
                <div className={`relative rounded-2xl bg-aws-card border ${plan.color} p-7 h-full flex flex-col ${plan.highlight ? "ring-1 ring-aws-orange/30" : ""}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-aws-orange text-aws-dark text-xs font-bold px-3 py-1 rounded-full tracking-wide">人気</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-aws-orange/10 border border-aws-orange/20 flex items-center justify-center shrink-0">
                      <i className={`fas ${plan.icon} text-aws-orange text-sm`} />
                    </div>
                    <h3 className="text-white font-semibold text-lg leading-tight">{plan.label}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-aws-orange">{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{plan.unit}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-5 border-l-2 border-aws-orange/30 pl-3">{plan.target}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                        <i className="fas fa-check text-aws-orange/70 mt-0.5 text-xs shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact"
                    className={`inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-sm font-semibold transition-colors ${
                      plan.highlight
                        ? "bg-aws-orange text-aws-dark hover:bg-yellow-400"
                        : "border border-white/15 text-gray-300 hover:border-white/30 hover:text-white"
                    }`}>
                    {plan.cta} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-center text-gray-600 text-sm">
              ※ 料金は目安です。規模・要件により変動します。まずはお気軽にご相談ください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <Reveal>
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-aws-card to-aws-darker border border-aws-orange/20 p-10 md:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,153,0,0.08),transparent_60%)]" />
              <div className="relative">
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-aws-orange/10 border border-aws-orange/20 flex items-center justify-center">
                  <i className="fas fa-comments text-aws-orange text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">DX推進のご相談</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  クラウド活用・業務改革・システム開発・TENKU-AI の導入について、お気軽にご相談ください。
                </p>
                <a href="/#contact"
                  className="inline-flex items-center gap-2 bg-aws-orange text-aws-dark font-bold py-3.5 px-10 rounded-xl hover:bg-yellow-400 transition-colors tracking-wide text-sm">
                  <i className="fas fa-envelope" />
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
