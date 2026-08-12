"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const contacts = [
  {
    name: "Elisha Nathania",
    role: "Analis Kebijakan Ahli Pertama",
    department: "Direktorat Kecerdasan Artifisial dan Ekosistem Teknologi Baru",
    email: "elis003@komdigi.go.id",
    phone: "+62 811 980 3007"
  },
  {
    name: "Alhamdi Syukra",
    role: "Analis Kebijakan Ahli Pertama",
    department: "Direktorat Kecerdasan Artifisial dan Ekosistem Teknologi Baru",
    email: "alha002@komdigi.go.id",
    phone: "+62 896 5310 1467"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-primary-700 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-800/50 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Informasi Lebih Lanjut
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Hubungi panitia Hackathon Internal Komdigi 2026 untuk pertanyaan lebih lanjut.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f172a] p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl hover:border-primary-400 transition-colors flex flex-col items-center text-center group"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{contact.name}</h3>
              <p className="text-primary-200 font-medium mb-1">{contact.role}</p>
              <p className="text-gray-400 text-sm mb-8 max-w-[280px] leading-relaxed">{contact.department}</p>
              
              <div className="flex flex-col gap-3 w-full">
                <a 
                  href={`mailto:${contact.email}`} 
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-primary-600 border border-white/10 p-3 rounded-xl transition-all text-white group/link"
                >
                  <Mail className="w-5 h-5 text-primary-400 group-hover/link:text-white transition-colors" />
                  <span className="font-medium tracking-wide">{contact.email}</span>
                </a>
                <a 
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-primary-600 border border-white/10 p-3 rounded-xl transition-all text-white group/link"
                >
                  <Phone className="w-5 h-5 text-primary-400 group-hover/link:text-white transition-colors" />
                  <span className="font-medium tracking-wide">{contact.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
