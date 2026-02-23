"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Intersection-observer reveal hook
───────────────────────────────────────────── */
function useVisible(threshold = 0.12) {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = "" }) {
  const [ref, visible] = useVisible();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Loading screen (first visit per session)
───────────────────────────────────────────── */
function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState("enter"); // enter → fill → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fill"),  200);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => onDone(),          2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-egg-cream transition-opacity duration-500 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Egg silhouette */}
      <div
        className="w-20 h-28 mb-8 animate-float shadow-egg-xl"
        style={{
          borderRadius: "50% 50% 42% 42% / 55% 55% 45% 45%",
          background: "linear-gradient(145deg, #fff 0%, #FFF5F5 40%, #EDD8D8 100%)",
        }}
      />

      {/* Logo */}
      <p className="font-cormorant text-3xl text-egg-rose tracking-widest mb-6">
        egg
      </p>

      {/* Dots */}
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-egg-pink animate-pulse-slow"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-40 h-px bg-egg-blush overflow-hidden rounded-full">
        <div
          className={`h-full bg-egg-pink transition-all duration-[1800ms] ease-out ${
            phase === "fill" ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Marquee (infinite scroll ticker)
───────────────────────────────────────────── */
const TICKER_ITEMS = [
  "EC 運営管理", "Fragrance", "DX コンサルティング", "TENKU-AI",
  "Amazon", "調香 / 香料販売", "Cloud", "フレグランス事業",
  "EC 運営管理", "Fragrance", "DX コンサルティング", "TENKU-AI",
  "Amazon", "調香 / 香料販売", "Cloud", "フレグランス事業",
];

function Marquee({ reverse = false }) {
  return (
    <div className="overflow-hidden flex">
      <ul
        className={`flex gap-10 shrink-0 items-center whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {TICKER_ITEMS.map((item, i) => (
          <li key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-cormorant text-egg-rose/40 text-lg tracking-widest italic">
              {item}
            </span>
            <span className="text-egg-pink/25 text-xs">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Contact form
───────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-egg-muted/60 bg-white/80 text-egg-brown placeholder-egg-brown/35 font-crimson-text text-lg focus:outline-none focus:ring-2 focus:ring-egg-pink/40 focus:border-egg-pink transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input type="text"  placeholder="お名前 *" required value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
        <input type="email" placeholder="メールアドレス *" required value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
      </div>
      <textarea placeholder="お問い合わせ内容 *" required rows={5} value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass} />

      {status === "success" && (
        <p className="text-center font-crimson-text text-green-600">
          送信が完了しました。ありがとうございます。
        </p>
      )}
      {status === "error" && (
        <p className="text-center font-crimson-text text-red-500">
          送信に失敗しました。時間をおいてお試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gradient-to-r from-egg-pink to-egg-rose text-white py-4 rounded-xl font-cormorant text-xl tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 shadow-egg-sm"
      >
        {status === "loading" ? "送信中..." : "Send Message"}
      </button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   Business cards data
───────────────────────────────────────────── */
const businessCards = [
  {
    num: "01",
    icon: "fa-store",
    title: "EC 運営管理",
    en: "E-Commerce",
    description: "Amazon・メルカリを中心にブランドストーリーに寄り添った商品展開・運営サポートを提供します。",
    href: "/ec-management",
    accent: "from-orange-400/10 to-yellow-300/10",
  },
  {
    num: "02",
    icon: "fa-wind",
    title: "調香 / 香料販売",
    en: "Fragrance",
    description: "オリジナル調香から厳選香料の販売まで。電子書籍・オンライン教室も順次展開予定。",
    href: "/fragrance",
    accent: "from-rose-300/10 to-pink-200/10",
  },
  {
    num: "03",
    icon: "fa-laptop-code",
    title: "DX コンサルティング",
    en: "Digital Transformation",
    description: "外資大手クラウド〜スタートアップ経験のあるコンサルタントが業務改善をお手伝い。自社プロダクト TENKU-AI も提供中。",
    href: "/dx-consulting",
    accent: "from-sky-400/10 to-blue-300/10",
    highlight: true,
  },
  {
    num: "04",
    icon: "fa-leaf",
    title: "和菓子イベント",
    en: "Wagashi",
    description: "苺大福をはじめとする和菓子のイベント出展・運営。季節を彩る手作りの甘みをお届けします。",
    href: "/wagashi",
    accent: "from-pink-300/10 to-rose-200/10",
  },
];

/* ─────────────────────────────────────────────
   Portfolio items
   ※ サムネイル画像は public/images/portfolio/ に配置してください
   　 例: /images/portfolio/work-01.jpg
───────────────────────────────────────────── */
const portfolioItems = [
  {
    id: "01",
    thumb: null, // "/images/portfolio/work-01.jpg"
    thumbGradient: "from-orange-200 via-amber-100 to-yellow-50",
    thumbIcon: "fa-store",
    category: "EC 運営管理",
    title: "ECショップ立ち上げ支援",
    description: "アパレルブランドのAmazon・メルカリ店舗を企画から日常運営まで一貫サポート。",
  },
  {
    id: "02",
    thumb: null, // "/images/portfolio/work-02.jpg"
    thumbGradient: "from-rose-200 via-pink-100 to-fuchsia-50",
    thumbIcon: "fa-wind",
    category: "フレグランス事業",
    title: "オリジナルフレグランス制作",
    description: "ブランドコンセプトを香りで表現するカスタム調香〜ラベルデザインまでトータルプロデュース。",
  },
  {
    id: "03",
    thumb: null, // "/images/portfolio/work-03.jpg"
    thumbGradient: "from-sky-200 via-blue-100 to-cyan-50",
    thumbIcon: "fa-laptop-code",
    category: "DX コンサルティング",
    title: "業務プロセスのクラウド化",
    description: "AWS・生成AI活用で中小企業の業務フローを刷新し、生産性を大幅に改善。",
  },
  {
    id: "04",
    thumb: null, // "/images/portfolio/work-04.jpg"
    thumbGradient: "from-violet-200 via-purple-100 to-pink-50",
    thumbIcon: "fa-robot",
    category: "DX / TENKU-AI",
    title: "TENKU-AI 導入支援",
    description: "自社開発AIエージェントを活用した業務自動化・ナレッジ管理システムの構築。",
  },
  {
    id: "05",
    thumb: null, // "/images/portfolio/work-05.jpg"
    thumbGradient: "from-emerald-200 via-teal-100 to-green-50",
    thumbIcon: "fa-chart-line",
    category: "EC 運営管理",
    title: "EC売上分析・改善提案",
    description: "データドリブンな商品ページ最適化とレビュー戦略で転換率と評価を向上。",
  },
  {
    id: "06",
    thumb: null, // "/images/portfolio/work-06.jpg"
    thumbGradient: "from-rose-200 via-red-100 to-orange-50",
    thumbIcon: "fa-leaf",
    category: "和菓子イベント",
    title: "苺大福 × ポップアップ出展",
    description: "季節の和菓子をテーマにしたイベント企画・運営。来場者との直接接点でブランド体験を創出。",
  },
];

/* ─────────────────────────────────────────────
   Portfolio Thumbnail
───────────────────────────────────────────── */
function PortfolioThumb({ item }) {
  if (item.thumb) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.thumb}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${item.thumbGradient} flex items-center justify-center`}>
      <i className={`fas ${item.thumbIcon} text-white/60 text-3xl`} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Home page
───────────────────────────────────────────── */
export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoadDone = useCallback(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const visited = sessionStorage.getItem("egg_visited");
    if (visited) {
      setShowContent(true);
    } else {
      sessionStorage.setItem("egg_visited", "1");
      setLoaded(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-egg-cream">
      {/* Loading screen */}
      {loaded && !showContent && <LoadingScreen onDone={handleLoadDone} />}

      {/* Main content */}
      <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-egg-cream via-egg-light to-egg-blush" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(212,165,165,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(248,225,225,0.25),transparent_50%)]" />

          {/* Decorative egg silhouettes */}
          <div
            className="absolute top-12 right-[3%] w-[560px] h-[680px] border border-egg-pink/8 pointer-events-none"
            style={{ borderRadius: "50% 50% 42% 42% / 55% 55% 45% 45%" }}
          />
          <div
            className="absolute top-24 right-[6%] w-[420px] h-[520px] border border-egg-pink/10 pointer-events-none"
            style={{ borderRadius: "50% 50% 42% 42% / 55% 55% 45% 45%" }}
          />

          <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">

              {/* Text side */}
              <div className="md:w-[55%] animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-egg-pink" />
                  <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase">
                    All Starts With Eggs
                  </p>
                </div>

                <h1 className="font-cormorant text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-egg-rose mb-2 tracking-tight">
                  Welcome
                </h1>
                <h1 className="font-cormorant text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-egg-rose mb-8 tracking-tight italic">
                  to egg
                </h1>

                <p className="font-crimson-text text-egg-brown text-xl leading-relaxed max-w-md mb-10">
                  EC・フレグランス・DX・和菓子。<br />
                  4つの軸で、ビジネスと文化の可能性を広げます。
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#business"
                    className="inline-flex items-center gap-2 bg-egg-rose text-white font-cormorant text-lg px-7 py-3.5 rounded-full hover:bg-egg-pink transition-colors shadow-egg-sm"
                  >
                    Our Business
                    <i className="fas fa-arrow-down text-sm opacity-70" />
                  </a>
                  <Link
                    href="/dx-consulting"
                    className="inline-flex items-center gap-2 border border-egg-pink/50 text-egg-rose font-cormorant text-lg px-7 py-3.5 rounded-full hover:bg-egg-blush transition-colors"
                  >
                    TENKU-AI →
                  </Link>
                </div>
              </div>

              {/* Visual side — Egg */}
              <div className="md:w-[42%] flex justify-center">
                <div className="relative flex items-center justify-center w-72 h-80 md:w-96 md:h-[26rem]">

                  {/* Outer glow orbit */}
                  <div
                    className="absolute inset-0 animate-spin-slow opacity-30"
                    style={{ borderRadius: "50% 50% 40% 40% / 55% 55% 45% 45%", border: "1px solid #D4A5A5" }}
                  />

                  {/* Shadow base — ellipse under the egg */}
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-5 blur-xl opacity-20"
                    style={{ background: "#9E7676", borderRadius: "50%" }}
                  />

                  {/* Egg body */}
                  <div
                    className="relative w-52 h-72 md:w-64 md:h-[22rem] animate-float shadow-egg-xl"
                    style={{
                      borderRadius: "50% 50% 42% 42% / 55% 55% 45% 45%",
                      background: "linear-gradient(145deg, #fff 0%, #FFF5F5 35%, #F5E6E6 70%, #EDD8D8 100%)",
                    }}
                  >
                    {/* Specular highlight */}
                    <div
                      className="absolute top-[12%] left-[20%] w-[30%] h-[20%] opacity-70"
                      style={{
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)",
                        filter: "blur(4px)",
                      }}
                    />
                    {/* Secondary highlight */}
                    <div
                      className="absolute top-[8%] left-[30%] w-[15%] h-[10%] opacity-50"
                      style={{
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.9)",
                        filter: "blur(2px)",
                      }}
                    />
                    {/* Subtle color wash at base */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[40%]"
                      style={{
                        borderRadius: "0 0 42% 42% / 0 0 45% 45%",
                        background: "linear-gradient(to bottom, transparent, rgba(158,118,118,0.08))",
                      }}
                    />
                  </div>

                  {/* Floating dot accents */}
                  <div className="absolute top-[15%] right-[12%] w-2.5 h-2.5 rounded-full bg-egg-pink/50 animate-pulse-slow" />
                  <div className="absolute top-[30%] left-[8%] w-1.5 h-1.5 rounded-full bg-egg-rose/35 animate-pulse-slow animation-delay-300" />
                  <div className="absolute bottom-[20%] right-[10%] w-2 h-2 rounded-full bg-egg-pink/40 animate-pulse-slow animation-delay-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <p className="font-crimson-text text-egg-brown text-xs tracking-widest uppercase">Scroll</p>
            <div className="w-px h-8 bg-egg-pink animate-pulse-slow" />
          </div>
        </section>

        {/* ── Marquee ticker ── */}
        <div className="bg-white border-y border-egg-blush py-4 overflow-hidden select-none">
          <Marquee />
        </div>

        {/* ── Business ── */}
        <section id="business" className="py-28 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(212,165,165,0.06),transparent_60%)]" />

          <div className="container mx-auto relative">
            <Reveal className="text-center mb-16">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">What we do</p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-egg-rose">Our Business</h2>
              <div className="mt-5 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-egg-pink to-transparent" />
            </Reveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {businessCards.map(({ num, icon, title, en, description, href, accent, highlight }, i) => (
                <Reveal key={href} delay={`animation-delay-${(i + 1) * 100}`}>
                  <Link href={href} className="group block h-full">
                    <div
                      className={`
                        relative h-full bg-egg-cream rounded-2xl p-7 overflow-hidden
                        border border-egg-pink/0 hover:border-egg-pink/30
                        shadow-egg-sm hover:shadow-egg-md
                        transition-all duration-400 hover:-translate-y-1.5
                        ${highlight ? "ring-1 ring-egg-pink/20" : ""}
                      `}
                    >
                      {/* Gradient bg */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                      <div className="relative">
                        <span className="font-cormorant text-egg-pink/30 text-6xl leading-none absolute -top-2 -right-2 select-none">
                          {num}
                        </span>

                        <div className="w-12 h-12 mb-5 bg-white rounded-xl flex items-center justify-center shadow-egg-sm group-hover:shadow-egg-md transition-shadow">
                          <i className={`fas ${icon} text-egg-rose text-lg`} />
                        </div>

                        <p className="font-crimson-text text-egg-pink/60 text-xs tracking-widest uppercase mb-1">{en}</p>
                        <h3 className="font-cormorant text-2xl text-egg-rose mb-3 leading-tight">{title}</h3>
                        <p className="font-noto text-egg-brown/80 text-sm leading-relaxed">{description}</p>

                        <div className="mt-5 flex items-center gap-1 text-egg-pink font-crimson-text text-sm group-hover:gap-2 transition-all">
                          詳しく見る
                          <i className="fas fa-arrow-right text-xs" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <section id="portfolio" className="py-28 px-6 bg-egg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(212,165,165,0.09),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(248,225,225,0.12),transparent_50%)]" />

          <div className="container mx-auto relative">
            <Reveal className="text-center mb-16">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Our Works</p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-egg-rose">Portfolio</h2>
              <div className="mt-5 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-egg-pink to-transparent" />
            </Reveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {portfolioItems.map(({ id, category, title, description, thumbGradient, thumbIcon, thumb }, i) => (
                <Reveal key={id} delay={`animation-delay-${(i % 3 + 1) * 100}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-egg-sm hover:shadow-egg-md transition-all duration-400 hover:-translate-y-1.5">

                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      {thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${thumbGradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                          <i className={`fas ${thumbIcon} text-white/50 text-4xl`} />
                        </div>
                      )}
                      {/* Number overlay */}
                      <span className="absolute top-3 left-3 font-cormorant text-white/60 text-4xl leading-none select-none drop-shadow">
                        {id}
                      </span>
                      {/* Category badge */}
                      <span className="absolute bottom-3 left-3 bg-white/85 backdrop-blur-sm text-egg-rose font-noto text-[10px] tracking-wide px-2.5 py-1 rounded-full">
                        {category}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="p-6">
                      <h3 className="font-cormorant text-xl text-egg-rose mb-2 leading-snug">{title}</h3>
                      <p className="font-noto text-egg-brown/70 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Divider line below grid */}
            <Reveal className="mt-14 text-center">
              <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-egg-pink/50 to-transparent mb-6" />
              <p className="font-crimson-text text-egg-brown/50 text-sm italic">
                More works coming soon
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Second marquee (reverse) ── */}
        <div className="bg-white border-y border-egg-blush py-4 overflow-hidden select-none">
          <Marquee reverse />
        </div>

        {/* ── About ── */}
        <section id="about" className="py-28 px-6 relative overflow-hidden bg-egg-cream">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(212,165,165,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <Reveal>
                <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-4">Our Story</p>
                <h2 className="font-cormorant text-5xl md:text-6xl text-egg-rose mb-8 leading-tight">
                  About<br /><span className="italic">egg</span>
                </h2>
                <div className="space-y-5">
                  <p className="font-noto text-egg-brown text-base leading-loose">
                    株式会社eggは、フレグランス・ECビジネス・デジタルトランスフォーメーション・和菓子イベントの4つの領域で事業を展開するスタートアップです。
                  </p>
                  <p className="font-noto text-egg-brown/75 text-base leading-loose">
                    外資大手パブリッククラウドやスタートアップ企業での経験を持つメンバーが、各分野の専門知識を掛け合わせ、お客様のビジネスの可能性を広げるお手伝いをします。
                  </p>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-egg-pink/40 to-transparent" />
              </Reveal>

              {/* Visual stats */}
              <Reveal delay="animation-delay-200">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "4",      label: "事業領域",     sub: "Business Domains" },
                    { num: "2025",   label: "設立年",       sub: "Founded" },
                    { num: "∞",      label: "可能性",       sub: "Possibilities" },
                    { num: "AWS",    label: "技術基盤",     sub: "Cloud Platform" },
                  ].map(({ num, label, sub }) => (
                    <div key={label} className="bg-white rounded-2xl p-6 shadow-egg-sm hover:shadow-egg-md transition-shadow">
                      <p className="font-cormorant text-4xl text-egg-rose mb-1">{num}</p>
                      <p className="font-noto text-egg-brown text-sm font-medium">{label}</p>
                      <p className="font-crimson-text text-egg-pink/60 text-xs tracking-wide">{sub}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-28 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,165,165,0.1),transparent_60%)]" />

          <div className="container mx-auto max-w-2xl relative">
            <Reveal className="text-center mb-12">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Get in Touch</p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-egg-rose mb-4">Contact Us</h2>
              <p className="font-noto text-egg-brown/70 text-sm">お気軽にお問い合わせください</p>
            </Reveal>
            <Reveal delay="animation-delay-200">
              <div className="bg-egg-cream rounded-3xl p-8 md:p-10 shadow-egg-md">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Company ── */}
        <section id="company" className="py-28 px-6 bg-egg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(212,165,165,0.08),transparent_50%)]" />

          <div className="container mx-auto max-w-3xl relative">
            <Reveal className="text-center mb-14">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Who We Are</p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-egg-rose">Company Profile</h2>
            </Reveal>

            <Reveal delay="animation-delay-200">
              <div className="bg-white rounded-3xl overflow-hidden shadow-egg-md">
                {[
                  { label: "会社名",    value: "株式会社egg" },
                  { label: "代表取締役", value: "前田 拡夢" },
                  { label: "所在地",    value: "〒661-0977 兵庫県尼崎市竹谷町3丁目89-4" },
                  { label: "設立",      value: "2025年" },
                  { label: "Email",     value: "info@eggs.email", isEmail: true },
                ].map(({ label, value, isEmail }, i) => (
                  <div
                    key={label}
                    className={`flex flex-col sm:flex-row py-5 px-8 gap-3 items-start sm:items-center ${
                      i !== 0 ? "border-t border-egg-blush" : ""
                    }`}
                  >
                    <span className="sm:w-36 font-cormorant text-egg-pink/70 text-sm tracking-widest uppercase shrink-0">
                      {label}
                    </span>
                    {isEmail ? (
                      <a href={`mailto:${value}`} className="font-crimson-text text-egg-rose hover:text-egg-pink text-lg transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="font-noto text-egg-brown text-base">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
