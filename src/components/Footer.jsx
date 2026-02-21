import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-egg-cream border-t border-egg-pink/20 py-10 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-7 h-7 rounded-full bg-egg-pink flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFE5E5]" />
            </div>
          </div>
          <span className="font-cormorant text-egg-rose text-lg">株式会社egg</span>
        </div>
        <div className="mb-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/#business" className="text-egg-rose/70 hover:text-egg-rose text-sm font-crimson-text transition-colors">
            Business
          </Link>
          <Link href="/dx-consulting" className="text-egg-rose/70 hover:text-egg-rose text-sm font-crimson-text transition-colors">
            DX / TENKU
          </Link>
          <Link href="/#company" className="text-egg-rose/70 hover:text-egg-rose text-sm font-crimson-text transition-colors">
            Company
          </Link>
          <Link href="/#contact" className="text-egg-rose/70 hover:text-egg-rose text-sm font-crimson-text transition-colors">
            Contact
          </Link>
          <Link href="/tokushoho" className="text-egg-rose/70 hover:text-egg-rose text-sm font-crimson-text transition-colors">
            特定商取引法に基づく表記
          </Link>
        </div>
        <p className="text-egg-brown/60 text-sm font-crimson-text">
          © 2025 株式会社egg. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
