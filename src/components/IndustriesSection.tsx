import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Compass, 
  HeartPulse, 
  Factory, 
  Hammer, 
  Computer, 
  Briefcase, 
  Coffee, 
  GraduationCap, 
  Car, 
  ShoppingBag, 
  Gem, 
  Shirt, 
  Percent, 
  Landmark, 
  Store,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu
} from "lucide-react";

interface IndustryItem {
  name: string;
  icon: React.ReactNode;
  playbook: string;
  roi: string;
  channel: string;
}

export default function IndustriesSection() {
  const industries: IndustryItem[] = [
    { 
      name: "Real Estate", 
      icon: <Building2 size={16} />,
      playbook: "Geo-targeted acquisition campaigns for luxury estates, pairing qualified affluent buyers with agents via customized dynamic lead pipelines.",
      roi: "5.8x - 8.2x",
      channel: "Meta + Google Search"
    },
    { 
      name: "Architecture & Design", 
      icon: <Compass size={16} />,
      playbook: "High-end visual aesthetic portfolios with custom multi-stage video sequences designed to win multi-million dollar design contracts.",
      roi: "4.5x - 6.0x",
      channel: "Instagram & Pinterest Ads"
    },
    { 
      name: "Healthcare", 
      icon: <HeartPulse size={16} />,
      playbook: "Compliance-vetted localized acquisition funnels engineered to drive appointment volumes for high-value private medical clinics.",
      roi: "3.8x - 5.5x",
      channel: "Google Ads + Maps"
    },
    { 
      name: "Manufacturing", 
      icon: <Factory size={16} />,
      playbook: "Account-based B2B content funnels utilizing professional search triggers to lock down long-term supplier and dealer networks.",
      roi: "8.0x - 12.0x",
      channel: "LinkedIn Ads + Retargeting"
    },
    { 
      name: "Construction", 
      icon: <Hammer size={16} />,
      playbook: "Hyper-localized lead capture systems designed to command high-ticket residential renovations and commercial bids.",
      roi: "5.0x - 7.5x",
      channel: "Local Search + Facebook Ads"
    },
    { 
      name: "Technology & SaaS", 
      icon: <Computer size={16} />,
      playbook: "Interactive calculator funnels, trial retention sequencing, and product-led signups engineered to compress CAC drastically.",
      roi: "6.5x - 9.0x",
      channel: "Google Search + LinkedIn"
    },
    { 
      name: "Professional Services", 
      icon: <Briefcase size={16} />,
      playbook: "High-authority thought-leadership campaigns paired with rapid-booking funnels for elite advisory and legal firms.",
      roi: "4.8x - 6.8x",
      channel: "LinkedIn Ads + Google Search"
    },
    { 
      name: "Hospitality", 
      icon: <Coffee size={16} />,
      playbook: "Immersive visual sensory triggers combined with automated reservation sequencing to keep table occupancy and bookings full.",
      roi: "5.2x - 7.8x",
      channel: "Instagram Ads + local SEO"
    },
    { 
      name: "Education", 
      icon: <GraduationCap size={16} />,
      playbook: "Information-rich interactive enrollment sequences, designed to capture prospective student interest and parent inquiries.",
      roi: "3.5x - 5.0x",
      channel: "Meta Ads + YouTube Ads"
    },
    { 
      name: "Automotive", 
      icon: <Car size={16} />,
      playbook: "Hyper-targeted dealership campaigns optimizing VDP views, trade-in valuations, and automated test-drive bookings.",
      roi: "6.0x - 9.5x",
      channel: "Google Performance Max"
    },
    { 
      name: "Luxury Retail", 
      icon: <ShoppingBag size={16} />,
      playbook: "Cinematic digital catalog experiences, exclusive product drop registrations, and ultra-high-retention checkout systems.",
      roi: "7.0x - 11.2x",
      channel: "Social Commerce + Meta Ads"
    },
    { 
      name: "Jewellery", 
      icon: <Gem size={16} />,
      playbook: "Macro jewelry studio photography and heritage storytelling paired with high-income bracket lookalike targeting.",
      roi: "8.5x - 14.0x",
      channel: "Meta Ads + Pinterest"
    },
    { 
      name: "Fashion", 
      icon: <Shirt size={16} />,
      playbook: "Dynamic lifestyle campaign rotations, instant social validation overlays, and personalized sizing-friendly conversion flows.",
      roi: "5.5x - 8.0x",
      channel: "TikTok Ads + Meta Ads"
    },
    { 
      name: "Finance", 
      icon: <Landmark size={16} />,
      playbook: "Vetted lead generation engines prioritizing safety and compliance, paired with interactive calculator rewards.",
      roi: "4.2x - 6.5x",
      channel: "Google Ads + LinkedIn"
    },
    { 
      name: "eCommerce", 
      icon: <Percent size={16} />,
      playbook: "Multi-channel inventory integration feeds, aggressive dynamic product ads, and fully-optimized high-frequency cart recuperation.",
      roi: "6.5x - 10.0x",
      channel: "Meta Ads + Google Shopping"
    },
    { 
      name: "Local Service Businesses", 
      icon: <Store size={16} />,
      playbook: "High-intent local map authority captures, combined with automated immediate text-back triggers for maximum booking rates.",
      roi: "5.0x - 8.5x",
      channel: "Local Service Ads + GMB"
    }
  ];

  // Split industries list into two separate lists for the dual scrolling marquee rows
  const firstRow = industries.slice(0, 8);
  const secondRow = industries.slice(8);

  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(industries[10]); // Default to Luxury Retail

  return (
    <section id="industries" className="relative py-28 bg-transparent overflow-hidden border-b border-white/5">
      
      {/* Inline styles for infinite horizontal marquee scroll animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>

      {/* Edge linear fade gradients to make the scrolling carousel beautifully fade out on boundaries */}
      <div className="absolute left-0 top-0 h-full w-[100px] sm:w-[220px] bg-gradient-to-r from-lux-bg to-transparent z-15 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-[100px] sm:w-[220px] bg-gradient-to-l from-lux-bg to-transparent z-15 pointer-events-none" />

      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-velvet-red/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
            VERSATILE DOMAIN EXPERTISE
          </span>
          <h2 className="display-serif text-3xl md:text-5xl text-lux-text leading-tight">
            Industries We <span className="font-light italic text-luxury-gold">Help Scale</span>
          </h2>
          <p className="text-sm md:text-base text-lux-text/60 font-light max-w-xl">
            Click on any scrolling sector to review the engineered marketing blueprint we deploy to scale its revenue.
          </p>
        </div>

        {/* Dual Auto-Scrolling Carousel Container */}
        <div className="space-y-6 select-none relative mb-16 overflow-hidden">
          
          {/* Row 1: Scrolling Left */}
          <div className="relative flex overflow-x-hidden py-2">
            <div className="flex gap-4 w-max animate-scroll-left hover:[animation-play-state:paused] cursor-pointer">
              {/* Double up the row array to achieve seamless infinite scrolling */}
              {[...firstRow, ...firstRow].map((ind, idx) => {
                const isSelected = selectedIndustry.name === ind.name;
                return (
                  <div
                    key={`${ind.name}-${idx}`}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`flex items-center gap-3.5 px-6 py-4 border transition-all duration-300 min-w-[225px] sm:min-w-[270px] cursor-pointer group rounded-sm ${
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
                      {ind.icon}
                    </div>
                    <span className="font-serif text-xs sm:text-sm font-light uppercase tracking-wider block transition-colors duration-300">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="relative flex overflow-x-hidden py-2">
            <div className="flex gap-4 w-max animate-scroll-right hover:[animation-play-state:paused] cursor-pointer">
              {/* Double up the row array to achieve seamless infinite scrolling */}
              {[...secondRow, ...secondRow].map((ind, idx) => {
                const isSelected = selectedIndustry.name === ind.name;
                return (
                  <div
                    key={`${ind.name}-${idx}`}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`flex items-center gap-3.5 px-6 py-4 border transition-all duration-300 min-w-[225px] sm:min-w-[270px] cursor-pointer group rounded-sm ${
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
                      {ind.icon}
                    </div>
                    <span className="font-serif text-xs sm:text-sm font-light uppercase tracking-wider block transition-colors duration-300">
                      {ind.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Selected Interactive Blueprint Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="border border-white/5 bg-[#111]/40 p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Absolute positioning design accent */}
            <div className="absolute right-6 top-6 opacity-5 sm:opacity-10 text-luxury-gold">
              <Cpu size={140} strokeWidth={0.5} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Key Metadata */}
              <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-white/5 lg:pr-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-luxury-gold/30 bg-luxury-gold/5 flex items-center justify-center text-luxury-gold">
                    {selectedIndustry.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase text-luxury-gold tracking-widest block">
                      SECTOR PROFILE
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-lux-text font-normal">
                      {selectedIndustry.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-lux-text/40 font-mono uppercase block">Target ROAS Index</span>
                    <span className="text-lg font-serif font-bold text-luxury-gold flex items-center gap-1.5 mt-0.5">
                      <TrendingUp size={16} />
                      {selectedIndustry.roi}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-lux-text/40 font-mono uppercase block">Primary Scale Channels</span>
                    <span className="text-xs font-mono font-medium text-lux-text/90 mt-0.5 block">
                      {selectedIndustry.channel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Playbook Narrative */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-luxury-gold" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-lux-text/60 block">
                    VIRALVELVET GROWTH PLAYBOOK
                  </span>
                </div>
                
                <p className="font-serif text-lg sm:text-2xl font-light text-lux-text/90 leading-relaxed">
                  "{selectedIndustry.playbook}"
                </p>

                <div className="flex items-center gap-1.5 text-[10px] text-luxury-gold font-mono pt-4 border-t border-white/5">
                  <span>Engineered with 100% compliant data structures. Ready to deploy.</span>
                  <ArrowRight size={12} />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
