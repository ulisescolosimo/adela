"use client";

import { motion, type Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
  as?: keyof typeof motion;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
  as = "div",
}: AnimatedSectionProps) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={{
        opacity: 0,
        ...(direction === "up" && { y: 40 }),
        ...(direction === "down" && { y: -40 }),
        ...(direction === "left" && { x: 40 }),
        ...(direction === "right" && { x: -40 }),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function AnimatedStagger({
  children,
  className = "",
  staggerChildren = 0.12,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren, delayChildren },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export { defaultVariants, itemVariants };
