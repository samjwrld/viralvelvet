import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Sliders, 
  Users, 
  Zap, 
  Shield,
  ArrowRight,
  Cpu,
  Fingerprint
} from "lucide-react";

interface Differentiator {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  deficit: string;
  optimization: string;
  impact: string;
}

export default function WhyViralVelvet() {
  const differentiators: Differentiator[] = [
    {
      id: "revenue",
      icon: <TrendingUp size={16} />,
      title: "Revenue-focused advertising",
      tagline: "Eradicating raw click vanity metrics",
      description: "Every campaign is engineered to directly impact your bottom line, prioritizing actual profitability over simple impression counts.",
      deficit: "Typical agencies celebrate impressions and traffic clicks that fail to purchase.",
      optimization: "We calibrate every search bid, visual hook, and budget line strictly to maximize customer lifetime value and real-time revenue.",
      impact: "42% Avg. ROAS Lift"
    },
    {
      id: "data",
      icon: <BarChart3 size={16} />,
      title: "Data-driven decision making",
      tagline: "Calibrated keyword and audience targeting",
      description: "We back our strategies with rigorous audience and keyword data, ensuring budget allocation is mathematically sound.",
      deficit: "Relying on gut feeling or outdated generic interest group profiles.",
      optimization: "Algorithmic data profiling, identifying high-intent keywords, and structuring split tests across hundreds of audience subsets.",
      impact: "99.4% Accurate Precision"
    },
    {
      id: "transparency",
      icon: <CheckCircle2 size={16} />,
      title: "Transparent reporting",
      tagline: "Pristine real-time visual metrics",
      description: "Get pristine, comprehensive reports that highlight performance indicators, CPA, and exact ROAS. No vanity metrics.",
      deficit: "Hiding metrics behind confusing PDF spreadsheets delivered late.",
      optimization: "A 24/7 client visual dashboard streaming your real-time spend, conversion volumes, CPA, and direct returns instantly.",
      impact: "100% Data Fidelity"
    },
    {
      id: "certified",
      icon: <Award size={16} />,
      title: "Platform-certified expertise",
      tagline: "Senior campaign growth engineers",
      description: "Our certified specialists stay ahead of platform updates to deploy cutting-edge ad formats and configurations.",
      deficit: "Delegating accounts to junior interns unfamiliar with platform mechanics.",
      optimization: "All campaigns structured by senior certified growth specialists implementing advanced API linkages and customized bidder rules.",
      impact: "Premier Status Advantage"
    },
    {
      id: "creative",
      icon: <Sparkles size={16} />,
      title: "Creative built for conversions",
      description: "Tailored visual assets and persuasive copy written to capture attention, cultivate desire, and trigger conversions.",
      tagline: "Cinema-grade visual assets",
      deficit: "Boring stock graphics easily ignored or bypassed by fast scroll fingers.",
      optimization: "Cinema-grade creative content custom-curated to arrest visual attention and drive instant interaction.",
      impact: "2.4x Thumb-Stop Rate"
    },
    {
      id: "optimization",
      icon: <Sliders size={16} />,
      title: "Continuous optimization",
      tagline: "Steady progressive CPA reductions",
      description: "Continuous testing of ad creatives, audiences, and landing page layouts to steadily drive down lead costs.",
      deficit: "Launching campaigns and walking away, allowing performance to decay.",
      optimization: "High-frequency creative asset testing and aggressive landing page experimentation to secure incremental CPA reductions daily.",
      impact: "-31% Lead Cost Decay"
    },
    {
      id: "audience",
      icon: <Users size={16} />,
      title: "Audience-first strategy",
      tagline: "Surgical psychological alignment",
      description: "Deep psychological profile mapping to target users when their search intent and buyer motivation peak.",
      deficit: "Spraying generic ads across wide demographics hoping something works.",
      optimization: "Surgically profiling user intent, pain-points, and search triggers to display ads exactly when purchasing desires peak.",
      impact: "3.2x Warmer Lead Index"
    },
    {
      id: "scalable",
      icon: <Zap size={16} />,
      title: "Scalable advertising systems",
      tagline: "Infinite scale volume infrastructure",
      description: "A solid performance framework that allows seamless budget scaling while protecting campaign efficiency.",
      deficit: "Campaigns breaking or cost per acquisition ballooning as budget increases.",
      optimization: "Phased horizontal budget expansion paired with real-time target audience overlap prevention controls.",
      impact: "Stable ROI Under Scale"
    },
    {
      id: "partnership",
      icon: <Shield size={16} />,
      title: "Long-term growth partnerships",
      tagline: "Complete multi-year strategic alignment",
      description: "We grow with your brand, aligning our marketing capabilities directly with your multi-year revenue goals.",
      deficit: "Transactional short-term contracts seeking immediate one-off revenue.",
      optimization: "We tie our long-term milestones directly with your multi-year scaling targets, acting as your fully integrated growth department.",
      impact: "Aligned Growth Blueprint"
    }
  ];

  const [selectedProp, setSelectedProp] = useState<Differentiator>(differentiators[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-playing logic to match the smooth carousel transitions
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayTimerRef.current = setInterval(() => {
      setSelectedProp((current) => {
        const currentIndex = differentiators.findIndex((item) => item.id === current.id);
        const nextIndex = (currentIndex + 1) % differentiators.length;
        return differentiators[nextIndex];
      });
    }, 5000); // Transition every 5 seconds

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleManualSelection = (prop: Differentiator) => {
    setSelectedProp(prop);
    setIsAutoPlaying(false); // Pause auto-play once user interacts manually
  };

  // Split into two rows for the infinite horizontal marquee display just like Industries Section
  const firstRow = differentiators.slice(0, 5);
  const secondRow = differentiators.slice(5);

  return (
    <section id="why-viralvelvet" className="relative py-28 bg-transparent overflow-hidden border-b border-white/5">
      
      {/* Inline styles for continuous scrolling of core propositions */}
      <style>{`
        @keyframes scroll-left-prop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right-prop {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left-prop {
          animation: scroll-left-prop 30s linear infinite;
        }
        .animate-scroll-right-prop {
          animation: scroll-right-prop 30s linear infinite;
        }
      `}</style>

      {/* Radiant ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-velvet-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Side visual fade overlay boundaries for carousel seamless blend */}
      <div className="absolute left-0 top-0 h-full w-[80px] sm:w-[220px] bg-gradient-to-r from-lux-bg to-transparent z-15 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-[80px] sm:w-[220px] bg-gradient-to-l from-lux-bg to-transparent z-15 pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl text-left space-y-4">
            <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
              OUR DIFFERENTIATION
            </span>
            <h2 className="display-serif text-4xl md:text-6xl text-lux-text leading-tight">
              Why Choose <span className="font-light italic text-luxury-gold">ViralVelvet?</span>
            </h2>
            <p className="text-base md:text-lg text-lux-text/80 font-light leading-relaxed">
              We look beyond basic impressions and vanity metrics. Click or view any of our core values to audit the ViralVelvet advantage.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-wider uppercase text-lux-text/40">
              Auto-play Cycle:
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-1 text-[9px] font-mono uppercase tracking-wider border rounded-full transition-all duration-300 ${
                isAutoPlaying 
                  ? "border-luxury-gold text-luxury-gold bg-luxury-gold/5" 
                  : "border-white/10 text-lux-text/40 bg-transparent hover:border-white/20 hover:text-lux-text/60"
              }`}
            >
              {isAutoPlaying ? "Active" : "Paused"}
            </button>
          </div>
        </div>

        {/* Dynamic Dual Auto-Scrolling Carousel Marquees (Mimicking Industries layout) */}
        <div className="space-y-6 select-none relative overflow-hidden w-full mb-16">
          
          {/* Row 1: Scrolling Left */}
          <div className="relative flex overflow-x-hidden py-2">
            <div className="flex gap-4 w-max animate-scroll-left-prop hover:[animation-play-state:paused] cursor-pointer">
              {[...firstRow, ...firstRow].map((prop, idx) => {
                const isSelected = selectedProp.id === prop.id;
                return (
                  <div
                    key={`${prop.id}-${idx}`}
                    onClick={() => handleManualSelection(prop)}
                    className={`flex items-center gap-3.5 px-6 py-4 border transition-all duration-300 min-w-[240px] sm:min-w-[290px] cursor-pointer group rounded-sm ${
                      isSelected 
                        ? "border-luxury-gold bg-[#151515] text-luxury-gold shadow-md shadow-luxury-gold/5" 
                        : "border-white/5 bg-[#111]/45 text-lux-text/80 hover:border-white/15 hover:bg-[#131313]"
                    }`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 shrink-0 rounded-full ${
                      isSelected 
                        ? "border-luxury-gold/50 text-luxury-gold bg-luxury-gold/10 shadow-[0_0_8px_rgba(200,165,90,0.2)]" 
                        : "border-white/10 text-luxury-gold/60 bg-white/[0.02] group-hover:text-luxury-gold group-hover:border-luxury-gold/30 group-hover:bg-luxury-gold/5"
                    }`}>
                      {prop.icon}
                    </div>
                    <span className="font-serif text-xs sm:text-sm font-light uppercase tracking-wider block transition-colors duration-300">
                      {prop.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="relative flex overflow-x-hidden py-2">
            <div className="flex gap-4 w-max animate-scroll-right-prop hover:[animation-play-state:paused] cursor-pointer">
              {[...secondRow, ...secondRow].map((prop, idx) => {
                const isSelected = selectedProp.id === prop.id;
                return (
                  <div
                    key={`${prop.id}-${idx}`}
                    onClick={() => handleManualSelection(prop)}
                    className={`flex items-center gap-3.5 px-6 py-4 border transition-all duration-300 min-w-[240px] sm:min-w-[290px] cursor-pointer group rounded-sm ${
                      isSelected 
                        ? "border-luxury-gold bg-[#151515] text-luxury-gold shadow-md shadow-luxury-gold/5" 
                        : "border-white/5 bg-[#111]/45 text-lux-text/80 hover:border-white/15 hover:bg-[#131313]"
                    }`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 shrink-0 rounded-full ${
                      isSelected 
                        ? "border-luxury-gold/50 text-luxury-gold bg-luxury-gold/10 shadow-[0_0_8px_rgba(200,165,90,0.2)]" 
                        : "border-white/10 text-luxury-gold/60 bg-white/[0.02] group-hover:text-luxury-gold group-hover:border-luxury-gold/30 group-hover:bg-luxury-gold/5"
                    }`}>
                      {prop.icon}
                    </div>
                    <span className="font-serif text-xs sm:text-sm font-light uppercase tracking-wider block transition-colors duration-300">
                      {prop.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Selected Interactive Proposition Expansion Card (Mimicking Industries styling) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="border border-white/5 bg-[#111]/40 p-6 sm:p-10 relative overflow-hidden rounded-sm"
            >
              {/* Absolute design aesthetic background watermark */}
              <div className="absolute right-6 top-6 opacity-[0.03] sm:opacity-[0.06] text-luxury-gold pointer-events-none">
                <Fingerprint size={160} strokeWidth={0.5} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                
                {/* Left Column: Core Identity and Target Metric */}
                <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-white/5 lg:pr-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-luxury-gold/30 bg-luxury-gold/5 flex items-center justify-center text-luxury-gold rounded-full">
                        {selectedProp.icon}
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase text-luxury-gold tracking-widest block">
                          Core Pillar Proposition
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-lux-text font-normal leading-tight">
                          {selectedProp.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-lux-text/50 font-light font-mono leading-relaxed uppercase">
                      {selectedProp.tagline}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-4">
                    <span className="text-[10px] text-lux-text/40 font-mono uppercase block">Measurable Impact Index</span>
                    <span className="text-xl sm:text-2xl font-serif font-light text-luxury-gold flex items-center gap-2 mt-1">
                      <TrendingUp size={18} />
                      {selectedProp.impact}
                    </span>
                  </div>
                </div>

                {/* Right Column: Comparative Audit Breakdown */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-lux-text/70 font-light leading-relaxed">
                      {selectedProp.description}
                    </p>
                  </div>

                  {/* Comparative Matrix Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    
                    <div className="p-4 bg-red-950/5 border border-red-900/10 rounded-sm">
                      <span className="font-mono text-[8px] text-red-400 font-bold tracking-widest block uppercase mb-1">
                        Typical Agency Deficit
                      </span>
                      <p className="text-xs text-lux-text/60 leading-relaxed font-light">
                        {selectedProp.deficit}
                      </p>
                    </div>

                    <div className="p-4 bg-emerald-950/10 border border-emerald-900/10 rounded-sm">
                      <span className="font-mono text-[8px] text-emerald-400 font-bold tracking-widest block uppercase mb-1">
                        ViralVelvet Optimization
                      </span>
                      <p className="text-xs text-lux-text/80 leading-relaxed font-light">
                        {selectedProp.optimization}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Assurance */}
                  <div className="flex items-center gap-1.5 text-[10px] text-luxury-gold font-mono pt-4">
                    <span>Performance engineering integrated as standard.</span>
                    <ArrowRight size={12} />
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Statement Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-16 text-center border-t border-white/5 pt-10"
          >
            <p className="text-sm md:text-base italic text-lux-text/50 font-serif">
              "We don't believe in 'set and forget' campaigns. Every campaign is continuously monitored, tested, and optimized to deliver better performance over time."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
