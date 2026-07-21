import { motion } from "motion/react";
import { CLIENT_LOGOS } from "../data";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 border-y border-white/5 relative overflow-hidden bg-lux-bg/50">
      {/* Decorative background glow line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/15 to-transparent opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="relative">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-luxury-gold/30"></span>
            Portfolio
          </h2>
          <h3 className="display-serif text-3xl md:text-5xl text-lux-text leading-tight">
            Trusted by Industry <span className="italic text-luxury-gold/80">Visionaries</span>
          </h3>
        </div>
        <p className="font-sans text-sm text-lux-text/40 max-w-sm leading-relaxed border-l border-white/10 pl-6 py-1">
          Delivering exceptional growth with over <span className="text-luxury-gold/60 font-semibold">500+ qualified leads</span> generated for our prestigious partners in design, defense, and luxury sectors.
        </p>
      </motion.div>

      {/* Infinite Carousel Container with Refined Edge Masks */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-lux-bg via-lux-bg/80 to-transparent pointer-events-none" />
        
        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-lux-bg via-lux-bg/80 to-transparent pointer-events-none" />

        <div className="flex overflow-hidden group select-none">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
            className="flex gap-20 md:gap-32 animate-infinite-scroll w-max py-6 pr-20 md:pr-32 items-center"
          >
            
            {/* First loop of Logos */}
            {CLIENT_LOGOS.map((logo) => (
              <motion.div
                key={`${logo.id}-1`}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-5 opacity-35 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group/logo"
              >
                {/* Luxury Crest Icon */}
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center font-serif text-2xl text-luxury-gold italic group-hover/logo:border-luxury-gold/40 group-hover/logo:bg-luxury-gold/5 transition-all duration-500 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-luxury-gold/0 group-hover/logo:bg-luxury-gold/5 transition-colors duration-500" />
                  <span className="relative z-10">{logo.symbol}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-luxury-gold/60 tracking-[0.3em] mb-1 uppercase font-medium">
                    {logo.industry || "Premier Partner"}
                  </span>
                  <span className="font-mono text-[11px] text-lux-text tracking-[0.2em] whitespace-nowrap uppercase font-semibold">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Duplicated loop for seamless infinite carousel */}
            {CLIENT_LOGOS.map((logo) => (
              <motion.div
                key={`${logo.id}-2`}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-5 opacity-35 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group/logo"
              >
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center font-serif text-2xl text-luxury-gold italic group-hover/logo:border-luxury-gold/40 group-hover/logo:bg-luxury-gold/5 transition-all duration-500 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-luxury-gold/0 group-hover/logo:bg-luxury-gold/5 transition-colors duration-500" />
                  <span className="relative z-10">{logo.symbol}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-luxury-gold/60 tracking-[0.3em] mb-1 uppercase font-medium">
                    {logo.industry || "Premier Partner"}
                  </span>
                  <span className="font-mono text-[11px] text-lux-text tracking-[0.2em] whitespace-nowrap uppercase font-semibold">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
