import PageTransition from "../components/PageTransition";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            The fastest way to reach me is email. I’m open to internships,
            collaborations, and impactful ML/AI projects.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-8">
          <div className="space-y-6 text-sm">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-cyan-300" />
              <span className="text-[var(--text-secondary)]">Email:</span>
              <a
                href="mailto:limkarvinit@gmail.com"
                className="font-semibold text-cyan-300 hover:text-cyan-200"
              >
                limkarvinit@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-cyan-300" />
              <span className="text-[var(--text-secondary)]">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/vinit-limkar-b7a57a2a5"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
              >
                Vinit Limkar
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <Github className="h-4 w-4 text-cyan-300" />
              <span className="text-[var(--text-secondary)]">GitHub:</span>
              <a
                href="https://github.com/Vvl1232"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
              >
                Vvl1232
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Streamlit */}
            <div className="flex items-center gap-3">
              <ExternalLink className="h-4 w-4 text-cyan-300" />
              <span className="text-[var(--text-secondary)]">Streamlit:</span>
              <a
                href="https://share.streamlit.io/user/vvl1232"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
              >
                vvl1232
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
