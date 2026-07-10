import { motion } from "motion/react";
import { Eye, Shield, Award } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Eye size={18} className="text-luxury-gold" />,
      title: "Curation",
      description: "We guard your brand's silence. We only deploy messaging when there is a true commercial reason to command attention."
    },
    {
      icon: <Shield size={18} className="text-luxury-gold" />,
      title: "Exclusivity",
      description: "Restricting client volume to maintain absolute focus. We treat your brand's marketing as our own personal craft."
    },
    {
      icon: <Award size={18} className="text-luxury-gold" />,
      title: "Pedigree",
      description: "Converting high aesthetic values into absolute mathematics. Luxury is engineered to perfection, and so are our metrics."
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-transparent overflow-hidden border-y border-white/5">
      {/* Absolute Ambient Wine Red Glow behind statement */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-velvet-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-14 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gold block">
            Our Core Creed
          </span>
          <div className="w-8 h-[1px] bg-luxury-gold/20 mx-auto" />
        </div>

        {/* Oversized Manifesto Statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="display-serif text-5xl md:text-7xl lg:text-8xl text-lux-text font-light tracking-wide leading-tight">
            We don't market brands.<br />
            <span className="font-light italic text-luxury-gold">We create obsession.</span>
          </h2>
        </motion.div>

        {/* Minimal Supporting Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-base md:text-lg text-lux-text/65 font-sans font-light max-w-2xl mx-auto leading-relaxed"
        >
          Traditional agencies measure success in digital reach. At ViralVelvet, we measure it in collective fascination. We align state-of-the-art computational performance with haute-couture sensory standards.
        </motion.p>

        {/* Fine Triple Value columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5 text-left">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="space-y-4 p-6 glass-card border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velvet-red/10 border border-luxury-gold/15 flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-lux-text font-medium">
                  {v.title}
                </h4>
              </div>
              <p className="text-xs text-lux-text/50 font-sans leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
