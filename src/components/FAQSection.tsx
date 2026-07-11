import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which advertising platform is right for my business?",
      answer: "The ideal platform depends on your goals and audience. We help businesses choose the right mix of Meta Ads, Google Ads, and LinkedIn Ads based on their objectives."
    },
    {
      question: "Do you work with startups and enterprise businesses?",
      answer: "Yes. We work with startups, growing businesses, established brands, and enterprise organizations looking to scale through paid advertising."
    },
    {
      question: "Do you only manage advertising?",
      answer: "Our primary focus is performance advertising. We also provide web development, landing pages, creative design, and social media management to improve advertising performance."
    },
    {
      question: "How do you measure campaign success?",
      answer: "Success is measured through qualified leads, customer acquisition, revenue growth, ROAS, CPA, and overall return on investment—not vanity metrics."
    },
    {
      question: "Can you improve our existing campaigns?",
      answer: "Absolutely. We regularly audit underperforming campaigns, identify opportunities, and implement optimization strategies that improve performance."
    }
  ];

  // FAQ Schema Markup (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="relative py-28 bg-transparent overflow-hidden border-b border-white/5">
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-velvet-red/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-luxury-gold block">
            INTELLECTUAL CLEARITY
          </span>
          <h2 className="display-serif text-3xl md:text-5xl text-lux-text font-light">
            Frequently Asked <span className="font-light italic text-luxury-gold">Questions</span>
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold/30 mx-auto mt-4" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className="border border-white/5 bg-[#131313]/25 hover:border-white/10 transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full py-6 px-6 md:px-8 flex items-center justify-between text-left text-lux-text hover:text-luxury-gold transition-colors duration-200"
                >
                  <span className="font-serif text-base sm:text-lg font-light flex items-center gap-3">
                    <HelpCircle size={16} className="text-luxury-gold/40 shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-luxury-gold shrink-0 ml-4"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-sm text-lux-text/60 leading-relaxed font-sans font-light border-t border-white/5 pt-4 bg-white/[0.01]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
