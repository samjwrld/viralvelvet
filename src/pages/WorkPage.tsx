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
      id: "obsidian",
      category: "ecommerce",
      title: "The Obsidian Campaign",
      subtitle: "Full-Funnel Scaling for Premium Apparel Heritage Brand",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      roas: "9.2x",
      revenue: "₹118 Crores",
      spend: "₹12.8 Crores",
      lift: "+114% Growth",
      challenge: "The client was struggling with pixel attribution degradation post-iOS14, causing erratic ROAS and halting vertical scaling on Meta.",
      strategy: "We built a first-party server-side tracking environment linking Meta CAPI directly with Shopify, backed by deep-desire creative angles emphasizing heritage craftsmanship.",
      execution: [
        "Server-Side Conversions API installation",
        "Meta dynamic catalog sorting algorithms",
        "30+ high-fidelity video asset hook iterations weekly",
        "Custom checkout optimization that increased CVR by 34%"
      ]
    },
    {
      id: "aether",
      category: "luxury",
      title: "Aether Skincare Global Launch",
      subtitle: "Positioning and Direct Acquisition for High-End Bio-Tech Cosmetics",
      image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=800&auto=format&fit=crop",
      roas: "5.4x",
      revenue: "₹56.6 Crores",
      spend: "₹10.4 Crores",
      lift: "+220,000 Customers",
      challenge: "Launching a high-end cream priced at $240/jar required educating cold audiences and constructing immense perceived prestige in saturated markets.",
      strategy: "We styled a custom multi-step editorial experience showing deep scientific validation, targeted at ultra-high affinity cohorts via premium static ads.",
      execution: [
        "A/B multivariate scientific copy testing",
        "Editorial-magazine styled pre-cart landing pages",
        "Dynamic high-net-worth cohort targeting",
        "Micro-influencer whitelist advertising funnel"
      ]
    },
    {
      id: "helios",
      category: "leadgen",
      title: "Helios Aviation Flight Chartering",
      subtitle: "Ultra-High-Net-Worth Lead Generation System",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop",
      roas: "12.8x (ROI)",
      revenue: "₹69.7 Crores",
      spend: "₹5.4 Crores",
      lift: "42 Private Jet Bookings",
      challenge: "Private jet bookings require UHNW client acquisition, where standard advertising leads to high wastage and fake, low-quality submissions.",
      strategy: "We engineered a secure multi-step verification questionnaire using LinkedIn ads and executive profiling, restricting submissions to vetted executives.",
      execution: [
        "Corporate database firmographics targeting on LinkedIn",
        "Strict background validation through automated APIs",
        "High-fidelity visual guides targeting business leaders",
        "Dedicated concierge scheduling calendar interface"
      ]
    },
    {
      id: "titan",
      category: "saas",
      title: "Titan Capital Management CRM",
      subtitle: "B2B SaaS Growth Engine Scale for Fintech Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      roas: "4.1x LTV:CAC",
      revenue: "₹25.9 Crores ARR",
      spend: "₹6.3 Crores",
      lift: "+165% Demo Bookings",
      challenge: "High customer acquisition costs (CAC) on cold search ads were draining the SaaS company's capital without converting qualified enterprise leads.",
      strategy: "We structured a high-intent search capture framework matching detailed competitor comparisons, backed by customized interactive product interactive templates.",
      execution: [
        "High-intent structural search campaign building",
        "Custom comparison framework landing page system",
        "Automated product tour custom lead magnet",
        "LinkedIn retargeting focused on trial dropoffs"
      ]
    },
    {
      id: "valhalla",
      category: "luxury",
      title: "The Valhalla Reserve Residences",
      subtitle: "Exquisite Real Estate Acquisition Framework",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      roas: "15.4x (Est ROI)",
      revenue: "₹348 Crores",
      spend: "₹7.8 Crores",
      lift: "88% Vetted Inquiry Rate",
      challenge: "Attracting high-net-worth real estate buyers to properties starting at $4.5M without relying on slow traditional luxury physical media brokers.",
      strategy: "We designed beautiful cinematic narrative video sequences paired with a private, interactive portfolio view that opened with custom verification codes.",
      execution: [
        "Cinematic video ad production with premium lifestyle mapping",
        "Private digital residential gate matching verification",
        "Dynamic geo-targeting based on high-income postcodes",
        "Direct custom CRM database routing integration"
      ]
    },
    {
      id: "kronos",
      category: "ecommerce",
      title: "Kronos Heritage Watchmaker",
      subtitle: "Precision Media Scaling & Creative Attribution",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
      roas: "7.8x",
      revenue: "₹44.3 Crores",
      spend: "₹5.6 Crores",
      lift: "+84% Organic Search Boost",
      challenge: "A heritage watch manufacturer wanted to expand globally but lacked direct-to-consumer (DTC) digital maturity, resulting in unoptimized international ad spend.",
      strategy: "We established regional performance campaigns paired with localized multi-currency landing pages and localized creative assets emphasizing watch detail.",
      execution: [
        "Global multi-currency geo-targeting setups",
        "Ultra-high-definition macro detail creative assets",
        "First-party geo-routing landing pages",
        "Secure global fulfillment partner synchronization"
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
