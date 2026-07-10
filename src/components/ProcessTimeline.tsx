import { useState } from "react";
import { motion } from "motion/react";
import { PROCESS_DATA } from "../data";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-transparent overflow-hidden border-y border-white/5">
      {/* Absolute faint glow behind timeline */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-velvet-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center md:text-left">
          <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
            THE METHODOLOGY
          </span>
          <h2 className="display-serif text-4xl md:text-6xl text-lux-text leading-tight">
            The Pathway to Inevitability
          </h2>
          <p className="text-xs text-lux-text/50 max-w-lg font-sans">
            How we translate brand narrative into absolute digital leverage. No guess work, just continuous mathematical scale.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Track */}
        <div className="hidden lg:block relative py-12">
          {/* Laser Gold Connecting Line */}
          <div className="absolute top-[162px] left-0 w-full h-[1px] bg-white/10">
            {/* Animated gold scanning sweep */}
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-luxury-gold to-transparent w-1/3"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
          </div>

          {/* Connect Active Path */}
          <div 
            className="absolute top-[162px] left-0 h-[1px] bg-luxury-gold transition-all duration-700"
            style={{ width: `${(activeStep / (PROCESS_DATA.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-5 gap-6 relative">
            {PROCESS_DATA.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.id}
                  className="space-y-6 relative cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step Metadata Card */}
                  <div className="h-[90px] flex flex-col justify-end pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/50 group-hover:text-luxury-gold block transition-colors">
                      {step.duration}
                    </span>
                    <span className="font-mono text-[10px] text-lux-text/40 block mt-1">
                      Focus: {step.focus}
                    </span>
                  </div>

                  {/* Connect node indicator */}
                  <div className="relative h-12 flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-velvet-red border-luxury-gold scale-125 velvet-glow"
                          : isPast
                          ? "bg-luxury-gold border-luxury-gold"
                          : "bg-lux-bg border-white/20 group-hover:border-luxury-gold/50"
                      }`}
                    >
                      {isPast && (
                        <div className="w-1.5 h-1.5 bg-lux-bg rounded-full" />
                      )}
                      {isActive && (
                        <motion.div 
                          className="w-2 h-2 bg-luxury-gold rounded-full"
                          layoutId="activeIndicator"
                        />
                      )}
                    </div>
                  </div>

                  {/* Narrative details */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-luxury-gold font-bold">
                        {step.number}
                      </span>
                      <h4 className={`display-serif text-lg font-medium transition-colors ${
                        isActive ? "text-lux-text" : "text-lux-text/60 group-hover:text-lux-text/80"
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                    <p className={`text-xs leading-relaxed font-sans font-light transition-opacity duration-500 ${
                      isActive ? "opacity-90" : "opacity-40 group-hover:opacity-60"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet & Mobile Layout: Sophisticated Vertical Timeline */}
        <div className="lg:hidden relative space-y-12 pl-6 md:pl-10 border-l border-white/8 py-4">
          {PROCESS_DATA.map((step, idx) => {
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative space-y-4 group"
              >
                {/* Node marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[11px] h-[11px] md:w-4 md:h-4 rounded-full border border-luxury-gold bg-lux-bg group-hover:bg-velvet-red transition-all duration-300 flex items-center justify-center">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-luxury-gold rounded-full" />
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-widest text-luxury-gold">
                  <span>{step.duration}</span>
                  <span className="text-lux-text/30">•</span>
                  <span className="text-lux-text/50">Focus: {step.focus}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="display-serif text-2xl text-lux-text">
                    <span className="font-mono text-sm text-luxury-gold/50 mr-2 font-light">0{idx + 1}</span>
                    {step.title}
                  </h3>
                  <p className="text-xs text-lux-text/60 leading-relaxed font-sans font-light max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
