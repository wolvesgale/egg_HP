export default function TokushohoPage() {
  return (
    <section id="legal" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-cormorant text-[#9E7676] text-center mb-12">
          特定商取引法に基づく表記
        </h2>
        <div className="space-y-4 text-[#615555] font-crimson-text">
          <p><strong>販売業者名：</strong>株式会社egg</p>
          <p><strong>運営責任者：</strong>前田 拡夢</p>
          <p><strong>所在地：</strong>兵庫県尼崎市竹谷町三丁目89番地4</p>
          <p><strong>電話番号：</strong>06-7162-1839</p>
          <p><strong>メールアドレス：</strong><a href="mailto:info@eggs.email" className="text-[#D4A5A5] underline">info@eggs.email</a></p>
          <p><strong>商品代金以外の必要料金：</strong>インターネット接続に必要な通信費はお客様のご負担となります。</p>
          <p><strong>引き渡し時期：</strong>決済完了後、即時にサービスをご利用いただけます。</p>
          <p><strong>返品・キャンセルについて：</strong>サービスの性質上、購入後の返品・返金はお受けしておりません。あらかじめご了承ください。</p>
        </div>
      </div>
    </section>
  );
}