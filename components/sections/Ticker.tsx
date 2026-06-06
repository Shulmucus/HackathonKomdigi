export function Ticker() {
  return (
    <div className="bg-accent-gold py-3 overflow-hidden whitespace-nowrap flex relative border-y border-yellow-500">
      <div className="animate-marquee inline-flex flex-none items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              ✦ Hackathon Komdigi 2026
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              🚀 Kick-Off 14 Juli 2026
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              🎓 Training AI: Beginner, Intermediate, Advanced
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              🏆 Total Hadiah Rp30 Juta
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              👥 Khusus ASN Komdigi
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              📋 Piagam Penghargaan Menteri
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold text-primary-700 px-7">
              📅 Main Event 21–22 Sept 2026
              <span className="text-primary-700/30"> &nbsp;·&nbsp; </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
