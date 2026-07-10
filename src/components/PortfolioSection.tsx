import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { PORTFOLIO_DATA } from "../data";
import { Sparkles, Calendar, TrendingUp } from "lucide-react";

// Helper component for animating individual numeric stats
function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric parts and suffix/prefix from values like "+480%", "$142M", "11.2x", "8.4x", "15M+", "100%", "1,200+"
    const cleanString = value.replace(/,/g, "");
    const numbersMatch = cleanString.match(/[\d.]+/);
    if (!numbersMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(numbersMatch[0]);
    const isDecimal = numbersMatch[0].includes(".");
    const prefix = value.split(numbersMatch[0])[0] || "";
    const suffix = value.split(numbersMatch[0])[1] || "";

    let start = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNumber * easeProgress;

      let formattedNum = "";
      if (isDecimal) {
        formattedNum = currentVal.toFixed(1);
      } else {
        formattedNum = Math.floor(currentVal).toLocaleString();
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // ensure precise target value matches exactly on finish
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView, duration]);

  return <span ref={ref}>{displayValue || "0"}</span>;
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-28 bg-transparent overflow-hidden">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
            Selected Work
          </span>
          <h2 className="display-serif text-4xl md:text-6xl text-lux-text leading-tight">
            Case Studies of Sovereign Growth
          </h2>
        </div>
        <p className="font-mono text-xs text-lux-text/45 max-w-xs md:text-right border-l md:border-l-0 md:border-r border-luxury-gold/20 pl-6 md:pl-0 md:pr-6 py-1">
          Each allocation is executed with total secrecy, translating aesthetics into capital.
        </p>
      </div>

      {/* Case Studies Panels */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {PORTFOLIO_DATA.map((project, idx) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, type: "spring", damping: 25 }}
              className="group portfolio-card-trigger relative w-full overflow-hidden border border-white/10 bg-[#131313]/35 backdrop-blur-xl hover:border-luxury-gold/25 transition-all duration-700 p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual Imagery Panel (takes 7 columns) */}
                <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-75 z-10" />
                  <div className="absolute inset-0 bg-[#4B0B14]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-10 pointer-events-none" />

                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-105 transition-all duration-[1.4s] ease-out"
                  />
                  
                  {/* Category Card Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-[#131313]/90 backdrop-blur-md border border-white/10 px-4 py-1.5 font-mono text-[9px] text-luxury-gold uppercase tracking-[0.2em]">
                    {project.category}
                  </div>
                </div>

                {/* Narrative & Stats Panel (takes 5 columns) */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/60 block">
                      CASE IN COOPERATION
                    </span>
                    <h3 className="display-serif text-3xl md:text-4xl text-lux-text font-normal leading-tight group-hover:text-luxury-gold transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="display-serif text-base italic text-lux-text/45">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-lux-text/60 leading-relaxed font-sans font-light">
                    {project.description}
                  </p>

                  <div className="w-full h-[1px] bg-white/5" />

                  {/* Animate statistics block */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, sIdx) => (
                      <div key={stat.label} className="space-y-1">
                        <div className="display-serif text-2xl md:text-3xl text-luxury-gold font-normal tracking-tight">
                          <AnimatedCounter value={stat.value} />
                        </div>
                        <div className="font-mono text-[8px] uppercase tracking-widest text-lux-text/45">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 font-mono text-[9px] text-luxury-gold tracking-widest group-hover:underline cursor-pointer">
                      READ SOVEREIGN VERDICT 
                      <span className="text-[12px] group-hover:translate-x-1.5 transition-transform">→</span>
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
