import { motion } from "framer-motion";
import { ArrowRight, Award, MapPin, Briefcase, Download } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { EASE_CINEMATIC } from "../utils/animations";
import { RESUME_FILENAME, RESUME_DISPLAY_NAME } from "../config/resume";

export default function Home() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Gradient Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute -right-40 top-32 h-[560px] w-[560px] rounded-full bg-fuchsia-500/15 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Column - Content (60%) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
              className="lg:col-span-7"
            >
              <p className="text-sm font-semibold tracking-wide text-cyan-300/90 mb-2 uppercase">
                AI/ML Engineer | Data Science Enthusiast
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  Vinit Limkar
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                Third-year Information Technology student and Smart India Hackathon 2025 Winner with hands-on experience in AI/ML, Deep Learning, and NLP. Passionate about building intelligent, real-world AI solutions.
              </p>

              {/* Location & Role */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)]">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1.5 text-xs text-gray-300">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  Pune, Maharashtra, India
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1.5 text-xs text-gray-300">
                  <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
                  AI/ML Engineer
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-300">
                  <Award className="h-3.5 w-3.5" />
                  Smart India Hackathon 2025 Winner
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--surface-2)] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                >
                  Contact Me
                </Link>
                <a
                  href={`/${RESUME_FILENAME}`}
                  download={RESUME_DISPLAY_NAME}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Right Column - Photo (40%) */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_CINEMATIC }}
              className="relative lg:col-span-5"
            >
              <div className="relative">
                {/* Photo Container */}
                <motion.div 
                  className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/55 to-gray-800/25 backdrop-blur-md shadow-2xl shadow-black/30"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/images/vinit-limkar.jpg" 
                    alt="Vinit Limkar" 
                    className="h-auto w-full object-cover saturate-90 brightness-95"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'image.jpeg';
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -left-4 -top-4 -z-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
