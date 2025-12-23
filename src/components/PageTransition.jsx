import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { EASE_CINEMATIC } from "../utils/animations";

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 14,
        filter: shouldReduceMotion ? "none" : "blur(10px)",
      }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : -10,
        filter: shouldReduceMotion ? "none" : "blur(10px)",
      }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.55, ease: EASE_CINEMATIC }}
    >
      {children}
    </motion.div>
  );
}
