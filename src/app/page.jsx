"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const newVisibleSections = new Set();
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          newVisibleSections.add(section.id);
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期チェック

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F5] relative overflow-hidden">
      {/* マウス追跡用の黄色い円 */}
      <div 
        className="fixed w-8 h-8 bg-yellow-400 rounded-full pointer-events-none z-50 opacity-30 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'scale(1)',
        }}
      />
      
      {/* 桜の花びらのコンテナ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="sakura-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* かわいらしい卵のロゴマーク */}
              <div className="w-10 h-10 rounded-full bg-[#D4A5A5] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#FFE5E5]" />
                </div>
              </div>
              <h1 className="text-2xl font-cormorant text-[#D4A5A5]">
                株式会社egg
              </h1>
            </div>
          </div>

          <button
            className="md:hidden text-[#9E7676]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>

          <nav
            className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li>
                <a
                  href="#about"
                  className="text-[#9E7676] hover:text-[#D4A5A5] font-cormorant"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/new-page"
                  className="text-[#9E7676] hover:text-[#D4A5A5] font-cormorant"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  className="text-[#9E7676] hover:text-[#D4A5A5] font-cormorant"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#9E7676] hover:text-[#D4A5A5] font-cormorant"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="pt-24 md:pt-32 px-4 relative overflow-hidden">
        <div className="container mx-auto py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* 左側のテキスト */}
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-serif text-[#9E7676] mb-4 animate-fade-in-up leading-tight">
                All Starts<br />
                With Eggs
              </h1>
              <h2 className="text-2xl md:text-3xl font-cormorant text-[#9E7676] mb-6 animate-fade-in-up-delay">
                Welcome to egg
              </h2>
              <p className="text-lg md:text-xl font-crimson-text text-[#615555] max-w-lg animate-fade-in-up-delay-2">
                Crafting beautiful experiences through fragrance and digital
                excellence
              </p>
            </div>
            
            {/* 右側の卵の画像 */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                <img 
                  src="/images/egg-simple.svg" 
                  alt="Egg" 
                  className="w-64 h-48 animate-float"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="yellow-circle group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 背景装飾 */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#D4A5A5] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#9E7676] rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-[#D4A5A5] rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-[#9E7676] rounded-full opacity-50 animate-pulse delay-500"></div>
      </section>

      <section id="business" className={`py-16 px-4 relative transition-all duration-1000 ${visibleSections.has('business') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://ucarecdn.com/1d34455e-d54c-45fd-b869-ff01a0d6e1f8/-/format/auto/")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.15",
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-cormorant text-[#9E7676] text-center mb-12">
            Our Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDF8F5] p-8 rounded-lg text-center relative group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-10" />
              <div className="relative z-20">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                  <i className="fas fa-store text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                  EC運営管理
                </h3>
                <p className="font-crimson-text text-[#615555] mb-4">
                  オンラインストアの構築から運営まで、包括的なECソリューションを提供。
                  お客様のブランドに最適化されたEC戦略を実現します。
                </p>
                <a
                  href="/ec-management"
                  className="hidden group-hover:inline-block text-white font-cormorant text-lg transition-all duration-300"
                >
                  詳細ページへ
                </a>
              </div>
            </div>

            <div className="bg-[#FDF8F5] p-8 rounded-lg text-center relative group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-10" />
              <div className="relative z-20">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                  <i className="fas fa-flask text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                  調香/香料販売
                </h3>
                <p className="font-crimson-text text-[#615555] mb-4">
                  独自の調香技術と厳選された香料のセレクション。
                  心地よい香りで特別な空間を演出します。
                </p>
                <a
                  href="/fragrance"
                  className="hidden group-hover:inline-block text-white font-cormorant text-lg transition-all duration-300"
                >
                  詳細ページへ
                </a>
              </div>
            </div>

            <div className="bg-[#FDF8F5] p-8 rounded-lg text-center relative group">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg z-10" />
              <div className="relative z-20">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#D4A5A5] rounded-full flex items-center justify-center">
                  <i className="fas fa-laptop-code text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-cormorant text-[#9E7676] mb-4">
                  DXコンサルタント
                </h3>
                <p className="font-crimson-text text-[#615555] mb-4">
                  デジタル技術を活用した業務改革と効率化。
                  お客様のビジネスの未来をデザインします。
                </p>
                <a
                  href="/dx-consulting"
                  className="hidden group-hover:inline-block text-white font-cormorant text-lg transition-all duration-300"
                >
                  詳細ページへ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`py-16 px-4 bg-white transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl md:text-4xl font-cormorant text-[#9E7676] text-center mb-12">
            Contact Us
          </h2>
          <form 
            className="space-y-6"
            action="mailto:info@eggs.email"
            method="post"
            encType="text/plain"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const subject = `【HP問い合わせ】_${name}`;
              const body = `名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`;
              
              const mailtoLink = `mailto:info@eggs.email?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.location.href = mailtoLink;
            }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4A5A5] text-white py-3 rounded-lg hover:bg-[#9E7676] transition-colors font-cormorant text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section id="company" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-cormorant text-[#9E7676] text-center mb-12">
            Company Profile
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row">
                <span className="font-cormorant text-[#9E7676] w-32">
                  Company
                </span>
                <span className="font-crimson-text text-[#615555]">
                  株式会社egg
                </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <span className="font-cormorant text-[#9E7676] w-32">CEO</span>
                <span className="font-crimson-text text-[#615555]">
                  前田 拡夢
                </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <span className="font-cormorant text-[#9E7676] w-32">
                  Location
                </span>
                <span className="font-crimson-text text-[#615555]">
                  〒661-0977
                  <br />
                  兵庫県尼崎市竹谷町3丁目89-4
                </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <span className="font-cormorant text-[#9E7676] w-32">
                  Founded
                </span>
                <span className="font-crimson-text text-[#615555]">2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        
        .yellow-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0) 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
        
        section {
          animation: fadeIn 0.8s ease-out;
        }

        /* 桜の花びらのスタイル */
        .sakura-petal {
          position: absolute;
          width: 15px;
          height: 15px;
          background: #FFE5E5;
          border-radius: 150% 0 150% 0;
          animation: falling linear infinite;
          transform-origin: center;
          opacity: 0.5;
        }

        @keyframes falling {
          0% {
            top: -10%;
            transform: rotate(0deg) translateX(0);
          }
          15% {
            transform: rotate(45deg) translateX(-100px);
          }
          30% {
            transform: rotate(90deg) translateX(100px);
          }
          45% {
            transform: rotate(135deg) translateX(-80px);
          }
          60% {
            transform: rotate(180deg) translateX(80px);
          }
          75% {
            transform: rotate(225deg) translateX(-60px);
          }
          90% {
            transform: rotate(270deg) translateX(40px);
          }
          100% {
            top: 110%;
            transform: rotate(360deg) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;