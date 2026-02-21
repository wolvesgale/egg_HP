"use client";
import Link from "next/link";
import { portfolioItems, getCaseStudies } from "../../data/dx-portfolio";

export default function DxConsultingPage() {
  const featured = portfolioItems.find((item) => item.featured);
  const cases = getCaseStudies();

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* ── Page Header ── */}
        <div className="text-center mb-16">
          <p className="text-aws-orange font-mono text-xs tracking-widest mb-3">EGG DX & PRODUCTS</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Digital<br />
            <span className="text-aws-orange">Transformation</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            外資大手パブリッククラウド・スタートアップまで経験したコンサルタントが、
            DX推進・クラウド活用・業務改革をお手伝いします。
          </p>
        </div>

        {/* ── Featured Product: TENKU ── */}
        {featured && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-aws-orange/20" />
              <span className="text-aws-orange text-xs font-mono tracking-widest">FEATURED PRODUCT</span>
              <div className="h-px flex-1 bg-aws-orange/20" />
            </div>

            <div className="border border-aws-orange/30 rounded-2xl overflow-hidden bg-aws-card hover:border-aws-orange/60 transition-all duration-300">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                {/* Text */}
                <div className="flex-1">
                  <div className="inline-block bg-aws-orange text-aws-dark text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest">
                    TENKU
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">TENKU</h2>
                  <p className="text-aws-orange mb-4 font-medium">{featured.tagline}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featured.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="bg-aws-dark text-gray-400 text-xs px-3 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={featured.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-aws-orange text-aws-dark font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
                    >
                      <i className="fas fa-play-circle" /> デモを見る
                    </a>
                    <a
                      href={featured.links.signup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-aws-orange text-aws-orange font-bold px-5 py-2 rounded-lg hover:bg-aws-orange hover:text-aws-dark transition-colors text-sm"
                    >
                      <i className="fas fa-file-signature" /> お申込み
                    </a>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-shrink-0 w-64 h-48 bg-aws-dark rounded-xl flex items-center justify-center border border-white/10">
                  {featured.thumbnail ? (
                    <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <div className="text-center">
                      <i className="fas fa-cloud text-aws-orange text-5xl mb-3 opacity-80" />
                      <p className="text-gray-500 text-sm font-mono tracking-widest">TENKU</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer bar */}
              <div className="border-t border-white/5 px-8 md:px-12 py-4 flex items-center justify-between">
                <span className="text-gray-500 text-sm">製品詳細・デモ・お申込みはこちら</span>
                <Link href="/dx-consulting/tenku" className="text-aws-orange text-sm hover:underline">
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── Case Studies ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-gray-400 text-xs font-mono tracking-widest">CASE STUDIES</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {cases.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cases.map((item) => (
                <Link key={item.slug} href={`/dx-consulting/${item.slug}`}>
                  <div className="group bg-aws-card rounded-xl overflow-hidden hover:bg-[#354a60] transition-colors border border-white/5 hover:border-aws-orange/20">
                    <div className="aspect-video bg-aws-darker flex items-center justify-center">
                      {item.thumbnail ? (
                        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <i className="fas fa-laptop-code text-aws-orange/30 text-5xl" />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold mb-1 group-hover:text-aws-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-3">{item.tagline}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span key={tag} className="bg-aws-dark text-gray-500 text-xs px-2 py-0.5 rounded border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
              <i className="fas fa-folder-open text-white/10 text-6xl mb-5" />
              <p className="text-gray-600 font-mono text-sm">案件実績は随時追加予定です</p>
            </div>
          )}
        </div>

        {/* ── CTA ── */}
        <div className="mt-20 bg-aws-card rounded-2xl p-10 md:p-14 text-center border border-white/5">
          <h3 className="text-3xl font-bold text-white mb-4">DX推進のご相談</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            クラウド活用・業務改革・システム開発・TENKU の導入についてお気軽にご相談ください。
          </p>
          <a
            href="/#contact"
            className="inline-block bg-aws-orange text-aws-dark font-bold py-3 px-10 rounded-lg hover:bg-yellow-400 transition-colors tracking-wide"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </main>
  );
}
