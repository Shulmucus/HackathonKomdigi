"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  {
    title: "Pendaftaran & Publikasi",
    date: "15 Juni - 3 Juli",
    tag: "Mulai Bersinar",
    desc: "Daftar sekarang dan sebarkan berita bahwa era AI di pemerintahan resmi dimulai. Ini saatnya semua unit bergerak bersama.",
  },
  {
    title: "Kick Off Hackathon",
    date: "14 Juli",
    tag: "Energi Awal",
    desc: "Buka acara dengan inspirasi, tantangan nyata, dan semangat kolaborasi untuk menciptakan solusi yang berdampak.",
  },
  {
    title: "Rangkaian Pelatihan AI",
    date: "28 Juli - 11 Agustus",
    tag: "Kuasai AI",
    desc: "Ikuti sesi praktis dari pemula ke mahir dengan studi kasus pemerintahan yang langsung dapat diterapkan.",
  },
  {
    title: "Batas Akhir Pengumpulan Proposal",
    date: "21 Agustus",
    tag: "Ajukan Ide Anda",
    desc: "Kirim proposal inovatif berbasis AI Anda — kesempatan untuk mempengaruhi transformasi digital Komdigi.",
  },
  {
    title: "Main Hackathon & Pengumuman Pemenang",
    date: "21 - 22 September",
    tag: "Puncak Kolaborasi",
    desc: "Buat prototipe, presentasikan solusi, dan rayakan tim yang berhasil membawa perubahan nyata.",
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-24 relative bg-gray-50 overflow-hidden">
      {/* Geometric Decorations */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] border-[40px] border-accent-gold/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-80 h-80 border-[20px] border-primary-500/5 rotate-45 pointer-events-none" />
      <div className="absolute top-10 right-20 w-40 h-40 bg-accent-red/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
              Linimasa Komdigi 2026
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            ></motion.p>
              Jangan sampai lewatkan momen penting dalam perjalanan inovasi — dari pendaftaran hingga puncak acara.
          {/* Animated Glowing Progress Line */}
          <motion.div 
            className="absolute left-[24px] md:left-1/2 top-4 w-1 bg-gradient-to-b from-accent-gold to-primary-500 md:-translate-x-1/2 rounded-full z-0 origin-top shadow-[0_0_15px_rgba(255,190,0,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row w-full`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    className="absolute left-[24px] md:left-1/2 w-6 h-6 bg-accent-gold rounded-full md:-translate-x-1/2 -translate-x-[10px] border-4 border-white shadow-md z-10" 
                  />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                    }`}
                  >
                    <div className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent-gold/50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                      {/* Subtle hover background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-3 text-sm font-semibold text-primary-700">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                            ★
                          </span>
                          <span>{event.tag}</span>
                        </div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 font-bold text-sm mb-4 border border-primary-100">
                          {event.date}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
