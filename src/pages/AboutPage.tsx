import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Compass, Anchor, Target, Eye, Globe } from "lucide-react";

export default function AboutPage() {
  const manifestoPoints = [
    {
      icon: <Anchor className="w-5 h-5 text-luxury-gold" />,
      title: "Roster Exclusivity",
      desc: "We restrict our operational bandwidth to a maximum of 15 active client partnerships. We do not maintain standard account executives; our primary partners work directly on your brand's growth architecture."
    },
    {
      icon: <Target className="w-5 h-5 text-luxury-gold" />,
      title: "Absolute Alignment",
      desc: "We reject typical retainer models that encourage stagnation. Our financial compensation structures are directly tied to documented client performance metrics and scalable ROI parameters."
    },
    {
      icon: <Compass className="w-5 h-5 text-luxury-gold" />,
      title: "Scientific Discipline",
      desc: "Desire is a science. Every creative concept we deploy is a hypothesis tested against high-converting statistical parameters. We value data feedback over creative vanity."
    }
  ];

  const leaders = [
    {
      name: "Debasis Barik",
      title: "Founder & Chief Growth Architect",
      bio: "Debasis is the visionary architect behind ViralVelvet's performance marketing engine. With a profound expertise in scaling high-intent digital acquisition funnels and a background in strategic brand growth, he guides the agency's mission to transform advertising into predictable revenue for elite brands.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const offices = [
    {
      city: "HEAD OFFICE (HYDERABAD)",
      coordinates: "17.5332° N, 78.3688° E",
      address: "Villa no. 48, Mythri Lake view housing society, Mallampet, Bachupally, Hyderabad, Telangana 502325",
      contact: "Phone: +91 63024 15865"
    }
  ];

  return (
    <div id="about-page" className="relative pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 z-10">
      
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
            THE PHILOSOPHY & CREED
          </span>
        </motion.div>
        
        <h1 className="display-serif text-4xl sm:text-5xl md:text-6xl text-lux-text font-light tracking-tight leading-[1.1]">
          The Sovereign Creed: <br />
          <span className="italic text-luxury-gold">Absolute Standards of Execution.</span>
        </h1>

        <p className="text-sm sm:text-base text-lux-text/75 font-sans font-light leading-relaxed max-w-2xl">
          ViralVelvet was founded because digital advertising has become lazy. We reject generic templates, low-performing strategies, and agencies that hide behind ambiguous metrics. We build elite engines for brands that demand perfection.
        </p>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative aspect-[21/9] w-full overflow-hidden border border-white/5 bg-neutral-900 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
            alt="ViralVelvet Strategy Studio"
            className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gold">
              WHERE STRATEGY MEETS SCALE
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. Manifesto Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {manifestoPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-white/5 bg-black/30 p-8 flex flex-col gap-6"
          >
            <div className="p-3 bg-white/2 border border-white/5 rounded-none w-fit">
              {point.icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-lux-text font-medium">{point.title}</h3>
              <p className="text-xs sm:text-sm text-lux-text/70 leading-relaxed font-sans font-light">
                {point.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Leadership profiles */}
      <div className="space-y-12 mb-24">
        <div className="space-y-3 max-w-xl">
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-luxury-gold">
            DIRECTORS & PARTNERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lux-text font-light tracking-tight">
            The Founders of <span className="italic text-luxury-gold">ViralVelvet</span>
          </h2>
          <p className="text-xs text-lux-text/55 leading-relaxed font-sans font-light">
            We are operators, not coordinators. Meet the partners who architect every growth framework and campaign system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl">
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-white/5 bg-black/40 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start transition-all hover:border-luxury-gold/20"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-none overflow-hidden bg-neutral-900 border border-white/10 shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3 flex-grow">
                <div>
                  <h3 className="font-serif text-xl text-white font-medium">{leader.name}</h3>
                  <p className="font-mono text-[8.5px] text-luxury-gold uppercase tracking-widest">{leader.title}</p>
                </div>
                <p className="text-xs text-lux-text/75 leading-relaxed font-sans font-light">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Global Coordinates Section */}
      <div className="space-y-12">
        <div className="space-y-3 max-w-xl">
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-luxury-gold">
            HEADQUARTERS COORDINATES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lux-text font-light tracking-tight">
            Our Central <span className="italic text-luxury-gold">Sovereign Headquarters</span>
          </h2>
          <p className="text-xs text-lux-text/55 leading-relaxed font-sans font-light">
            Our primary base of operations to support global performance marketing architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/5 bg-black/40 p-6 sm:p-8 space-y-4 relative group hover:border-luxury-gold/30 transition-all duration-500"
            >
              <div className="absolute top-6 right-6 font-mono text-[8px] text-luxury-gold/30 group-hover:text-luxury-gold transition-colors">
                <Globe className="w-4 h-4 animate-spin-slow" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-xl text-lux-text tracking-wider group-hover:text-luxury-gold transition-colors duration-300">
                  {office.city}
                </h3>
                <span className="font-mono text-[7px] text-lux-text/40 tracking-widest block uppercase">
                  {office.coordinates}
                </span>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4 font-sans font-light text-xs text-lux-text/70 leading-relaxed">
                <p className="leading-relaxed">{office.address}</p>
                <p className="font-mono text-[9px] text-luxury-gold/80 hover:text-luxury-gold transition-colors pt-2">
                  {office.contact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
