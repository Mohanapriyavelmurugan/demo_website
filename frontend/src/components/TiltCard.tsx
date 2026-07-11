import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  intensity = 12,
  glare = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    springConfig
  );
  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={cn("relative", className)}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(94,234,212,0.18), transparent 55%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
};
