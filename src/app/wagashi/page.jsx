"use client";
import { useRef, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

/**
 * 画像を追加する場合は galleryItems 配列にオブジェクトを追加してください。
 * src: "/images/wagashi/ファイル名.jpg"
 * alt: 説明文
 * caption: 写真下テキスト（省略可）
 */
const galleryItems = [
  { src: null, alt: "苺大福", caption: "苺大福" },
  { src: null, alt: "和菓子イベント", caption: "イベント出展" },
  { src: null, alt: "和菓子ディスプレイ", caption: "季節の一品" },
  { src: null, alt: "手作り和菓子", caption: "手作りの甘み" },
  { src: null, alt: "和菓子アソート", caption: "アソートセット" },
  { src: null, alt: "イベント風景", caption: "会場の様子" },
];

const events = [
  {
    icon: "fa-seedling",
    season: "春",
    en: "Spring",
    items: ["苺大福", "桜餅", "花見だんご"],
    color: "from-pink-100 to-rose-50",
    border: "border-pink-200/50",
    accent: "text-pink-400",
  },
  {
    icon: "fa-sun",
    season: "夏",
    en: "Summer",
    items: ["水まんじゅう", "ゆずゼリー", "涼菓子"],
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200/50",
    accent: "text-sky-400",
  },
  {
    icon: "fa-leaf",
    season: "秋",
    en: "Autumn",
    items: ["栗きんとん", "もみじ饅頭", "芋ようかん"],
    color: "from-amber-50 to-orange-50",
    border: "border-amber-200/50",
    accent: "text-amber-500",
  },
  {
    icon: "fa-snowflake",
    season: "冬",
    en: "Winter",
    items: ["雪うさぎ", "柚子きんとん", "花びら餅"],
    color: "from-indigo-50 to-purple-50",
    border: "border-indigo-200/50",
    accent: "text-indigo-400",
  },
];

function GalleryPlaceholder({ alt, caption }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-wagashi-warm via-wagashi-sakura/20 to-egg-blush border border-egg-pink/10 hover:border-egg-pink/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-egg-md">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <i className="fas fa-image text-egg-pink/20 text-4xl mb-3" />
        <p className="font-crimson-text text-egg-brown/40 text-sm italic">{alt}</p>
      </div>
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-egg-dark/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-cormorant text-white text-center text-lg">{caption}</p>
        </div>
      )}
    </div>
  );
}

function GalleryImage({ src, alt, caption }) {
  if (!src) return <GalleryPlaceholder alt={alt} caption={caption} />;
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-egg-sm hover:shadow-egg-md transition-all duration-400 hover:-translate-y-1">
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-egg-dark/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-cormorant text-white text-center text-lg">{caption}</p>
        </div>
      )}
    </div>
  );
}

