import { CLIENT_LOGOS } from "../data";
import { motion } from "motion/react";
import { Award } from "lucide-react";

const TRUST_BADGES = [
  {
    provider: "Google",
    status: "PREMIER PARTNER",
    tier: "Top 3% Global Tier",
    specialty: "Search & Display Authority",
  },
  {
    provider: "Meta",
    status: "BUSINESS PARTNER",
    tier: "Preferred Agency",
    specialty: "Enterprise Scale Social",
  },
  {
    provider: "LinkedIn",
    status: "MARKETING PARTNER",
    tier: "Ad Technology Certified",
    specialty: "B2B Acquisition Experts",
  },
  {
    provider: "Shopify Plus",
    status: "SYSTEMS PARTNER",
    tier: "Enterprise Merchant Elite",
    specialty: "High-Volume Commerce",
  }
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-transparent border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center md:text-left">
        <span className="font-mono text-[8px] uppercase text-lux-text/40 tracking-[0.4em] block">
          Patronage in Collaboration
        </span>
      </div>

      {/* Endless Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 flex select-none mb-20">
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

      {/* Trust Badges Accreditation Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 text-center md:text-left">
          <span className="font-mono text-[8px] uppercase text-luxury-gold/80 tracking-[0.4em] block mb-2">
            ACCREDITED EXCELLENCE
          </span>
          <h4 className="display-serif text-2xl md:text-3xl font-light text-lux-text tracking-tight">
            Elite Digital Alliances
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, index) => (
            <motion.div
              key={badge.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(200, 165, 90, 0.45)" }}
              className="relative p-6 border border-white/8 bg-white/[0.03] backdrop-blur-md group transition-all duration-500 flex flex-col justify-between min-h-[160px] overflow-hidden"
            >
              {/* Gold Ambient Back-Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Subtle top horizontal golden accent wire */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/0 to-transparent group-hover:via-luxury-gold/30 transition-all duration-700" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-serif text-xl font-normal tracking-wide text-lux-text/90 group-hover:text-lux-text transition-colors duration-300">
                    {badge.provider}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold/50 group-hover:text-luxury-gold group-hover:border-luxury-gold/40 transition-all duration-500">
                    <Award size={12} />
                  </div>
                </div>

                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-luxury-gold mb-1 font-medium">
                  {badge.status}
                </div>
              </div>

              <div className="border-t border-white/5 pt-3 mt-4">
                <p className="text-[10px] font-mono text-lux-text/50 uppercase tracking-widest mb-0.5">
                  {badge.tier}
                </p>
                <p className="text-xs text-lux-text/30 font-sans font-light">
                  {badge.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
