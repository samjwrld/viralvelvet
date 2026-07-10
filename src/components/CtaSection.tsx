import { motion } from "motion/react";
import { Sparkles, Calendar, ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export default function CtaSection({ onOpenBooking }: CtaSectionProps) {
  return (
    <section
      id="cta-contact"
      className="relative py-32 bg-transparent overflow-hidden text-center border-t border-white/5"
    >
      {/* Decorative Golden Velvet Wave Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-velvet-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.45em] block">
            Securing Sovereign Scale
          </span>
          {/* Large Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="display-serif text-5xl md:text-7xl lg:text-8xl text-lux-text font-light leading-tight tracking-wide"
          >
            Ready to Become<br />
            <span className="font-light italic text-luxury-gold">Impossible to Ignore?</span>
          </motion.h2>
        </div>

        {/* Supporting subtext */}
        <p className="text-xs md:text-sm text-lux-text/60 max-w-lg mx-auto font-sans leading-relaxed font-light">
          Your brand deserves digital execution equal to its physical masteristry. Speak directly with our managing partners to explore your market potential.
        </p>

        {/* Large Gold CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-4"
        >
          <button
            onClick={onOpenBooking}
            id="cta-booking-trigger"
            className="relative group inline-flex items-center gap-3 bg-luxury-gold hover:bg-luxury-gold-dark text-[#090909] px-12 py-5 text-xs font-mono uppercase tracking-[0.35em] transition-all duration-500 hover:scale-105 shadow-[0_10px_35px_-5px_rgba(200,165,90,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(200,165,90,0.45)]"
          >
            {/* Soft pulsing border around button */}
            <span className="absolute -inset-1.5 rounded-none border border-luxury-gold/25 animate-pulse group-hover:border-luxury-gold/50 transition-colors pointer-events-none" />

            INQUIRE NOW
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Footnote information */}
        <div className="pt-10 flex flex-wrap gap-x-8 gap-y-4 items-center justify-center text-[9px] font-mono tracking-widest text-lux-text/35">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ONBOARDING CAP: 1 LEFT FOR Q3
          </span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span>MUTUAL NDA GUARANTEED</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span>EST. STRATEGY AUDIT: 45 MINS</span>
        </div>
      </div>
    </section>
  );
}
