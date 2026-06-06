"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  { title: "Publication & Registration", date: "15 Juni - 3 Juli" },
  { title: "Kick Off Hackathon", date: "14 Juli" },
  { title: "Team Matchmaking", date: "21 Juli" },
  { title: "Training - AI Beginner", date: "28 Juli" },
  { title: "Training - AI Intermediate", date: "4 Agustus" },
  { title: "Training - AI Advanced", date: "11 Agustus" },
  { title: "Proposal Submission Deadline", date: "21 Agustus" },
  { title: "Proposal Selection", date: "29 Agustus - 4 September" },
  { title: "Announcement of Finalists", date: "7 September" },
  { title: "Finalist Briefing", date: "14 September" },
  { title: "Mentoring one on one", date: "14-18 September" },
  { title: "Main Hackathon", date: "21-22 September" },
  { title: "Final Pitch & Award Ceremony", date: "22 September" },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Linimasa Kegiatan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Perjalanan inovasi Anda dimulai di sini. Catat tanggal-tanggal penting berikut.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-primary-500 rounded-full md:-translate-x-1/2 -translate-x-[5px] shadow-[0_0_10px_rgba(0,64,255,0.8)] z-10" />

                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 p-6 glass rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors ${
                      isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                    }`}
                  >
                    <div className="font-mono text-primary-400 font-semibold mb-2 tracking-wider text-sm">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
