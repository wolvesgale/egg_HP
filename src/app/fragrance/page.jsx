import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "調香 / 香料販売 | 株式会社egg",
};

const currentServices = [
  {
    icon: "fa-vial",
    title: "オリジナル調香",
    description: "お客様の想いや世界観を香りで表現。世界にひとつだけのオリジナルフレグランスを制作します。",
    tag: "Bespoke",
  },
  {
    icon: "fa-box-open",
    title: "厳選香料販売",
    description: "世界中から厳選した天然香料をご提供。空間演出からブランディングまで、幅広いシーンで活躍します。",
    tag: "Select",
  },
  {
    icon: "fa-comments",
    title: "フレグランス コンサルティング",
    description: "ブランドや空間コンセプトに合った香りをご提案。香りによる体験価値の向上をサポートします。",
    tag: "Consulting",
  },
];

const comingSoon = [
  {
    icon: "fa-book-open",
    title: "電子書籍",
    description: "調香の基礎知識からレシピまで、香りの世界を深く学べるデジタルコンテンツを準備中です。",
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "オンライン教室",
    description: "自宅で本格的な調香を体験できるオンライン講座を開講予定。初心者から上級者まで対応します。",
  },
];

export default function FragrancePage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />

      <main className="pb-24">

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          {/* Layered background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0EE] via-egg-cream to-egg-blush" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,165,165,0.20),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(248,225,225,0.25),transparent_50%)]" />

          <div className="container mx-auto max-w-4xl relative">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Text */}
              <div className="md:w-[55%]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-egg-pink" />
                  <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase">
                    Scent & Perfumery
                  </p>
                </div>
                <h1 className="font-cormorant text-[clamp(3rem,8vw,6rem)] text-egg-rose leading-[0.95] mb-6 tracking-tight">
                  調香<span className="text-egg-pink/50 mx-2 font-light">/</span>香料販売
                </h1>
                <p className="font-crimson-text text-egg-brown text-xl leading-relaxed max-w-md mb-8 italic">
                  香りは記憶に寄り添い、<br />空間に物語を生む。
                </p>
                <p className="font-noto text-egg-brown/70 text-sm leading-loose">
                  世界であなただけの香りとの出会いをサポートします。オリジナル調香から厳選香料の販売まで、あらゆるフレグランスニーズにお応えします。
                </p>
              </div>

              {/* Visual */}
              <div className="md:w-[45%] flex justify-center">
                <div className="relative w-60 h-60 md:w-72 md:h-72">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-egg-pink/20 animate-spin-slow" />
                  {/* Mid ring */}
                  <div className="absolute inset-5 rounded-full border border-dashed border-egg-pink/15" />
                  {/* Center */}
                  <div className="absolute inset-10 rounded-full bg-gradient-to-br from-white to-egg-blush shadow-egg-lg flex items-center justify-center animate-float">
                    <i className="fas fa-wind text-egg-pink/60 text-5xl" />
                  </div>
                  {/* Dots */}
                  <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-egg-pink/50 animate-pulse-slow" />
                  <div className="absolute bottom-10 left-3 w-1.5 h-1.5 rounded-full bg-egg-rose/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Scent notes strip ── */}
        <div className="overflow-hidden py-5 bg-white border-y border-egg-blush">
          <div className="flex gap-10 items-center justify-center flex-wrap px-6">
            {["Rose", "Jasmine", "Oud", "Bergamot", "Vetiver", "Sandalwood", "Neroli", "Amber", "Iris"].map((note) => (
              <span key={note} className="font-cormorant text-egg-rose/30 text-xl tracking-widest italic shrink-0">
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* ── Current Services ── */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-3">Services</p>
              <h2 className="font-cormorant text-5xl text-egg-rose">現在のサービス</h2>
              <div className="mt-4 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-egg-pink to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {currentServices.map(({ icon, title, description, tag }, i) => (
                <div
                  key={title}
                  className="group relative bg-white rounded-3xl p-8 shadow-egg-sm hover:shadow-egg-lg transition-all duration-400 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-egg-pink/5 to-egg-blush/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-egg-blush flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className={`fas ${icon} text-egg-rose text-xl`} />
                      </div>
                      <span className="font-crimson-text text-egg-pink/50 text-xs tracking-widest border border-egg-pink/20 px-2 py-0.5 rounded-full italic">
                        {tag}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-2xl text-egg-rose mb-3 leading-tight">{title}</h3>
                    <p className="font-noto text-egg-brown/75 text-sm leading-relaxed">{description}</p>
                  </div>

                  {/* Number */}
                  <span className="absolute bottom-4 right-5 font-cormorant text-egg-pink/10 text-7xl leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coming Soon ── */}
        <section className="py-16 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,165,165,0.06),transparent_60%)]" />

          <div className="container mx-auto max-w-3xl relative">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-egg-blush text-egg-rose font-noto text-xs px-4 py-1.5 rounded-full border border-egg-pink/25 mb-4">
                <i className="fas fa-clock text-[10px]" />
                近日公開
              </span>
              <h2 className="font-cormorant text-5xl text-egg-rose">新サービス 準備中</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {comingSoon.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="relative bg-egg-cream rounded-3xl p-8 border border-dashed border-egg-pink/30 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-egg-light/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-egg-pink/10 flex items-center justify-center">
                      <i className={`fas ${icon} text-egg-pink/70 text-lg`} />
                    </div>
                    <h3 className="font-cormorant text-2xl text-egg-rose/80 mb-3">{title}</h3>
                    <p className="font-noto text-egg-brown/60 text-sm leading-relaxed">{description}</p>
                  </div>
                  {/* Coming soon badge */}
                  <div className="absolute top-4 right-4 bg-egg-pink/15 text-egg-rose text-[10px] font-noto px-2 py-0.5 rounded-full border border-egg-pink/20">
                    Coming Soon
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center font-crimson-text text-egg-brown/50 mt-7 text-sm">
              新サービスの開始通知をご希望の方はお問い合わせください。
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 bg-egg-cream">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="relative bg-egg-dark rounded-3xl p-10 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,165,165,0.15),transparent_60%)]" />
              <div className="relative">
                <i className="fas fa-wind text-egg-pink/40 text-5xl mb-6 block" />
                <h3 className="font-cormorant text-4xl text-white mb-4">香りについてのご相談</h3>
                <p className="font-noto text-white/60 text-sm mb-8 leading-relaxed">
                  オリジナル香料のご依頼や、サービスへのご質問はお気軽にどうぞ。
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-egg-pink text-white font-cormorant text-xl px-10 py-3.5 rounded-full hover:bg-egg-rose transition-colors shadow-egg-sm"
                >
                  お問い合わせ
                  <i className="fas fa-arrow-right text-sm opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
