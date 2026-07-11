import { motion } from "motion/react";
import { ReactNode } from "react";

interface SkeletonProps {
  activeTexture?: string;
}

// Reusable shimmer line for text/subtitles
function ShimmerLine({ width = "w-full", height = "h-4", className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-white/[0.03] border border-white/[0.02] ${height} ${width} ${className}`}>
      {/* Dynamic diagonal sweeping shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "linear"
        }}
      />
    </div>
  );
}

// Reusable luxury block representing image or large container
function ShimmerBox({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`relative overflow-hidden border border-white/10 bg-[#131313]/40 backdrop-blur-md ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/[0.03] to-transparent"
        animate={{
          x: ["-150%", "150%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "easeInOut"
        }}
      />
      {children}
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <div className="relative py-24 bg-transparent overflow-hidden">
      {/* Decorative background glow mimicking the main theme */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-velvet-red/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Header Skeleton */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center flex flex-col items-center">
        <ShimmerLine width="w-28" height="h-3" className="mb-4 bg-luxury-gold/5" />
        <ShimmerLine width="w-72 md:w-96" height="h-10 md:h-12" className="mb-6" />
        <div className="w-12 h-[1px] bg-luxury-gold/20" />
      </div>

      {/* Services List Skeletons */}
      <div className="space-y-36 max-w-7xl mx-auto px-6 md:px-12">
        {[0, 1].map((idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[50vh]">
              {/* TEXT PANEL */}
              <div className={`lg:col-span-6 space-y-8 ${isEven ? "lg:order-1" : "lg:order-2 lg:pl-12"}`}>
                {/* Meta details */}
                <div className="flex items-center gap-4">
                  <ShimmerLine width="w-8" height="h-3" className="bg-luxury-gold/10" />
                  <span className="w-8 h-[1px] bg-white/5" />
                  <ShimmerLine width="w-36" height="h-3" />
                </div>

                {/* Massive header line */}
                <div className="space-y-3">
                  <ShimmerLine width="w-4/5" height="h-12 md:h-16" />
                  <ShimmerLine width="w-3/5" height="h-12 md:h-16" />
                </div>

                {/* Quote block */}
                <div className="border-l-2 border-luxury-gold/20 pl-6 py-2 space-y-2 bg-luxury-gold/[0.01]">
                  <ShimmerLine width="w-11/12" height="h-5" className="bg-luxury-gold/5" />
                  <ShimmerLine width="w-8/12" height="h-5" className="bg-luxury-gold/5" />
                </div>

                {/* Description lines */}
                <div className="space-y-2">
                  <ShimmerLine width="w-full" height="h-3.5" />
                  <ShimmerLine width="w-full" height="h-3.5" />
                  <ShimmerLine width="w-10/12" height="h-3.5" />
                </div>

                {/* Metric Display Box */}
                <div className="inline-block p-6 border border-white/5 bg-[#131313]/30 w-44">
                  <ShimmerLine width="w-16" height="h-7" className="mb-2 bg-luxury-gold/10" />
                  <ShimmerLine width="w-24" height="h-3" />
                </div>
              </div>

              {/* IMAGE PANEL */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <ShimmerBox className="aspect-[16/10] w-full relative">
                  {/* Glass reveal lens decoration inside image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-l border-b border-white/10" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-r border-t border-white/10" />
                </ShimmerBox>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PortfolioSkeleton() {
  return (
    <div className="relative py-28 bg-transparent overflow-hidden">
      {/* Accent glow lights */}
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-velvet-red/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Editorial Header Skeleton */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <ShimmerLine width="w-24" height="h-3" className="bg-luxury-gold/5" />
          <ShimmerLine width="w-72 md:w-[480px]" height="h-10 md:h-12" />
        </div>
        <div className="border-l md:border-l-0 md:border-r border-white/15 pl-6 md:pl-0 md:pr-6 py-1 w-full max-w-xs space-y-2">
          <ShimmerLine width="w-full" height="h-3" />
          <ShimmerLine width="w-4/5" height="h-3" />
        </div>
      </div>

      {/* Case Study Panels Skeletons */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {[0, 1].map((idx) => (
          <div 
            key={idx}
            className="border border-white/5 bg-[#131313]/25 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Ambient shimmer line highlight on top border */}
            <motion.div 
              className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent w-full"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Visual Imagery Panel (7 cols) */}
              <div className="lg:col-span-7">
                <ShimmerBox className="aspect-[16/10] w-full relative">
                  {/* Category tag skeleton placeholder */}
                  <div className="absolute top-4 left-4 bg-white/[0.03] border border-white/5 px-4 py-1.5 w-24 h-6">
                    <ShimmerLine width="w-full" height="h-2" className="bg-luxury-gold/10" />
                  </div>
                </ShimmerBox>
              </div>

              {/* Narrative & Stats Panel (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <ShimmerLine width="w-32" height="h-3" className="bg-luxury-gold/10" />
                  <ShimmerLine width="w-11/12" height="h-9" />
                  <ShimmerLine width="w-8/12" height="h-5" className="italic" />
                </div>

                <div className="space-y-2.5">
                  <ShimmerLine width="w-full" height="h-3.5" />
                  <ShimmerLine width="w-full" height="h-3.5" />
                  <ShimmerLine width="w-10/12" height="h-3.5" />
                </div>

                <div className="w-full h-[1px] bg-white/5" />

                {/* Stats block (3 cols) */}
                <div className="grid grid-cols-3 gap-4">
                  {[0, 1, 2].map((s) => (
                    <div key={s} className="space-y-2">
                      <ShimmerLine width="w-16" height="h-8" className="bg-luxury-gold/5" />
                      <ShimmerLine width="w-12" height="h-2.5" />
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <ShimmerLine width="w-44" height="h-3.5" className="bg-luxury-gold/10" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SectionSkeleton() {
  return (
    <div className="space-y-16">
      <ServicesSkeleton />
      <PortfolioSkeleton />
    </div>
  );
}
