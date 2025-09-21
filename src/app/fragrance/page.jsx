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
            調香/香料販売サービス
          </h2>
          <p className="text-xl font-crimson-text text-[#615555] text-center max-w-3xl mx-auto mb-16">
            世界であなただけの香りとの出会いをサポート
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://ucarecdn.com/036c49c3-2cb2-4c84-aa9e-70a054290081/-/format/auto/"
                alt="エレガントな香水デザイン"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-vial text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                オリジナル調香
              </h3>
              <p className="font-crimson-text text-[#615555]">
                お客様の想いを香りで表現。 世界に一つだけの香りを創造します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-box-open text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                厳選された香料
              </h3>
              <p className="font-crimson-text text-[#615555]">
                世界中から集めた最高品質の 天然香料をご提供します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-hands-helping text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                コンサルティング
              </h3>
              <p className="font-crimson-text text-[#615555]">
                空間演出やブランディングに 最適な香りをご提案します。
              </p>
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