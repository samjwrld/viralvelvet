import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";
import GlassRevealImage from "./GlassRevealImage";

interface ServicesSectionProps {
  activeTexture?: string;
}

// Framer Motion staggered orchestration variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Sequential trigger timing
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Cinematic custom expo
    }
  }
};

const quoteVariantsLeft = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const quoteVariantsRight = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.012,
      delayChildren: 0.05,
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const imageSideVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    }
  }
};

export default function ServicesSection({ activeTexture = "obsidian" }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden">
      {/* Decorative top title section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
            Core Disciplines
          </span>
          <h2 className="display-serif text-4xl md:text-6xl text-lux-text">
            Architecting Status
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold/30 mx-auto mt-6" />
        </motion.div>
      </div>

      {/* Services List - Each occupying almost full viewport screen height */}
      <div className="space-y-36 lg:space-y-56">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="max-w-7xl mx-auto px-6 md:px-12 min-h-[75vh] flex items-center"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                {/* TEXT SIDE */}
                <div
                  className={`lg:col-span-6 space-y-8 ${
                    isEven ? "lg:order-1" : "lg:order-2 lg:pl-12"
                  }`}
                >
                  {/* Service Number & Category */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-center gap-4 font-mono text-[11px] tracking-widest text-luxury-gold/80"
                  >
                    <span>0{index + 1}</span>
                    <span className="w-8 h-[1px] bg-luxury-gold/25" />
                    <span className="uppercase text-lux-text/50">PERFORMANCE CAPABILITY</span>
                  </motion.div>

                  {/* Massive Bold Heading */}
                  <motion.h3
                    variants={itemVariants}
                    className="display-serif text-5xl md:text-6xl lg:text-7xl text-lux-text leading-none tracking-tight font-light"
                  >
                    {service.title}
                  </motion.h3>

                  {/* User Quote - Elevated typography */}
                  <motion.div
                    variants={isEven ? quoteVariantsLeft : quoteVariantsRight}
                    className="border-l-2 border-luxury-gold/50 pl-6 py-1"
                  >
                    <p className="display-serif text-xl md:text-2xl italic text-luxury-gold font-light tracking-wide">
                      "{service.quote}"
                    </p>
                  </motion.div>

                  {/* Supporting Minimal copy with staggered cinematic word-by-word reveal */}
                  <motion.p
                    variants={paragraphVariants}
                    className="text-sm text-lux-text/60 leading-relaxed font-sans font-light max-w-lg"
                  >
                    {service.description.split(" ").map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        variants={wordVariants}
                        className="inline-block mr-[0.25em] whitespace-nowrap"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>

                  {/* Dynamic Metric Display */}
                  {service.metricVal && (
                    <motion.div
                      variants={itemVariants}
                      className="inline-block rounded-none px-8 py-5 opaque-glass-tile"
                    >
                      <div className="font-mono text-2xl text-luxury-gold font-light">
                        {service.metricVal}
                      </div>
                      <div className="font-mono text-[8px] uppercase tracking-widest text-lux-text/40 mt-1">
                        {service.metricLabel}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* IMAGERY SIDE */}
                <motion.div
                  variants={imageSideVariants}
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <GlassRevealImage 
                    src={service.image} 
                    alt={`${service.title} aesthetic`} 
                    index={index} 
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Supporting Services Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-36 pt-24 border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gold block">
              SUPPORTING CAPABILITIES
            </span>
            <h3 className="display-serif text-3xl md:text-5xl text-lux-text leading-tight">
              Services That Improve <span className="font-light italic text-luxury-gold">Advertising Performance</span>
            </h3>
            <p className="text-sm text-lux-text/60 leading-relaxed font-sans font-light">
              Exceptional advertising doesn't end with a click. That's why we provide supporting services that help maximize every marketing investment.
            </p>
            <div className="w-24 h-[1px] bg-luxury-gold/30 mt-4" />
            <p className="text-xs text-luxury-gold/70 font-mono tracking-wider uppercase pt-2">
              Every service exists for one purpose: improving advertising performance and increasing business revenue.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "High-Converting Landing Pages", desc: "Crafting optimized destinations that convert visitors into valuable clients." },
                { title: "Website Design & Development", desc: "Engineered with speed and precision for custom user journeys." },
                { title: "Social Media Management", desc: "Strategic curation that keeps your brand presence active and engaging." },
                { title: "Creative Design", desc: "Bespoke graphics, layout design, and copy that command attention." },
                { title: "Video Advertisement Production", desc: "Surgical, performance-focused video assets made for social feeds." },
                { title: "SEO Foundations", desc: "Building core organic crawlability and technical architecture standards." },
                { title: "Conversion Rate Optimization (CRO)", desc: "Analyzing click behavior to plug leaks and boost signups." },
                { title: "Analytics & Reporting", desc: "Cold, unyielding metrics demonstrating exact ROAS and CPA status." },
                { title: "Pixel & Conversion Tracking", desc: "Advanced server-side conversion API plumbing for flawless attribution." },
                { title: "Marketing Automation", desc: "Custom email & text follow-ups to nurture leads into acquisitions." }
              ].map((sub, sIdx) => (
                <div 
                  key={sub.title}
                  className="p-5 border border-white/5 bg-[#131313]/20 hover:border-luxury-gold/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[9px] text-luxury-gold mt-1">0{sIdx + 1}</span>
                    <div>
                      <h4 className="font-serif text-base text-lux-text font-normal">
                        {sub.title}
                      </h4>
                      <p className="text-[11px] text-lux-text/50 font-sans font-light mt-1">
                        {sub.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
