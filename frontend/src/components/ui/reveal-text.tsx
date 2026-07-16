import { motion, useInView, useReducedMotion } from "framer-motion";
import React from "react";

export interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  triggerOnView?: boolean;
}

const directionVariants = {
  up: { y: 24, opacity: 0 },
  down: { y: -24, opacity: 0 },
  left: { x: 24, opacity: 0 },
  right: { x: -24, opacity: 0 },
};

/** Adapted from 21st.dev / educlopez — uses project framer-motion. */
const RevealText: React.FC<RevealTextProps> = ({
  children,
  direction = "up",
  delay = 0,
  triggerOnView = false,
  className = "",
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const animate = (!triggerOnView || inView) && !shouldReduceMotion;

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline-block" }}
      initial={shouldReduceMotion ? { opacity: 1 } : directionVariants[direction]}
      animate={shouldReduceMotion || !animate ? { opacity: 1 } : { x: 0, y: 0, opacity: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.35, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.span>
  );
};

export default RevealText;
