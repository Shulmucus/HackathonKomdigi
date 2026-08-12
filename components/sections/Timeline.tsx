"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  { 
    title: "Sosialisasi dan Pendaftaran", 
    date: "24 Agustus – 10 September", 
    tag: "Mulai Bersinar",
    desc: "Publikasi melalui microsite, Portal Komdigi dan pemberitahuan kepada Satuan Kerja melalui Nota Dinas tentang pembukaan kegiatan Hackathon" 
  },
  { 
    title: "Penutupan Pendaftaran", 
    date: "10 September", 
    tag: "Persiapan Tim",
    desc: "Penyusunan tim peserta pelatihan Hackathon termasuk pembentukan tim bagi pendaftar individu" 
  },
  { 
    title: "Training Manajerial", 
    date: "16 September", 
    tag: "Kuasai AI",
    desc: "1. Perkembangan kecerdasan artifisial\n2. Fungsi AI di komputasi awan\n3. Metode identifikasi kebutuhan unit kerja" 
  },
  { 
    title: "Training AI Beginner", 
    date: "17 September", 
    tag: "Kuasai AI",
    desc: "1. Prompt Engineering dan Praktek\n2. Semantic Search dan Praktek" 
  },
  { 
    title: "Training AI Intermediate", 
    date: "24 September", 
    tag: "Kuasai AI",
    desc: "1. Best Practice Orkestrasi AI dan Prakteknya\n2. Analisis data dan Prakteknya serta Pengenalan Machine learning dan Praktek" 
  },
  { 
    title: "Training AI Advanced", 
    date: "1 Oktober", 
    tag: "Kuasai AI",
    desc: "1. Specification-Driven development (AI Asisted Coding)\n2. AI Agent Governance Platform\n3. AI-Driven Development with data-as-aservice Framework" 
  },
  { 
    title: "Batas akhir pengumpulan Proposal", 
    date: "4 Oktober", 
    tag: "Ajukan Ide Anda",
    desc: "Batas akhir finalisasi proposal ide inovasi dari para peserta."
  },
  { 
    title: "Seleksi Top 6", 
    date: "6 Oktober", 
    tag: "Tahap Seleksi",
    desc: "Seleksi proposal terbaik untuk melaju ke tahap main event hackathon." 
  },
  { 
    title: "Pengumuman Finalis", 
    date: "7 Oktober", 
    tag: "Tahap Seleksi",
    desc: "Pengumuman Top 6 proposal untuk peserta main event hackathon (3 tim nominasi AWS, 3 tim nominasi Alibaba)." 
  },
  { 
    title: "Finalist Briefing", 
    date: "9 Oktober", 
    tag: "Persiapan Final",
    desc: "Pengarahan teknis, aturan main, kriteria penilaian, dan pembagian jadwal mentoring untuk para finalis sebelum kompetisi dimulai." 
  },
  { 
    title: "Mentoring 1-on-1", 
    date: "12–16 Oktober", 
    tag: "Konsultasi",
    desc: "Sesi konsultasi mendalam pematangan produk, arsitektur AI, dan persiapan presentasi finalis bersama mentor." 
  },
  { 
    title: "Main Hackathon", 
    date: "19–20 Oktober", 
    tag: "Puncak Kolaborasi",
    desc: "Hari 1: Ideasi dan Pengembangan\nHari 2: Pembuatan Prototipe dan Presentasi." 
  }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-24 relative bg-primary-700 overflow-hidden">
      {/* Geometric Decorations */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] border-[40px] border-accent-gold/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-80 h-80 border-[20px] border-white/5 rotate-45 pointer-events-none" />
      <div className="absolute top-10 right-20 w-40 h-40 bg-accent-red/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
              Linimasa Komdigi 2026
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Jangan sampai lewatkan momen penting dalam perjalanan inovasi — dari pendaftaran hingga puncak acara.
            </motion.p>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-2 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-gold to-primary-500 md:-translate-x-1/2 rounded-full z-0 origin-top shadow-[0_0_15px_rgba(255,190,0,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 relative">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative grid w-full items-start gap-4 grid-cols-[20px_minmax(0,1fr)] md:grid-cols-[minmax(0,45%)_auto_minmax(0,45%)]"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    className="absolute left-[-3.5px] top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-accent-gold rounded-full border-4 border-primary-700 shadow-md z-10" 
                  />

                  {/* Card content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={
                      isEven
                        ? "col-start-2 justify-self-start w-full md:col-start-3 md:justify-self-end md:w-1/2 md:text-right relative z-20"
                        : "col-start-2 justify-self-start w-full md:col-start-1 md:w-1/2 text-left relative z-20"
                    }
                  >
                    <div className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent-gold/50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                      {/* Subtle hover background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                              ★
                            </span>
                            <span>{event.tag}</span>
                          </div>
                          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 font-bold text-sm border border-primary-100">
                            {event.date}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
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
