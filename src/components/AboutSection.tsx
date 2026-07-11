import { motion } from "motion/react";
import { Eye, Shield, Award } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <Eye size={18} className="text-luxury-gold" />,
      title: "Audience Intelligence",
      description: "We deploy deep targeting frameworks to locate high-intent buyers, identifying the core psychological triggers that drive conversion."
    },
    {
      icon: <Shield size={18} className="text-luxury-gold" />,
      title: "Creative Excellence",
      description: "No cheap templates. We craft tailored visual stories designed to captivate your audience, elevate your brand, and turn attention into actions."
    },
    {
      icon: <Award size={18} className="text-luxury-gold" />,
      title: "Conversion Optimization",
      description: "Exceptional marketing doesn't stop at the click. We build high-converting landing pages and track user journeys to maximize returns."
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
            OUR PHILOSOPHY
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
          <h2 className="display-serif text-4xl md:text-6xl lg:text-7xl text-lux-text font-light tracking-wide leading-tight">
            Revenue Over Reach.<br />
            <span className="font-light italic text-luxury-gold">Results Over Promises.</span>
          </h2>
        </motion.div>

        {/* Supporting Copy */}
        <div className="space-y-6 text-lux-text/75 font-sans font-light max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            Digital advertising has never been more competitive. Every day, businesses spend thousands on campaigns that generate clicks but fail to produce meaningful business results.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.25 }}
            className="text-luxury-gold font-medium display-serif text-lg md:text-xl"
          >
            ViralVelvet was built to solve that problem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            We combine strategy, audience intelligence, creative excellence, conversion optimization, and data-driven advertising to build campaigns that don't simply attract attention—they generate measurable business outcomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.55 }}
            className="italic text-lux-text/60"
          >
            Whether you're an ambitious startup, an established enterprise, an eCommerce brand, or a local business ready to scale, we create advertising systems that help you grow with confidence.
          </motion.p>
        </div>

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
