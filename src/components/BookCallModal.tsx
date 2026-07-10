import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { ALL_SERVICES_LIST } from "../data";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    service: ALL_SERVICES_LIST[0],
    budget: "$10,000 - $25,000/mo",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brandName) {
      alert("Please complete all required fields to secure your allocation.");
      return;
    }

    setIsSubmitting(true);
    // Simulate luxury verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const budgetOptions = [
    "$10,000 - $25,000/mo",
    "$25,000 - $50,000/mo",
    "$50,000 - $100,000/mo",
    "$100,000+/mo",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#090909]/95 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl glass-card-gold rounded-none overflow-hidden velvet-glow p-8 md:p-12 z-10"
          >
            {/* Corner Luxury Red Ribbon Design */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
              <div className="absolute top-4 -right-10 w-44 bg-velvet-red border-y border-luxury-gold/30 text-[9px] font-mono tracking-widest text-luxury-gold text-center py-1 rotate-45">
                EXCLUSIVE ACCESS
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-booking-modal"
              className="absolute top-6 left-6 text-lux-text/60 hover:text-luxury-gold transition-colors p-2"
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2 text-center md:text-left">
                  <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.3em] block">
                    Securing Sovereign Growth
                  </span>
                  <h3 className="display-serif text-3xl md:text-4xl text-lux-text">
                    Apply for an Allocation
                  </h3>
                  <p className="text-xs text-lux-text/60 max-w-md font-sans">
                    Due to our high-touch bespoke methodology, we onboard at most two corporate partners per quarter. Select your tier below.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/80 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Alexander Mercer"
                      className="w-full bg-lux-bg/50 border border-white/8 focus:border-luxury-gold px-4 py-3 text-sm text-lux-text font-sans outline-none transition-colors"
                    />
                  </div>

                  {/* Brand Name */}
                  <div className="space-y-1">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/80 block">
                      Brand / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      placeholder="e.g., Mercer Watch House"
                      className="w-full bg-lux-bg/50 border border-white/8 focus:border-luxury-gold px-4 py-3 text-sm text-lux-text font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/80 block">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., alexander@mercer.com"
                    className="w-full bg-lux-bg/50 border border-white/8 focus:border-luxury-gold px-4 py-3 text-sm text-lux-text font-sans outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Service dropdown */}
                  <div className="space-y-1">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/80 block">
                      Primary Objective
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-lux-surface border border-white/8 focus:border-luxury-gold px-4 py-3 text-xs text-lux-text outline-none transition-colors"
                    >
                      {ALL_SERVICES_LIST.map((service) => (
                        <option key={service} value={service} className="bg-lux-surface">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="space-y-1">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/80 block">
                      Quarterly Marketing Capital
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-lux-surface border border-white/8 focus:border-luxury-gold px-4 py-3 text-xs text-lux-text outline-none transition-colors"
                    >
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget} className="bg-lux-surface">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief details */}
                <div className="space-y-1">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/80 block">
                    Strategic Focus & Context
                  </label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us briefly about the scaling bottleneck your brand currently faces."
                    className="w-full bg-lux-bg/50 border border-white/8 focus:border-luxury-gold px-4 py-3 text-xs text-lux-text font-sans outline-none resize-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/40 text-lux-text py-4 text-xs font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-luxury-gold" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Verifying Brand Credentials...
                    </span>
                  ) : (
                    <>
                      Submit Application <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 justify-center text-[10px] text-lux-text/40 font-mono">
                  <ShieldCheck size={12} className="text-luxury-gold" />
                  Your commercial assets are protected by mutual non-disclosure covenants.
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-velvet-red/20 border border-luxury-gold/30 flex items-center justify-center mx-auto text-luxury-gold">
                  <Calendar size={28} />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.3em] block">
                    Application Received
                  </span>
                  <h3 className="display-serif text-3xl text-lux-text">
                    Aesthetics Await.
                  </h3>
                  <p className="text-xs text-lux-text/60 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you, <span className="text-luxury-gold font-medium">{formData.name}</span>. Our executive partners are reviewing the market standing of <span className="text-lux-text font-medium">{formData.brandName}</span>.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-luxury-gold/80 border-t border-white/8 pt-6 max-w-xs mx-auto">
                  A concierge advisor will make contact via <span className="underline">{formData.email}</span> within 24 business hours.
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-white/10 hover:border-luxury-gold text-[10px] font-mono uppercase tracking-widest text-lux-text/80 transition-all"
                >
                  Return to Sanctuary
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
