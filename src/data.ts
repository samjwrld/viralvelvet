import { Service, CaseStudy, ProcessStep, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "meta-ads",
    title: "META ADS MANAGEMENT",
    quote: "Reach the right audience on Facebook and Instagram with campaigns designed to generate qualified leads, increase online sales, and grow your customer base.",
    description: "Our Meta Ads services include: Lead Generation Campaigns, Conversion Campaigns, eCommerce Advertising, WhatsApp Lead Generation, Messenger Campaigns, Retargeting & Remarketing, Advantage+ Shopping Campaigns, Dynamic Creative Optimization, Audience Research & Lookalike Audiences, and Campaign Scaling & Optimization.",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Average Client ROAS",
    metricVal: "7.8x"
  },
  {
    id: "google-ads",
    title: "GOOGLE ADS MANAGEMENT",
    quote: "Connect with customers exactly when they're searching for your products or services.",
    description: "Our Google Ads specialists build highly optimized campaigns that increase visibility, reduce wasted ad spend, and drive high-intent conversions. Services include: Google Search Ads, Performance Max Campaigns, Google Shopping Ads, Display Advertising, YouTube Advertising, Local Campaigns, Call Campaigns, Remarketing, Conversion Tracking, and Campaign Optimization.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "High-Intent Acquisition Growth",
    metricVal: "+240%"
  },
  {
    id: "linkedin",
    title: "LINKEDIN ADS MANAGEMENT",
    quote: "Generate high-quality B2B leads and connect directly with business owners, executives, procurement teams, HR leaders, and decision-makers.",
    description: "Our LinkedIn advertising solutions include: Sponsored Content, Lead Generation Forms, Conversation Ads, Message Ads, Event Promotions, Account-Based Marketing (ABM), Executive Targeting, and B2B Lead Generation Campaigns.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Executive Contacts Reached",
    metricVal: "12M+"
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
      { label: "Revenue Generated", value: "₹1,180 Cr" },
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
    description: "We begin by understanding your business, industry, competitors, target audience, and growth objectives.",
    duration: "Week 1",
    focus: "Strategic Alignment"
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategy",
    description: "We create a tailored advertising strategy with the right platforms, messaging, audience targeting, and budget allocation.",
    duration: "Week 2",
    focus: "Tactical Architecture"
  },
  {
    id: "launch",
    number: "03",
    title: "Launch",
    description: "Our specialists build, test, and launch campaigns across Meta Ads, Google Ads, and LinkedIn Ads using proven frameworks.",
    duration: "Week 3",
    focus: "Ad Deployment"
  },
  {
    id: "optimize",
    number: "04",
    title: "Optimize",
    description: "We continually improve campaign performance through A/B testing, audience refinement, creative optimization, bid adjustments, and conversion analysis.",
    duration: "Week 4-5",
    focus: "Efficiency Refinement"
  },
  {
    id: "scale",
    number: "05",
    title: "Scale",
    description: "Once campaigns achieve profitable results, we strategically increase budgets while maintaining efficiency and maximizing return on investment.",
    duration: "Continuous",
    focus: "Revenue Multiplier"
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
