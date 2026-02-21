import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "調香 / 香料販売 | 株式会社egg",
};

const currentServices = [
  {
    icon: "fa-vial",
    title: "オリジナル調香",
    description:
      "お客様の想いや世界観を香りで表現。世界にひとつだけのオリジナルフレグランスを制作します。",
  },
  {
    icon: "fa-box-open",
    title: "厳選された香料販売",
    description:
      "世界中から厳選した天然香料をご提供。空間演出からブランディングまで、幅広いシーンで活躍します。",
  },
  {
    icon: "fa-hands-helping",
    title: "フレグランス コンサルティング",
    description:
      "ブランドや空間コンセプトに合った香りをご提案。香りによる体験価値の向上をサポートします。",
  },
];

const comingSoonServices = [
  {
    icon: "fa-book-open",
    title: "電子書籍",
    description:
      "調香の基礎知識からレシピまで、香りの世界を深く学べるデジタルコンテンツを準備中です。",
    badge: "Coming Soon",
  },
  {
    icon: "fa-chalkboard-teacher",
    title: "オンライン教室",
    description:
      "自宅で本格的な調香を体験できるオンライン講座を開講予定。初心者から上級者まで対応します。",
    badge: "Coming Soon",
  },
];

export default function FragrancePage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />

      <main className="pt-28 md:pt-36 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-cormorant text-egg-rose mb-4">
              調香 / 香料販売
            </h1>
            <p className="font-crimson-text text-egg-brown text-xl leading-relaxed max-w-2xl mx-auto">
              世界であなただけの香りとの出会いをサポートします。<br />
              香りは記憶に寄り添い、空間に物語を生む。
            </p>
          </div>

          {/* Visual */}
          <div className="relative mb-20 rounded-2xl overflow-hidden aspect-[16/6] bg-gradient-to-r from-[#FFE5E5] to-[#FDF8F5] flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-wind text-egg-pink/40 text-8xl" />
              <p className="font-cormorant text-egg-rose/50 text-2xl mt-4 tracking-widest">
                FRAGRANCE
              </p>
            </div>
          </div>

          {/* Current Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-cormorant text-egg-rose text-center mb-10">
              現在のサービス
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {currentServices.map(({ icon, title, description }) => (
                <div key={title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-14 h-14 mx-auto mb-5 bg-[#FFE5E5] rounded-full flex items-center justify-center">
                    <i className={`fas ${icon} text-egg-pink text-2xl`} />
                  </div>
                  <h3 className="text-xl font-cormorant text-egg-rose mb-3">{title}</h3>
                  <p className="font-crimson-text text-egg-brown leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mb-20">
            <div className="text-center mb-4">
              <span className="inline-block bg-egg-pink/10 text-egg-rose font-crimson-text text-sm px-4 py-1 rounded-full border border-egg-pink/30">
                近日公開
              </span>
            </div>
            <h2 className="text-3xl font-cormorant text-egg-rose text-center mb-10">
              新サービス 準備中
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {comingSoonServices.map(({ icon, title, description, badge }) => (
                <div
                  key={title}
                  className="relative bg-white rounded-2xl p-7 shadow-sm border border-dashed border-egg-pink/40 text-center opacity-80"
                >
                  <div className="absolute top-4 right-4 bg-egg-pink text-white text-xs font-crimson-text px-2 py-0.5 rounded-full">
                    {badge}
                  </div>
                  <div className="w-14 h-14 mx-auto mb-5 bg-[#FFE5E5]/60 rounded-full flex items-center justify-center">
                    <i className={`fas ${icon} text-egg-pink/70 text-2xl`} />
                  </div>
                  <h3 className="text-xl font-cormorant text-egg-rose/80 mb-3">{title}</h3>
                  <p className="font-crimson-text text-egg-brown/70 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
            <p className="text-center font-crimson-text text-egg-brown/60 mt-6 text-sm">
              新サービスの開始通知をご希望の方はお問い合わせください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <h3 className="text-2xl font-cormorant text-egg-rose mb-3">
              香りについてのご相談
            </h3>
            <p className="font-crimson-text text-egg-brown text-lg mb-6">
              オリジナル香料のご依頼や、サービスへのご質問はお気軽にどうぞ。
            </p>
            <a
              href="/#contact"
              className="inline-block bg-egg-pink text-white font-cormorant text-lg px-8 py-3 rounded-full hover:bg-egg-rose transition-colors"
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
