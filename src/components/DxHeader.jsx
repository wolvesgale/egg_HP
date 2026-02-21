"use client";
import { useState } from "react";
import Link from "next/link";

export default function DxHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-aws-darker/95 backdrop-blur-sm border-b border-aws-orange/20 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/dx-consulting" className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-aws-orange flex items-center justify-center font-bold text-aws-dark text-sm">
            e
          </div>
          <div className="leading-none">
            <span className="text-white font-semibold tracking-wide">egg</span>
            <span className="text-aws-orange ml-2 text-xs font-medium tracking-widest">DX & PRODUCTS</span>
          </div>
        </Link>

        <button
          className="md:hidden text-gray-300 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>

        <nav className={`
          absolute md:relative top-full left-0 w-full md:w-auto
          bg-aws-darker md:bg-transparent
          border-b border-aws-orange/10 md:border-0
          ${isMenuOpen ? "block" : "hidden"} md:block
        `}>
          <ul className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 p-5 md:p-0">
            <li>
              <Link
                href="/dx-consulting"
                className="text-gray-300 hover:text-aws-orange text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/dx-consulting/tenku"
                className="text-gray-300 hover:text-aws-orange text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                TENKU
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ← egg.co.jp
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
