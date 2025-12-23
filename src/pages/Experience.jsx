import PageTransition from "../components/PageTransition";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 py-14">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Experience & Achievements
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Roles, leadership positions, and recognitions that demonstrate
          hands-on execution, ownership, and real-world impact.
        </p>
      </div>


        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* ================= EXPERIENCE ================= */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6">
            <h2 className="text-lg font-semibold">Experience</h2>
            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
              {/* ShadowFox */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      AI / ML Intern — ShadowFox
                    </p>
                    <p className="mt-1 text-sm">
                      Built and optimized ML models using Python & Scikit-Learn,
                      improving prediction accuracy by up to 90%.
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/shadowfoxinfo/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Codec Technologies */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      AI Intern — Codec Technologies
                    </p>
                    <p className="mt-1 text-sm">
                      Designed NLP-based sentiment analysis and recommendation
                      systems using TF-IDF and cosine similarity.
                    </p>
                  </div>
                  <a
                    href="https://codectechnologies.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>


              {/* IIC E-Cell */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Technical Head — IIC E-Cell
                    </p>
                    <p className="mt-1 text-sm">
                      Organized 24 - hour national level hackathon - FUSION2k25,
                      leading technical initiatives including AI chatbot
                      development, website management, and coordinating a team
                      of developers.
                    </p>
                  </div>
                  <a
                    href="https://iicecellskncoe.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* ZeroGravity */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Event Management Team Member — ZeroGravity
                    </p>
                    <p className="mt-1 text-sm">
                      Coordinated technical events and seminars, boosting student
                      engagement across campus activities.
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/zerogravity-cc/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* PreGrad */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Event Coordinator — PreGrad
                    </p>
                    <p className="mt-1 text-sm">
                      Organized workshops and learning sessions, ensuring smooth
                      execution and high participant turnout.
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/pregrad/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= ACHIEVEMENTS ================= */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6">
            <h2 className="text-lg font-semibold">Achievements</h2>

            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Smart India Hackathon 2025 — Winner
                </p>
                <p className="mt-1">
                  Led ML development for a national-level problem statement,
                  delivering an AI-driven real-world solution.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Google Cloud Arcade Program — Achiever (2024)
                </p>
                <p className="mt-1">
                  Completed hands-on cloud labs and challenges focused on GCP
                  fundamentals and deployments.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Google Crowdsource — Active Contributor
                </p>
                <p className="mt-1">
                  Contributing to multilingual data and AI improvement tasks
                  since 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}