"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FAQ() {

  return (
    <section id="faq" className="py-16 lg:py-24 relative bg-white overflow-hidden">
      {/* Geometric Decorations */}
      <div className="absolute top-40 -right-20 w-[400px] h-[400px] border-[30px] border-accent-red/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-64 h-64 border-[16px] border-primary-500/5 rotate-45 pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-accent-gold/5 blur-2xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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

          <div className="space-y-4 mb-10 hidden">
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
