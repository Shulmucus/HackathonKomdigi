"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function StrategicAlignment() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

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
            "Kebijakan Perangkat Digital Aman",
          ],
        },
        {
          title: "Akelesersi transformasi digital daerah",
          subitems: [
            "Asesmen Kesiapan Digital Daerah",
          ],
        },
        {
          title: "Akselerasi pengembangan dan literasi SDM",
          subitems: [
            "AI Driven Talent Matching Platform",
            "Predictive analytics dashboard for national digital talent mapping",
            "Learning & Career Path Planner",
            "Rekomendasi akselerasi pengembangan masyarakat digital produktif"
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
              <div className="text-left space-y-4 inline-block px-4 w-full">
                {theme.items.map((item, j) => {
                  const itemKey = `${i}-${j}`;
                  const isOpen = openItems[itemKey];

                  return (
                    <div key={itemKey} className="rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => toggleItem(itemKey)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-900 text-[15px] font-semibold leading-relaxed">
                          {item.title}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary-600" : "text-gray-400"}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && item.subitems && item.subitems.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-4 pt-2 bg-gray-50">
                              <ul className="space-y-2">
                                {item.subitems.map((subitem, k) => (
                                  <li key={k} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm leading-relaxed">{subitem}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dukungan Manajemen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 mx-auto max-w-full bg-gray-500/10 rounded-3xl px-10 py-8 text-center"
        >
          <h3 className="text-lg font-extrabold text-gray-900 mb-3 tracking-wide">
            DUKUNGAN MANAJEMEN
          </h3>
          <p className="text-gray-700 text-[15px] md:text-xl leading-relaxed">
            Evaluasi perencanaan, penganggaran dan dampak program; Analitik manajemen talenta pegawai; Audit dan Kepatuhan; Pelayanan Perizinan dan Pengaduan; Verifikasi, Pencocokan dan Penelitian PNBP
          </p>
        </motion.div>
      </div>
    </section>
  );
}
