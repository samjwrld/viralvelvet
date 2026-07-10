export interface Service {
  id: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  metricLabel?: string;
  metricVal?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  description: string;
  category: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  focus: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  symbol: string; // Dynamic monochrome vector symbol SVG-like or initials
}
