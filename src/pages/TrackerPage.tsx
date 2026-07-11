import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, ShieldCheck, Activity, Globe, Sparkles, AlertTriangle, 
  Search, Cpu, ArrowRight, Copy, Check, FileText, MapPin, Award, Zap,
  Loader2, RefreshCw
} from "lucide-react";

interface TrackedEvent {
  id: string;
  event: string;
  brand: string;
  value: string;
  currency: string;
  location: string;
  matchQuality: number;
  status: string;
  channel: string;
  timestamp: string;
  matchKeys: string[];
}

interface TrackerData {
  status: string;
  serverLoad: string;
  latency: string;
  heartbeat: string;
  matchQualityAvg: string;
  totalTracked24h: number;
  lastUpdated: string;
  events: TrackedEvent[];
  attributionLift: string;
}

interface SeoResult {
  score: number;
  matchQuality: number;
  vernacularStrategy: string;
  vitalsMetrics: {
    lcp: string;
    fid: string;
    cls: string;
    assessment: string;
  };
  recommendations: Array<{
    title: string;
    priority: string;
    impact: string;
    implementation: string;
  }>;
  metaTagsAnalysis: {
    titleTag: string;
    metaDesc: string;
    canonical: string;
  };
}

interface BlogResult {
  title: string;
  metaDescription: string;
  keywords: string[];
  content: string;
  readTime: string;
  targetAudience: string;
}

