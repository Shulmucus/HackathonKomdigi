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
    <section id="faq" className="py-16 lg:py-24 relative bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Pertanyaan yang sering diajukan seputar Hackathon Internal Komdigi 2026.
            </motion.p>
          </div>

          <div className="space-y-4 mb-10">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                  <div
                  key={index}
                  className={`bg-white rounded-2xl border shadow-sm transition-all ${
                    isActive ? "border-primary-400 shadow-md ring-1 ring-primary-400" : "border-gray-200 hover:border-primary-300"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isActive ? "rotate-180 text-primary-600" : "text-gray-400"
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
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-gray-200 shadow-sm hover:border-primary-400 hover:shadow-md text-sm font-bold text-primary-600 transition-all"
            >
              Lihat Dokumen FAQ Lengkap
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
