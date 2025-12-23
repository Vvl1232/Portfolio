export const EASE_CINEMATIC = [0.16, 1, 0.3, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 14, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(10px)" },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: EASE_CINEMATIC,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};
