import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenBooking: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
    }
  },
  exit: { 
    opacity: 0, 
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    }
  },
};

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Securely lock document scrolling on mobile devices when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: "Home", href: "#/" },
    { label: "Services", href: "#/services" },
    { label: "Work", href: "#/work" },
    { label: "About", href: "#/about" },
    { label: "Insights", href: "#/insights" },
    { label: "Contact", href: "#/contact" },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/25 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Elegant Logo */}
          <a
            href="#/"
            className="group flex flex-col items-start select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="display-serif text-2xl md:text-3xl text-lux-text tracking-[0.05em] group-hover:text-luxury-gold transition-colors duration-500">
              Viral<span className="font-light italic text-luxury-gold">Velvet</span>
            </span>
            <span className="font-mono text-[6.5px] uppercase tracking-[0.45em] text-lux-text/50 mt-0.5 group-hover:text-lux-text/80 transition-colors duration-500">
              Luxury Marketing Agency
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2 font-mono text-[10px] tracking-[0.25em] text-lux-text/75 hover:text-luxury-gold transition-colors duration-300 group"
              >
                {item.label}
                {/* Luxury Sliding Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Menu Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="hidden md:flex relative overflow-hidden group bg-transparent border border-luxury-gold/40 hover:border-luxury-gold px-5 py-2.5 text-[9px] font-mono tracking-[0.3em] uppercase text-luxury-gold hover:text-lux-text transition-colors duration-500"
            >
              {/* Hover background slide */}
              <span className="absolute inset-0 w-full h-full bg-velvet-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-10" />
              <span className="flex items-center gap-1">
                BOOK STRATEGY CALL <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-lux-text hover:text-luxury-gold transition-colors p-1"
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen w-screen bg-black/85 backdrop-blur-2xl z-50 md:hidden flex flex-col justify-between overflow-hidden"
          >
            {/* Top Bar inside Overlay to match header position seamlessly */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5 bg-black/20">
              <div className="group flex flex-col items-start select-none">
                <span className="display-serif text-2xl text-lux-text tracking-[0.05em]">
                  Viral<span className="font-light italic text-luxury-gold">Velvet</span>
                </span>
                <span className="font-mono text-[6.5px] uppercase tracking-[0.45em] text-lux-text/50 mt-0.5">
                  Luxury Marketing Agency
                </span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-lux-text hover:text-luxury-gold transition-colors p-1"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Middle Nav Items */}
            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col gap-8 px-8 py-10 flex-grow justify-center"
            >
              {menuItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative inline-block text-left"
                  >
                    <span className="font-serif text-4xl text-lux-text group-hover:text-luxury-gold tracking-wide transition-colors duration-300 block">
                      {item.label}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* Footer inside mobile menu */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="px-8 pb-12 space-y-4 border-t border-white/5 pt-8 bg-black/40"
            >
              <span className="font-mono text-[8px] uppercase tracking-[0.45em] text-lux-text/40 block text-center">
                Sovereign scale awaits.
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/30 text-lux-text py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:border-luxury-gold active:scale-[0.98]"
              >
                Book Strategy Call
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
