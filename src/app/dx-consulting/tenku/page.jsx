import Link from "next/link";
import { portfolioItems } from "../../../data/dx-portfolio";

export const metadata = {
  title: "TENKU | 株式会社egg",
  description: "egg が開発・提供する SaaS プロダクト TENKU の詳細・デモ・お申込みページ",
};

export default function TenkuPage() {
  const tenku = portfolioItems.find((item) => item.slug === "tenku");

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-10 font-mono">
          <Link href="/dx-consulting" className="hover:text-aws-orange transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-aws-orange">TENKU</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-aws-orange/10 border border-aws-orange/30 text-aws-orange text-xs font-mono px-4 py-1.5 rounded-full mb-6">
            <i className="fas fa-cloud text-xs" />
            SaaS PRODUCT BY EGG
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            TENKU
          </h1>
          {tenku && (
            <p className="text-aws-orange text-xl font-medium mb-6">{tenku.tagline}</p>
          )}
          {tenku && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {tenku.description}
            </p>
          )}
        </div>

        {/* Visual placeholder */}
        <div className="relative rounded-2xl overflow-hidden mb-16 bg-aws-card border border-white/10 aspect-video flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-cloud text-aws-orange/30 text-[120px] mb-4" />
            <p className="text-gray-600 font-mono text-sm tracking-widest">
              {/* TODO: スクリーンショットや製品画像を追加 */}
              TENKU PRODUCT IMAGE
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          <a
            href={tenku?.links.demo ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-aws-card hover:bg-[#354a60] border border-aws-orange/30 hover:border-aws-orange rounded-xl p-7 text-center transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-aws-orange/10 flex items-center justify-center group-hover:bg-aws-orange/20 transition-colors">
              <i className="fas fa-play-circle text-aws-orange text-2xl" />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">デモを見る</p>
              <p className="text-gray-500 text-sm">実際の動作を確認</p>
            </div>
          </a>

          <a
            href={tenku?.links.signup ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-aws-orange hover:bg-yellow-400 rounded-xl p-7 text-center transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center">
              <i className="fas fa-file-signature text-aws-dark text-2xl" />
            </div>
            <div>
              <p className="text-aws-dark font-bold mb-1">お申込み</p>
              <p className="text-aws-dark/70 text-sm">利用開始はこちら</p>
            </div>
          </a>

          <a
            href={tenku?.links.purchase ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-aws-card hover:bg-[#354a60] border border-white/10 hover:border-aws-blue rounded-xl p-7 text-center transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-aws-blue/10 flex items-center justify-center group-hover:bg-aws-blue/20 transition-colors">
              <i className="fas fa-shopping-cart text-aws-blue text-2xl" />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">購入する</p>
              <p className="text-gray-500 text-sm">ライセンス取得</p>
            </div>
          </a>
        </div>

        {/* Features placeholder */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="text-aws-orange">—</span> 主な機能 <span className="text-aws-orange">—</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "fa-bolt", label: "機能1", desc: "TENKUの特長・機能を記載予定" },
              { icon: "fa-shield-alt", label: "機能2", desc: "TENKUの特長・機能を記載予定" },
              { icon: "fa-chart-line", label: "機能3", desc: "TENKUの特長・機能を記載予定" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="bg-aws-card rounded-xl p-6 border border-white/5 text-center">
                <i className={`fas ${icon} text-aws-orange text-3xl mb-4`} />
                <h3 className="text-white font-semibold mb-2">{label}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mt-5 font-mono">
            {/* TODO: 実際の機能説明に差し替えてください */}
            * 機能詳細は準備中です
          </p>
        </div>

        {/* Contact */}
        <div className="bg-aws-card rounded-2xl p-10 text-center border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-3">導入のご相談</h3>
          <p className="text-gray-400 mb-6">
            TENKU の詳細・価格・カスタマイズについてはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="inline-block bg-aws-orange text-aws-dark font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              お問い合わせ
            </a>
            <Link
              href="/dx-consulting"
              className="inline-block border border-white/20 text-gray-400 font-bold py-3 px-8 rounded-lg hover:border-white/40 hover:text-white transition-colors"
            >
              ← Portfolio に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
