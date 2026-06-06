"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary-700">
      {/* Authentic tech pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary-600/10 blur-[100px] pointer-events-none" />

      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-40 z-0">
        <Image 
          src="/Spread.svg" 
          alt="Background Spread Decoration" 
          fill
          className="object-contain md:object-cover object-center scale-[2] sm:scale-150 md:scale-100"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <Image 
            src="/hackathon-logo-vertikal.png" 
            alt="Hackathon Komdigi 2026 Logo" 
            width={240} 
            height={320}
            className="h-40 md:h-56 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sr-only"
        >
          HACKATHON KOMDIGI 2026
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Seluruh solusi dan inovasi yang tercipta dari Hackathon Internal KOMDIGI diharapkan dapat diimplementasikan secara nyata melalui sebuah Dashboard Decision Support yang mengintegrasikan berbagai use case berbasis AI.
          <br className="hidden md:block mt-2" />
          Hackathon Internal KOMDIGI bukan sekadar kompetisi, melainkan merupakan bagian integral dari strategi besar KOMDIGI dalam mewujudkan pemerintahan digital yang cerdas, efisien, dan responsif terhadap kebutuhan masyarakat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#"
            className="w-full sm:w-auto flex items-center justify-center h-12 px-8 rounded-lg bg-accent-gold hover:bg-yellow-400 text-base font-extrabold text-primary-700 transition-colors group shadow-lg shadow-accent-gold/20"
          >
            Daftar Hackathon
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto flex items-center justify-center h-12 px-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 text-base font-semibold text-white transition-colors group"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Booklet
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
