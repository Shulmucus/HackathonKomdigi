import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/djed-logo.svg" 
              alt="DJED Komdigi Logo" 
              width={200} 
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex flex-none items-center justify-center gap-8">
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Tentang
          </Link>
          <Link href="#timeline" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Linimasa
          </Link>
          <Link href="#requirements" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Persyaratan
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right: CTA Buttons */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <Link
            href="#"
            className="hidden lg:flex items-center justify-center h-10 px-6 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-colors"
          >
            Download Booklet
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center h-10 px-6 rounded-lg bg-primary-600 hover:bg-primary-500 text-sm font-semibold text-white transition-colors group"
          >
            Daftar <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  );
}
