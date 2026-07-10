import { motion } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";

interface TestimonialsSectionProps {
  activeTexture?: string;
}

export default function TestimonialsSection({ activeTexture = "obsidian" }: TestimonialsSectionProps) {
  // Map texture ids to CSS classes
  const textureClassMap: Record<string, string> = {
    obsidian: "texture-obsidian",
    velvet: "texture-velvet",
    stardust: "texture-stardust",
    sapphire: "texture-sapphire",
  };

  const activeClass = textureClassMap[activeTexture] || "texture-obsidian";

  return (
    <section id="testimonials" className="py-28 bg-transparent relative overflow-hidden">
      {/* Decorative Golden Aura behind cards */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center">
          <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
            The Consensus
          </span>
          <h2 className="display-serif text-4xl md:text-6xl text-lux-text">
            Sovereign Verdicts
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold/30 mx-auto mt-6" />
        </div>

        {/* Textured/Glass Card Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS_DATA.map((t, idx) => {
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between p-8 md:p-10 border border-white/10 bg-[#131313]/35 backdrop-blur-xl hover:border-luxury-gold/25 transition-all duration-700 hover:translate-y-[-4px]"
              >
                {/* Golden corner highlight */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="space-y-6">
                  {/* Large Quotation mark */}
                  <div className="display-serif text-5xl text-luxury-gold/40 select-none leading-none">
                    “
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-sm md:text-base text-lux-text/85 leading-relaxed font-sans font-light italic">
                    {t.quote}
                  </p>
                </div>

                {/* Author Credentials */}
                <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg text-lux-text font-normal">
                      {t.author}
                    </h4>
                    <p className="font-mono text-[8px] uppercase tracking-widest text-luxury-gold">
                      {t.role}
                    </p>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-lux-text/35 font-semibold text-right">
                    {t.company}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
