import { motion } from "motion/react";

interface GlassRevealImageProps {
  src: string;
  alt: string;
  index: number;
}

export default function GlassRevealImage({ src, alt, index }: GlassRevealImageProps) {
  return (
    <div className="relative group overflow-hidden aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] w-full max-w-lg mx-auto bg-[#070709] border border-white/5 shadow-2xl">
      
      {/* 1. Underlying Image with cinematic entry scaling */}
      <motion.img
        initial={{ scale: 1.15, filter: "grayscale(100%) brightness(75%)" }}
        whileInView={{ 
          scale: 1, 
          filter: "grayscale(0%) brightness(95%)",
          transition: {
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1], // cinematic smooth ease
            delay: 0.15
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
      />

      {/* 2. Sliding Crystal Glass Sheet & Gold Refraction Seam */}
      {/* This sheet covers the image and slides off to the right, leaving the image revealed. */}
      <motion.div
        initial={{ x: "0%" }}
        whileInView={{ 
          x: "102%",
          transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1], // Premium easing
            delay: 0.1
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 z-30 pointer-events-none bg-white/[0.02] backdrop-blur-[15px] border-r border-white/30"
        style={{
          boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.4), inset -1px 0 2px rgba(255, 255, 255, 0.25)"
        }}
      >
        {/* Glowing Gold Refraction Seam right on the leading edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-luxury-gold/30 via-white to-luxury-gold/30 shadow-[0_0_20px_rgba(200,165,90,0.8)]" />
        {/* Subtle inner gold sheen on the sliding crystal edge */}
        <div className="absolute right-[2px] top-0 bottom-0 w-[4px] bg-luxury-gold/20 blur-[1px]" />
      </motion.div>

      {/* 3. Sweeping Reflection Glare Highlight */}
      {/* A diagonal bright white light ray that sweeps across the lens. */}
      <motion.div
        initial={{ x: "-150%", opacity: 0 }}
        whileInView={{ 
          x: "180%", 
          opacity: [0, 1, 1, 0],
          transition: {
            duration: 2.0,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.25
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute -inset-y-1/2 left-0 w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-[28deg] z-20 pointer-events-none mix-blend-overlay"
      />

      {/* 4. Secondary micro-glare matching the theme */}
      <motion.div
        initial={{ x: "-180%", opacity: 0 }}
        whileInView={{ 
          x: "190%", 
          opacity: [0, 0.6, 0.6, 0],
          transition: {
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.35
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute -inset-y-1/2 left-10 w-[15%] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent rotate-[28deg] z-20 pointer-events-none mix-blend-color-dodge"
      />

      {/* 5. Permanent Ambient Glass Facet */}
      {/* To maintain the "behind a polished display glass" vibe, this remains static on top of the image */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.06] backdrop-blur-[0.5px] pointer-events-none z-10" />
      
      {/* Subtle fine borders representing the physical framing of the glass cabinet */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-luxury-gold/10 pointer-events-none z-20 group-hover:border-luxury-gold/30 transition-colors duration-[1.2s]" />
      <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/5 pointer-events-none z-20" />
      
      {/* Velvet/Crimson Ambient Overlay on Hover */}
      <div className="absolute inset-0 bg-[#4B0B14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-color z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent opacity-85 z-10 pointer-events-none" />
    </div>
  );
}
