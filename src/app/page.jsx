"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Section({ id, className, children }) {
  const [ref, visible] = useVisible();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full p-3 border border-egg-pink/50 rounded-lg focus:outline-none focus:border-egg-rose bg-white/70 text-egg-brown placeholder-egg-brown/40 font-crimson-text text-lg transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        placeholder="お名前 *"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="メールアドレス *"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputClass}
      />
      <textarea
        placeholder="お問い合わせ内容 *"
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass}
      />

      {status === "success" && (
        <p className="text-green-600 font-crimson-text text-center">
          送信が完了しました。ありがとうございます。
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 font-crimson-text text-center">
          送信に失敗しました。時間をおいてお試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-egg-pink text-white py-3 rounded-lg hover:bg-egg-rose transition-colors font-cormorant text-xl tracking-wide disabled:opacity-60"
      >
        {status === "loading" ? "送信中..." : "Send Message"}
      </button>
    </form>
  );
}

const businessCards = [
  {
    icon: "fa-store",
    title: "EC運営管理",
    description:
      "Amazon・メルカリで展開中。ブランドストーリーに寄り添った出品・運営サポートを提供します。",
    href: "/ec-management",
  },
  {
    icon: "fa-flask",
    title: "調香 / 香料販売",
    description:
      "オリジナル調香から厳選香料の販売まで。電子書籍・オンライン教室も順次展開予定。",
    href: "/fragrance",
  },
  {
    icon: "fa-laptop-code",
    title: "DX コンサルティング",
    description:
      "外資大手クラウド〜スタートアップ経験のあるコンサルタントが業務改善をお手伝い。自社プロダクト TENKU も提供中。",
    href: "/dx-consulting",
    highlight: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-egg-cream">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-28 md:pt-36 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-up">
            <p className="text-egg-pink font-crimson-text tracking-widest mb-3 text-sm">
              ALL STARTS WITH EGGS
            </p>
            <h1 className="text-5xl md:text-7xl font-cormorant text-egg-rose leading-tight mb-6">
              Welcome<br />to egg
            </h1>
            <p className="font-crimson-text text-egg-brown text-xl leading-relaxed max-w-md">
              EC・フレグランス・DXの３軸で、<br />
              ビジネスの可能性を広げます。
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#business"
                className="inline-block bg-egg-pink text-white font-cormorant text-lg px-7 py-3 rounded-full hover:bg-egg-rose transition-colors"
              >
                Our Business
              </a>
              <Link
                href="/dx-consulting"
                className="inline-block border border-egg-pink text-egg-rose font-cormorant text-lg px-7 py-3 rounded-full hover:bg-egg-pink hover:text-white transition-colors"
              >
                TENKU →
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-egg-pink/20 to-[#FFE5E5]/40 flex items-center justify-center animate-float">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-white to-egg-pink/30 flex items-center justify-center shadow-lg">
                  <span className="font-cormorant text-egg-rose text-7xl md:text-8xl leading-none select-none">
                    e
                  </span>
                </div>
              </div>
              {/* 装飾ドット */}
              <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-egg-pink/40" />
              <div className="absolute bottom-4 -left-6 w-3 h-3 rounded-full bg-egg-rose/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Business ── */}
      <Section id="business" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant text-egg-rose text-center mb-14">
            Our Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessCards.map(({ icon, title, description, href, highlight }) => (
              <Link key={href} href={href}>
                <div
                  className={`
                    group relative bg-white rounded-2xl p-8 shadow-sm
                    hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full
                    ${highlight ? "ring-1 ring-egg-pink/30" : ""}
                  `}
                >
                  {highlight && (
                    <span className="absolute top-4 right-4 text-xs text-egg-pink font-crimson-text border border-egg-pink/40 px-2 py-0.5 rounded-full">
                      TENKU 提供中
                    </span>
                  )}
                  <div className="w-14 h-14 mb-6 bg-egg-cream rounded-xl flex items-center justify-center group-hover:bg-egg-pink/20 transition-colors">
                    <i className={`fas ${icon} text-egg-rose text-2xl`} />
                  </div>
                  <h3 className="text-2xl font-cormorant text-egg-rose mb-3">{title}</h3>
                  <p className="font-crimson-text text-egg-brown leading-relaxed text-lg">
                    {description}
                  </p>
                  <div className="mt-5 text-egg-pink font-crimson-text text-sm group-hover:translate-x-1 transition-transform inline-block">
                    詳しく見る →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ── About ── */}
      <Section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-cormorant text-egg-rose mb-8">About egg</h2>
          <p className="font-crimson-text text-egg-brown text-xl leading-loose mb-6">
            株式会社eggは、フレグランス・ECビジネス・デジタルトランスフォーメーションの
            3つの領域で事業を展開するスタートアップです。
          </p>
          <p className="font-crimson-text text-egg-brown/80 text-lg leading-loose">
            外資大手パブリッククラウドやスタートアップ企業での経験を持つメンバーが、
            各分野の専門知識を掛け合わせ、お客様のビジネスの可能性を広げるお手伝いをします。
          </p>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-4xl font-cormorant text-egg-rose text-center mb-3">
            Contact Us
          </h2>
          <p className="font-crimson-text text-egg-brown/70 text-center mb-10">
            お気軽にお問い合わせください
          </p>
          <ContactForm />
        </div>
      </Section>

      {/* ── Company ── */}
      <Section id="company" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-cormorant text-egg-rose text-center mb-12">
            Company Profile
          </h2>
          <div className="divide-y divide-egg-pink/20">
            {[
              { label: "会社名", value: "株式会社egg" },
              { label: "代表取締役", value: "前田 拡夢" },
              { label: "所在地", value: "〒661-0977 兵庫県尼崎市竹谷町3丁目89-4" },
              { label: "設立", value: "2025年" },
              { label: "Email", value: "info@eggs.email", isEmail: true },
            ].map(({ label, value, isEmail }) => (
              <div key={label} className="flex flex-col sm:flex-row py-4 gap-2">
                <span className="sm:w-36 font-cormorant text-egg-rose shrink-0">{label}</span>
                {isEmail ? (
                  <a href={`mailto:${value}`} className="font-crimson-text text-egg-brown hover:text-egg-rose text-lg transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="font-crimson-text text-egg-brown text-lg">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
