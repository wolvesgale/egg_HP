import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "EC運営管理 | 株式会社egg",
};

const platforms = [
  {
    name: "Amazon",
    icon: "fa-amazon",
    color: "#FF9900",
    bg: "#fff8ee",
    description:
      "Amazon.co.jp にて出品・販売中です。商品ページをご覧ください。",
    linkLabel: "Amazon ストアを見る",
    href: "AMAZON_STORE_URL", // TODO: 実際のAmazonストアURLに変更
  },
  {
    name: "メルカリ",
    icon: "fa-store",
    color: "#FF0211",
    bg: "#fff2f2",
    description:
      "メルカリにて出品中です。フォローしていただくと新着商品をいち早くご確認いただけます。",
    linkLabel: "メルカリ出品ページを見る",
    href: "MERCARI_PAGE_URL", // TODO: 実際のメルカリページURLに変更
  },
];

export default function EcManagementPage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />

      <main className="pt-28 md:pt-36 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-cormorant text-egg-rose mb-4">EC 運営管理</h1>
            <p className="font-crimson-text text-egg-brown text-xl leading-relaxed">
              Amazon・メルカリを中心に商品を展開しています。<br />
              各プラットフォームのページからご購入いただけます。
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {platforms.map(({ name, icon, color, bg, description, linkLabel, href }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderTop: `3px solid ${color}` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: bg }}
                >
                  <i className={`fab ${icon} text-3xl`} style={{ color }} />
                </div>
                <h2 className="text-2xl font-cormorant text-egg-rose mb-3">{name}</h2>
                <p className="font-crimson-text text-egg-brown text-lg leading-relaxed mb-6">
                  {description}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-crimson-text text-egg-rose hover:text-egg-pink transition-colors text-lg"
                >
                  {linkLabel}
                  <i className="fas fa-arrow-up-right-from-square text-sm" />
                </a>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <i className="fas fa-envelope text-egg-pink text-3xl mb-4" />
            <h3 className="text-2xl font-cormorant text-egg-rose mb-3">
              法人・大口のご相談
            </h3>
            <p className="font-crimson-text text-egg-brown text-lg mb-5">
              法人向け取引・大量購入・OEM等のご相談はお問い合わせください。
            </p>
            <a
              href="/#contact"
              className="inline-block bg-egg-pink text-white font-cormorant text-lg px-7 py-3 rounded-full hover:bg-egg-rose transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
