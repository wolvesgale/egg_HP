import Link from 'next/link';

const footerLinks = [
  { href: "/#business",      label: "Business" },
  { href: "/dx-consulting",  label: "DX / TENKU" },
  { href: "/ec-management",  label: "EC 運営" },
  { href: "/wagashi",        label: "Wagashi" },
  { href: "/#company",       label: "Company" },
  { href: "/#contact",       label: "Contact" },
  { href: "/tokushoho",      label: "特定商取引法" },
];

export default function Footer() {
  return (
    <footer className="bg-egg-dark text-white/60 pt-16 pb-8 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-egg-pink/30 to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-egg-rose/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-egg-pink/5 pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-egg-pink/20" />
                <div className="absolute inset-1 rounded-full bg-egg-pink/40" />
                <div className="absolute inset-2 rounded-full bg-egg-pink flex items-center justify-center">
                  <span className="font-cormorant text-white text-base leading-none select-none">e</span>
                </div>
              </div>
              <span className="font-cormorant text-2xl text-white tracking-wide">株式会社egg</span>
            </div>
            <p className="font-crimson-text text-white/30 text-xs tracking-widest uppercase">
              All starts with eggs.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-crimson-text text-white/30 text-sm">兵庫県尼崎市竹谷町3丁目89-4</p>
            <a href="mailto:info@eggs.email" className="font-crimson-text text-white/40 hover:text-egg-pink text-sm transition-colors">
              info@eggs.email
            </a>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-10" />

        <nav className="flex flex-wrap gap-x-6 gap-y-3 mb-12">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-crimson-text text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-6 border-t border-white/5">
          <p className="font-crimson-text text-white/30 text-xs">
            © 2025 株式会社egg. All rights reserved.
          </p>
          <p className="font-crimson-text text-white/20 text-xs">
            EC · DX Consulting · Wagashi
          </p>
        </div>
      </div>
    </footer>
  );
}
