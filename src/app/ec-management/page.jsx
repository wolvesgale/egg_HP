"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-[#D4A5A5] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5]" />
              </div>
            </div>
            <h1 className="text-2xl font-cormorant text-[#D4A5A5]">
              株式会社egg
            </h1>
          </a>
        </div>
      </header>

      <main className="pt-24 md:pt-32">
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-cormorant text-[#9E7676] text-center mb-8">
            EC運営管理サービス
          </h2>
          <p className="text-xl font-crimson-text text-[#615555] text-center max-w-3xl mx-auto mb-16">
            お客様のブランドストーリーに寄り添った構築〜運用まで、
            <br className="hidden md:block" />
            一貫したサポートでECビジネスの成長をお手伝いします
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="aspect-video bg-[#FDF8F5] rounded-lg mb-6 overflow-hidden">
                <img
                  src="/images/ec-dashboard.svg"
                  alt="複数のECサイトを一元管理できるダッシュボード画面"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                マルチプラットフォーム管理
              </h3>
              <p className="font-crimson-text text-[#615555]">
                複数のECモール、自社ECサイトの一元管理を実現。
                在庫管理から受注処理まで、効率的な運営をサポートします。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="aspect-video bg-[#FDF8F5] rounded-lg mb-6 overflow-hidden">
                <img
                  src="/images/brand-story.svg"
                  alt="ブランドストーリーに基づいたECサイト構築プロセス"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                ブランド価値の向上
              </h3>
              <p className="font-crimson-text text-[#615555]">
                商品の魅力を最大限に引き出すデザインと、
                ブランドストーリーに沿ったコンテンツ制作で、
                オンラインでの存在感を高めます。
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h3 className="text-3xl font-cormorant text-[#9E7676] text-center mb-8">
              サービス内容
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                  <i className="fas fa-store text-2xl text-white"></i>
                </div>
                <h4 className="text-xl font-cormorant text-[#9E7676] mb-2">
                  ECサイト構築
                </h4>
                <p className="font-crimson-text text-[#615555]">
                  要件定義から設計、開発まで
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-line text-2xl text-white"></i>
                </div>
                <h4 className="text-xl font-cormorant text-[#9E7676] mb-2">
                  運用代行
                </h4>
                <p className="font-crimson-text text-[#615555]">
                  在庫管理から受注対応まで
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                  <i className="fas fa-bullhorn text-2xl text-white"></i>
                </div>
                <h4 className="text-xl font-cormorant text-[#9E7676] mb-2">
                  マーケティング支援
                </h4>
                <p className="font-crimson-text text-[#615555]">
                  分析と改善提案の実施
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FDF8F5] py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="font-crimson-text text-[#9E7676]">
            © 2025 株式会社egg. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;