import Link from "next/link";
import { Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1A2035] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/HACKATHON PUTIH HORIZONTAL.png" 
                alt="Hackathon Komdigi 2026 Logo" 
                width={300} 
                height={80}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Mewujudkan pemerintahan digital yang cerdas, efisien, dan responsif terhadap kebutuhan masyarakat melalui inovasi berbasis AI.
            </p>
            <div className="flex items-center gap-4">
              <Image 
                src="/djed-komdigi-logo.svg" 
                alt="Logo DJED Komdigi" 
                width={200} 
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Tentang Program
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Linimasa
                </Link>
              </li>
              <li>
                <Link href="#requirements" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Persyaratan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Pusat Bantuan</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#faq" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 Kementerian Komunikasi dan Digital Republik Indonesia. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
