import DxHeader from "../../components/DxHeader";
import Link from "next/link";

export const metadata = {
  title: "DX Consulting & Products | 株式会社egg",
  description: "DXコンサルティング・クラウド導入支援・自社プロダクト TENKU | 株式会社egg",
};

export default function DxLayout({ children }) {
  return (
    <div className="min-h-screen bg-aws-dark text-white">
      <DxHeader />
      <div className="min-h-[calc(100vh-80px)]">{children}</div>
      <footer className="bg-aws-darker border-t border-white/5 py-8 px-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-aws-orange flex items-center justify-center text-aws-dark font-bold text-xs">
              e
            </div>
            <span>© 2025 株式会社egg</span>
          </div>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-gray-300 transition-colors">egg.co.jp</Link>
            <Link href="/tokushoho" className="hover:text-gray-300 transition-colors">特定商取引法</Link>
            <Link href="/#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
