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
 * 画像追加時: src に "/images/wagashi/ファイル名.jpg" を指定してください。
 * public/images/wagashi/ フォルダに画像を配置すると表示されます。
 */
const galleryItems = [
  { src: null, alt: "苺大福", span: "col-span-2 row-span-2" },
  { src: null, alt: "イベント会場" },
  { src: null, alt: "和菓子並び" },
  { src: null, alt: "苺大福アップ" },
  { src: null, alt: "商業施設出店" },
  { src: null, alt: "手作り和菓子" },
];

function GallerySlot({ src, alt, span = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-wagashi-warm to-wagashi-sakura/20 border border-egg-pink/10 hover:border-egg-pink/25 transition-all duration-400 ${span}`}
      style={{ aspectRatio: span ? "1 / 1" : "4 / 3" }}
    >
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-egg-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <i className="fas fa-image text-egg-pink/15 text-5xl mb-2" />
          <p className="font-crimson-text text-egg-brown/25 text-sm italic">{alt}</p>
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
        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wagashi-warm via-[#FEF5F0] to-wagashi-sakura/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(240,184,192,0.22),transparent_55%)]" />

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #9E7676 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="container mx-auto max-w-4xl relative">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-wagashi-adzuki/35" />
                <p className="font-crimson-text text-wagashi-adzuki/60 tracking-[0.3em] text-xs uppercase">
                  Japanese Sweets Event
                </p>
              </div>

              <h1 className="font-cormorant text-[clamp(3.5rem,9vw,6rem)] text-egg-rose leading-[0.9] mb-6 tracking-tight">
                和菓子<br />
                <span className="italic text-[0.65em] text-egg-pink/80">Wagashi</span>
              </h1>

              <p className="font-cormorant text-2xl md:text-3xl text-egg-rose/80 leading-snug mb-5 italic">
                名古屋の工場から直送。<br />
                苺大福を、各商業施設のイベントへ。
              </p>

              <p className="font-noto text-egg-brown/70 text-sm leading-loose max-w-lg">
                愛知・名古屋の専門工場から直送した苺大福をはじめとする和菓子を、
                関西圏の商業施設・マルシェ・地域イベントに出展・販売しています。
                手作りの温もりとともに、旬の美味しさをお届けします。
              </p>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <Reveal className="mb-12">
              <div className="flex items-center gap-5">
                <div className="h-px flex-1 bg-egg-blush" />
                <p className="font-crimson-text text-egg-pink/60 tracking-[0.3em] text-xs uppercase">Gallery</p>
                <div className="h-px flex-1 bg-egg-blush" />
              </div>
            </Reveal>

            {/* Bento-style grid */}
            <Reveal delay="animation-delay-100">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
                {galleryItems.map((item, i) => (
                  <GallerySlot key={i} {...item} />
                ))}
              </div>
            </Reveal>

            <Reveal delay="animation-delay-200">
              <p className="text-center font-crimson-text text-egg-brown/35 text-sm mt-8 italic">
                ※ 画像は順次追加予定です
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Brief Info + CTA ── */}
        <section className="py-20 px-6 bg-egg-cream">
          <div className="container mx-auto max-w-3xl">
            <Reveal>
              <div className="grid md:grid-cols-3 gap-4 mb-14">
                {[
                  { icon: "fa-truck-fast", label: "名古屋直送",  desc: "専門工場から鮮度を保ってお届け" },
                  { icon: "fa-store",      label: "商業施設出店", desc: "関西圏の各施設・マルシェに出展" },
                  { icon: "fa-leaf",       label: "季節の和菓子", desc: "苺大福をはじめ旬の一品を展開" },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="text-center bg-white rounded-2xl p-7 shadow-egg-sm">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-wagashi-sakura/20 flex items-center justify-center">
                      <i className={`fas ${icon} text-egg-rose text-lg`} />
                    </div>
                    <p className="font-cormorant text-xl text-egg-rose mb-1">{label}</p>
                    <p className="font-noto text-egg-brown/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay="animation-delay-200">
              <div className="relative bg-egg-dark rounded-3xl p-10 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(240,184,192,0.10),transparent_60%)]" />
                <div className="relative">
                  <h3 className="font-cormorant text-3xl text-white mb-3">出店・仕入れのご相談</h3>
                  <p className="font-noto text-white/55 text-sm mb-7 leading-relaxed">
                    イベントへの出店依頼・仕入れのご相談はお気軽にどうぞ。
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
