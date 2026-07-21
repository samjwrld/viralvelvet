import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, TrendingUp, Calendar, ArrowRight, ShieldCheck, Database, Award, X, Percent, CheckCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  category: "ecommerce" | "leadgen" | "saas" | "luxury";
  title: string;
  subtitle: string;
  image: string;
  roas: string;
  revenue: string;
  spend: string;
  lift: string;
  challenge: string;
  strategy: string;
  execution: string[];
}

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "ecommerce" | "leadgen" | "saas" | "luxury">("all");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const filters = [
    { label: "All Campaigns", id: "all" },
    { label: "E-Commerce", id: "ecommerce" },
    { label: "High-End Lead Gen", id: "leadgen" },
    { label: "B2B SaaS", id: "saas" },
    { label: "Heritage Luxury", id: "luxury" },
  ] as const;

  const caseStudies: CaseStudy[] = [
    {
      id: "koncept-house",
      category: "luxury",
      title: "The Koncept House",
      subtitle: "Modernist Interiors Redefined",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      roas: "11.2x",
      revenue: "₹42 Crores",
      spend: "₹3.8 Crores",
      lift: "500+ Qualified Leads",
      challenge: "A premier interior design studio struggling to capture high-intent luxury project inquiries in a crowded digital space.",
      strategy: "Architected a high-performance visual funnel using Meta Ads and a conversion-optimized portfolio to filter for high-budget projects.",
      execution: [
        "High-intent lead generation strategy",
        "Meta Ads conversion optimization",
        "Visual portfolio lead magnets",
        "Strategic high-budget audience targeting"
      ]
    },
    {
      id: "w-design-studio",
      category: "luxury",
      title: "W Design Studio",
      subtitle: "Visionary Architecture",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800&auto=format&fit=crop",
      roas: "8.4x",
      revenue: "₹450 Crores+",
      spend: "₹5.4 Crores",
      lift: "500+ Qualified Leads",
      challenge: "Expanding the studio's project pipeline to include more international and high-value commercial architectural commissions.",
      strategy: "Leveraged LinkedIn executive profiling and Google Search capture to connect visionaries with specialized architectural expertise.",
      execution: [
        "LinkedIn executive targeting",
        "Google Search high-intent capture",
        "Specialized architecture lead funnel",
        "Strategic brand re-positioning"
      ]
    },
    {
      id: "pearl-white",
      category: "luxury",
      title: "Pearl White Designs",
      subtitle: "Modern Interior Aesthetics",
      image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=800&auto=format&fit=crop",
      roas: "7.2x",
      revenue: "₹18 Crores",
      spend: "₹2.5 Crores",
      lift: "500+ Qualified Leads",
      challenge: "A premier interior studio looking to capture high-intent luxury design inquiries without relying on generic platforms.",
      strategy: "Deployed high-conversion visual lead magnets and targeted Meta campaigns to secure 500+ qualified interior design inquiries.",
      execution: [
        "Interior design project targeting",
        "High-conversion visual lead magnets",
        "Targeted Meta storytelling funnels",
        "Inquiry quality optimization"
      ]
    },
    {
      id: "cureforever",
      category: "ecommerce",
      title: "Cureforever.in",
      subtitle: "Nutraceutical Growth Scale",
      image: "https://images.unsplash.com/photo-1576086213369-97a306dca664?q=80&w=800&auto=format&fit=crop",
      roas: "6.4x",
      revenue: "₹28 Crores",
      spend: "₹4.4 Crores",
      lift: "500+ Qualified Leads",
      challenge: "Scaling a national nutraceutical brand while maintaining a low CPA and high-quality lead flow across specialized product lines.",
      strategy: "Built a robust performance engine utilizing algorithmic optimization and data-driven creative testing for the health sector.",
      execution: [
        "Nutraceutical sales optimization",
        "Data-driven creative testing",
        "Health sector scaling",
        "Performance marketing engine build"
      ]
    },
    {
      id: "patels-group",
      category: "luxury",
      title: "Patel's Group",
      subtitle: "Premium B2B & B2C Enterprise",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
      roas: "14.5x (Est)",
      revenue: "₹280 Crores+",
      spend: "₹6.8 Crores",
      lift: "500+ Qualified Leads",
      challenge: "Securing high-value leads for a diversified B2B and B2C enterprise group in competitive markets.",
      strategy: "Engineered hyper-targeted audience segmentation and premium corporate creative assets to attract qualified enterprise and consumer leads.",
      execution: [
        "B2B & B2C lead capture strategy",
        "Premium corporate creative production",
        "Enterprise-grade audience segmentation",
        "Strategic market expansion"
      ]
    },
    {
      id: "bharat-ip",
      category: "saas",
      title: "Bharat IP Defense",
      subtitle: "Strategic IP Protection",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      roas: "9.8x (ROI)",
      revenue: "₹34 Crores",
      spend: "₹3.5 Crores",
      lift: "500+ Qualified Leads",
      challenge: "The defense sector requires extreme precision in targeting; standard advertising often leads to irrelevant inquiries and security risks.",
      strategy: "Constructed a dual-layer strategy focusing on high-level security professionals and legal executives via LinkedIn and private networks.",
      execution: [
        "Defense sector strategic targeting",
        "Legal & IP professional profiling",
        "Secure inquiry validation funnels",
        "Dual-layer B2B strategy execution"
      ]
    },
    {
      id: "sree-sai",
      category: "leadgen",
      title: "Sree Sai Transport Togo",
      subtitle: "Global Logistics Excellence",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      roas: "10.2x",
      revenue: "₹52 Crores",
      spend: "₹5.1 Crores",
      lift: "500+ Qualified Leads",
      challenge: "Streamlining high-volume logistics inquiries and shipping requests across West African transport corridors.",
      strategy: "Implemented a performance marketing engine that delivered consistent high-intent shipping leads and optimized the inquiry-to-booking pipeline.",
      execution: [
        "Global logistics lead streamlining",
        "High-intent shipping request capture",
        "Logistics performance marketing engine",
        "West African market corridor targeting"
      ]
    }
  ];

  const filteredStudies = selectedFilter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.category === selectedFilter);

  return (
    <div id="work-page" className="relative pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 z-10">
      
      {/* 1. Header Area */}
      <div className="max-w-3xl mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-velvet-red/25 border border-luxury-gold/20 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-luxury-gold">
            CASE STUDIES & CAMPAIGNS
          </span>
        </motion.div>
        
        <h1 className="display-serif text-4xl sm:text-5xl md:text-6xl text-lux-text font-light tracking-tight leading-[1.1]">
          Realized Value: <br />
          <span className="italic text-luxury-gold">Engineered for Absolute Scale.</span>
        </h1>

        <p className="text-sm sm:text-base text-lux-text/75 font-sans font-light leading-relaxed max-w-2xl">
          We believe in mathematical verification. View our documented case studies detailing how we turn advertising budgets into robust, predictable client capital assets.
        </p>
      </div>

      {/* 2. Filter Tabs (Horizontal scrolling on tiny mobiles) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-white/5 mb-12 scrollbar-none">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`whitespace-nowrap px-5 py-2.5 font-mono text-[9px] uppercase tracking-widest border transition-all duration-300 ${
              selectedFilter === filter.id
                ? "bg-luxury-gold/10 border-luxury-gold text-luxury-gold"
                : "border-white/5 text-lux-text/60 hover:text-lux-text hover:border-white/20 bg-transparent"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* 3. Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredStudies.map((study, index) => (
            <motion.div
              layout
              key={study.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative flex flex-col justify-between border border-white/5 bg-black/45 hover:border-luxury-gold/30 overflow-hidden cursor-pointer"
              onClick={() => setActiveStudy(study)}
            >
              {/* Image Container with high contrast overlay */}
              <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-widest bg-velvet-red px-2 py-0.5 text-lux-text z-20">
                  {study.category.toUpperCase()}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-lux-text group-hover:text-luxury-gold transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-[10px] font-mono text-lux-text/40 uppercase tracking-wider line-clamp-1">
                    {study.subtitle}
                  </p>
                </div>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-2 border-t border-b border-white/5 py-4">
                  <div>
                    <span className="font-mono text-[7px] text-lux-text/30 block">ROAS</span>
                    <span className="font-mono text-xs text-luxury-gold font-medium">{study.roas}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[7px] text-lux-text/30 block">ATTRI. VALUE</span>
                    <span className="font-mono text-xs text-lux-text/90 font-medium">{study.revenue}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[7px] text-lux-text/30 block">VELOCITY</span>
                    <span className="font-mono text-xs text-emerald-400 font-medium">{study.lift}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-luxury-gold/70 group-hover:text-luxury-gold transition-colors">
                    Examine Architecture
                  </span>
                  <ArrowRight size={12} className="text-luxury-gold/50 group-hover:text-luxury-gold group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 4. Sliding Interactive Details Drawer Panel */}
      <AnimatePresence>
        {activeStudy && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setActiveStudy(null)}
            >
              {/* Centered Large Premium Modal Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-[#0b0b0b] border border-luxury-gold/30 max-w-4xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-10 shadow-2xl scrollbar-thin"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveStudy(null)}
                  className="absolute top-4 right-4 text-lux-text/60 hover:text-luxury-gold transition-colors p-2"
                >
                  <X size={20} />
                </button>

                {/* Banner image with header */}
                <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-none overflow-hidden bg-neutral-900 mb-8 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                  <img
                    src={activeStudy.image}
                    alt={activeStudy.title}
                    className="w-full h-full object-cover opacity-70"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20 space-y-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest bg-velvet-red px-2 py-0.5 text-lux-text">
                      {activeStudy.category.toUpperCase()}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-tight">
                      {activeStudy.title}
                    </h2>
                    <p className="text-[10px] sm:text-xs font-mono text-luxury-gold uppercase tracking-widest">
                      {activeStudy.subtitle}
                    </p>
                  </div>
                </div>

                {/* Performance Metrics Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/2 border border-white/5 p-6 mb-8 text-center">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-lux-text/40 uppercase block">ATTRIBUTABLE REVENUE</span>
                    <span className="text-xl sm:text-2xl font-mono text-luxury-gold font-light">{activeStudy.revenue}</span>
                  </div>
                  <div className="space-y-1 border-l border-white/5">
                    <span className="font-mono text-[8px] text-lux-text/40 uppercase block">TOTAL AD SPEND</span>
                    <span className="text-xl sm:text-2xl font-mono text-lux-text/80 font-light">{activeStudy.spend}</span>
                  </div>
                  <div className="space-y-1 border-l border-white/5">
                    <span className="font-mono text-[8px] text-lux-text/40 uppercase block">BLENDED ROAS</span>
                    <span className="text-xl sm:text-2xl font-mono text-luxury-gold font-semibold">{activeStudy.roas}</span>
                  </div>
                  <div className="space-y-1 border-l border-white/5">
                    <span className="font-mono text-[8px] text-lux-text/40 uppercase block">GROWTH VELOCITY</span>
                    <span className="text-xl sm:text-2xl font-mono text-emerald-400 font-light">{activeStudy.lift}</span>
                  </div>
                </div>

                {/* Narrative Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-luxury-gold">THE STRATEGIC CHALLENGE</h4>
                      <p className="text-xs sm:text-sm text-lux-text/80 leading-relaxed font-sans font-light">
                        {activeStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-luxury-gold">THE SCALE METHOD</h4>
                      <p className="text-xs sm:text-sm text-lux-text/80 leading-relaxed font-sans font-light">
                        {activeStudy.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Execution items checklist */}
                  <div className="md:col-span-5 space-y-4 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6">
                    <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-luxury-gold">EXECUTIONS DEPLOYED</h4>
                    <ul className="space-y-3">
                      {activeStudy.execution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-lux-text/70 font-sans font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[10px] font-mono text-lux-text/40 text-center sm:text-left">
                    All performance parameters verified under secure audit ledger protocols.
                  </p>
                  <button
                    onClick={() => setActiveStudy(null)}
                    className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white px-6 py-2.5 text-[9px] font-mono tracking-widest uppercase text-lux-text transition-colors duration-300"
                  >
                    Close Architecture
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
