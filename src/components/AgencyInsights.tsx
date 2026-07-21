import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { RefreshCw, ExternalLink, Newspaper, Calendar } from "lucide-react";

interface NewsItem {
  title: string;
  source: string;
  url: string;
  summary: string;
  category: string;
  date: string;
}

export default function AgencyInsights() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const glow = useTransform(
    scrollYProgress,
    [0.95, 1],
    ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 10px rgba(212, 175, 55, 0.6)"]
  );

  const fetchNews = async (silent = false) => {
    if (!silent) {
      setIsLoading(true);
    } else {
      setIsRefreshing(true);
    }
    setError(null);

    try {
      const response = await fetch("/api/luxury-news");
      if (!response.ok) {
        throw new Error("Unable to retrieve current market intelligence.");
      }
      const result = await response.json();
      if (result && Array.isArray(result.data)) {
        setNews(result.data);
      } else {
        throw new Error("Invalid intelligence report structure received.");
      }
    } catch (err: any) {
      console.error("Error fetching luxury insights:", err);
      setError("An unexpected issue occurred while retrieving the latest intelligence.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section 
      id="insights" 
      ref={sectionRef}
      className="py-28 bg-transparent relative overflow-hidden border-t border-white/5"
    >
      {/* Section Reading Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-luxury-gold/40 origin-left z-20"
        style={{ scaleX, boxShadow: glow }}
      />

      {/* Decorative luxury gradient spot */}
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-luxury-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Sync Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
              Market Intelligence
            </span>
            <h2 className="display-serif text-4xl md:text-5xl text-lux-text">
              Agency Insights
            </h2>
            <p className="text-lux-text/50 text-sm md:text-base font-light max-w-xl">
              Real-time headlines and strategic shifts curated from elite luxury marketing, fashion, and business publications.
            </p>
          </div>
          
          {/* Synchronize Button */}
          <button
            onClick={() => fetchNews(true)}
            disabled={isLoading || isRefreshing}
            className="self-start md:self-end flex items-center gap-3 px-6 py-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-luxury-gold/30 text-lux-text text-xs uppercase tracking-[0.2em] font-mono transition-all duration-300 disabled:opacity-50 select-none group cursor-pointer"
          >
            <RefreshCw
              size={13}
              className={`text-luxury-gold transition-transform duration-700 ${
                isRefreshing ? "animate-spin" : "group-hover:rotate-180"
              }`}
            />
            {isRefreshing ? "Synchronizing..." : "Sync Latest"}
          </button>
        </div>

        {/* Dynamic States Grid */}
        {isLoading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="p-8 border border-white/5 bg-[#131313]/15 backdrop-blur-md min-h-[280px] flex flex-col justify-between animate-pulse"
              >
                <div className="space-y-4">
                  <div className="h-3 w-20 bg-white/10 rounded" />
                  <div className="h-5 w-full bg-white/10 rounded" />
                  <div className="h-5 w-4/5 bg-white/10 rounded" />
                  <div className="space-y-2 pt-2">
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-5/6 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="h-6 w-24 bg-white/10 rounded pt-6" />
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State Card with fallback retry button */
          <div className="p-12 border border-white/10 bg-[#131313]/35 backdrop-blur-xl text-center max-w-lg mx-auto space-y-6">
            <Newspaper size={32} className="mx-auto text-luxury-gold/60" />
            <h3 className="display-serif text-2xl text-lux-text font-normal">Temporary Interruption</h3>
            <p className="text-sm text-lux-text/60 leading-relaxed font-light">{error}</p>
            <button
              onClick={() => fetchNews(false)}
              className="px-6 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono uppercase tracking-widest text-lux-text transition-all duration-300 cursor-pointer"
            >
              Retry Connection
            </button>
          </div>
        ) : (
          /* Staggered News Cards Grid */
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {news.map((item, idx) => (
                <motion.div
                  key={item.title + idx}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ y: -4, borderColor: "rgba(200, 165, 90, 0.25)" }}
                  className="group relative flex flex-col justify-between p-8 md:p-10 border border-white/10 bg-[#131313]/35 backdrop-blur-xl transition-all duration-700 overflow-hidden"
                >
                  {/* Fine Gold Corner Highlights */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="space-y-5">
                    {/* Category Label */}
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
                      {item.category}
                    </span>

                    {/* Headline */}
                    <h3 className="font-serif text-xl text-lux-text leading-snug font-normal group-hover:text-lux-text transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-lux-text/60 leading-relaxed font-light">
                      {item.summary}
                    </p>
                  </div>

                  {/* Metadata and Link Footer */}
                  <div className="pt-6 border-t border-white/5 mt-8 flex items-center justify-between">
                    <div className="space-y-1">
                      {/* Media Source */}
                      <span className="text-xs text-lux-text/80 font-normal">
                        {item.source}
                      </span>
                      {/* Timeline */}
                      <div className="flex items-center gap-1.5 text-[10px] text-lux-text/40 font-mono">
                        <Calendar size={10} className="text-luxury-gold/60" />
                        <span>{item.date || "Recent"}</span>
                      </div>
                    </div>

                    {/* Outbound Link */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-none bg-white/[0.02] hover:bg-luxury-gold/[0.08] border border-white/5 hover:border-luxury-gold/30 text-lux-text/50 hover:text-luxury-gold transition-all duration-300 group/link"
                      title={`Read source at ${item.source}`}
                    >
                      <ExternalLink size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
