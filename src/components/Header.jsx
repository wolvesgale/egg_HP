"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#business",      label: "Business" },
  { href: "/dx-consulting",  label: "DX / TENKU" },
  { href: "/fragrance",      label: "Fragrance" },
  { href: "/#company",       label: "Company" },
  { href: "/#contact",       label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-egg-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-full bg-egg-pink/20 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-1 rounded-full bg-egg-pink/40" />
            <div className="absolute inset-2 rounded-full bg-egg-pink flex items-center justify-center">
              <span className="font-cormorant text-white text-base leading-none select-none">e</span>
            </div>
          </div>
          <div className="leading-none">
            <span className={`font-cormorant text-xl tracking-wide transition-colors duration-300 ${scrolled ? "text-egg-rose" : "text-egg-rose"}`}>
              株式会社egg
            </span>
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-egg-rose p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Desktop nav */}
        <nav
          className={`
            absolute md:relative top-full left-0 w-full md:w-auto
            ${scrolled ? "bg-white/95" : "bg-white/90"} md:bg-transparent
            shadow-egg-md md:shadow-none
            backdrop-blur-md md:backdrop-blur-none
            border-t border-egg-pink/10 md:border-0
            ${isMenuOpen ? "block" : "hidden"} md:block
            transition-all
          `}
        >
          <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-0 p-5 md:p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative block px-4 py-2 font-cormorant text-lg text-egg-rose/80 hover:text-egg-rose transition-colors duration-200 group"
                >
                  {label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-egg-pink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