export default function TrackerPage() {
  const [activeTab, setActiveTab] = useState<"tracker" | "seo" | "blog">("tracker");
  
  // Tab 1: AI Tracker States
  const [trackerData, setTrackerData] = useState<TrackerData | null>(null);
  const [isTrackerLoading, setIsTrackerLoading] = useState(false);
  const [ticker, setTicker] = useState(0);
  const [activeLogs, setActiveLogs] = useState<TrackedEvent[]>([]);
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  // Tab 2: SEO States
  const [seoUrl, setSeoUrl] = useState("");
  const [seoNiche, setSeoNiche] = useState("Premium Apparel");
  const [seoRegion, setSeoRegion] = useState("Hyderabad Royal Clusters");
  const [isSeoAnalyzing, setIsSeoAnalyzing] = useState(false);
  const [seoResult, setSeoResult] = useState<SeoResult | null>(null);
  const [seoCopiedField, setSeoCopiedField] = useState<string | null>(null);

  // Tab 3: Blog Assistant States
  const [blogTopic, setBlogTopic] = useState("");
  const [blogRegion, setBlogRegion] = useState("Hyderabad Royal Dynasties");
  const [blogKeywordsStyle, setBlogKeywordsStyle] = useState("Elegant English & Hinglish Vernacular Blend");
  const [isGeneratingBlog, setIsGeneratingBlog] = useState(false);
  const [blogResult, setBlogResult] = useState<BlogResult | null>(null);
  const [blogCopiedField, setBlogCopiedField] = useState<string | null>(null);

  // Fetch AI Tracker Stats
  const fetchTrackerStats = async (silent = false) => {
    if (!silent) setIsTrackerLoading(true);
    try {
      const res = await fetch("/api/tracker/status");
      const data: TrackerData = await res.json();
      setTrackerData(data);
      // Initialize logs
      if (activeLogs.length === 0) {
        setActiveLogs(data.events);
      }
    } catch (err) {
      console.error("Error loading tracker stats:", err);
    } finally {
      if (!silent) setIsTrackerLoading(false);
    }
  };

  useEffect(() => {
    fetchTrackerStats();
    
    // Auto refresh status every 6 seconds to simulate active tracking logs
    const interval = setInterval(() => {
      setTicker(prev => prev + 1);
      fetchTrackerStats(true);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Simulate incoming real-time backend tracking events
  useEffect(() => {
    if (trackerData && trackerData.events.length > 0) {
      // Pick a random event template and generate semi-random additions
      const places = ["Jubilee Hills, Hyd", "Banjara Hills, Hyd", "Gachibowli, Hyd", "Film Nagar, Hyd", "Begumpet, Hyd", "Somajiguda, Hyd"];
      const brands = ["Zari & Heritage", "Soma Fragrances", "Veritas Leather", "Taj Jewelers", "Kashmir Hand-knitted"];
      const events = ["Purchase", "AddToCart", "InitiateCheckout", "Lead"];
      const values = ["₹1,85,000", "₹42,000", "₹1,20,000", "₹9,500", "₹3,40,000"];

      const randomPlace = places[Math.floor(Math.random() * places.length)];
      const randomBrand = brands[Math.floor(Math.random() * brands.length)];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      const randomValue = randomEvent === "Lead" || randomEvent === "PageView" ? "N/A" : values[Math.floor(Math.random() * values.length)];
      
      const newEvt: TrackedEvent = {
        id: `evt_in_${Math.floor(Math.random() * 9000) + 1000}`,
        event: randomEvent,
        brand: randomBrand,
        value: randomValue,
        currency: "INR",
        location: randomPlace,
        matchQuality: parseFloat((Math.random() * 1.5 + 8.5).toFixed(1)),
        status: "synced",
        channel: Math.random() > 0.3 ? "Meta CAPI (Server)" : "Google Server-Side Link",
        timestamp: new Date().toLocaleTimeString(),
        matchKeys: ["em", "ph", "fbc", "fbp", "ip"]
      };

      setActiveLogs(prev => [newEvt, ...prev.slice(0, 9)]);
    }
  }, [ticker]);

  // Run SEO Audit
  const handleSeoAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!seoUrl) return;
    setIsSeoAnalyzing(true);
    setSeoResult(null);

    try {
      const res = await fetch("/api/seo/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: seoUrl,
          niche: seoNiche,
          region: seoRegion
        })
      });
      const resData = await res.json();
      setSeoResult(resData.data);
    } catch (err) {
      console.error("SEO Audit error:", err);
    } finally {
      setIsSeoAnalyzing(false);
    }
  };

  // Generate Localized Blog
  const handleBlogGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTopic) return;
    setIsGeneratingBlog(true);
    setBlogResult(null);

    try {
      const res = await fetch("/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: blogTopic,
          region: blogRegion,
          keywordsType: blogKeywordsStyle
        })
      });
      const resData = await res.json();
      setBlogResult(resData.data);
    } catch (err) {
      console.error("Blog generation error:", err);
    } finally {
      setIsGeneratingBlog(false);
    }
  };

  // Pre-configured blogging list for the Indian market
  const IndianMarketBlogs = [
    {
      title: "The Rise of Hyderabad Luxury: Capturing Jubilee Hills HNI Dynasties",
      meta: "How elite brands target royal legacy families in Jubilee Hills and Banjara Hills using localized server-side tracking, Kanchipuram silk schemas, and high-converting regional search patterns.",
      category: "Market Insights",
      region: "Hyderabad Jubilee Hills",
      volume: "High Search Volume"
    },
    {
      title: "Decoding Hinglish SEO & Teluglish Ad Copy for Premium Gachibowli Tech Founders",
      meta: "Tapping into Hyderabad's soaring tech affluence. Integrating conversational keywords like 'Premium Gachibowli Duplex' and 'Nizami bridal jewelry Begumpet' into high-ticket D2C funnels.",
      category: "Attribution",
      region: "Gachibowli Tech Belt",
      volume: "Rising Volume"
    },
    {
      title: "First-Party Server-Side CAPI: Bypassing Adblockers for Hyderabad Luxury Real Estate",
      meta: "Direct transaction mapping to cloud nodes in Hyderabad to restore 99% conversion attribution, optimizing Google search keywords for elite villa seekers.",
      category: "Technical Dev",
      region: "Hyderabad Royal Clusters",
      volume: "Technical Priority"
    }
  ];

  const copyToClipboard = (text: string, id: string, type: "event" | "seo" | "blog") => {
    navigator.clipboard.writeText(text);
    if (type === "event") {
      setCopiedEventId(id);
      setTimeout(() => setCopiedEventId(null), 2000);
    } else if (type === "seo") {
      setSeoCopiedField(id);
      setTimeout(() => setSeoCopiedField(null), 2000);
    } else if (type === "blog") {
      setBlogCopiedField(id);
      setTimeout(() => setBlogCopiedField(null), 2000);
    }
  };

  return (
    <div id="tracker-diagnostics-page" className="min-h-screen pt-28 pb-20 relative px-6 md:px-12 max-w-7xl mx-auto z-10">
      
      {/* 1. Page Header */}
      <div className="flex flex-col items-start space-y-3 mb-10 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/20 rounded-none">
          <Cpu size={11} className="text-luxury-gold animate-pulse" />
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-luxury-gold">
            VIRALVELVET DIRECT SYSTEM CORE
          </span>
        </div>
        <h1 className="display-serif text-3xl sm:text-4xl md:text-5xl text-lux-text font-light tracking-tight leading-none">
          SOVEREIGN TRACKER <span className="italic text-luxury-gold">&amp; SEO ENGINE</span>
        </h1>
        <p className="text-xs sm:text-sm text-lux-text/60 leading-relaxed max-w-2xl font-light">
          Bypass client browser pixel deterioration. Monitor server-side Meta CAPI matches in real-time, audit site performance over Indian Jio networks, and build high-rank SEO blogging systems for affluent urban Indian niches.
        </p>
      </div>

      {/* 2. Interactive Menu Navigation */}
      <div className="border-b border-white/5 flex gap-1 sm:gap-4 overflow-x-auto pb-px mb-8 scrollbar-hide">
        {[
          { id: "tracker", label: "AI BACKEND TRACKER", icon: <Terminal size={12} /> },
          { id: "seo", label: "INDIAN SEO AUDIT TOOL", icon: <Globe size={12} /> },
          { id: "blog", label: "INDIAN MARKET BLOG FORGE", icon: <FileText size={12} /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`py-4 px-4 sm:px-6 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] flex items-center gap-2 border-b-2 transition-all duration-300 uppercase shrink-0 ${
              activeTab === tab.id
                ? "border-luxury-gold text-luxury-gold bg-luxury-gold/5 font-semibold"
                : "border-transparent text-lux-text/50 hover:text-lux-text/80 hover:bg-white/[0.01]"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        
        {/* TAB 1: AI BACKEND TRACKER */}
        {activeTab === "tracker" && (
          <motion.div
            key="tab-tracker"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Real-time Status Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="border border-white/5 bg-black/30 p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/80" />
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[8px] text-lux-text/40 uppercase tracking-widest">
                    SYSTEM STATUS
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-[8px] text-emerald-400">ACTIVE</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xl sm:text-2xl font-serif text-lux-text font-light tracking-tight flex items-baseline gap-2">
                    {trackerData?.heartbeat === "active" ? "Connected" : "Synchronizing..."}
                  </div>
                  <span className="font-mono text-[8px] text-lux-text/40 mt-1 block">
                    SERVER PORT: 3000 (SECURE LINK)
                  </span>
                </div>
              </div>

              <div className="border border-white/5 bg-black/30 p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-luxury-gold/80" />
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[8px] text-lux-text/40 uppercase tracking-widest">
                    CAPI MATCH RATING
                  </span>
                  <Award size={12} className="text-luxury-gold" />
                </div>
                <div className="mt-4">
                  <div className="text-xl sm:text-2xl font-serif text-luxury-gold font-light tracking-tight">
                    {trackerData?.matchQualityAvg || "9.44/10"}
                  </div>
                  <span className="font-mono text-[8px] text-lux-text/40 mt-1 block">
                    OUTSTANDING MATCH QUALITY (99% OPT)
                  </span>
                </div>
              </div>

              <div className="border border-white/5 bg-black/30 p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-velvet-red/80" />
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[8px] text-lux-text/40 uppercase tracking-widest">
                    ATTRIBUTION LIFT
                  </span>
                  <Zap size={12} className="text-velvet-red" />
                </div>
                <div className="mt-4">
                  <div className="text-xl sm:text-2xl font-serif text-lux-text font-light tracking-tight">
                    {trackerData?.attributionLift || "+48% Verified Lift"}
                  </div>
                  <span className="font-mono text-[8px] text-lux-text/40 mt-1 block">
                    SERVER RE-IDENTIFICATION SUCCESS
                  </span>
                </div>
              </div>

              <div className="border border-white/5 bg-black/30 p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/10" />
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[8px] text-lux-text/40 uppercase tracking-widest">
                    COHERENT LATENCY
                  </span>
                  <Activity size={12} className="text-lux-text/40" />
                </div>
                <div className="mt-4">
                  <div className="text-xl sm:text-2xl font-serif text-lux-text/80 font-light tracking-tight">
                    {trackerData?.latency || "42ms"}
                  </div>
                  <span className="font-mono text-[8px] text-lux-text/40 mt-1 block font-mono">
                    JIO CELLULAR INTERFACE SPEED
                  </span>
                </div>
              </div>

            </div>

            {/* Terminal Interface */}
            <div className="border border-white/5 bg-black/60 rounded-none shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-velvet-red/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20 shrink-0" />
                  <span className="font-mono text-[8.5px] uppercase tracking-widest text-lux-text/40 ml-2">
                    SOVEREIGN SERVER-SIDE EVENT LOG (INDIA CHANNELS)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => fetchTrackerStats()}
                    disabled={isTrackerLoading}
                    className="p-1 rounded-none text-lux-text/40 hover:text-luxury-gold transition-colors disabled:opacity-40"
                    title="Manual Log Refresh"
                  >
                    <RefreshCw size={11} className={isTrackerLoading ? "animate-spin" : ""} />
                  </button>
                  <span className="h-3 w-[1px] bg-white/5" />
                  <span className="font-mono text-[8px] text-emerald-400/80 animate-pulse uppercase tracking-wider">
                    ● STREAMING LIVE
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 overflow-x-auto min-h-[350px]">
                <table className="w-full text-left font-mono text-[10px] leading-relaxed border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 text-lux-text/40 uppercase tracking-widest text-[8px]">
                      <th className="pb-3 pr-4">EVENT ID</th>
                      <th className="pb-3 pr-4">EVENT / VALUE</th>
                      <th className="pb-3 pr-4">CLIENT BRAND</th>
                      <th className="pb-3 pr-4">LOCATION</th>
                      <th className="pb-3 pr-4">MATCH RATING</th>
                      <th className="pb-3 pr-4">COMMUNICATION LINK</th>
                      <th className="pb-3 text-right">TIMESTAMP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.02] text-lux-text/80">
                    <AnimatePresence initial={false}>
                      {activeLogs.map((evt) => (
                        <motion.tr
                          key={evt.id}
                          initial={{ opacity: 0, x: -10, backgroundColor: "rgba(200, 165, 90, 0.05)" }}
                          animate={{ opacity: 1, x: 0, backgroundColor: "transparent" }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5 }}
                          className="hover:bg-white/[0.01] group/row"
                        >
                          <td className="py-3.5 pr-4 font-mono font-medium text-luxury-gold flex items-center gap-2 select-all">
                            {evt.id}
                            <button
                              onClick={() => copyToClipboard(evt.id, evt.id, "event")}
                              className="opacity-0 group-hover/row:opacity-100 p-0.5 text-lux-text/30 hover:text-luxury-gold transition-all"
                              title="Copy ID"
                            >
                              {copiedEventId === evt.id ? <Check size={8} /> : <Copy size={8} />}
                            </button>
                          </td>
                          <td className="py-3.5 pr-4">
                            <span className={`px-1.5 py-0.5 text-[8.5px] uppercase font-bold tracking-wider rounded-none ${
                              evt.event === "Purchase" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                              evt.event === "InitiateCheckout" ? "bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20" :
                              evt.event === "AddToCart" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                              "bg-white/5 text-lux-text/60 border border-white/10"
                            }`}>
                              {evt.event}
                            </span>
                            {evt.value !== "N/A" && (
                              <span className="ml-2 font-semibold text-lux-text font-mono">{evt.value}</span>
                            )}
                          </td>
                          <td className="py-3.5 pr-4 text-lux-text/90 font-medium">{evt.brand}</td>
                          <td className="py-3.5 pr-4 flex items-center gap-1 text-lux-text/70">
                            <MapPin size={9} className="text-luxury-gold/60" />
                            {evt.location}
                          </td>
                          <td className="py-3.5 pr-4">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-luxury-gold">{evt.matchQuality}</span>
                              <div className="w-12 h-1.5 bg-white/5 rounded-none overflow-hidden shrink-0">
                                <div 
                                  className="h-full bg-gradient-to-r from-velvet-red to-luxury-gold" 
                                  style={{ width: `${evt.matchQuality * 10}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 pr-4">
                            <span className="text-[9px] px-1.5 py-0.5 bg-white/5 text-lux-text/40 rounded-none border border-white/5 font-mono">
                              {evt.channel}
                            </span>
                          </td>
                          <td className="py-3.5 text-right text-lux-text/40">{evt.timestamp}</td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-3 bg-white/[0.01] border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-[8.5px] font-mono text-lux-text/40 uppercase tracking-widest">
                  <ShieldCheck size={11} className="text-emerald-500" />
                  SHA-256 SECURE ENCRYPTION ENFORCED ON ALL INCOMING EVENTS
                </div>
                <div className="text-[8px] font-mono text-lux-text/30 uppercase">
                  ACTIVE COOKIE RESTORATION RATE: 99.12%
                </div>
              </div>
            </div>

            {/* Technical Detail Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="border border-white/5 bg-black/20 p-6 space-y-4">
                <h3 className="display-serif text-lg text-luxury-gold font-light">
                  How does Server-Side Meta CAPI bypass iOS 14.5+ restrictions?
                </h3>
                <p className="text-xs text-lux-text/70 leading-relaxed font-light">
                  Standard browser pixels rely on client-side cookies which are easily blocked by Safari, Brave, and Chrome extensions. ViralVelvet's server-side tracking maps customer purchase and lead details directly from your transaction database to Meta's servers. By establishing an exact matched identity index, we recover lost conversion attribution, optimize bidding systems, and lower your aggregate cost-per-acquisition (CPA).
                </p>
                <div className="pt-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-gold font-medium flex items-center gap-1">
                    AVERAGE CONVERSION RESOLUTION LIFT: 48% <ArrowRight size={10} />
                  </span>
                </div>
              </div>

              <div className="border border-white/5 bg-black/20 p-6 space-y-4">
                <h3 className="display-serif text-lg text-luxury-gold font-light">
                  Indian Demographics &amp; Unified Server Links
                </h3>
                <p className="text-xs text-lux-text/70 leading-relaxed font-light">
                  Our system routes tracking triggers through localized cloud nodes based in Mumbai, Bangalore, and Delhi. This localized proximity delivers ultra-low latency server connectivity, crucial for real-time customer data sync over mobile networks in India (e.g., Jio and Airtel). Verified match keys like SHA-256 hashed phone numbers (with standard +91 routing prefixes) and email handles are automatically consolidated to achieve maximum event alignment.
                </p>
                <div className="pt-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-luxury-gold font-medium flex items-center gap-1">
                    SERVER HEARTBEAT LATENCY LATERAL MATCH: 9.8 RATING <ArrowRight size={10} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: SEO AUDIT & PERFORMANCE TOOL */}
        {activeTab === "seo" && (
          <motion.div
            key="tab-seo"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Input Form Card with Trending Keywords Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Form Card */}
              <div className="lg:col-span-2 border border-white/5 bg-black/30 p-6 sm:p-8">
                <form onSubmit={handleSeoAnalyze} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* URL Input */}
                  <div className="md:col-span-1 flex flex-col gap-2">
                    <label htmlFor="seo-url-field" className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase">
                      Enter Target Website URL
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lux-text/30" size={13} />
                      <input
                        id="seo-url-field"
                        type="text"
                        placeholder="e.g., mysilkbrand.com"
                        value={seoUrl}
                        onChange={(e) => setSeoUrl(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none pl-10 pr-4 py-3 text-xs font-mono text-lux-text rounded-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Industry/Niche Selection */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="seo-niche-select" className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase">
                      Client Industry / Niche
                    </label>
                    <select
                      id="seo-niche-select"
                      value={seoNiche}
                      onChange={(e) => setSeoNiche(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none px-4 py-3 text-xs font-mono text-lux-text rounded-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="Premium Apparel">Premium Apparel &amp; Couture</option>
                      <option value="Luxury Wellness">Luxury Ayurvedic Wellness</option>
                      <option value="Bespoke Real Estate">Bespoke Real Estate</option>
                      <option value="Elite Jewelry">Elite Fine Jewelry</option>
                      <option value="Heritage Crafts">Artisanal Heritage Crafts</option>
                    </select>
                  </div>

                  {/* Target Indian Region */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="seo-region-select" className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase">
                      Target Indian Market Hub
                    </label>
                    <select
                      id="seo-region-select"
                      value={seoRegion}
                      onChange={(e) => setSeoRegion(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none px-4 py-3 text-xs font-mono text-lux-text rounded-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="Hyderabad Royal Clusters">[PRIORITY] Hyderabad Royal Clusters (Jubilee Hills, Gachibowli)</option>
                      <option value="South Delhi & Gurugram HNIs">South Delhi &amp; Gurugram (GK, Vasant Vihar, DLF)</option>
                      <option value="South Mumbai Elite Districts">South Mumbai Elite Districts (Colaba, Malabar Hill)</option>
                      <option value="Bangalore IT Executives">Bangalore IT &amp; Founders Club (Indiranagar, Whitefield)</option>
                      <option value="Pan-India High Society">Pan-India High Society &amp; Tier 2 Dynasties</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-2 border-t border-white/5">
                  <button
                    type="submit"
                    disabled={isSeoAnalyzing || !seoUrl}
                    className="relative group overflow-hidden border border-luxury-gold bg-luxury-gold text-black hover:text-luxury-gold hover:bg-transparent px-8 py-3 text-[10px] font-mono tracking-[0.25em] uppercase font-bold transition-colors duration-500 disabled:opacity-40"
                  >
                    {isSeoAnalyzing ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={12} className="animate-spin" />
                        RUNNING AI DIAGNOSTICS...
                      </span>
                    ) : (
                      "RUN MOBILE & SEO DIAGNOSTICS"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Hyderabad Trending Keywords Sidebar */}
            <div className="border border-white/5 bg-black/20 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1.5">
                  <Sparkles size={11} className="text-luxury-gold animate-pulse" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-luxury-gold">
                    HYDERABAD TRENDING SEO INDEX
                  </span>
                </div>
                <h3 className="font-serif text-lg text-lux-text font-light tracking-tight">
                  High-Converting Local Keywords
                </h3>
                <p className="text-[10px] text-lux-text/50 font-light font-sans leading-relaxed">
                  These localized search queries represent high-intent purchase traffic originating from Jubilee Hills, Gachibowli, and Banjara Hills. Click any keyword to auto-inject its parameters!
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    { keyword: "Bespoke pattu sarees Hyderabad", volume: "18.4K/mo", niche: "Premium Apparel", lift: "+54% Lift" },
                    { keyword: "Jubilee Hills designer boutique", volume: "15.2K/mo", niche: "Premium Apparel", lift: "+38% Lift" },
                    { keyword: "Nizami gold bridal jewellery Begumpet", volume: "9.8K/mo", niche: "Elite Jewelry", lift: "+29% Lift" },
                    { keyword: "Premium villas in Gachibowli", volume: "12.1K/mo", niche: "Bespoke Real Estate", lift: "+42% Lift" },
                    { keyword: "Luxury ayurveda spa Banjara Hills", volume: "8.2K/mo", niche: "Luxury Wellness", lift: "+18% Lift" },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSeoNiche(item.niche);
                        if (!seoUrl) setSeoUrl("hyderabad-premium-brand.in");
                      }}
                      className="w-full text-left p-2.5 bg-white/[0.01] border border-white/5 hover:border-luxury-gold/40 hover:bg-luxury-gold/[0.02] transition-all duration-300 group flex items-center justify-between gap-2"
                    >
                      <div className="space-y-1">
                        <span className="font-mono text-[10.5px] text-lux-text group-hover:text-luxury-gold transition-colors block">
                          "{item.keyword}"
                        </span>
                        <span className="font-mono text-[8px] text-lux-text/40 block">
                          Niche: {item.niche} • Vol: {item.volume}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded-none border border-emerald-500/20 shrink-0">
                        {item.lift}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[7.5px] font-mono text-lux-text/30 uppercase tracking-[0.2em] text-center">
                HYDERABAD GEOGRAPHIC DATA INJECTED
              </div>
            </div>
          </div>

            {/* Audit Results Presentation */}
            <AnimatePresence mode="wait">
              {seoResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Score Wheel Column */}
                    <div className="border border-white/5 bg-black/20 p-6 flex flex-col items-center justify-center text-center space-y-4">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-lux-text/40 uppercase block">
                        OVERALL AUDIT METRIC
                      </span>
                      
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle 
                            cx="72" cy="72" r="62" 
                            stroke="rgba(255,255,255,0.03)" 
                            strokeWidth="6" 
                            fill="transparent" 
                          />
                          <circle 
                            cx="72" cy="72" r="62" 
                            stroke="#C8A55A" 
                            strokeWidth="6" 
                            fill="transparent" 
                            strokeDasharray={2 * Math.PI * 62}
                            strokeDashoffset={2 * Math.PI * 62 * (1 - seoResult.score / 100)}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-4xl font-serif text-luxury-gold font-light tracking-tight">{seoResult.score}</span>
                          <span className="font-mono text-[8px] text-lux-text/30 uppercase tracking-widest mt-0.5">SCORE</span>
                        </div>
                      </div>

                      <div className="pt-2 space-y-1">
                        <span className="text-xs text-lux-text font-serif block font-light">
                          Mobile-first performance is paramount
                        </span>
                        <span className="font-mono text-[8.5px] text-emerald-400 uppercase tracking-wider block">
                          EST. TRAFFIC YIELD LIFT: +24%
                        </span>
                      </div>
                    </div>

                    {/* Core Web Vitals Card */}
                    <div className="border border-white/5 bg-black/20 p-6 space-y-4 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[8px] tracking-[0.2em] text-lux-text/40 uppercase block mb-3">
                          CORE WEB VITALS ON INDIAN BROADBAND &amp; Jio 5G
                        </span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="bg-white/[0.01] border border-white/5 p-4 rounded-none">
                            <span className="font-mono text-[8.5px] text-lux-text/40 uppercase block">
                              Largest Contentful Paint (LCP)
                            </span>
                            <span className="text-lg font-mono text-luxury-gold font-semibold mt-1 block">
                              {seoResult.vitalsMetrics.lcp}
                            </span>
                            <span className="text-[9px] text-lux-text/40 block mt-1">
                              Hero image load index
                            </span>
                          </div>

                          <div className="bg-white/[0.01] border border-white/5 p-4 rounded-none">
                            <span className="font-mono text-[8.5px] text-lux-text/40 uppercase block">
                              First Input Delay (FID)
                            </span>
                            <span className="text-lg font-mono text-emerald-400 font-semibold mt-1 block">
                              {seoResult.vitalsMetrics.fid}
                            </span>
                            <span className="text-[9px] text-lux-text/40 block mt-1">
                              Interactive response lat
                            </span>
                          </div>

                          <div className="bg-white/[0.01] border border-white/5 p-4 rounded-none">
                            <span className="font-mono text-[8.5px] text-lux-text/40 uppercase block">
                              Cumulative Layout Shift (CLS)
                            </span>
                            <span className="text-lg font-mono text-emerald-400 font-semibold mt-1 block">
                              {seoResult.vitalsMetrics.cls}
                            </span>
                            <span className="text-[9px] text-lux-text/40 block mt-1">
                              Layout element stability
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5">
                        <span className="font-mono text-[8px] text-luxury-gold uppercase tracking-widest block mb-1">
                          TECHNICAL ASSESSMENT SUMMARY
                        </span>
                        <p className="text-xs text-lux-text/70 font-light leading-relaxed">
                          {seoResult.vitalsMetrics.assessment}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Localized Search & Vernacular Strategy */}
                  <div className="border border-white/5 bg-black/20 p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-luxury-gold animate-pulse" />
                      <span className="font-mono text-[8.5px] tracking-[0.2em] text-luxury-gold uppercase font-bold">
                        AI-GENERATED VERNACULAR &amp; HINGLISH MARKETING STRATEGY (INDIA DEMOGRAPHICS)
                      </span>
                    </div>
                    <p className="text-xs text-lux-text/80 leading-relaxed font-light">
                      {seoResult.vernacularStrategy}
                    </p>
                  </div>

                  {/* Priority Recommendations */}
                  <div className="space-y-4">
                    <span className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase block">
                      RECOMMENDED DEVELOPMENT ROADMAP
                    </span>
                    <div className="space-y-4">
                      {seoResult.recommendations.map((rec, idx) => (
                        <div key={idx} className="border border-white/5 bg-black/30 p-5 flex flex-col sm:flex-row items-start justify-between gap-4 relative overflow-hidden">
                          <div className="space-y-2 max-w-4xl">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`text-[8.5px] font-mono px-2 py-0.5 uppercase font-bold rounded-none ${
                                rec.priority === "High" ? "bg-velvet-red/10 text-velvet-red border border-velvet-red/20" :
                                rec.priority === "Medium" ? "bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20" :
                                "bg-white/5 text-lux-text/40 border border-white/5"
                              }`}>
                                {rec.priority} PRIORITY
                              </span>
                              <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider">
                                {rec.impact}
                              </span>
                            </div>
                            <h4 className="font-serif text-base text-lux-text font-normal">{rec.title}</h4>
                            <p className="text-xs text-lux-text/60 leading-relaxed font-light font-sans">
                              <strong>Implementation:</strong> {rec.implementation}
                            </p>
                          </div>
                          <div className="shrink-0 flex items-center justify-end font-mono text-[10px] text-luxury-gold font-bold">
                            STEP 0{idx + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meta Tags Optimizer Box */}
                  <div className="border border-white/5 bg-black/40 p-6 space-y-4">
                    <span className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase block">
                      SUGGESTED META CODES FOR SEAMLESS SEARCH RANKING
                    </span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[8px] text-lux-text/40 uppercase">
                          <span>Google Search Card Title Tag</span>
                          <button
                            onClick={() => copyToClipboard(seoResult.metaTagsAnalysis.titleTag, "titleTag", "seo")}
                            className="flex items-center gap-1 hover:text-luxury-gold transition-colors"
                          >
                            {seoCopiedField === "titleTag" ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
                          </button>
                        </div>
                        <div className="p-3 bg-black/50 border border-white/5 text-luxury-gold font-light text-xs break-all">
                          {seoResult.metaTagsAnalysis.titleTag}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[8px] text-lux-text/40 uppercase">
                          <span>Google Search Card Meta Description</span>
                          <button
                            onClick={() => copyToClipboard(seoResult.metaTagsAnalysis.metaDesc, "metaDesc", "seo")}
                            className="flex items-center gap-1 hover:text-luxury-gold transition-colors"
                          >
                            {seoCopiedField === "metaDesc" ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
                          </button>
                        </div>
                        <div className="p-3 bg-black/50 border border-white/5 text-lux-text/80 font-light text-xs leading-relaxed">
                          {seoResult.metaTagsAnalysis.metaDesc}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[8px] text-lux-text/40 uppercase">
                          <span>Canonical link tag</span>
                          <button
                            onClick={() => copyToClipboard(seoResult.metaTagsAnalysis.canonical, "canonical", "seo")}
                            className="flex items-center gap-1 hover:text-luxury-gold transition-colors"
                          >
                            {seoCopiedField === "canonical" ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
                          </button>
                        </div>
                        <div className="p-3 bg-black/50 border border-white/5 text-lux-text/40 font-light text-xs break-all">
                          &lt;link rel="canonical" href="{seoResult.metaTagsAnalysis.canonical}" /&gt;
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* TAB 3: INDIAN MARKET BLOG FORGE */}
        {activeTab === "blog" && (
          <motion.div
            key="tab-blog"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Split Form & Guides view */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Blogging Compiler Input Form */}
              <div className="lg:col-span-2 border border-white/5 bg-black/30 p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-luxury-gold animate-pulse" />
                  <span className="font-mono text-[8.5px] tracking-[0.2em] text-luxury-gold uppercase font-bold">
                    LAUNCH THE AI INDIAN MARKET BLOG COMPILER
                  </span>
                </div>
                
                <form onSubmit={handleBlogGenerate} className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="blog-topic-field" className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase">
                      Enter Topic Idea / Seed Subject
                    </label>
                    <input
                      id="blog-topic-field"
                      type="text"
                      placeholder="e.g., Handcrafted brass accent pieces, Premium organic cashmere kurtas"
                      value={blogTopic}
                      onChange={(e) => setBlogTopic(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none px-4 py-3 text-xs font-mono text-lux-text rounded-none transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="blog-region-select" className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase">
                        Target Demographic Center
                      </label>
                      <select
                        id="blog-region-select"
                        value={blogRegion}
                        onChange={(e) => setBlogRegion(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none px-4 py-3 text-xs font-mono text-lux-text rounded-none appearance-none cursor-pointer transition-all"
                      >
                        <option value="Hyderabad Royal Dynasties">[PRIORITY] Hyderabad Jubilee Hills Royal Families</option>
                        <option value="South Mumbai Elite Districts">South Mumbai &amp; Bandra Elite</option>
                        <option value="Gurugram & South Delhi HNIs">Gurugram &amp; South Delhi HNIs</option>
                        <option value="Bangalore IT Founders Clubs">Bangalore IT Leaders &amp; Executive Posh Clusters</option>
                        <option value="Pan-India High Society">Pan-India High Net Worth Individuals</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="blog-keywords-select" className="font-mono text-[8.5px] tracking-[0.2em] text-lux-text/40 uppercase">
                        Keyword Strategy Style
                      </label>
                      <select
                        id="blog-keywords-select"
                        value={blogKeywordsStyle}
                        onChange={(e) => setBlogKeywordsStyle(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 hover:border-luxury-gold/40 focus:border-luxury-gold focus:outline-none px-4 py-3 text-xs font-mono text-lux-text rounded-none appearance-none cursor-pointer transition-all"
                      >
                        <option value="Elegant English & Hinglish Vernacular Blend">Elegant English &amp; Hinglish Blend</option>
                        <option value="Ultra-exclusive Posh English Prose">Ultra-exclusive Posh English Prose</option>
                        <option value="Sovereign Indian Heritage & Regional Dialect Accent">Sovereign Indian Heritage &amp; Regional Terms</option>
                        <option value="Mobile-first Conversational D2C Hooks">Mobile-first Conversational D2C Hooks</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-white/5">
                    <button
                      type="submit"
                      disabled={isGeneratingBlog || !blogTopic}
                      className="relative group overflow-hidden border border-luxury-gold bg-luxury-gold text-black hover:text-luxury-gold hover:bg-transparent px-8 py-3 text-[10px] font-mono tracking-[0.25em] uppercase font-bold transition-colors duration-500 disabled:opacity-40 animate-pulse"
                    >
                      {isGeneratingBlog ? (
                        <span className="flex items-center gap-2">
                          <Loader2 size={12} className="animate-spin animate-none" />
                          COMPILING INJECTED BLOG DATA...
                        </span>
                      ) : (
                        "COMPILE SEO BLOG POST"
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Sidebar Guide Cards */}
              <div className="border border-white/5 bg-black/10 p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-lux-text/40 uppercase block">
                    HIGH-YIELD INDIAN BLOGGING INDEX
                  </span>
                  
                  <div className="space-y-4 divide-y divide-white/5">
                    {IndianMarketBlogs.map((itm, idx) => (
                      <div key={idx} className={`pt-4 first:pt-0 space-y-1.5`}>
                        <div className="flex items-center justify-between text-[8px] font-mono">
                          <span className="text-luxury-gold uppercase tracking-wider">{itm.category}</span>
                          <span className="text-lux-text/40">{itm.volume}</span>
                        </div>
                        <h4 className="font-serif text-sm text-lux-text font-normal leading-snug">
                          {itm.title}
                        </h4>
                        <p className="text-[10px] text-lux-text/50 leading-relaxed font-light">
                          {itm.meta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 font-mono text-[8px] text-lux-text/40 uppercase tracking-widest text-center">
                  SOVEREIGN BRAND BUILDING SECURED
                </div>
              </div>

            </div>

            {/* Compiled Blog Presentation */}
            <AnimatePresence mode="wait">
              {blogResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                  {/* Blog Metadata Panel */}
                  <div className="border border-white/5 bg-black/20 p-6 space-y-6 h-fit">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-lux-text/40 uppercase block">
                      AI SEO COMPILE INDEX METADATA
                    </span>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-lux-text/40 uppercase block">ESTIMATED READ TIME</span>
                        <span className="text-sm font-mono text-luxury-gold">{blogResult.readTime}</span>
                      </div>

                      <div className="space-y-1">
                        <span className="font-mono text-[8px] text-lux-text/40 uppercase block">TARGET AUDIENCE DEMOGRAPHIC</span>
                        <p className="text-xs text-lux-text/80 leading-relaxed font-light">{blogResult.targetAudience}</p>
                      </div>

                      <div className="space-y-2">
                        <span className="font-mono text-[8px] text-lux-text/40 uppercase block">HIGH-RANK KEYWORDS USED</span>
                        <div className="flex flex-wrap gap-1.5">
                          {blogResult.keywords.map((kw, i) => (
                            <span key={i} className="text-[9px] font-mono bg-white/[0.03] border border-white/5 text-lux-text/75 px-2 py-0.5 rounded-none">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5 space-y-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[8px] text-lux-text/40 uppercase">
                            <span>Google Search title</span>
                            <button
                              onClick={() => copyToClipboard(blogResult.title, "title", "blog")}
                              className="text-luxury-gold hover:underline flex items-center gap-1"
                            >
                              {blogCopiedField === "title" ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
                            </button>
                          </div>
                          <p className="text-xs text-lux-text font-serif font-light leading-snug">
                            {blogResult.title}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center text-[8px] text-lux-text/40 uppercase">
                            <span>Google description</span>
                            <button
                              onClick={() => copyToClipboard(blogResult.metaDescription, "metaDescription", "blog")}
                              className="text-luxury-gold hover:underline flex items-center gap-1"
                            >
                              {blogCopiedField === "metaDescription" ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
                            </button>
                          </div>
                          <p className="text-[11px] text-lux-text/60 leading-relaxed font-light">
                            {blogResult.metaDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blog Article Content Panel */}
                  <div className="lg:col-span-2 border border-white/5 bg-black/40 p-6 sm:p-8 space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                      <span className="font-mono text-[8px] tracking-[0.2em] text-lux-text/40 uppercase">
                        COMPILED MARKDOWN DOCUMENT
                      </span>
                      <button
                        onClick={() => copyToClipboard(blogResult.content, "content", "blog")}
                        className="py-1 px-3 border border-white/10 hover:border-luxury-gold hover:text-luxury-gold text-lux-text/75 font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        {blogCopiedField === "content" ? (
                          <><Check size={11} /> COPIED DOCUMENT</>
                        ) : (
                          <><Copy size={11} /> COPY FULL MARKDOWN</>
                        )}
                      </button>
                    </div>

                    {/* Pre-styled container to format the markdown cleanly */}
                    <div className="prose prose-invert max-w-none text-lux-text/85 text-xs sm:text-sm font-sans font-light leading-relaxed space-y-5 select-all">
                      <h2 className="display-serif text-xl sm:text-2xl text-luxury-gold tracking-tight font-normal leading-tight mt-2 border-b border-white/5 pb-2">
                        {blogResult.title}
                      </h2>
                      <div className="whitespace-pre-line font-serif space-y-4 leading-relaxed font-light text-lux-text/80 text-[13px] sm:text-[14px]">
                        {blogResult.content}
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
