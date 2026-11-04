import PageTransition from "../components/PageTransition";
import { Mail, Linkedin, Github, ExternalLink, Phone, MapPin, Download, FileText } from "lucide-react";
import { RESUME_FILENAME, RESUME_DISPLAY_NAME } from "../config/resume";

export default function Contact() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Get In Touch
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
            I am always open to exciting AI/ML opportunities, internships, research collaborations, and impactful technical discussions.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-8">
          <div className="space-y-6 text-sm">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[var(--text-secondary)]">Email</span>
                <a
                  href="mailto:limkarvinit@gmail.com"
                  className="font-semibold text-cyan-300 hover:text-cyan-200 transition-colors text-sm"
                >
                  limkarvinit@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[var(--text-secondary)]">Phone</span>
                <a
                  href="tel:+919860476527"
                  className="font-semibold text-cyan-300 hover:text-cyan-200 transition-colors text-sm"
                >
                  +91 9860476527
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[var(--text-secondary)]">Location</span>
                <span className="font-semibold text-[var(--text-primary)] text-sm">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[var(--text-secondary)]">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/vinit-limkar-b7a57a2a5"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1.5 transition-colors text-sm"
                >
                  linkedin.com/in/vinit-limkar-b7a57a2a5
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <Github className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[var(--text-secondary)]">GitHub</span>
                <a
                  href="https://github.com/Vvl1232"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1.5 transition-colors text-sm"
                >
                  github.com/Vvl1232
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Streamlit */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <ExternalLink className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <span className="block text-xs text-[var(--text-secondary)]">Streamlit Cloud</span>
                <a
                  href="https://share.streamlit.io/user/vvl1232"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1.5 transition-colors text-sm"
                >
                  share.streamlit.io/user/vvl1232
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Resume Download Action */}
          <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <FileText className="h-4 w-4 text-cyan-400" />
              <span>Looking for my full background?</span>
            </div>
            <a
              href={`/${RESUME_FILENAME}`}
              download={RESUME_DISPLAY_NAME}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
