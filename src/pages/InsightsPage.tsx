import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { BookOpen, Calendar, ArrowLeft, ArrowRight, Mail, Sparkles, Check, Download, Share2 } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
}

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [downloadRequested, setDownloadRequested] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const glow = useTransform(
    scrollYProgress,
    [0.9, 1],
    ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 15px rgba(212, 175, 55, 0.8)"]
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() !== "") {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  const articles: Article[] = [
    {
      id: "attribution-degradation",
      title: "The Death of the Pixel: Navigating First-Party Scaling in 2026",
      category: "MEDIA MATHEMATICS",
      date: "JUNE 18, 2026",
      readTime: "7 MIN READ",
      author: "Debasis Barik",
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=800&auto=format&fit=crop",
      summary: "Traditional pixel tracking is dead. Discover why server-side Conversions API (CAPI) and offline database synchronization are non-negotiable for scaling past $10M in annual revenue.",
      content: [
        "Over the last 24 months, standard web browser pixels have experienced a 35% drop in signal retention. As modern browsers enforce stricter cookie expiration and tracking prevention frameworks, agencies attempting to run raw pixel optimizations are wasting hundreds of thousands of dollars on unvetted target coordinates.",
        "To combat attribution decay, elite brands are building server-to-server connection systems. By taking browser variables out of the equation and sending server-vetted customer behaviors directly from your database, Meta and Google's machine learning engines receive flawless signals to optimize bidding.",
        "At ViralVelvet, we've designed a proprietary CAPI bridge that increases match quality scores from a typical 4.5 to a secure 8.9. This single upgrade routinely drives CPA down by 25% within the first 30 days.",
        "Moreover, advanced brands are moving towards marketing mix modeling (MMM) and regression analysis instead of relying solely on last-touch cookies. Understanding customer lifetime value (LTV) cohorts rather than simple immediate transactions is what separates sustainable growth from erratic cash flow."
      ]
    },
    {
      id: "creative-resonance",
      title: "Creative Resonance: The Science Behind High-Converting Luxury Hooks",
      category: "CREATIVE INTEL",
      date: "MAY 29, 2026",
      readTime: "5 MIN READ",
      author: "Debasis Barik",
      image: "https://images.unsplash.com/photo-1492691523567-6170c3295db5?q=80&w=800&auto=format&fit=crop",
      summary: "Explore the psychological triggers behind high-performing luxury vertical video. We analyze why polished corporate videos fail and organic aesthetic hooks consistently win.",
      content: [
        "Vanity creative is the silent killer of ad accounts. Luxury brands frequently spend $50k on ultra-polished cinematic product commercials, only for them to convert at a sub-1.2x ROAS. Why? Because the modern mobile viewer is entirely immune to obvious advertising.",
        "High-performance creative must blend seamlessly into native platform feeds while retaining premium visual standards. This is called 'Creative Resonance'—an organic, high-fidelity format that captures immediate interest within 1.5 seconds without feeling intrusive.",
        "We achieve this by pairing exquisite macro product details with conversational, value-first narratives. Instead of shouting features, we build visual metaphors and target distinct psychological desires—such as exclusivity, status, and heritage validation.",
        "Our analytical tests reveal that split-screen comparisons and sensory close-up textures (e.g. leather stitching, glass pouring, luxury packaging opening) boost click-through rates (CTR) by an average of 84% compared to traditional branded studio shots."
      ]
    },
    {
      id: "saas-funnel-engineering",
      title: "Scaling Past $10M ARR: B2B Search Architecture and Lead Capture Vetting",
      category: "B2B FUNNEL",
      date: "APRIL 14, 2026",
      readTime: "9 MIN READ",
      author: "Debasis Barik",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
      summary: "Vague landing pages and generic scheduling forms drain budgets. Learn how to engineer high-intent search capture and restriction layers to attract qualified enterprise executives.",
      content: [
        "In B2B lead generation, high lead volume is often a curse. Sales teams spend valuable hours filtering through unqualified submissions, while acquisition costs crawl upwards. True scale requires shifting the filtration process upstream.",
        "We design high-intent landing experiences that qualify prospects through secure multi-step questionnaires rather than generic input forms. By asking targeted questions regarding company size, current tech stack, and monthly operational spend, we filter out low-value inquiries automatically.",
        "Pairing this questionnaire with high-intent search capture on Google Ads ensures you only buy ad clicks from individuals actively seeking complex corporate solutions.",
        "Our clients employing these multi-step vetting structures report a 60% reduction in sales-team processing time, alongside a 34% increase in closed-deal conversions within 90 days."
      ]
    }
  ];

  return (
    <div id="insights-page" className="relative pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 z-10">
      {/* Scroll Progress Bar - Only visible when reading an article */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-1 bg-luxury-gold origin-left z-[100]"
            style={{ scaleX, boxShadow: glow }}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div
            key="magazine-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-16"
          >
            {/* 1. Header Area */}
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-velvet-red/25 border border-luxury-gold/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-luxury-gold">
                  VIRALVELVET INTELLIGENCE
                </span>
              </div>
              
              <h1 className="display-serif text-4xl sm:text-5xl md:text-6xl text-lux-text font-light tracking-tight leading-[1.1]">
                Market Intelligence: <br />
                <span className="italic text-luxury-gold">Strategies for the 1%.</span>
              </h1>

              <p className="text-sm sm:text-base text-lux-text/75 font-sans font-light leading-relaxed max-w-2xl">
                Deep analytical essays, playbook breakdowns, and performance marketing guides engineered to help premium digital brands secure sovereign scale.
              </p>
            </div>

            {/* 2. Playbook Download Banner */}
            <div className="relative border border-luxury-gold/20 bg-black/60 p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-velvet-red/10 via-transparent to-transparent pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-luxury-gold bg-luxury-gold/10 px-2 py-1 inline-block">
                    FEATURED INTEL REPORT
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-lux-text font-light tracking-tight">
                    The 2026 Luxury Direct-Response Scale Blueprint (45 Pages)
                  </h2>
                  <p className="text-xs sm:text-sm text-lux-text/60 leading-relaxed font-sans font-light">
                    Our complete private playbook detailing the creative testing cycles, server-side infrastructure models, and audience segment lists we deploy to scale our active clients.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  {!downloadRequested ? (
                    <button
                      onClick={() => setDownloadRequested(true)}
                      className="w-full lg:w-auto bg-luxury-gold text-black hover:bg-white hover:text-black font-mono text-[10px] uppercase tracking-[0.2em] px-8 py-4 transition-colors duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <Download size={14} /> Download Playbook
                    </button>
                  ) : (
                    <div className="w-full bg-white/2 border border-luxury-gold/30 p-4 text-center text-xs text-luxury-gold font-mono flex items-center justify-center gap-2">
                      <Check size={14} className="text-emerald-400" /> Playbook sent to registered coordinates
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col justify-between border border-white/5 bg-black/40 hover:border-luxury-gold/20 overflow-hidden cursor-pointer p-6"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="space-y-4">
                    <div className="aspect-video overflow-hidden bg-neutral-900 border border-white/5">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[7px] text-lux-text/40 tracking-widest">
                      <span className="text-luxury-gold">{article.category}</span>
                      <span>{article.date}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-xl text-lux-text group-hover:text-luxury-gold transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-lux-text/60 leading-relaxed font-sans font-light line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 mt-6 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[8px] text-lux-text/40">{article.readTime}</span>
                    <span className="text-xs text-luxury-gold/50 group-hover:text-luxury-gold transition-colors font-mono">
                      Read Essay →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 4. Newsletter Subscription Form */}
            <div className="border-t border-white/5 pt-16 max-w-xl mx-auto text-center space-y-6">
              <div className="p-3 bg-white/2 border border-white/5 rounded-none w-fit mx-auto">
                <Mail className="w-5 h-5 text-luxury-gold" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-lux-text font-light">Join the Sovereign Register</h3>
                <p className="text-xs text-lux-text/60 leading-relaxed max-w-sm mx-auto font-sans font-light">
                  Receive bi-weekly performance marketing audit templates and luxury cohort analysis directly to your corporate inbox.
                </p>
              </div>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 text-xs font-mono text-white placeholder-white/30 outline-none focus:border-luxury-gold transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-velvet-red hover:bg-velvet-dark border border-luxury-gold/20 hover:border-luxury-gold text-white px-6 py-3 text-xs font-mono uppercase tracking-wider transition-colors duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/2 border border-luxury-gold/30 p-4 text-xs font-mono text-luxury-gold flex items-center justify-center gap-2"
                >
                  <Check size={14} className="text-emerald-400" /> Coordinates successfully secured to the register.
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="article-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-luxury-gold hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={12} /> Return to Intel
            </button>

            {/* Title Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-[8px] text-luxury-gold tracking-widest">
                <span>{selectedArticle.category}</span>
                <span className="text-white/20">•</span>
                <span className="text-lux-text/50">{selectedArticle.date}</span>
                <span className="text-white/20">•</span>
                <span className="text-lux-text/50">{selectedArticle.readTime}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight tracking-tight">
                {selectedArticle.title}
              </h1>
              <div className="border-b border-white/5 pb-6">
                <p className="font-mono text-[10px] text-lux-text/40 uppercase tracking-widest">
                  AUTHOR: <span className="text-luxury-gold">{selectedArticle.author}</span>
                </p>
              </div>
            </div>

            {/* Large Banner Image */}
            <div className="aspect-video w-full overflow-hidden bg-neutral-900 border border-white/5">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover grayscale opacity-75"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Paragraph Content block */}
            <div className="space-y-6 text-sm sm:text-base text-lux-text/80 leading-relaxed font-sans font-light">
              <p className="text-base sm:text-lg font-serif italic text-luxury-gold leading-relaxed border-l-2 border-luxury-gold/50 pl-4">
                {selectedArticle.summary}
              </p>
              {selectedArticle.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Share and playbooks block */}
            <div className="border-t border-b border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[8px] text-lux-text/40 uppercase tracking-widest">
                <Share2 size={12} className="text-luxury-gold" /> SHARE CODES: <span className="text-luxury-gold select-all hover:underline cursor-pointer">SECURE_REF_{selectedArticle.id.toUpperCase()}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-transparent border border-white/10 hover:border-white text-white px-6 py-2 text-[9px] font-mono uppercase tracking-widest transition-colors"
              >
                Return to Intel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
