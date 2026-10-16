import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

const variantInitial: Record<RevealVariant, Record<string, number | string>> = {
  up: { opacity: 0, y: 16 },
  left: { opacity: 0, x: -16 },
  right: { opacity: 0, x: 16 },
  scale: { opacity: 0, scale: 0.97, y: 10 },
  blur: { opacity: 0, y: 12 },
};

const variantAnimate: Record<RevealVariant, Record<string, number | string>> = {
  up: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1, y: 0 },
  blur: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
}> = ({ children, className, delay = 0, variant = "up", duration = 0.55 }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={variantInitial[variant]}
      whileInView={variantAnimate[variant]}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}> = ({ children, className, stagger = 0.07, delay = 0 }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}> = ({ children, className, variant = "scale" }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: variantInitial[variant],
        show: {
          ...variantAnimate[variant],
          transition: { duration: 0.45, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

/** Word stagger for short headlines only (≤ ~10 words). */
export const AnimatedHeadline: React.FC<{
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
}> = ({ text, className, as: Tag = "h1" }) => {
  const reduce = useReducedMotion();
  const words = text.trim().split(/\s+/);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block last:mr-0"
          variants={{
            hidden: { opacity: 0, y: 22, rotateX: -35 },
            show: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.55, ease: EASE },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export const HoverLift: React.FC<{
  children: React.ReactNode;
  className?: string;
} & HTMLMotionProps<"div">> = ({ children, className, ...rest }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={cn("hover-glow", className)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
