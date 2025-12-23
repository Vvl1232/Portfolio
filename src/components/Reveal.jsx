import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE_CINEMATIC } from "../utils/animations";

export default function Reveal({ children, id, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const storageKey = id ? `vl_reveal_${id}` : null;
  const [hasAnimatedThisSession, setHasAnimatedThisSession] = useState(() => {
    if (!storageKey) return false;
    try {
      return sessionStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!storageKey) return;
    if (!inView) return;
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {
      // ignore
    }
    setHasAnimatedThisSession(true);
  }, [inView, storageKey]);

  const shouldAnimate = !shouldReduceMotion && !hasAnimatedThisSession;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldAnimate ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldAnimate ? 0.6 : 0, ease: EASE_CINEMATIC, delay }}
    >
      {children}
    </motion.div>
  );
}
