import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "EC 運営管理 | 株式会社egg",
};

const platforms = [
  {
    name: "Amazon",
    icon: "fa-amazon",
    color: "#FF9900",
    gradient: "from-orange-50 to-yellow-50",
    border: "border-orange-200/60",
    description:
      "Amazon.co.jp にて出品・販売中です。品揃えとブランドストーリーを大切に、丁寧な商品ページをご覧ください。",
    linkLabel: "Amazon ストアを見る",
    href: "AMAZON_STORE_URL",
  },
  {
    name: "メルカリ",
    icon: "fa-store",
    color: "#FF0211",
    gradient: "from-red-50 to-rose-50",
    border: "border-red-200/60",
    description:
      "メルカリにてフォロー歓迎。新着商品をいち早くご確認いただけます。お気軽にメッセージください。",
    linkLabel: "メルカリ出品ページを見る",
    href: "MERCARI_PAGE_URL",
  },
];

const services = [
  {
    icon: "fa-boxes-stacked",
    title: "商品企画・仕入れ",
    desc: "ブランドコンセプトに合致する商品を厳選。クオリティファーストで品揃えをキュレーションします。",
  },
  {
    icon: "fa-pen-to-square",
    title: "商品ページ制作",
    desc: "商品の魅力を最大化するコピーライティングと写真撮影。購買体験の質にこだわります。",
  },
  {
    icon: "fa-headset",
    title: "カスタマーサポート",
    desc: "お客様のご質問・ご要望に迅速・丁寧に対応。リピーターが多く、高評価を維持しています。",
  },
];

export default function EcManagementPage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* ── Hero ── */}
          <div className="text-center mb-20">
            <p className="font-crimson-text text-egg-pink tracking-[0.3em] text-xs uppercase mb-4">Online Store</p>
            <h1 className="font-cormorant text-6xl md:text-7xl text-egg-rose mb-5 leading-tight">
              EC 運営管理
            </h1>
            <div className="w-14 h-px bg-gradient-to-r from-transparent via-egg-pink to-transparent mx-auto mb-6" />
            <p className="font-noto text-egg-brown/80 text-base leading-loose max-w-xl mx-auto">
              Amazon・メルカリを中心にブランドストーリーに寄り添った商品展開をしています。<br />
              各プラットフォームのページからご購入いただけます。
            </p>
          </div>

          {/* ── Platform Cards ── */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {platforms.map(({ name, icon, color, gradient, border, description, linkLabel, href }) => (
              <div
                key={name}
                className={`group relative bg-gradient-to-br ${gradient} rounded-3xl p-8 border ${border} hover:shadow-egg-lg transition-all duration-400 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10" style={{ background: color }} />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-egg-sm flex items-center justify-center mb-6">
                    <i className={`fab ${icon} text-3xl`} style={{ color }} />
                  </div>

                  <h2 className="font-cormorant text-3xl text-egg-rose mb-3">{name}</h2>
                  <p className="font-noto text-egg-brown/80 text-sm leading-loose mb-7">{description}</p>

                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-crimson-text text-egg-rose hover:text-egg-pink transition-colors text-lg group-hover:gap-3"
                  >
                    {linkLabel}
                    <i className="fas fa-arrow-up-right-from-square text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Services ── */}
          <div className="mb-20">
            <h2 className="font-cormorant text-4xl text-egg-rose text-center mb-10">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {services.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-7 shadow-egg-sm hover:shadow-egg-md transition-shadow text-center group">
                  <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-egg-blush flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`fas ${icon} text-egg-rose text-lg`} />
                  </div>
                  <h3 className="font-cormorant text-xl text-egg-rose mb-3">{title}</h3>
                  <p className="font-noto text-egg-brown/75 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── B2B CTA ── */}
          <div className="relative bg-egg-dark rounded-3xl p-10 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,165,165,0.12),transparent_60%)]" />
            <div className="relative">
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-egg-pink/15 flex items-center justify-center">
                <i className="fas fa-handshake text-egg-pink text-xl" />
              </div>
              <h3 className="font-cormorant text-3xl text-white mb-3">法人・大口のご相談</h3>
              <p className="font-noto text-white/60 text-sm mb-7 leading-relaxed">
                法人向け取引・大量購入・OEM等のご相談はお問い合わせください。
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-egg-pink text-white font-cormorant text-lg px-8 py-3.5 rounded-full hover:bg-egg-rose transition-colors shadow-egg-sm"
              >
                お問い合わせ
                <i className="fas fa-arrow-right text-sm opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
