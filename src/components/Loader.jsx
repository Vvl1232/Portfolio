import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { EASE_CINEMATIC } from "../utils/animations";
import {
  VL_V_PATH_D,
  VL_L_PATH_D,
  VL_UNDERLINE_PATH_D,
} from "../assets/vlSignature";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const WORD_MS = 1400;
const GAP_MS = 600;
const SIGNATURE_DRAW_MS = 5200;
const SIGNATURE_HOLD_MS = 1200;
const FADE_OUT_MS = 300;

export default function Loader({ onComplete }) {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState("vinit");
  const [word, setWord] = useState("vinit");
  // vinit → limkar → signature → done

  const [signatureReady, setSignatureReady] = useState(false);
  const [signatureRenderKey, setSignatureRenderKey] = useState(0);

  const vPathRef = useRef(null);
  const lPathRef = useRef(null);
  const underlinePathRef = useRef(null);

  const [vLen, setVLen] = useState(0);
  const [lLen, setLLen] = useState(0);
  const [uLen, setULen] = useState(0);

  useLayoutEffect(() => {
    if (reduceMotion) return;

    const safeGetLen = (el) => {
      try {
        return el?.getTotalLength?.() ?? 0;
      } catch {
        return 0;
      }
    };

    setVLen(safeGetLen(vPathRef.current));
    setLLen(safeGetLen(lPathRef.current));
    setULen(safeGetLen(underlinePathRef.current));
  }, [reduceMotion, phase]);

  useEffect(() => {
    if (phase !== "signature" || reduceMotion) {
      setSignatureReady(false);
      return;
    }

    if (vLen > 0 && lLen > 0 && uLen > 0) {
      setSignatureReady(true);
      setSignatureRenderKey((k) => k + 1);
    }
  }, [phase, reduceMotion, vLen, lLen, uLen]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (reduceMotion) {
        setPhase("signature");
        await sleep(600);
        if (!cancelled) onComplete();
        return;
      }

      // Vinit
      await sleep(WORD_MS);
      if (cancelled) return;

      // Gap
      setPhase("gap");
      await sleep(GAP_MS);
      if (cancelled) return;

      // Limkar
      setWord("limkar");
      setPhase("limkar");
      await sleep(WORD_MS);
      if (cancelled) return;

      // Gap
      setPhase("gap");
      await sleep(GAP_MS);
      if (cancelled) return;

      // Signature
      setPhase("signature");
      await sleep(SIGNATURE_DRAW_MS + SIGNATURE_HOLD_MS);
      if (cancelled) return;

      // Exit
      setPhase("done");
      await sleep(FADE_OUT_MS);
      if (!cancelled) onComplete();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [onComplete, reduceMotion]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-[#05070c] to-black pt-4"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: FADE_OUT_MS / 1000, ease: EASE_CINEMATIC },
          }}
        >
          <AnimatePresence mode="popLayout" initial={true}>
            {(phase === "vinit" || phase === "limkar") && (
              <motion.h1
                key={phase}
                className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-center w-full transform -translate-x-2 -translate-y-4"
                initial={
                  reduceMotion
                    ? { y: 0, opacity: 1 }
                    : { y: 10, opacity: 0 }
                }
                animate={{ y: 0, opacity: 1 }}
                exit={reduceMotion ? { y: 0 } : { y: -10, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_CINEMATIC }}
              >
                <span className="gradient-text">
                  {phase === "vinit" ? "Vinit" : "Limkar"}
                </span>
              </motion.h1>
            )}
          </AnimatePresence>

          {/* SIGNATURE PHASE */}
          {phase === "signature" && !signatureReady && (
            <svg
              width="855"
              height="428"
              viewBox="0 0 500 300"
              fill="none"
              className="overflow-visible"
              style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
            >
              <path
                ref={vPathRef}
                d={VL_V_PATH_D}
                stroke="transparent"
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                ref={lPathRef}
                d={VL_L_PATH_D}
                stroke="transparent"
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                ref={underlinePathRef}
                d={VL_UNDERLINE_PATH_D}
                stroke="transparent"
                strokeWidth={7}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {phase === "signature" && signatureReady && (
            <motion.svg
              key={`vl-signature-${signatureRenderKey}`}
              width="855"
              height="428"
              viewBox="0 0 500 300"
              fill="none"
              className="overflow-visible mx-auto block transform -translate-x-[5%] -translate-y-4"
              initial={
                reduceMotion
                  ? { y: 0, filter: "blur(0px)" }
                  : { y: 18, filter: "blur(8px)" }
              }
              animate={{ y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? { y: 0 } : { y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: EASE_CINEMATIC }}
            >
              <defs>
                <linearGradient id="vl-signature-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" style={{ stopColor: "var(--primary-color)" }} />
                  <stop offset="50%" style={{ stopColor: "var(--accent-color)" }} />
                  <stop offset="100%" style={{ stopColor: "var(--primary-color)" }} />
                </linearGradient>
              </defs>
              <motion.path
                ref={vPathRef}
                d={VL_V_PATH_D}
                stroke="url(#vl-signature-gradient)"
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={vLen}
                initial={{ strokeDashoffset: vLen, opacity: 1 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{ duration: 1.98, ease: "linear" }}
              />
              <motion.path
                ref={lPathRef}
                d={VL_L_PATH_D}
                stroke="url(#vl-signature-gradient)"
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={lLen}
                initial={{ strokeDashoffset: lLen, opacity: 1 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{ duration: 1.98, delay: 2.2, ease: "linear" }}
              />
              <motion.path
                ref={underlinePathRef}
                d={VL_UNDERLINE_PATH_D}
                stroke="url(#vl-signature-gradient)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={uLen}
                initial={{ strokeDashoffset: uLen, strokeWidth: 2, opacity: 1 }}
                animate={{ strokeDashoffset: 0, strokeWidth: 7, opacity: 1 }}
                transition={{ duration: 1.15, delay: 4.35, ease: EASE_CINEMATIC }}
              />
            </motion.svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}