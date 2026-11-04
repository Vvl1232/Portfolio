import PageTransition from "../components/PageTransition";
import { Download, ExternalLink, FileText } from "lucide-react";
import { RESUME_FILENAME, RESUME_DISPLAY_NAME } from "../config/resume";

export default function Resume() {
  const resumePath = `/${RESUME_FILENAME}`;
  
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4">
            <FileText className="h-3.5 w-3.5" />
            Curriculum Vitae
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl text-white">
            Resume
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl text-base">
            Review my qualifications, experience, project achievements, and technical expertise below or download a copy.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={resumePath}
              download={RESUME_DISPLAY_NAME}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download Resume (PDF)
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all hover:bg-[var(--surface-2)] hover:scale-[1.02]"
            >
              <ExternalLink className="h-4 w-4" />
              Open in New Tab
            </a>
          </div>

          <div className="mt-10 w-full">
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded-2xl border border-[var(--border-color)] bg-zinc-900 shadow-2xl">
              <iframe
                src={resumePath}
                className="h-full w-full"
                title="Vinit Limkar's Resume"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
