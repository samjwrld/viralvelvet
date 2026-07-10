import { Service, CaseStudy, ProcessStep, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "meta-ads",
    title: "META ADS",
    quote: "We don't buy impressions. We create influence.",
    description: "Architecting hyper-targeted, cinematic social campaigns designed to occupy mindshare. We design high-converting visual stories that render algorithms obsolete, positioning your offer not as a purchase, but as an entry into an elite circle.",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Average Client ROAS",
    metricVal: "7.8x"
  },
  {
    id: "google-ads",
    title: "GOOGLE ADS",
    quote: "Every click deserves intention.",
    description: "Dominating high-intent luxury keywords. We intercept buyers exactly when their desire peaks, crafting highly customized search and shopping journeys that align with the high-ticket expectations of premium clients.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "High-Ticket Client Acquisition",
    metricVal: "+240%"
  },
  {
    id: "linkedin",
    title: "LINKEDIN MARKETING",
    quote: "Authority attracts opportunity.",
    description: "Transforming founders and executives into industry icons. Through meticulous personal branding and intellectual performance marketing, we establish absolute B2B authority, opening doors to high-caliber alliances and venture opportunities.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Executive Reaches Secured",
    metricVal: "12M+"
  },
  {
    id: "web-development",
    title: "WEB DEVELOPMENT",
    quote: "Luxury isn't designed. It's engineered.",
    description: "Forging blistering-fast, bespoke digital flagships. Our platforms feature buttery-smooth transitions, pristine typography, and custom 3D engines that deliver sensory luxury with zero friction. We build digital real estate that commands premium prices.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Site Speed Score",
    metricVal: "99/100"
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    quote: "Stories become status.",
    description: "Curation that inspires absolute devotion. We turn company social handles into living luxury galleries. Utilizing bespoke cinematography, haute-couture editorial curation, and sophisticated copy to cultivate an obsessive following.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Brand Love & Engagement",
    metricVal: "4.2x"
  }
];

export const ALL_SERVICES_LIST = [
  "Meta Ads", "Google Ads", "LinkedIn Marketing", "Social Media Management",
  "Branding", "Web Design", "Web Development", "SEO", "Performance Marketing",
  "Creative Strategy", "Conversion Optimization", "Analytics", "Content Production"
];

export const PORTFOLIO_DATA: CaseStudy[] = [
  {
    id: "aethel-residences",
    title: "The Æthel Residences",
    subtitle: "A Sovereign Standard of Living",
    category: "Luxury Real Estate",
    description: "A private enclave of multi-million dollar penthouses. We created an invitation-only digital campaign and high-end interactive portal that drove complete sell-out in 42 days, fully bypassing public MLS listings.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Revenue Generated", value: "$142M" },
      { label: "Sell-out Time", value: "42 Days" },
      { label: "ROAS achieved", value: "11.2x" }
    ]
  },
  {
    id: "vanguard-chronicles",
    title: "Vanguard Horology",
    subtitle: "Timepieces for the Unreasonable",
    category: "Haute Horlogerie",
    description: "Re-positioning a Swiss independent watchmaker for ultra-high-net-worth collectors. By combining dark aesthetic storytelling on Instagram with precise Google Search capture, waitlist applications surged by 480%.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Waitlist growth", value: "+480%" },
      { label: "Return on Ad Spend", value: "8.4x" },
      { label: "Campaign Reach", value: "15M+" }
    ]
  },
  {
    id: "monolithe-automotive",
    title: "The Monolithe EV",
    subtitle: "Silent Speed, Solid Carbon",
    category: "Automobile Brand",
    description: "Launching a limited-run electric hypercar with strict criteria. We engineered a dual-layer strategy: cinematic narrative films driving high-society PR, and highly confidential LinkedIn target sequences for verified tech executives.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Allocations Sold", value: "100%" },
      { label: "Qualified leads", value: "1,200+" },
      { label: "Private bookings", value: "84" }
    ]
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "Meticulous deep-dive into your brand's heritage, unit economics, and target audience's psychological drivers of desire.",
    duration: "Week 1",
    focus: "Competitive Archeology"
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategy",
    description: "Engineering the customized digital architecture. We define exact keyword domains, creative concepts, and audience segment exclusions.",
    duration: "Week 2-3",
    focus: "Exclusive Playbook"
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description: "Crafting haute-couture creative assets. Cinema-grade video production, ultra-premium web design layouts, and copy that commands.",
    duration: "Week 4-5",
    focus: "Creative Masterpieces"
  },
  {
    id: "launch",
    number: "04",
    title: "Launch",
    description: "Unveiling your campaign with silent, surgical precision. No fanfare, just strategic execution that commands high conversions immediately.",
    duration: "Week 6",
    focus: "Immersive Activation"
  },
  {
    id: "scale",
    number: "05",
    title: "Scale",
    description: "Aggressive optimization using proprietary attribution systems, growing capital allocation strictly based on clear, verifiable ROAS metrics.",
    duration: "Continuous",
    focus: "Absolute Dominance"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "ViralVelvet doesn't think like an agency. They think like partners in an art house. They understood our brand's silence was our greatest asset, and turned it into $40M in sales.",
    author: "Maximilian Vane",
    role: "Global Creative Director",
    company: "Vane & Co. Jewellery"
  },
  {
    id: "test-2",
    quote: "Our ROAS went from a struggling 2.5x to a consistent 8.4x. Their aesthetics are impeccable, but their mathematical rigor under the hood is what actually blew us away.",
    author: "Elena Rostova",
    role: "VP of Marketing",
    company: "Aura Resorts"
  },
  {
    id: "test-3",
    quote: "Other agencies wanted to flood the market with cheap banners. ViralVelvet built a quiet digital waitlist that generated absolute obsession and fully pre-sold our latest tower development.",
    author: "Arthur Pendelton",
    role: "Managing Director",
    company: "Pendelton Estates"
  }
];

export const CLIENT_LOGOS = [
  { id: "cl-1", name: "A E T H E L", symbol: "Æ" },
  { id: "cl-2", name: "V A N G U A R D", symbol: "Ⅴ" },
  { id: "cl-3", name: "M O N O L I T H E", symbol: "🜎" },
  { id: "cl-4", name: "R O S T O V A", symbol: "℟" },
  { id: "cl-5", name: "P E N D E L T O N", symbol: "♇" },
  { id: "cl-6", name: "H A U T E", symbol: "ℋ" },
];
