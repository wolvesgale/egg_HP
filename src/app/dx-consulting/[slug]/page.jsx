import Link from "next/link";
import { getPortfolioItem, portfolioItems } from "../../../data/dx-portfolio";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const item = getPortfolioItem(params.slug);
  if (!item) return {};
  return {
    title: `${item.title} | DX | 株式会社egg`,
    description: item.description,
  };
}

export default function CaseStudyPage({ params }) {
  const item = getPortfolioItem(params.slug);
  if (!item) notFound();

  // TENKUは専用ページにリダイレクト（このルートはcase-study用）
  if (item.type === "product") {
    return (
      <main className="pt-28 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">このページは TENKU 専用ページに移動しました。</p>
          <Link href="/dx-consulting/tenku" className="text-aws-orange hover:underline">
            TENKU ページへ →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-10 font-mono">
          <Link href="/dx-consulting" className="hover:text-aws-orange transition-colors">Portfolio</Link>
          <span>/</span>
          <span className="text-aws-orange truncate">{item.title}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-5">
            {item.tags.map((tag) => (
              <span key={tag} className="bg-aws-darker text-aws-orange text-xs px-3 py-1 rounded-full border border-aws-orange/20 font-mono">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{item.title}</h1>
          <p className="text-aws-orange text-lg">{item.tagline}</p>
        </div>

        {/* Main image */}
        {item.thumbnail ? (
          <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="rounded-2xl bg-aws-card border border-white/5 mb-10 aspect-video flex items-center justify-center">
            <i className="fas fa-laptop-code text-white/10 text-8xl" />
          </div>
        )}

        {/* Description */}
        <div className="bg-aws-card rounded-2xl p-8 mb-10 border border-white/5">
          <h2 className="text-xl font-bold text-white mb-4">概要</h2>
          <p className="text-gray-300 leading-relaxed">{item.description}</p>
        </div>

        {/* Results */}
        {item.results && item.results.length > 0 && (
          <div className="bg-aws-card rounded-2xl p-8 mb-10 border border-aws-orange/10">
            <h2 className="text-xl font-bold text-white mb-5">
              <span className="text-aws-orange mr-2">▶</span> 成果・実績
            </h2>
            <ul className="space-y-3">
              {item.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <i className="fas fa-check text-aws-orange mt-1 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots */}
        {item.screenshots && item.screenshots.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-5">スクリーンショット</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.screenshots.map(({ src, caption }, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-aws-card border border-white/5">
                  <img src={src} alt={caption} className="w-full object-cover" />
                  {caption && (
                    <p className="text-gray-500 text-sm p-3 font-mono">{caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex flex-wrap justify-between gap-4 mt-12 pt-8 border-t border-white/5">
          <Link
            href="/dx-consulting"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-arrow-left" />
            Portfolio に戻る
          </Link>
          <a
            href="/#contact"
            className="inline-block bg-aws-orange text-aws-dark font-bold py-2.5 px-7 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
          >
            この案件について相談する
          </a>
        </div>
      </div>
    </main>
  );
}
