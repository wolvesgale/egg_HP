"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#business", label: "Business" },
  { href: "/dx-consulting", label: "DX / TENKU" },
  { href: "/#company", label: "Company" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 rounded-full bg-egg-pink flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[#FFE5E5]" />
            </div>
          </div>
          <span className="text-xl font-cormorant text-egg-rose tracking-wide">株式会社egg</span>
        </Link>

        <button
          className="md:hidden text-egg-rose p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>

        <nav
          className={`
            absolute md:relative top-full left-0 w-full md:w-auto
            bg-white/95 md:bg-transparent
            shadow-md md:shadow-none
            ${isMenuOpen ? "block" : "hidden"} md:block
          `}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 p-5 md:p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-egg-rose hover:text-egg-pink font-cormorant text-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
