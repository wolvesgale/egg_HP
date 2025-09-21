"use client";
import React from "react";

function MainComponent() {
  return (
    <div>
      <section id="business" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-cormorant text-[#9E7676] text-center mb-12">
            Our Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDF8F5] p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-store text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                EC運営管理
              </h3>
              <p className="font-crimson-text text-[#615555] mb-6">
                オンラインストアの構築から運営まで、包括的なECソリューションを提供。
                お客様のブランドに最適化されたEC戦略を実現します。
              </p>
              <a
                href="/ec-management"
                className="inline-block bg-[#D4A5A5] text-white py-2 px-6 rounded-lg hover:bg-[#9E7676] transition-colors font-cormorant"
              >
                詳しく見る
              </a>
            </div>

            <div className="bg-[#FDF8F5] p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-flask text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                調香/香料販売
              </h3>
              <p className="font-crimson-text text-[#615555] mb-6">
                独自の調香技術と厳選された香料のセレクション。
                心地よい香りで特別な空間を演出します。
              </p>
              <a
                href="/fragrance"
                className="inline-block bg-[#D4A5A5] text-white py-2 px-6 rounded-lg hover:bg-[#9E7676] transition-colors font-cormorant"
              >
                詳しく見る
              </a>
            </div>

            <div className="bg-[#FDF8F5] p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                <i className="fas fa-laptop-code text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                DXコンサルタント
              </h3>
              <p className="font-crimson-text text-[#615555] mb-6">
                デジタル技術を活用した業務改革と効率化。
                お客様のビジネスの未来をデザインします。
              </p>
              <a
                href="/dx-consulting"
                className="inline-block bg-[#D4A5A5] text-white py-2 px-6 rounded-lg hover:bg-[#9E7676] transition-colors font-cormorant"
              >
                詳しく見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl md:text-4xl font-cormorant text-[#9E7676] text-center mb-12">
            Contact Us
          </h2>
          <form
            action="mailto:info@eggs.email"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="お名前"
                className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676]"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676]"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="お問い合わせ内容"
                rows="5"
                className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4A5A5] text-white py-3 rounded-lg hover:bg-[#9E7676] transition-colors font-cormorant text-lg"
            >
              送信する
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;