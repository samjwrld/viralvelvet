import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  // Smooth motion spring values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over clickable or luxury interactive item
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".interactive-card") ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";

      setIsHovered(!!isClickable);

      // Check for custom cursor text triggers
      const portfolioCard = target.closest(".portfolio-card-trigger");
      if (portfolioCard) {
        setHoverText("VIEW");
        setIsHovered(true);
        return;
      }

      const crystalSc = target.closest("#crystal-sculpture-wrapper");
      if (crystalSc) {
        setHoverText("SPIN");
        setIsHovered(true);
        return;
      }

      setHoverText("");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer elegant ring with delay */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-luxury-gold/50 custom-cursor-pointer z-50 pointer-events-none mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(200, 165, 90, 0.15)" : "rgba(200, 165, 90, 0)",
          borderColor: isHovered ? "#C8A55A" : "rgba(200, 165, 90, 0.5)",
          boxShadow: isHovered ? "0 0 20px rgba(200, 165, 90, 0.3)" : "none",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[8px] font-semibold text-luxury-gold tracking-widest"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Center pinpoint gold core */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-luxury-gold rounded-full custom-cursor-pointer z-50 pointer-events-none mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#4B0B14" : "#C8A55A",
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />
    </>
  );
}
