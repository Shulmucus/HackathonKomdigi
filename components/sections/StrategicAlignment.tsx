"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, ShieldCheck } from "lucide-react";

export function StrategicAlignment() {
  const themes = [
    {
      icon: <Globe className="w-16 h-16 text-gray-400 mb-6" strokeWidth={1.5} />,
      title: "TERHUBUNG",
      items: [
        "Optimalisasi Jaringan",
        "Akselerasi penyediaan infrastruktur dan sumber daya untuk layanan khusus dan penyiaran",
        "Keterpaduan infrastruktur dan aplikasi pemerintah digital"
      ]
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-gray-400 mb-6" strokeWidth={1.5} />,
      title: "TUMBUH",
      items: [
        "Peningkatan Ekosistem Digital",
        "Pertumbuhan Industri",
        "Akselerasi transformasi digital daerah",
        "Akselerasi pengembangan dan literasi SDM"
      ]
    },
    {
      icon: <ShieldCheck className="w-16 h-16 text-gray-400 mb-6" strokeWidth={1.5} />,
      title: "TERJAGA",
      items: [
        "Pengawasan ruang digital",
        "Ruang digital terpercaya",
        "Peningkatan komunikasi publik"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Geometric Decorations */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-10 w-64 h-64 border-[24px] border-accent-gold/10 rotate-12 pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-32 h-32 border-8 border-accent-red/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Kompetisi inovasi internal bagi ASN Komdigi untuk menciptakan solusi nyata melalui Dashboard Decision Support terintegrasi berbasis AI.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {themes.map((theme, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {theme.icon}
              <h3 className="text-2xl font-bold text-gray-500 mb-6 tracking-wide">{theme.title}</h3>
              <ul className="text-left space-y-4 inline-block px-4">
                {theme.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                    <span className="text-gray-900 text-[15px] font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
