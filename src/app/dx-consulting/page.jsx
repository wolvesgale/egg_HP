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
            DXコンサルティング
          </h2>
          <p className="text-xl font-crimson-text text-[#615555] text-center max-w-3xl mx-auto mb-16">
            外資大手パブリッククラウド、スタートアップまで経験をしたコンサルタントが
            実務の改善をお手伝いします
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://ucarecdn.com/6e29838c-76b9-4003-ae7b-2c435dfe3b69/-/format/auto/"
                alt="DXコンサルティングイメージ - クラウドビジネス対話"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-cloud text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                クラウド導入支援
              </h3>
              <p className="font-crimson-text text-[#615555]">
                AWS、Azure、GCPなど 主要クラウドの導入をサポート
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-sync text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                業務改革支援
              </h3>
              <p className="font-crimson-text text-[#615555]">
                デジタル技術を活用した 業務プロセスの最適化
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-chart-bar text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                データ活用支援
              </h3>
              <p className="font-crimson-text text-[#615555]">
                データ分析基盤の構築から 活用方法のコンサルティング
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-3xl font-cormorant text-[#9E7676] text-center mb-8">
              支援実績
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-cormorant text-[#9E7676] mb-4">
                  大手製造業
                </h4>
                <p className="font-crimson-text text-[#615555]">
                  ・基幹システムのクラウド移行
                  <br />
                  ・データ分析基盤の構築
                  <br />
                  ・IoTセンサーデータの活用
                </p>
              </div>
              <div>
                <h4 className="text-xl font-cormorant text-[#9E7676] mb-4">
                  スタートアップ企業
                </h4>
                <p className="font-crimson-text text-[#615555]">
                  ・クラウドネイティブアーキテクチャの設計
                  <br />
                  ・マイクロサービス化支援
                  <br />
                  ・DevOps体制の構築
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
    </div>
  );
}

export default MainComponent;