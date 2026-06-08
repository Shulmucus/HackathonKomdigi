"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StrategicAlignment() {
  const themes = [
    {
      icon: "/terhubung.svg",
      title: "TERHUBUNG",
      items: [
        {
          title: "Optimalisasi Jaringan Telekomunikasi",
          subitems: [
            "Pemetaan QoS dan Cakupan Jaringan Nasional",
            "Optimalisasi Spektrum Frekuensi Radio",
          ],
        },
        {
          title: "Akselerasi penyediaan infrastruktur dan sumber daya untuk layanan khusus dan penyiaran",
          subitems: [
            "Optimalisasi penyediaan infrastruktur layanan khusus dan penyiaran",
          ],
        },
        {
          title: "Keterpaduan infrastruktur dan aplikasi pemerintah digital",
          subitems: [
            "Analitik SPBE",
            "Analitik aplikasi",
          ],
        },
      ],
    },
    {
      icon: "/Tumbuh.svg",
      title: "TUMBUH",
      items: [
        {
          title: "Peningkatan Ekosistem Digital",
          subitems: [
            "Evaluasi IGRS",
            "Pemetaan lokasi prioritas pemanfaatan teknologi baru",
          ],
        },
        {
          title: "Pertumbuhan Industri",
          subitems: [
            "Kesehatan Industri Telekomunikasi",
            "Kesehatan Industri Pos, Logistik & Penyiaran",
          ],
        },
        {
          title: "Kebijakan Perangkat Digital Aman",
          subitems: [
            "Akelesersi transformasi digital daerah",
            "Asesmen Kesiapan Digital Daerah",
          ],
        },
        {
          title: "Akselerasi pengembangan dan literasi SDM",
          subitems: [
            "AI Driven Talent Matching Platform",
            "Predictive analytics dashboard for national digital talent mapping",
          ],
        },
        {
          title: "Learning & Career Path Planner",
          subitems: [
            "Rekomendasi akselerasi pengembangan masyarakat digital produktif",
          ],
        },
      ],
    },
    {
      icon: "/terjaga.svg",
      title: "TERJAGA",
      items: [
        {
          title: "Pengawasan ruang digital",
          subitems: [
            "Deteksi Konten Negatif",
            "Prioritas Aduan konten negatif",
          ],
        },
        {
          title: "Ruang digital terpercaya",
          subitems: [
            "Verifikasi Kepatuhan Profil Risiko PSE",
          ],
        },
        {
          title: "Peningkatan komunikasi publik",
          subitems: [
            "Analisis Sentimen Publik secara Real-Time",
            "Produksi & Diseminasi Konten Berbasis KA",
          ],
        },
      ],
    },
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
              <Image 
                src={theme.icon}
                alt={theme.title}
                width={64}
                height={64}
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-500 mb-6 tracking-wide">{theme.title}</h3>
              <ul className="text-left space-y-5 inline-block px-4">
                {theme.items.map((item, j) => (
                  <li key={j} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-900 text-[15px] font-semibold leading-relaxed">{item.title}</span>
                    </div>
                    {item.subitems && item.subitems.length > 0 && (
                      <ul className="space-y-2 ml-8">
                        {item.subitems.map((subitem, k) => (
                          <li key={k} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">{subitem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
