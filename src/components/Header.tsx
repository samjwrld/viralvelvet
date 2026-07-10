import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

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

  const menuItems = [
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "PHILOSOPHY", href: "#about" },
    { label: "PROCESS", href: "#process" },
    { label: "REVIEWS", href: "#testimonials" },
  ];

  return (
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
          href="#"
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
              INQUIRE <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-lux-text hover:text-luxury-gold transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-lux-bg/98 backdrop-blur-xl z-30 md:hidden flex flex-col p-8 justify-between border-t border-white/5 animate-fade-in">
          <nav className="flex flex-col gap-6 mt-4">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-lux-text hover:text-luxury-gold tracking-wide transition-colors"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label.toLowerCase()}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pb-8 border-t border-white/5 pt-8">
            <span className="font-mono text-[8px] uppercase tracking-widest text-lux-text/40 block">
              Sovereign scale awaits.
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/30 text-lux-text py-4 text-xs font-mono uppercase tracking-widest"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
