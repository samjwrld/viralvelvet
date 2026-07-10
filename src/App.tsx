import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUp, ChevronDown, Play, Sparkles } from "lucide-react";

// Components
import Header from "./components/Header";
import VelvetBackground from "./components/VelvetBackground";
import CustomCursor from "./components/CustomCursor";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessTimeline from "./components/ProcessTimeline";
import TestimonialsSection from "./components/TestimonialsSection";
import AgencyInsights from "./components/AgencyInsights";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import BookCallModal from "./components/BookCallModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const activeTexture = "obsidian";

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const { scrollY } = useScroll();
  // Dynamically map scroll distance from 0 to 600px to tracking-tight (-0.02em) to cinematically wide (0.08em)
  const letterSpacing = useTransform(scrollY, [0, 600], ["-0.02em", "0.08em"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const originalTitle = document.title;
    const originalFaviconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    const originalFaviconHref = originalFaviconLink ? originalFaviconLink.href : "";

    const activeTitle = originalTitle;
    const inactiveTitle = "Don't miss the masterpiece... 🖤";
    const inactiveFaviconHref = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23090909' rx='20'/%3E%3Cpath d='M30,35 Q50,65 70,35 M30,45 Q50,75 70,45' fill='none' stroke='%23C8A55A' stroke-width='6' stroke-linecap='round'/%3E%3Ccircle cx='50' cy='65' r='4' fill='%23C8A55A'/%3E%3Ccircle cx='75' cy='25' r='14' fill='%23690C19'/%3E%3Ccircle cx='75' cy='25' r='10' fill='%23DC143C'/%3E%3C/svg%3E";

    const handleVisibilityChange = () => {
      const faviconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (document.hidden) {
        document.title = inactiveTitle;
        if (faviconLink) {
          faviconLink.href = inactiveFaviconHref;
        }
      } else {
        document.title = activeTitle;
        if (faviconLink && originalFaviconHref) {
          faviconLink.href = originalFaviconHref;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div id="viralvelvet-root" className="relative min-h-screen bg-lux-bg text-lux-text selection:bg-velvet-red selection:text-luxury-gold overflow-hidden">
      
      {/* 1. Global Custom Luxury Mouse Cursor */}
      <CustomCursor />

      {/* 2. Full-Screen Interactive Velvet Fabric Background */}
      <VelvetBackground />

      {/* 3. Top Header Navigation Bar */}
      <Header onOpenBooking={openBooking} />

      {/* 4. Luxury Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-7xl mx-auto px-6 md:px-12 z-10"
      >
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 mt-4 sm:mt-8 lg:mt-0">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-velvet-red/25 border border-luxury-gold/20 rounded-full max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping shrink-0" />
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-luxury-gold truncate">
              "Luxury Marketing. Engineered to Scale."
            </span>
          </div>

          {/* Massive Display Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{ letterSpacing }}
            className="display-serif text-4xl min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] sm:leading-[0.95] text-lux-text font-light"
          >
            Marketing That<br className="hidden sm:inline" />{" "}
            <span className="font-light italic text-luxury-gold relative inline-block">
              Commands
              {/* Subtle gold line underneath the word Commands */}
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-luxury-gold/40" />
            </span>{" "}
            Attention.
          </motion.h1>

          {/* Editorial Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-lux-text/70 max-w-2xl mx-auto leading-relaxed font-sans font-light px-2 sm:px-0"
          >
            We create high-performance digital experiences for luxury brands through strategy, creativity and data. Translating sheer status into client acquisition.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary Call to Action */}
            <button
              onClick={openBooking}
              className="w-full sm:w-auto bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/30 text-lux-text px-8 py-4 text-xs font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 group transition-all duration-300 velvet-glow"
            >
              Book Strategy Call
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-luxury-gold" />
            </button>

            {/* Secondary Call to Action */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto relative group bg-transparent border border-white/10 hover:border-white/30 text-lux-text/80 px-8 py-4 text-xs font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-colors duration-300"
            >
              View Our Work
              <span className="text-[12px] group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Quick trust indices */}
          <div className="pt-6 sm:pt-8 flex items-center justify-center gap-4 sm:gap-6 text-[8px] sm:text-[10px] font-mono text-lux-text/40 tracking-wider sm:tracking-widest border-t border-white/5 w-full max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-luxury-gold font-semibold text-[11px] sm:text-xs md:text-sm">$150M+</span>
              <span className="text-center">REVENUE</span>
            </div>
            <div className="w-[1px] h-6 bg-white/5 shrink-0" />
            <div className="flex flex-col items-center">
              <span className="text-luxury-gold font-semibold text-[11px] sm:text-xs md:text-sm">8.4X</span>
              <span className="text-center">AVG ROAS</span>
            </div>
            <div className="w-[1px] h-6 bg-white/5 shrink-0" />
            <div className="flex flex-col items-center">
              <span className="text-luxury-gold font-semibold text-[11px] sm:text-xs md:text-sm">99%</span>
              <span className="text-center">RETENTION</span>
            </div>
          </div>

        </div>

        {/* Scroll Indicator Icon */}
        <motion.div 
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 opacity-60 hover:opacity-100 transition-opacity group"
          whileHover="hover"
          initial="rest"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-luxury-gold group-hover:text-white transition-colors duration-300">
            EXPLORE SERVICES
          </span>
          <motion.div
            variants={{
              rest: { 
                y: [0, 6, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              },
              hover: { 
                y: [0, -6, 0],
                transition: {
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "easeInOut"
                }
              }
            }}
            animate="rest"
            className="text-luxury-gold group-hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>

      </section>

      {/* 5. Luxury Monochrome Infinite Marquee Logos */}
      <ClientsSection />

      {/* 6. Core Services Screens (Meta Ads, Google Ads, LinkedIn, etc.) */}
      <ServicesSection activeTexture={activeTexture} />

      {/* 7. Philosophy / About Manifesto Section */}
      <AboutSection />

      {/* 8. Portfolio Case Studies Sections */}
      <PortfolioSection />

      {/* 9. Connected Process Horizontal Timeline */}
      <ProcessTimeline />

      {/* 10. Customer Testimonials Grid */}
      <TestimonialsSection activeTexture={activeTexture} />

      {/* 10.5. Agency Insights news feed Section */}
      <AgencyInsights />

      {/* 11. Final Conversion CTA Card Section */}
      <CtaSection onOpenBooking={openBooking} />

      {/* 12. Footnotes & Legal Coordinates Directory */}
      <Footer onOpenBooking={openBooking} />

      {/* 13. Application Form Stateful Overlay Modal */}
      <BookCallModal isOpen={isBookingOpen} onClose={closeBooking} />

      {/* 14. Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, borderColor: "rgba(200, 165, 90, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3.5 rounded-none border border-luxury-gold/30 texture-obsidian flex items-center justify-center cursor-pointer group shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
            title="Back to Top"
            id="back-to-top"
          >
            <ArrowUp size={16} className="text-luxury-gold group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
