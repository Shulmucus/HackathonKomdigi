"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Siapa saja yang dapat mendaftar Hackathon ini?",
    answer: "Peserta adalah Aparatur Sipil Negara (ASN) aktif yang berada di lingkungan Kementerian Komunikasi dan Digital.",
  },
  {
    question: "Berapa jumlah anggota dalam satu tim?",
    answer: "Pendaftaran dapat dilakukan secara individu atau membentuk tim dengan komposisi 3 hingga 5 anggota.",
  },
  {
    question: "Apakah anggota tim boleh dari satuan kerja yang berbeda?",
    answer: "Ya, sangat diperbolehkan. Tim dapat terdiri atas lintas satuan kerja (unit) untuk mendorong kolaborasi yang lebih luas.",
  },
  {
    question: "Apakah wajib memiliki persetujuan pimpinan?",
    answer: "Ya, semua anggota tim wajib mendapatkan persetujuan resmi dari pimpinan satuan kerja masing-masing.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Pertanyaan yang sering diajukan seputar Hackathon Internal Komdigi 2026.
            </motion.p>
          </div>

          <div className="space-y-4 mb-10">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass rounded-2xl border transition-all ${
                    isActive ? "border-primary-500/50 bg-white/10" : "border-white/5 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all"
            >
              Lihat Dokumen FAQ Lengkap
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
