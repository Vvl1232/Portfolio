import PageTransition from "../components/PageTransition";
import { Download } from "lucide-react";
import { RESUME_FILENAME, RESUME_DISPLAY_NAME } from "../config/resume";

export default function Resume() {
  const resumePath = `/${RESUME_FILENAME}`;
  
  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            My Resume
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            Download my resume to learn more about my experience and skills.
          </p>
          
          <div className="mt-8 w-full">
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded-xl border border-[var(--border-color)] bg-white shadow-lg">
              <iframe
                src={resumePath}
                className="h-full w-full"
                title="Vinit Limkar's Resume"
                onError={(e) => {
                  e.target.src = `https://drive.google.com/viewerng/viewer?url=${window.location.origin}${resumePath}&embedded=true`;
                }}
              />
            </div>
            
            <a
              href={resumePath}
              download={RESUME_DISPLAY_NAME}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary-color)] px-6 py-3 font-medium text-black transition-colors hover:bg-[var(--accent-color)] hover:text-white"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
