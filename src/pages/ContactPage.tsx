import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ArrowLeft, Check, Compass, Calendar, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  
  // Selection States
  const [strategicFocus, setStrategicFocus] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");
  const [domainInput, setDomainInput] = useState("");
  const [painPoints, setPainPoints] = useState("");
  const [coordinates, setCoordinates] = useState({ name: "", email: "", phone: "" });

  // Mock Calendar Booking States
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinishQuestionnaire = (e: React.FormEvent) => {
    e.preventDefault();
    if (coordinates.name && coordinates.email) {
      setStep(5); // Calendar selection step
    }
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingConfirmed(true);
    }
  };

  const stepsMeta = [
    { num: 1, label: "FOCUS" },
    { num: 2, label: "BUDGET" },
    { num: 3, label: "CONTEXT" },
    { num: 4, label: "COORDINATES" },
    { num: 5, label: "SCHEDULE" }
  ];

  return (
    <div id="contact-page" className="relative pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Questionnaire Module (8 columns) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header Title */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-velvet-red/25 border border-luxury-gold/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-luxury-gold">
                STRATEGIC ONBOARDING
              </span>
            </div>
            
            <h1 className="display-serif text-3xl sm:text-4xl md:text-5xl text-lux-text font-light tracking-tight leading-[1.1]">
              Initiate <span className="italic text-luxury-gold">Sovereign Scale.</span>
            </h1>
            <p className="text-xs sm:text-sm text-lux-text/60 leading-relaxed max-w-xl font-sans font-light">
              Submit your growth parameters below. Our system will analyze your domain and generate a custom performance-marketing blueprint before our call.
            </p>
          </div>

          {/* Stepper Progress bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 max-w-md">
            {stepsMeta.map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-none border font-mono text-[9px] flex items-center justify-center transition-all ${
                  step === s.num
                    ? "bg-luxury-gold border-luxury-gold text-black"
                    : step > s.num
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                    : "border-white/10 text-lux-text/40"
                }`}>
                  {step > s.num ? <Check size={8} /> : s.num}
                </span>
                <span className={`font-mono text-[7px] tracking-wider hidden sm:inline ${
                  step === s.num ? "text-luxury-gold font-medium" : "text-lux-text/30"
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Core Interactive Card Form */}
          <div className="bg-black/40 border border-white/5 p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-at-t from-luxury-gold/2 via-transparent to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-luxury-gold uppercase tracking-widest">STEP 01 / 04</span>
                    <h3 className="font-serif text-xl text-lux-text font-light">Select Your Brand's Primary Strategic Goal</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "ecom", title: "E-Commerce Growth Scaling", desc: "Meta/Google ad architecture to increase LTV & scaling" },
                      { id: "lead", title: "High-End Corporate Lead Gen", desc: "UHNW & corporate verified decision-maker capture" },
                      { id: "brand", title: "Luxury Brand Re-positioning", desc: "Desire-based creative engine and custom site experiences" },
                      { id: "capi", title: "Server-Side Tracking Audit", desc: "First-party measurement and CAPI setup verification" }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setStrategicFocus(opt.title)}
                        className={`text-left p-4 border transition-all duration-300 ${
                          strategicFocus === opt.title
                            ? "bg-luxury-gold/5 border-luxury-gold"
                            : "border-white/5 hover:border-white/20 bg-transparent"
                        }`}
                      >
                        <h4 className="text-xs sm:text-sm font-serif text-lux-text font-medium">{opt.title}</h4>
                        <p className="text-[10px] text-lux-text/50 font-sans font-light mt-1">{opt.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      disabled={!strategicFocus}
                      onClick={handleNextStep}
                      className="bg-luxury-gold disabled:bg-white/5 text-black disabled:text-lux-text/30 font-mono text-[9px] uppercase tracking-widest px-6 py-3 font-semibold flex items-center gap-1.5 transition-all"
                    >
                      Advance Framework <ArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-luxury-gold uppercase tracking-widest">STEP 02 / 04</span>
                    <h3 className="font-serif text-xl text-lux-text font-light">Define Your Current Blended Ad Spend (Monthly)</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "₹8 Lakhs - ₹20 Lakhs /mo", desc: "Testing foundations & creative funnels" },
                      { label: "₹20 Lakhs - ₹80 Lakhs /mo", desc: "Consistent scaling & tracking audit" },
                      { label: "₹80 Lakhs - ₹2 Crores /mo", desc: "International scale & cohort focus" },
                      { label: "₹2 Crores+ /mo", desc: "Sovereign global market expansion" }
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setMonthlyBudget(opt.label)}
                        className={`text-left p-4 border transition-all duration-300 ${
                          monthlyBudget === opt.label
                            ? "bg-luxury-gold/5 border-luxury-gold"
                            : "border-white/5 hover:border-white/20 bg-transparent"
                        }`}
                      >
                        <h4 className="text-xs sm:text-sm font-serif text-lux-text font-medium">{opt.label}</h4>
                        <p className="text-[10px] text-lux-text/50 font-sans font-light mt-1">{opt.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button onClick={handlePrevStep} className="font-mono text-[9px] uppercase tracking-widest text-lux-text/50 hover:text-white flex items-center gap-1">
                      <ArrowLeft size={10} /> Back
                    </button>
                    <button
                      disabled={!monthlyBudget}
                      onClick={handleNextStep}
                      className="bg-luxury-gold disabled:bg-white/5 text-black disabled:text-lux-text/30 font-mono text-[9px] uppercase tracking-widest px-6 py-3 font-semibold flex items-center gap-1.5 transition-all"
                    >
                      Advance Framework <ArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-luxury-gold uppercase tracking-widest">STEP 03 / 04</span>
                    <h3 className="font-serif text-xl text-lux-text font-light">Secure Context Coordinates</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[8px] text-lux-text/40 uppercase block">CORPORATE DOMAIN / WEBSITE URL</label>
                      <input
                        type="url"
                        placeholder="https://yourbrand.com"
                        value={domainInput}
                        onChange={(e) => setDomainInput(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs font-mono text-white placeholder-white/20 outline-none focus:border-luxury-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[8px] text-lux-text/40 uppercase block">PRIMARY PERFORMANCE PAIN POINTS</label>
                      <textarea
                        rows={3}
                        placeholder="Detail CAC degradation, creative issues, or tracking leakage..."
                        value={painPoints}
                        onChange={(e) => setPainPoints(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs font-sans font-light text-white placeholder-white/20 outline-none focus:border-luxury-gold transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button onClick={handlePrevStep} className="font-mono text-[9px] uppercase tracking-widest text-lux-text/50 hover:text-white flex items-center gap-1">
                      <ArrowLeft size={10} /> Back
                    </button>
                    <button
                      disabled={!domainInput}
                      onClick={handleNextStep}
                      className="bg-luxury-gold disabled:bg-white/5 text-black disabled:text-lux-text/30 font-mono text-[9px] uppercase tracking-widest px-6 py-3 font-semibold flex items-center gap-1.5 transition-all"
                    >
                      Advance Framework <ArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-luxury-gold uppercase tracking-widest">STEP 04 / 04</span>
                    <h3 className="font-serif text-xl text-lux-text font-light">Enter Your Personal Coordinates</h3>
                  </div>

                  <form onSubmit={handleFinishQuestionnaire} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] text-lux-text/40 uppercase block">FULL NAME</label>
                        <input
                          type="text"
                          required
                          placeholder="Marcus Aurelius"
                          value={coordinates.name}
                          onChange={(e) => setCoordinates({ ...coordinates, name: e.target.value })}
                          className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs font-mono text-white placeholder-white/20 outline-none focus:border-luxury-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[8px] text-lux-text/40 uppercase block">DIRECT PHONE</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 0199"
                          value={coordinates.phone}
                          onChange={(e) => setCoordinates({ ...coordinates, phone: e.target.value })}
                          className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs font-mono text-white placeholder-white/20 outline-none focus:border-luxury-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[8px] text-lux-text/40 uppercase block">CORPORATE EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="ceo@yourbrand.com"
                        value={coordinates.email}
                        onChange={(e) => setCoordinates({ ...coordinates, email: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs font-mono text-white placeholder-white/20 outline-none focus:border-luxury-gold transition-colors"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button type="button" onClick={handlePrevStep} className="font-mono text-[9px] uppercase tracking-widest text-lux-text/50 hover:text-white flex items-center gap-1">
                        <ArrowLeft size={10} /> Back
                      </button>
                      <button
                        type="submit"
                        className="bg-luxury-gold text-black font-mono text-[9px] uppercase tracking-widest px-8 py-3.5 font-semibold flex items-center gap-1.5 transition-all"
                      >
                        Formulate Strategy <ArrowRight size={10} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="space-y-1.5">
                    <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                      <Check size={10} /> COORDINATES VERIFIED
                    </span>
                    <h3 className="font-serif text-2xl text-lux-text font-light">Lock Your Strategy Audit Slot</h3>
                    <p className="text-xs text-lux-text/60 leading-relaxed font-sans font-light">
                      Choose your preferred consultation date and time below to confirm your performance marketing audit led by our core directors.
                    </p>
                  </div>

                  {!bookingConfirmed ? (
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      {/* Interactive mock selectors */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-mono text-[8px] text-lux-text/40 uppercase block">SELECT CONSULTATION DATE</label>
                          <select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 px-3 py-3 text-xs font-mono text-white outline-none focus:border-luxury-gold cursor-pointer"
                          >
                            <option value="">-- Choose Date --</option>
                            <option value="Monday, July 13">Monday, July 13</option>
                            <option value="Tuesday, July 14">Tuesday, July 14</option>
                            <option value="Wednesday, July 15">Wednesday, July 15</option>
                            <option value="Thursday, July 16">Thursday, July 16</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="font-mono text-[8px] text-lux-text/40 uppercase block">SELECT CONSULTATION TIME (EST)</label>
                          <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 px-3 py-3 text-xs font-mono text-white outline-none focus:border-luxury-gold cursor-pointer"
                          >
                            <option value="">-- Choose Time --</option>
                            <option value="10:00 AM EST">10:00 AM EST</option>
                            <option value="1:00 PM EST">1:00 PM EST</option>
                            <option value="3:30 PM EST">3:30 PM EST</option>
                            <option value="5:00 PM EST">5:00 PM EST</option>
                          </select>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          disabled={!selectedDate || !selectedTime}
                          onClick={handleConfirmBooking}
                          className="w-full bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/30 text-white font-mono text-[9px] uppercase tracking-widest py-4 transition-all duration-300 disabled:opacity-30"
                        >
                          Secure Architecture Call Slot
                        </button>
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/2 border border-luxury-gold/30 p-6 space-y-4 text-center"
                    >
                      <div className="w-12 h-12 bg-luxury-gold/10 border border-luxury-gold rounded-full flex items-center justify-center mx-auto text-luxury-gold">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-lg text-white font-medium">Strategy Session Locked</h4>
                        <p className="text-xs text-lux-text/75 font-sans font-light">
                          {coordinates.name}, your performance audit is scheduled for <span className="text-luxury-gold font-medium">{selectedDate} at {selectedTime}</span>.
                        </p>
                      </div>
                      <div className="bg-black/50 p-3 max-w-xs mx-auto border border-white/5 space-y-1 text-left">
                        <p className="font-mono text-[7.5px] text-lux-text/40 uppercase">VETTED VERIFICATION CODE:</p>
                        <p className="font-mono text-xs text-luxury-gold font-semibold select-all">VV-AUDIT-{Math.floor(1000 + Math.random() * 9000)}</p>
                        <p className="font-mono text-[6.5px] text-emerald-400 uppercase tracking-widest">A confirmation link has been sent to {coordinates.email}.</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Column: Address and Coordinates Info (4 columns) */}
        <div className="lg:col-span-4 space-y-8 bg-black/30 border border-white/5 p-6 sm:p-8">
          <div className="space-y-2 border-b border-white/5 pb-4">
            <h4 className="font-serif text-xl text-white font-light">Global Headquarters</h4>
            <p className="text-xs text-lux-text/50 font-sans font-light leading-relaxed">
              Our direct coordinates are open to registered client partners and pre-vetted strategy leads.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-1" />
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-wider text-luxury-gold font-semibold">HEAD OFFICE (HYDERABAD)</p>
                <p className="text-xs text-lux-text/85 font-sans font-light leading-relaxed">
                  Villa no. 48, Mythri Lake view housing society,<br />
                  Mallampet, Bachupally, Hyderabad,<br />
                  Telangana 502325
                </p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 space-y-4">
              <div className="flex gap-4 items-center">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <p className="font-mono text-[10px] text-luxury-gold hover:underline cursor-pointer">secure@viralvelvet.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <p className="font-mono text-[10px] text-lux-text/70">+91 63024 15865</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
