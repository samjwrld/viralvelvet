import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform, useSpring } from "motion/react";
import { ArrowRight, ArrowUp, ChevronDown, Play, Sparkles } from "lucide-react";

// Components
import Header from "./components/Header";
import VelvetBackground from "./components/VelvetBackground";
import CustomCursor from "./components/CustomCursor";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import WhyViralVelvet from "./components/WhyViralVelvet";
import PortfolioSection from "./components/PortfolioSection";
import ProcessTimeline from "./components/ProcessTimeline";
import ResultsMetrics from "./components/ResultsMetrics";
import TestimonialsSection from "./components/TestimonialsSection";
import AgencyInsights from "./components/AgencyInsights";
import IndustriesSection from "./components/IndustriesSection";
import FAQSection from "./components/FAQSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import BookCallModal from "./components/BookCallModal";

import { ServicesSkeleton, PortfolioSkeleton } from "./components/SectionSkeleton";

// Pages
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<"home" | "services" | "work" | "about" | "insights" | "contact">("home");
  const activeTexture = "obsidian";

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/services" || hash === "#services") {
        setActivePage("services");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (hash === "#/work" || hash === "#/portfolio" || hash === "#portfolio" || hash === "#work") {
        setActivePage("work");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (hash === "#/about" || hash === "#about") {
        setActivePage("about");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (hash === "#/insights" || hash === "#insights") {
        setActivePage("insights");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (hash === "#/contact" || hash === "#cta-contact" || hash === "#contact") {
        setActivePage("contact");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setActivePage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const { scrollY } = useScroll();

  // Create physics-based springs to smooth out scroll coordinates for luxury movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  
  // Raw transform values mapped to vertical translations (parallax depth)
  const rawYTag = useTransform(scrollY, [0, 600], [0, -35]);
  const rawYSub = useTransform(scrollY, [0, 600], [0, -55]);
  const rawYHead = useTransform(scrollY, [0, 600], [0, -85]);
  // The 'It's Engineered.' highlight gets a slightly faster translation to separate it from the main heading
  const rawYRevenue = useTransform(scrollY, [0, 600], [0, -110]);
  const rawYDesc = useTransform(scrollY, [0, 600], [0, -70]);
  const rawYBtns = useTransform(scrollY, [0, 600], [0, -45]);
  const rawYTrust = useTransform(scrollY, [0, 600], [0, -30]);
  
  // Subtle fading transition on scroll
  const rawOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Smooth out with springs to completely eliminate stuttering on different browsers/trackpads
  const yTagline = useSpring(rawYTag, springConfig);
  const ySubtitle = useSpring(rawYSub, springConfig);
  const yHeading = useSpring(rawYHead, springConfig);
  const yRevenueEngines = useSpring(rawYRevenue, springConfig);
  const yParagraphs = useSpring(rawYDesc, springConfig);
  const yButtons = useSpring(rawYBtns, springConfig);
  const yTrust = useSpring(rawYTrust, springConfig);
  const smoothOpacity = useSpring(rawOpacity, { damping: 30, stiffness: 150 });

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

  // Magnetic hover state for the hero headline
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    // Premium soft magnetic pull strength
    const strength = 0.08;
    const maxOffset = 15; // subtle constraint to avoid layout shift
    
    setMagneticPos({
      x: Math.min(Math.max(deltaX * strength, -maxOffset), maxOffset),
      y: Math.min(Math.max(deltaY * strength, -maxOffset), maxOffset)
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMagneticPos({ x: 0, y: 0 });
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

      <AnimatePresence mode="wait">
        {activePage === "home" ? (
          <motion.div
            key="homepage-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 4. Luxury Hero Section */}
            <section
              id="hero"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-7xl mx-auto px-6 md:px-12 z-10 [contain:layout_style]"
      >
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 mt-4 sm:mt-8 lg:mt-0">
          
          {/* Tagline Badge */}
          <motion.div 
            style={{ y: yTagline, opacity: smoothOpacity }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-velvet-red/25 border border-luxury-gold/20 rounded-full max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping shrink-0" />
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-luxury-gold truncate">
              Performance Marketing for Brands That Refuse to Be Ordinary.
            </span>
          </motion.div>

          {/* Headline Presentation */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ y: ySubtitle, opacity: smoothOpacity }}
              className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.4em] text-lux-text/60"
            >
              Build Desire. Drive Demand.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
              style={{ y: yHeading, opacity: smoothOpacity }}
              className="display-serif text-3xl min-[360px]:text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] sm:leading-[0.95] text-lux-text font-light tracking-tight cursor-default select-none relative"
            >
              <span className="block whitespace-nowrap">Growth Isn't Lucky.</span>
              <motion.span 
                style={{ y: yRevenueEngines, display: "inline-block" }}
                className="font-light italic text-luxury-gold relative inline-block px-2"
              >
                {/* Sparkle 1: Top Right Twinkle & Rotate */}
                <motion.div
                  className="absolute -top-2.5 -right-3 sm:-top-3 sm:-right-4 text-luxury-gold pointer-events-none"
                  animate={{
                    scale: [0.6, 1.2, 0.6],
                    opacity: [0.4, 1, 0.4],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 fill-luxury-gold/30" />
                </motion.div>
                
                {/* Sparkle 2: Bottom Left Twinkle & Rotate */}
                <motion.div
                  className="absolute -bottom-1 -left-3 sm:-left-4 text-luxury-gold pointer-events-none"
                  animate={{
                    scale: [1, 0.5, 1],
                    opacity: [1, 0.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-luxury-gold/25" />
                </motion.div>

                {/* Sparkle 3: Subtle Mid-left Mini Sparkle */}
                <motion.div
                  className="absolute -top-1 -left-1 text-luxury-gold/70 pointer-events-none hidden sm:block"
                  animate={{
                    scale: [0.4, 1, 0.4],
                    opacity: [0.2, 0.8, 0.2],
                    rotate: [45, 225, 405],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <Sparkles className="w-2 h-2 fill-luxury-gold/15" />
                </motion.div>

                {/* Subtle luxury golden radial glow behind the text to simulate a radiant aura */}
                <span className="absolute inset-0 bg-luxury-gold/5 blur-[12px] sm:blur-[16px] rounded-full scale-125 -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

                It's Engineered.
                {/* Subtle luxury golden horizontal wire */}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />
              </motion.span>
            </motion.h1>
          </div>

          {/* Editorial Subheading */}
          <motion.div 
            style={{ y: yParagraphs, opacity: smoothOpacity }}
            className="space-y-4 max-w-2xl mx-auto px-2 sm:px-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-[11px] sm:text-xs md:text-sm text-lux-text/80 leading-relaxed font-sans font-light"
            >
              At ViralVelvet, we help ambitious businesses turn advertising into a predictable revenue engine. Through high-performance Meta Ads, Google Ads, LinkedIn Ads, and conversion-focused digital experiences, we help brands generate qualified leads, acquire more customers, and scale profitably.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-[11px] sm:text-xs md:text-sm text-lux-text/60 leading-relaxed font-sans font-light italic"
            >
              We don't chase vanity metrics. Every strategy we create is designed to increase revenue, maximize return on ad spend, and build sustainable business growth.
            </motion.p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            style={{ y: yButtons, opacity: smoothOpacity }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            {/* Primary Call to Action */}
            <button
              onClick={openBooking}
              className="w-full sm:w-auto bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/30 text-lux-text px-8 py-4 text-xs font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 group transition-all duration-300 velvet-glow"
            >
              Book a Strategy Call
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
          <motion.div 
            style={{ y: yTrust, opacity: smoothOpacity }}
            className="pt-6 sm:pt-8 flex items-center justify-center gap-4 sm:gap-6 text-[8px] sm:text-[10px] font-mono text-lux-text/40 tracking-wider sm:tracking-widest border-t border-white/5 w-full max-w-md mx-auto"
          >
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
          </motion.div>

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

      {/* 1. Luxury Hero Section */}
      {/* ... defined above ... */}

      {/* 2. Trusted By (Monochrome Infinite Marquee Logos) */}
      <ClientsSection />

      {/* 3. Philosophy (Creed and Manifesto) */}
      <AboutSection />

      {/* 4. Services (Core Media & Development Screens) */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="services-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServicesSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="services-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ServicesSection activeTexture={activeTexture} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Why ViralVelvet (Exclusivity & Technology Bento) */}
      <WhyViralVelvet />

      {/* Industries We Help Scale Section */}
      <IndustriesSection />

      {/* 7. Process (Strategic Cadence & Co-operation Timeline) */}
      <ProcessTimeline />

      {/* 8. Results & Metrics (Mathematical Verification & Interactive Area Chart) */}
      <ResultsMetrics />

      {/* 9. Testimonials (Client Acclaim & Experience Grid) */}
      <TestimonialsSection activeTexture={activeTexture} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Market Intelligence & Agency Insights Section */}
      <AgencyInsights />

            {/* 10. Final CTA (Interactive Booking Strategy Card) */}
            <CtaSection onOpenBooking={openBooking} />
          </motion.div>
        ) : activePage === "services" ? (
          <motion.div
            key="services-subpage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ServicesPage onOpenBooking={openBooking} />
          </motion.div>
        ) : activePage === "work" ? (
          <motion.div
            key="work-subpage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <WorkPage />
          </motion.div>
        ) : activePage === "about" ? (
          <motion.div
            key="about-subpage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AboutPage />
          </motion.div>
        ) : activePage === "insights" ? (
          <motion.div
            key="insights-subpage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InsightsPage />
          </motion.div>
        ) : activePage === "contact" ? (
          <motion.div
            key="contact-subpage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ContactPage />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* 11. Footer & Brand Coordinates Directory */}
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
