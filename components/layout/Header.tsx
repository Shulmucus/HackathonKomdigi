"use client";

import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-700/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <Image 
              src="/djed-logo.svg" 
              alt="DJED Komdigi Logo" 
              width={200} 
              height={60}
              className="h-8 md:h-10 w-auto object-contain"
            />
            <div className="hidden lg:flex flex-col border-l border-white/20 pl-4">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest leading-tight">
                Kementerian Komunikasi
              </span>
              <span className="text-[11px] font-bold text-white uppercase tracking-widest leading-tight">
                dan Digital
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
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

        {/* Right: CTA Buttons & Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-4">
          <Link
            href="#"
            className="hidden lg:flex items-center justify-center h-10 px-6 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-semibold text-white transition-colors"
          >
            Download Booklet
          </Link>
          <Link
            href="#"
            className="hidden sm:flex items-center justify-center h-10 px-6 rounded-lg bg-accent-gold hover:bg-yellow-400 text-sm font-extrabold text-primary-700 transition-colors group shadow-lg shadow-accent-gold/20"
          >
            Daftar <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                  Tentang
                </Link>
                <Link href="#timeline" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                  Linimasa
                </Link>
                <Link href="#requirements" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                  Persyaratan
                </Link>
                <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </nav>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  href="#"
                  className="flex items-center justify-center h-12 w-full rounded-lg bg-accent-gold hover:bg-yellow-400 text-base font-extrabold text-primary-700 transition-colors"
                >
                  Daftar Hackathon
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center h-12 w-full rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-base font-semibold text-white transition-colors"
                >
                  Download Booklet
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
