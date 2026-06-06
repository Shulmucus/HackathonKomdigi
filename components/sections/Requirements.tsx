"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Peserta adalah Aparatur Sipil Negara (ASN) aktif di lingkungan Kementerian Komunikasi dan Digital.",
  "Pendaftaran dilakukan secara individu atau tim dengan komposisi 3 hingga 5 anggota.",
  "Telah memiliki ide pengembangan use case kecerdasan artifisial sesuai dengan tema yang diberikan.",
  "Tim dapat terdiri atas lintas satuan kerja (unit) untuk mendorong kolaborasi.",
  "Setiap tim diwajibkan memiliki minimal 1 (satu) pegawai yang berasal dari Satuan Kerja yang akan menjadi pemilik masalah (Problem Owner).",
  "Semua anggota tim wajib mendapatkan persetujuan resmi dari pimpinan satuan kerja masing-masing.",
];

export function Requirements() {
  return (
    <section id="requirements" className="py-16 lg:py-24 relative overflow-hidden bg-primary-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Persyaratan Peserta
          </motion.h2>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Pastikan Anda memenuhi persyaratan berikut sebelum mendaftar Hackathon Internal Komdigi 2026.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {requirements.map((req, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent-gold/50 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
              <p className="text-white/90 leading-relaxed">{req}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
