import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Loader from "./components/Loader";
import AIWordLoader from "./components/AIWordLoader";
import { EASE_CINEMATIC } from "./utils/animations";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Experience = lazy(() => import("./pages/Experience"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowLoader(true);
    setContentReady(false);
  }, []);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 14,
          filter: shouldReduceMotion ? "none" : "blur(10px)",
        }}
        animate={
          contentReady
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: shouldReduceMotion ? 0 : 14, filter: shouldReduceMotion ? "none" : "blur(10px)" }
        }
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.6,
          ease: EASE_CINEMATIC,
        }}
        style={{ minHeight: "100vh", pointerEvents: contentReady ? "auto" : "none" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:slug" element={<ProjectDetail />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </motion.div>

      {showLoader && (
        <Loader
          onComplete={() => {
            setShowLoader(false);
            setContentReady(true);
          }}
        />
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <AIWordLoader />
          </div>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  );
}