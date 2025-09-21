import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FDF8F5] py-8 px-4 mt-16">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link 
            href="/tokushoho" 
            className="text-[#9E7676] hover:text-[#D4A5A5] underline font-crimson-text mr-4"
          >
            特定商取引法に基づく表記
          </Link>
        </div>
        <p className="font-crimson-text text-[#9E7676]">
          © 2025 株式会社egg. All rights reserved.
        </p>
      </div>
    </footer>
  );
}