export default function WagashiPage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />

      <main className="pb-24">

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wagashi-warm via-egg-cream to-wagashi-sakura/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(240,184,192,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,rgba(245,237,224,0.40),transparent_50%)]" />

          {/* Decorative pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #9E7676 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="container mx-auto max-w-4xl relative">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Text */}
              <div className="md:w-[55%]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-wagashi-adzuki/40" />
                  <p className="font-crimson-text text-wagashi-adzuki/70 tracking-[0.3em] text-xs uppercase">
                    Japanese Sweets
                  </p>
                </div>

                <h1 className="font-cormorant text-[clamp(3.5rem,9vw,6.5rem)] text-egg-rose leading-[0.9] mb-5 tracking-tight">
                  和菓子<br />
                  <span className="italic text-[0.7em] text-egg-pink">Wagashi</span>
                </h1>

                <p className="font-crimson-text text-egg-brown text-xl leading-relaxed mb-6 italic">
                  日本の四季を閉じ込めた甘みを、<br />
                  イベントという舞台でお届けします。
                </p>

                <p className="font-noto text-egg-brown/70 text-sm leading-loose">
                  苺大福をはじめとする季節の和菓子を、各種イベントに出展・販売しています。
                  手作りの温もりとともに、日本の食文化の豊かさを多くの方に届けたいと思っています。
                </p>
              </div>

              {/* Visual */}
              <div className="md:w-[45%] flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 rounded-full border border-egg-pink/15" />
                  <div className="absolute inset-4 rounded-full border border-dashed border-wagashi-sakura/30 animate-spin-slow" />
                  {/* Center */}
                  <div className="absolute inset-10 rounded-full bg-gradient-to-br from-wagashi-warm to-wagashi-sakura/30 shadow-egg-lg flex items-center justify-center animate-float">
                    <span className="font-cormorant text-egg-rose/70 text-6xl leading-none select-none">和</span>
                  </div>
                  {/* Dots */}
                  <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-wagashi-sakura/60 animate-pulse-slow" />
                  <div className="absolute bottom-12 left-4 w-2 h-2 rounded-full bg-wagashi-adzuki/30" />
                  <div className="absolute top-1/3 -left-2 w-2 h-2 rounded-full bg-wagashi-matcha/40 animate-pulse-slow animation-delay-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section id="gallery" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <Reveal className="text-center mb-14">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Photo Gallery</p>
              <h2 className="font-cormorant text-5xl text-egg-rose mb-4">Gallery</h2>
              <div className="mx-auto w-12 h-px bg-gradient-to-r from-transparent via-egg-pink to-transparent" />
              <p className="font-noto text-egg-brown/50 text-xs mt-5">
                ※ 画像は順次追加予定です
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {galleryItems.map((item, i) => (
                <Reveal key={i} delay={`animation-delay-${((i % 3) + 1) * 100}`}>
                  <GalleryImage {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Seasonal Menu ── */}
        <section className="py-20 px-6 bg-egg-cream relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(240,184,192,0.12),transparent_60%)]" />

          <div className="container mx-auto max-w-5xl relative">
            <Reveal className="text-center mb-14">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Seasonal Menu</p>
              <h2 className="font-cormorant text-5xl text-egg-rose">季節の和菓子</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {events.map(({ icon, season, en, items, color, border, accent }) => (
                <Reveal key={season}>
                  <div className={`bg-gradient-to-br ${color} rounded-2xl p-7 border ${border} h-full`}>
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className={`font-cormorant text-3xl ${accent}`}>{season}</p>
                        <p className="font-crimson-text text-egg-brown/40 text-xs tracking-widest italic">{en}</p>
                      </div>
                      <i className={`fas ${icon} ${accent} text-2xl opacity-60`} />
                    </div>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-noto text-egg-brown/80 text-sm">
                          <span className="w-1 h-1 rounded-full bg-egg-pink/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="text-center font-crimson-text text-egg-brown/40 text-sm mt-8 italic">
              ※ 季節・イベントにより変動します
            </p>
          </div>
        </section>

        {/* ── Event Info ── */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-3xl">
            <Reveal className="text-center mb-14">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Events</p>
              <h2 className="font-cormorant text-5xl text-egg-rose">イベント出展について</h2>
            </Reveal>

            <Reveal delay="animation-delay-100">
              <div className="bg-egg-cream rounded-3xl p-8 md:p-10 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: "fa-calendar-days",
                      title: "出展情報",
                      desc: "各種マルシェ・フリーマーケット・地域イベントを中心に出展しています。最新の出展情報はSNSをご確認ください。",
                    },
                    {
                      icon: "fa-store",
                      title: "出店依頼",
                      desc: "イベント・マルシェへの出店依頼を承っています。お気軽にお問い合わせください。",
                    },
                    {
                      icon: "fa-gift",
                      title: "ギフト・手土産",
                      desc: "ご贈答用の包装・メッセージカード対応可能です。法人ギフト・記念品としてもご利用いただけます。",
                    },
                    {
                      icon: "fa-hands-holding",
                      title: "体験ワークショップ",
                      desc: "和菓子作り体験ワークショップも不定期で開催。詳しくはお問い合わせください。",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-egg-blush flex items-center justify-center shrink-0 mt-0.5">
                        <i className={`fas ${icon} text-egg-rose text-sm`} />
                      </div>
                      <div>
                        <h3 className="font-cormorant text-xl text-egg-rose mb-1">{title}</h3>
                        <p className="font-noto text-egg-brown/70 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay="animation-delay-200">
              <div className="relative bg-egg-dark rounded-3xl p-10 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(240,184,192,0.12),transparent_60%)]" />
                <div className="relative">
                  <h3 className="font-cormorant text-3xl text-white mb-3">出店依頼・お問い合わせ</h3>
                  <p className="font-noto text-white/60 text-sm mb-7">
                    和菓子イベントへの参加・ギフト注文などはお気軽にご連絡ください。
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-egg-pink text-white font-cormorant text-xl px-9 py-3.5 rounded-full hover:bg-egg-rose transition-colors shadow-egg-sm"
                  >
                    お問い合わせ
                    <i className="fas fa-arrow-right text-sm opacity-70" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
