import { useState } from "react";
import { motion } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp, Award, Users, BarChart3 } from "lucide-react";

// Mock continuous performance index representing standard portfolio scaling over 12 months
const SCALING_DATA = [
  { month: "Jan", roas: 3.2, revenue: 12 },
  { month: "Feb", roas: 3.8, revenue: 18 },
  { month: "Mar", roas: 4.5, revenue: 26 },
  { month: "Apr", roas: 5.1, revenue: 38 },
  { month: "May", roas: 5.8, revenue: 52 },
  { month: "Jun", roas: 6.4, revenue: 68 },
  { month: "Jul", roas: 7.0, revenue: 84 },
  { month: "Aug", roas: 7.2, revenue: 99 },
  { month: "Sep", roas: 7.6, revenue: 115 },
  { month: "Oct", roas: 8.1, revenue: 132 },
  { month: "Nov", roas: 8.3, revenue: 148 },
  { month: "Dec", roas: 8.4, revenue: 158 },
];

export default function ResultsMetrics() {
  const [activeMetric, setActiveMetric] = useState<"roas" | "revenue">("roas");

  const coreMetrics = [
    {
      id: "roas",
      icon: <TrendingUp size={18} className="text-luxury-gold" />,
      value: "8.4x",
      label: "Portfolio Avg ROAS",
      description: "Aggregated multiplier across high-ticket social and precision intent keywords."
    },
    {
      id: "revenue",
      icon: <Award size={18} className="text-luxury-gold" />,
      value: "₹1,320 Cr+",
      label: "Client Revenue Realized",
      description: "Direct gross transactional value generated via bespoke customer acquisition channels."
    },
    {
      id: "retention",
      icon: <Users size={18} className="text-luxury-gold" />,
      value: "99.2%",
      label: "Partner Retention Rate",
      description: "Long-term cooperative alignment based strictly on continuous performance yields."
    }
  ];

  return (
    <section id="results-metrics" className="relative py-28 bg-transparent overflow-hidden border-b border-white/5">
      {/* Accent absolute lights */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-velvet-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="font-mono text-[10px] uppercase text-luxury-gold tracking-[0.4em] block">
              DATA INTEGRITY
            </span>
            <h2 className="display-serif text-4xl md:text-6xl text-lux-text leading-tight">
              Advertising Backed <span className="font-light italic text-luxury-gold">by Data</span>
            </h2>
            <p className="text-base text-lux-text/80 leading-relaxed font-sans font-light">
              Every decision we make is supported by data. From audience research and keyword analysis to conversion tracking and revenue reporting, we continuously refine campaigns to improve performance.
            </p>
            <div className="w-16 h-[1px] bg-luxury-gold/20 pt-2" />
            <p className="text-xs text-lux-text/50 font-serif italic pt-1">
              "Because successful advertising should create measurable business impact—not just impressive dashboards."
            </p>
          </div>
          
          <div className="lg:col-span-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-luxury-gold mb-6 font-semibold">
              OUR REPORTING FOCUSES ON THE METRICS THAT MATTER:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Qualified Leads", desc: "Verifiable potential customers showing strong purchase intent." },
                { name: "Cost Per Acquisition (CPA)", desc: "Surgically minimized capital required to earn a conversion." },
                { name: "Return on Ad Spend (ROAS)", desc: "Maximizing the direct revenue multiple on every ad dollar spent." },
                { name: "Conversion Rate", desc: "The ratio of high-intent clicks converting into customer acquisition." },
                { name: "Customer Acquisition Cost (CAC)", desc: "A key unit economic metric monitored to protect margins." },
                { name: "Revenue Growth", desc: "Driving month-on-month scaling directly to your bottom line." },
                { name: "Campaign Profitability", desc: "Evaluating bottom-line returns over vanity impressions." }
              ].map((metricItem, mIdx) => (
                <div 
                  key={metricItem.name} 
                  className="p-4 border border-white/5 bg-[#131313]/30 flex items-start gap-3 hover:border-luxury-gold/25 transition-all duration-300"
                >
                  <span className="font-mono text-[10px] text-luxury-gold mt-0.5">[{mIdx + 1}]</span>
                  <div>
                    <span className="font-serif text-sm text-lux-text font-normal block">{metricItem.name}</span>
                    <span className="text-[10px] text-lux-text/50 font-sans font-light leading-normal block mt-1">{metricItem.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Triple Counting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreMetrics.map((m) => {
            const isSelected = activeMetric === m.id || (m.id === "retention" && activeMetric === "roas");
            return (
              <div
                key={m.id}
                onClick={() => {
                  if (m.id === "roas" || m.id === "revenue") {
                    setActiveMetric(m.id);
                  }
                }}
                className={`p-8 border transition-all duration-700 cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? "border-luxury-gold/40 bg-[#131313]/55 shadow-[0_10px_30px_rgba(200,165,90,0.05)]" 
                    : "border-white/10 bg-[#131313]/25 hover:border-white/20"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full bg-velvet-red/10 border border-luxury-gold/20 flex items-center justify-center">
                      {m.icon}
                    </div>
                    {m.id !== "retention" && (
                      <span className="font-mono text-[8px] uppercase tracking-widest text-luxury-gold/50 bg-white/[0.02] border border-white/5 px-2 py-0.5">
                        {activeMetric === m.id ? "Viewing Index" : "Select to Chart"}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <span className="display-serif text-4xl md:text-5xl text-luxury-gold block font-semibold tracking-tight">
                      {m.value}
                    </span>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-lux-text font-medium">
                      {m.label}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-lux-text/50 leading-relaxed font-sans font-light mt-6 border-t border-white/5 pt-4">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recharts Cinematic Graph visualization */}
        <div className="w-full border border-white/10 bg-[#131313]/35 backdrop-blur-xl p-6 md:p-10 relative overflow-hidden">
          
          {/* Subtle watermark background indicator */}
          <div className="absolute top-6 right-8 flex items-center gap-2 font-mono text-[8px] text-luxury-gold/30 tracking-[0.25em]">
            <BarChart3 size={11} />
            <span>PORTFOLIO GROWTH GRAPH</span>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold/70 block">
                {activeMetric === "roas" ? "ALLOCATIVE EFFICIENCY TREND" : "ACQUISITION GROSS REALIZED"}
              </span>
              <h3 className="display-serif text-2xl text-lux-text font-normal mt-1">
                {activeMetric === "roas" ? "Avg. ROAS Index Progression (12 Months)" : "Client Aggregated Capital Realized (Crores)"}
              </h3>
            </div>

            {/* Quick Toggle Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveMetric("roas")}
                className={`px-4 py-2 text-[9px] font-mono uppercase tracking-widest transition-all ${
                  activeMetric === "roas"
                    ? "bg-velvet-red text-lux-text border border-luxury-gold/35"
                    : "bg-white/[0.02] text-lux-text/50 border border-white/5 hover:border-white/25 hover:text-lux-text"
                }`}
              >
                ROAS Index
              </button>
              <button
                onClick={() => setActiveMetric("revenue")}
                className={`px-4 py-2 text-[9px] font-mono uppercase tracking-widest transition-all ${
                  activeMetric === "revenue"
                    ? "bg-velvet-red text-lux-text border border-luxury-gold/35"
                    : "bg-white/[0.02] text-lux-text/50 border border-white/5 hover:border-white/25 hover:text-lux-text"
                }`}
              >
                Capital
              </button>
            </div>
          </div>

          <div className="w-full h-[320px] sm:h-[380px] md:h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={SCALING_DATA}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorVelvet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4B0B14" stopOpacity={0.65} />
                    <stop offset="95%" stopColor="#4B0B14" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C8A55A" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#C8A55A" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255, 255, 255, 0.03)" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="rgba(247, 243, 238, 0.3)" 
                  fontSize={10} 
                  fontFamily="var(--font-mono)" 
                  tickLine={false} 
                />
                <YAxis 
                  stroke="rgba(247, 243, 238, 0.3)" 
                  fontSize={10} 
                  fontFamily="var(--font-mono)" 
                  tickLine={false} 
                  tickFormatter={(val) => activeMetric === "roas" ? `${val}x` : `₹${(val * 8.35).toFixed(0)} Cr`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#131313",
                    borderColor: "rgba(200, 165, 90, 0.35)",
                    color: "#F7F3EE",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    borderRadius: "0px",
                  }}
                  formatter={(value: any) => [
                    activeMetric === "roas" ? `${value}x ROAS` : `₹${(value * 8.35).toFixed(0)} Cr Capital`,
                    activeMetric === "roas" ? "Avg. ROAS Yield" : "Aggregated Revenue"
                  ]}
                  labelStyle={{ fontFamily: "var(--font-mono)", color: "#C8A55A", fontSize: "10px", textTransform: "uppercase" }}
                />
                <Area
                  type="monotone"
                  dataKey={activeMetric === "roas" ? "roas" : "revenue"}
                  stroke={activeMetric === "roas" ? "#C8A55A" : "#4B0B14"}
                  strokeWidth={1.8}
                  fillOpacity={1}
                  fill={activeMetric === "roas" ? "url(#colorGold)" : "url(#colorVelvet)"}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
