import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "特定商取引法に基づく表記 | 株式会社egg",
};

const rows = [
  { label: "販売業者名", value: "株式会社egg" },
  { label: "運営責任者", value: "前田 拡夢" },
  { label: "所在地", value: "兵庫県尼崎市竹谷町三丁目89番地4" },
  { label: "電話番号", value: "06-7162-1839" },
  {
    label: "メールアドレス",
    value: "info@eggs.email",
    isEmail: true,
  },
  {
    label: "商品代金以外の必要料金",
    value: "インターネット接続に必要な通信費はお客様のご負担となります。",
  },
  {
    label: "引き渡し時期",
    value: "決済完了後、即時にサービスをご利用いただけます。",
  },
  {
    label: "返品・キャンセル",
    value:
      "サービスの性質上、購入後の返品・返金はお受けしておりません。あらかじめご了承ください。",
  },
];

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />
      <main className="pt-28 md:pt-36 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-cormorant text-egg-rose text-center mb-12">
            特定商取引法に基づく表記
          </h1>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="divide-y divide-egg-pink/10">
              {rows.map(({ label, value, isEmail }) => (
                <div key={label} className="flex flex-col sm:flex-row px-8 py-5 gap-2">
                  <span className="sm:w-48 font-cormorant text-egg-rose shrink-0 font-medium">
                    {label}
                  </span>
                  {isEmail ? (
                    <a
                      href={`mailto:${value}`}
                      className="font-crimson-text text-egg-brown hover:text-egg-rose transition-colors text-lg"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-crimson-text text-egg-brown text-lg leading-relaxed">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
