"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Zap } from "lucide-react";

export function StrategicAlignment() {
  const objectives = [
    {
      icon: <Target className="w-6 h-6 text-primary-400" />,
      title: "Peta Jalan Transformasi",
      description: "Implementasi langsung dari peta jalan transformasi digital Komdigi dalam Rencana Strategis 2025-2029."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary-400" />,
      title: "Indonesia Emas 2045",
      description: "Menjadi landasan yang akan menentukan arah keberhasilan dalam mencapai Indonesia Emas 2045."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-400" />,
      title: "Fondasi Digital",
      description: "Setiap solusi diarahkan untuk memperkuat fondasi transformasi digital di pemerintahan."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Sub-Tema & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Arah Strategis
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Hackathon Internal Komdigi 2026 merupakan implementasi langsung dari peta jalan transformasi digital Komdigi yang tertuang dalam Rencana Strategis Kementerian Komdigi Tahun 2025-2029.
            </p>
            <div className="p-6 rounded-2xl glass border-primary-500/20 bg-primary-900/10">
              <p className="text-white font-medium">
                "Renstra ini menjadi landasan yang akan menentukan arah keberhasilan dalam mencapai Indonesia Emas 2045, yang difokuskan untuk memperkuat fondasi transformasi digital."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl glass hover:bg-white/10 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                  {obj.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{obj.title}</h3>
                  <p className="text-gray-400">{obj.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
