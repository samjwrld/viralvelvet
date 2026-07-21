import { Service, CaseStudy, ProcessStep, Testimonial, ClientLogo } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "meta-ads",
    title: "META ADS MANAGEMENT",
    quote: "Reach the right audience on Facebook and Instagram with campaigns designed to generate qualified leads, increase online sales, and grow your customer base.",
    description: "Our Meta Ads services include: Lead Generation Campaigns, Conversion Campaigns, eCommerce Advertising, WhatsApp Lead Generation, Messenger Campaigns, Retargeting & Remarketing, Advantage+ Shopping Campaigns, Dynamic Creative Optimization, Audience Research & Lookalike Audiences, and Campaign Scaling & Optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "Average Client ROAS",
    metricVal: "7.8x"
  },
  {
    id: "google-ads",
    title: "GOOGLE ADS MANAGEMENT",
    quote: "Connect with customers exactly when they're searching for your products or services.",
    description: "Our Google Ads specialists build highly optimized campaigns that increase visibility, reduce wasted ad spend, and drive high-intent conversions. Services include: Google Search Ads, Performance Max Campaigns, Google Shopping Ads, Display Advertising, YouTube Advertising, Local Campaigns, Call Campaigns, Remarketing, Conversion Tracking, and Campaign Optimization.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
    metricLabel: "High-Intent Acquisition Growth",
    metricVal: "+240%"
  },
  {
    id: "linkedin",
    title: "LINKEDIN ADS MANAGEMENT",
    quote: "Generate high-quality B2B leads and connect directly with business owners, executives, procurement teams, HR leaders, and decision-makers.",
    description: "Our LinkedIn advertising solutions include: Sponsored Content, Lead Generation Forms, Conversation Ads, Message Ads, Event Promotions, Account-Based Marketing (ABM), Executive Targeting, and B2B Lead Generation Campaigns.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=1000&q=80",
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
    id: "koncept-house",
    title: "The Koncept House",
    subtitle: "Modernist Interiors Redefined",
    category: "Interiors Design Studio",
    description: "Architecting a high-performance digital funnel for a premier interior design studio. We generated over 500+ qualified leads through targeted Meta Ads and a conversion-optimized visual portfolio.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Lead Quality Score", value: "92%" },
      { label: "Conversion Rate", value: "14.5%" }
    ]
  },
  {
    id: "w-design-studio",
    title: "W Design Studio",
    subtitle: "Visionary Architecture",
    category: "Architectural Design Studio",
    description: "Driving high-intent acquisition for world-class architectural services. By leveraging Google Search and LinkedIn sequences, we connected visionaries with specialized architectural expertise.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Project Value", value: "₹450 Cr+" },
      { label: "Executive Reach", value: "85k+" }
    ]
  },
  {
    id: "pearl-white",
    title: "Pearl White Designs",
    subtitle: "Modern Interior Aesthetics",
    category: "Interior Design Studio",
    description: "Scaling a premier interior design studio through high-conversion visual storytelling and targeted Meta campaigns, securing 500+ qualified project inquiries.",
    image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Project Value", value: "Premium" },
      { label: "Lead Precision", value: "92%" }
    ]
  },
  {
    id: "cureforever",
    title: "Cureforever.in",
    subtitle: "Nutraceutical Growth Scale",
    category: "Nutraceutical Brand",
    description: "Building a robust performance engine for a national nutraceutical brand, driving significant volume and maintaining high-quality lead flow through algorithmic optimization.",
    image: "https://images.unsplash.com/photo-1584017945666-8347bb3db20c?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Sales Growth", value: "+180%" },
      { label: "ROAS", value: "6.4x" }
    ]
  },
  {
    id: "patels-group",
    title: "Patel's Group",
    subtitle: "Premium B2B & B2C Enterprise",
    category: "Premium Enterprise (B2B/B2C)",
    description: "Securing high-value leads for a diversified enterprise group through hyper-targeted audience segmentation and premium corporate creative assets.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Market Reach", value: "B2B & B2C" },
      { label: "Lead Precision", value: "94%" }
    ]
  },
  {
    id: "bharat-ip",
    title: "Bharat IP Defense",
    subtitle: "Strategic IP Protection",
    category: "Defense & IP Protection",
    description: "Securing specialized leads for intellectual property and defense solutions. We engineered a dual-layer strategy focusing on high-level security professionals and legal executives.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Industry Authority", value: "Top 5%" },
      { label: "Inquiry Growth", value: "+310%" }
    ]
  },
  {
    id: "sree-sai",
    title: "Sree Sai Transport Togo",
    subtitle: "Global Logistics Excellence",
    category: "Logistics & Transport",
    description: "Streamlining logistics inquiries for high-performance transport services across West Africa. Our performance marketing engine delivered consistent high-intent shipping and logistics leads.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Qualified Leads", value: "500+" },
      { label: "Network Growth", value: "+220%" },
      { label: "Cost Per Lead", value: "-45%" }
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
    quote: "ViralVelvet doesn't think like an agency. They think like partners. They understood that for The Koncept House, lead quality was everything. They delivered 500+ leads that actually convert.",
    author: "Founder",
    role: "Creative Director",
    company: "The Koncept House"
  },
  {
    id: "test-2",
    quote: "Our architectural inquiry rate skyrocketed. Their ability to target high-net-worth individuals for W Design Studio has been a game-changer for our project pipeline.",
    author: "Prasanna",
    role: "Principal Architect",
    company: "W Design Studio"
  },
  {
    id: "test-3",
    quote: "The strategic precision they brought to Bharat IP was impressive. We needed highly specialized leads in the defense sector, and they exceeded our expectations significantly.",
    author: "Defense Liaison",
    role: "Legal & IP Head",
    company: "Bharat IP Defense"
  },
  {
    id: "test-4",
    quote: "Working with ViralVelvet has transformed our digital acquisition. Pearl White Designs now sees a consistent flow of premium patient leads.",
    author: "Founder",
    role: "Director",
    company: "Pearl White Designs"
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { 
    id: "cl-7", 
    name: "THE KONCEPT HOUSE", 
    industry: "Interiors Design Studio", 
    symbol: "KH",
    leads: "500+",
    description: "High-intent lead generation for premium interior design projects and modernist luxury homes."
  },
  { 
    id: "cl-8", 
    name: "W DESIGN STUDIO", 
    industry: "Architectural Design Studio", 
    symbol: "W",
    leads: "500+",
    description: "Connecting visionaries with world-class architectural expertise and sustainable structural design."
  },
  { 
    id: "cl-9", 
    name: "SREE SAI TRANSPORT TOGO", 
    industry: "Logistics & Transport", 
    symbol: "SST",
    leads: "500+",
    description: "Streamlining logistics inquiries for high-performance transport services across West Africa."
  },
  { 
    id: "cl-10", 
    name: "BHARAT IP DEFENSE", 
    industry: "Defense & IP Protection", 
    symbol: "BIP",
    leads: "500+",
    description: "Securing specialized leads for intellectual property protection and high-level defense solutions."
  },
  { 
    id: "cl-1", 
    name: "PEARL WHITE DESIGNS", 
    industry: "Interior Design Studio", 
    symbol: "PWD",
    leads: "500+",
    description: "Digital acquisition and visual storytelling for high-end interior design and architectural projects."
  },
  { 
    id: "cl-2", 
    name: "CUREFOREVER.IN", 
    industry: "Nutraceutical Brand", 
    symbol: "CF",
    leads: "500+",
    description: "Performance scaling and algorithmic lead generation for a national nutraceutical brand."
  },
  { 
    id: "cl-3", 
    name: "PATEL'S GROUP", 
    industry: "Premium Enterprise (B2B/B2C)", 
    symbol: "PG",
    leads: "500+",
    description: "Strategic lead generation and brand authority for a premium B2B and B2C enterprise group."
  }
];
