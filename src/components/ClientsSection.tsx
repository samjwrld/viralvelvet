import { CLIENT_LOGOS } from "../data";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-transparent border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center md:text-left">
        <span className="font-mono text-[8px] uppercase text-lux-text/40 tracking-[0.4em] block">
          Patronage in Collaboration
        </span>
      </div>

      {/* Endless Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 flex select-none">
        {/* Shadow Vignettes to fade out logo edges beautifully */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090909]/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090909]/95 to-transparent z-10 pointer-events-none" />

        {/* Outer Flex container animating via tailwind-scroll keyframe */}
        <div className="flex gap-16 md:gap-24 items-center shrink-0 min-w-full animate-infinite-scroll">
          
          {/* First loop of Logos */}
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={`${logo.id}-1`}
              className="flex items-center gap-3.5 hover:opacity-100 opacity-35 transition-opacity duration-500 cursor-pointer"
            >
              {/* Luxury Vector / Initials Crest logo representation */}
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-serif text-lg text-luxury-gold italic">
                {logo.symbol}
              </div>
              <span className="font-mono text-xs text-lux-text tracking-[0.35em] whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}

          {/* Duplicated loop of Logos for seamless infinite carousel */}
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={`${logo.id}-2`}
              className="flex items-center gap-3.5 hover:opacity-100 opacity-35 transition-opacity duration-500 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-serif text-lg text-luxury-gold italic">
                {logo.symbol}
              </div>
              <span className="font-mono text-xs text-lux-text tracking-[0.35em] whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
