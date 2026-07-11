import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, TrendingUp, DollarSign } from "lucide-react";

interface ServicesPageProps {
  onOpenBooking: () => void;
}

export default function ServicesPage({ onOpenBooking }: ServicesPageProps) {
  // Calculator States
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const [currentRoas, setCurrentRoas] = useState(2.5);
  const [averageOrderValue, setAverageOrderValue] = useState(120);

  // Computed Values
  const currentRevenue = monthlySpend * currentRoas;
  const targetRoas = currentRoas * 1.48; // Assume 48% lift with ViralVelvet engine
  const projectedRevenue = monthlySpend * targetRoas;
  const netLift = projectedRevenue - currentRevenue;
  const ROImultiplier = ((netLift / monthlySpend) * 100).toFixed(0);

  const servicesList = [
    {
      id: "media-buying",
      icon: <TrendingUp className="w-6 h-6 text-luxury-gold" />,
      tag: "PERFORMANCE",
      title: "Omnichannel Media Acquisition",
      desc: "Our media buying engine is built on absolute statistical rigor. We engineer high-yield campaigns on Meta, Google, and LinkedIn that systematically out-compete market benchmarks.",
      features: [
        "First-party database targeting & offline conversions integration",
        "Creative-led testing frameworks with rapid iteration cycles",
        "Predictive bid-management and automated scaling scripts",
        "Weekly strategic cohort analysis & attribution audit",
      ],
      metrics: "Average Client ROAS: 6.8x",
    },
    {
      id: "creative",
      icon: <Sparkles className="w-6 h-6 text-luxury-gold" />,
      tag: "CREATIVE INTEL",
      title: "High-Conversions Creative Production",
      desc: "Desire is a science. We produce studio-grade high-fidelity vertical video hooks, high-impact static frames, and copy that arrests attention and initiates action.",
      features: [
        "Psychology-anchored vertical video Hooks",
        "Premium copywriting designed for elite audiences",
        "Dynamic creative assets customized per target demographic",
        "Advanced visual assets matching heritage luxury standards",
      ],
      metrics: "Creative CTR Lift: +114%",
    },
    {
      id: "cro",
      icon: <Zap className="w-6 h-6 text-luxury-gold" />,
      tag: "DIGITAL EXPERIENCE",
      title: "Conversion Rate Optimization (CRO)",
      desc: "Traffic is useless without conversion. We construct hyper-fast, high-converting checkout funnels and custom editorial landing pages designed for frictionless acquisition.",
      features: [
        "Custom Next-Gen editorial landing page construction",
        "One-click friction-free checkout implementations",
        "Behavioral map tracking and conversion leak detection",
        "A/B multivariate landing page testing",
      ],
      metrics: "Average CVR Lift: +45%",
    },
    {
      id: "data-engineering",
      icon: <ShieldCheck className="w-6 h-6 text-luxury-gold" />,
      tag: "DATA SYSTEM",
      title: "Attribution & Server-Side Engineering",
      desc: "Stop flying blind. We build robust server-side measurement frameworks (CAPI, GA4, Custom Server) to track and attribute every dollar of revenue with absolute clarity.",
      features: [
        "Meta Conversions API (CAPI) server-side tracking",
        "First-party server tracking server architectures",
        "Unified agency performance dashboards",
        "Cohort LTV and repurchase cycle analysis",
      ],
      metrics: "Attribution Accuracy: 99.8%",
    },
  ];

  return (
    <div id="services-page" className="relative pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 z-10">
      
      {/* 1. Header Hero Area */}
      <div className="max-w-3xl mb-20 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-velvet-red/25 border border-luxury-gold/20 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-luxury-gold">
            THE SERVICES FRAMEWORK
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-serif text-4xl sm:text-5xl md:text-6xl text-lux-text font-light tracking-tight leading-[1.1]"
        >
          Growth Framework: <br />
          <span className="italic text-luxury-gold">Engineered Luxury Marketing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.25 }}
          className="text-sm sm:text-base text-lux-text/75 font-sans font-light leading-relaxed max-w-2xl"
        >
          We do not guess. We treat digital marketing as a game of mathematics, behavioral psychology, and exquisite design. Explore our five core growth modules engineered to scale ambitious brands.
        </motion.p>
      </div>

      {/* 2. Core Service List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {servicesList.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative border border-white/5 bg-black/40 hover:border-luxury-gold/30 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden"
          >
            {/* Subtle light overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-luxury-gold/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/2 border border-white/5 rounded-none">
                  {service.icon}
                </div>
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-luxury-gold bg-luxury-gold/5 px-2 py-1">
                  {service.tag}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-lux-text group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-lux-text/70 leading-relaxed font-sans font-light">
                  {service.desc}
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-3">
                <p className="font-mono text-[8px] uppercase tracking-widest text-lux-text/40">
                  SYSTEM CAPABILITIES
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-lux-text/80 font-sans font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5 mt-8 pt-6 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold">
                {service.metrics}
              </span>
              <span className="text-[12px] text-lux-text/40 group-hover:text-luxury-gold group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Interactive Budget & ROAS Estimator */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative border border-luxury-gold/20 bg-black/60 p-8 sm:p-12 mb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-radial-at-t from-velvet-red/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column - Slide Controls */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-luxury-gold">
                MATHEMATICAL PREVIEW
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-lux-text tracking-tight font-light">
                Calculate Your <span className="italic text-luxury-gold">Growth Lift</span>
              </h2>
              <p className="text-xs sm:text-sm text-lux-text/60 leading-relaxed font-sans font-light">
                Adjust the parameters below to model the revenue lift ViralVelvet's engineered conversion models and media buying frameworks can deliver to your active campaigns.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Slider 1: Monthly Spend */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] tracking-wider">
                  <span className="text-lux-text/60 uppercase">Monthly Ad Budget</span>
                  <span className="text-luxury-gold font-semibold">₹{monthlySpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                  className="w-full accent-luxury-gold bg-white/5 h-1 appearance-none cursor-pointer outline-none rounded-none"
                />
                <div className="flex justify-between font-mono text-[7.5px] text-lux-text/30 uppercase tracking-widest">
                  <span>₹5K</span>
                  <span>₹250K+</span>
                </div>
              </div>

              {/* Slider 2: Current ROAS */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] tracking-wider">
                  <span className="text-lux-text/60 uppercase">Current Blended ROAS</span>
                  <span className="text-luxury-gold font-semibold">{currentRoas.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(parseFloat(e.target.value))}
                  className="w-full accent-luxury-gold bg-white/5 h-1 appearance-none cursor-pointer outline-none rounded-none"
                />
                <div className="flex justify-between font-mono text-[7.5px] text-lux-text/30 uppercase tracking-widest">
                  <span>1.0x</span>
                  <span>6.0x</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] tracking-wider">
                  <span className="text-lux-text/60 uppercase">Average Order Value (AOV)</span>
                  <span className="text-luxury-gold font-semibold">₹{averageOrderValue}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(parseInt(e.target.value))}
                  className="w-full accent-luxury-gold bg-white/5 h-1 appearance-none cursor-pointer outline-none rounded-none"
                />
                <div className="flex justify-between font-mono text-[7.5px] text-lux-text/30 uppercase tracking-widest">
                  <span>₹20</span>
                  <span>₹500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Beautiful Real-Time Calculations Display Card */}
          <div className="lg:col-span-5 bg-black/60 border border-white/5 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-luxury-gold bg-velvet-red/15 border border-luxury-gold/15 px-2 py-1 inline-block">
                VIRALVELVET ENGINE PROJECTION
              </span>

              {/* Comparative Stats block */}
              <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                <div>
                  <span className="font-mono text-[8px] text-lux-text/40 uppercase block mb-1">
                    CURRENT MONTHLY REVENUE
                  </span>
                  <span className="text-lg sm:text-xl font-mono text-lux-text/80">
                    ₹{currentRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[8px] text-luxury-gold/50 uppercase block mb-1">
                    PROJECTED REVENUE (+48% lift)
                  </span>
                  <span className="text-lg sm:text-xl font-mono text-luxury-gold">
                    ₹{projectedRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>

              {/* Huge Net Lift Counter */}
              <div className="space-y-1">
                <span className="font-mono text-[8px] text-lux-text/40 uppercase block">
                  MONTHLY ATTRIBUTABLE REVENUE LIFT
                </span>
                <div className="text-3xl sm:text-4xl font-serif text-luxury-gold font-light tracking-tight flex items-baseline gap-1 animate-pulse">
                  +₹{netLift.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-xs font-mono text-lux-text/50 uppercase tracking-widest">/mo</span>
                </div>
              </div>

              {/* Relative lift parameters */}
              <div className="bg-white/2 p-3 space-y-1.5 border border-white/5">
                <div className="flex justify-between text-[10px] font-sans font-light">
                  <span className="text-lux-text/50">Target Blended ROAS</span>
                  <span className="font-mono text-luxury-gold font-medium">{targetRoas.toFixed(2)}x</span>
                </div>
                <div className="flex justify-between text-[10px] font-sans font-light">
                  <span className="text-lux-text/50">Simulated Conversion ROAS Lift</span>
                  <span className="font-mono text-emerald-400">+48.2%</span>
                </div>
                <div className="flex justify-between text-[10px] font-sans font-light">
                  <span className="text-lux-text/50">Attributable Campaign Return</span>
                  <span className="font-mono text-luxury-gold font-medium">{ROImultiplier}% Return</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Call Trigger */}
            <button
              onClick={onOpenBooking}
              className="w-full bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/30 text-lux-text py-3 text-[10px] font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 group transition-all duration-300"
            >
              Inquire About Scaling
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-luxury-gold" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 4. Service Inquiry Call to Action Block */}
      <div className="text-center space-y-6 max-w-xl mx-auto py-8">
        <h3 className="font-serif text-2xl text-lux-text font-light">
          Ready to Deploy the Framework?
        </h3>
        <p className="text-xs text-lux-text/60 leading-relaxed font-sans font-light">
          We limit our client portfolio to fifteen luxury and high-growth brands to ensure infinite strategic focus and elite performance.
        </p>
        <button
          onClick={onOpenBooking}
          className="inline-flex bg-transparent hover:bg-white/5 border border-luxury-gold/40 hover:border-luxury-gold px-8 py-4 text-[10px] font-mono tracking-[0.25em] uppercase text-luxury-gold hover:text-lux-text transition-all duration-300"
        >
          Book An Architecture Audit
        </button>
      </div>

    </div>
  );
}
