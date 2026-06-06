"use client";

import { motion } from "framer-motion";
import { Trophy, Gift, Award, Medal, BookOpen, GraduationCap } from "lucide-react";

export function Benefits() {
  const winnerBenefits = [
    { icon: <Medal className="w-8 h-8 text-yellow-400" />, title: "Total Hadiah", desc: "Uang pembinaan senilai total Rp 30 Juta" },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, title: "Sertifikat Pemenang", desc: "Pengakuan resmi sebagai pemenang Hackathon" },
    { icon: <Trophy className="w-8 h-8 text-yellow-400" />, title: "Piagam Penghargaan", desc: "Dari Menteri Komunikasi dan Digital" },
  ];

  const participantBenefits = [
    { icon: <BookOpen className="w-6 h-6 text-primary-400" />, title: "Training", desc: "Pelatihan AI terstruktur (Beginner to Advanced)" },
    { icon: <GraduationCap className="w-6 h-6 text-primary-400" />, title: "Sertifikasi", desc: "Sertifikasi keahlian di bidang kecerdasan buatan" },
    { icon: <Gift className="w-6 h-6 text-primary-400" />, title: "Inkubasi", desc: "Pengembangan Inovasi lebih lanjut" },
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Geometric Decorations */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] border-[40px] border-accent-gold/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 border-[24px] border-primary-400/5 rotate-12 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Benefit Peserta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Berbagai keuntungan yang bisa Anda dapatkan dengan mengikuti Hackathon Internal Komdigi 2026.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Winner Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#E6C56A] relative overflow-hidden group shadow-sm"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-32 h-32 text-yellow-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-yellow-600">Bagi Pemenang</span>
            </h3>
            
            <div className="space-y-6 relative z-10">
              {winnerBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl border border-yellow-200 shadow-sm">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{b.title}</h4>
                    <p className="text-gray-700">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Participant Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#E8F1FB] p-8 rounded-2xl border border-[#A0C3F0] relative overflow-hidden group shadow-sm hover:border-primary-400 transition-colors"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-primary-600">Bagi Seluruh Peserta</span>
            </h3>
            
            <div className="space-y-6 relative z-10">
              {participantBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl border border-blue-200 shadow-sm">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{b.title}</h4>
                    <p className="text-gray-700">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
