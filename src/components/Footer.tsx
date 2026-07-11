import { motion } from "motion/react";
import { ALL_SERVICES_LIST } from "../data";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer
      id="main-footer"
      className="bg-transparent border-t border-white/8 pt-20 pb-10 relative overflow-hidden"
    >
      {/* Decorative Golden Ambient Lighting Spot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-velvet-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/8">
          
          {/* Column 1: Brand & Statement */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="display-serif text-3xl text-lux-text tracking-wide">
                Viral<span className="font-light italic text-luxury-gold">Velvet</span>
              </span>
              <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-lux-text/45 mt-1">
                Luxury Marketing. Engineered to Scale.
              </span>
            </div>
            <p className="text-xs text-lux-text/60 leading-relaxed font-sans max-w-sm">
              <strong>ViralVelvet</strong> is a premium performance marketing agency helping businesses scale through Meta Ads, Google Ads, LinkedIn Ads, conversion-focused websites, and data-driven marketing strategies. We build advertising systems that generate qualified leads, increase revenue, and deliver measurable business growth.
            </p>
            <button
              onClick={onOpenBooking}
              className="text-luxury-gold hover:text-lux-text font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 group transition-colors"
            >
              BOOK YOUR STRATEGY CALL
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>

          {/* Column 2: Capabilities / Services */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              {ALL_SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service}>
                  <a
                    href="#/services"
                    className="text-xs text-lux-text/50 hover:text-lux-text transition-colors font-sans hover:translate-x-0.5 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary Capabilities */}
          <div className="space-y-4 md:pt-8 lg:pt-0">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold">
              Performance
            </h4>
            <ul className="space-y-2.5">
              {ALL_SERVICES_LIST.slice(6, 12).map((service) => (
                <li key={service}>
                  <a
                    href="#/services"
                    className="text-xs text-lux-text/50 hover:text-lux-text transition-colors font-sans"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Private Salons (Contact) */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold">
              Corporate Headquarters
            </h4>
            <div className="space-y-4 text-xs font-sans text-lux-text/50">
              <div>
                <p className="text-luxury-gold font-medium font-mono text-[10px] tracking-wider uppercase mb-1">HEAD OFFICE (HYDERABAD)</p>
                <p className="text-lux-text/80 font-normal">Villa no. 48, Mythri Lake view housing society,</p>
                <p className="text-lux-text/60">Mallampet, Bachupally, Hyderabad,</p>
                <p className="text-lux-text/60 font-medium text-luxury-gold/70 pb-3">Telangana 502325</p>
              </div>
              <div className="pt-2 border-t border-white/5 font-mono text-[9px] tracking-widest space-y-1">
                <p>
                  <a href="mailto:concierge@viralvelvet.com" className="text-luxury-gold hover:underline">
                    concierge@viralvelvet.com
                  </a>
                </p>
                <p className="text-lux-text/60">
                  Phone: +91 63024 15865
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Typographic Base Logo */}
        <div className="pt-16 pb-8 text-center select-none opacity-5 hover:opacity-10 transition-opacity duration-1000">
          <h1 className="display-serif text-[11vw] leading-none text-lux-text tracking-widest font-black uppercase">
            V E L V E T
          </h1>
        </div>

        {/* Footer Base bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[9px] font-mono tracking-widest text-lux-text/40 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} VIRALVELVET HOLDINGS LTD. ALL PRIVILEGES RESERVED.</span>
            <span className="hidden md:inline text-white/10">•</span>
            <span>
              HANDCRAFTED BY{" "}
              <motion.a 
                href="https://boldblank.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ff3838] hover:text-[#ff6b6b] transition-colors font-semibold tracking-wider font-mono cursor-pointer"
                style={{
                  textShadow: "0 0 4px rgba(255,56,56,0.6), 0 0 10px rgba(255,56,56,0.4)"
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  textShadow: [
                    "0 0 4px rgba(255,56,56,0.6), 0 0 10px rgba(255,56,56,0.4)",
                    "0 0 8px rgba(255,56,56,0.9), 0 0 20px rgba(255,56,56,0.7), 0 0 30px rgba(255,56,56,0.5)",
                    "0 0 4px rgba(255,56,56,0.6), 0 0 10px rgba(255,56,56,0.4)"
                  ]
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                BOLDBLANK
              </motion.a>
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-luxury-gold transition-colors">PRIVACY CODE</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">TERMS OF EXCLUSIVITY</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">MUTUAL NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
