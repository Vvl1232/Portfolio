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
            <h2 className="text-lg font-semibold" style={{ background: 'linear-gradient(135deg, #22d3ee, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Experience</h2>
            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
              {/* IIC E-Cell */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      President & Technical Mentor — IIC E-Cell
                    </p>
                    <p className="mt-0.5 text-xs text-cyan-400">Aug 2025 – Present</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Led technical projects, managed the college website, and organized major campus innovation events.</li>
                      <li>Mentored student members on web development, AI/ML, and technical project execution.</li>
                      <li>Organized Hackathons, Internship Fair, Mega Ideathon, and other innovation initiatives.</li>
                      <li>Collaborated with cross-functional teams to improve digital infrastructure and event management systems.</li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Leadership","Project Management","Web Development","Technical Mentoring","Git","GitHub","HTML","CSS","JavaScript"].map((t) => (
                        <span key={t} className="rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://iicecellskncoe.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 shrink-0 text-cyan-400 hover:text-cyan-300"
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
                      Chief Coordinator — ZeroGravity
                    </p>
                    <p className="mt-0.5 text-xs text-cyan-400">Jan 2025 – Present</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Coordinated technical events and seminars improving student engagement across campus.</li>
                      <li>Organized 2 Stage Idea Presentation Competition Innovio 2k26 as Event Coordinator.</li>
                      <li>Organized 2 day flagship event Technospark2k26.</li>
                      <li>Collaborated with cross-functional teams to streamline event planning and execution.</li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Event Management","Leadership","Team Collaboration","Planning"].map((t) => (
                        <span key={t} className="rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/zerogravity-cc/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 shrink-0 text-cyan-400 hover:text-cyan-300"
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
                      AI Intern — Codec Technologies India
                    </p>
                    <p className="mt-0.5 text-xs text-cyan-400">Jun 2025 – Jul 2025</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Developed Machine Learning and NLP-based applications.</li>
                      <li>Built a Sentiment Analysis model using TF-IDF and Scikit-learn.</li>
                      <li>Developed a Movie Recommendation System using cosine similarity.</li>
                      <li>Implemented TF-IDF, cosine similarity, and evaluation metrics improving model performance by 95%.</li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Python","Scikit-learn","NLTK","Pandas","NumPy","TF-IDF","Machine Learning"].map((t) => (
                        <span key={t} className="rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://codectechnologies.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 shrink-0 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* ShadowFox */}
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      AIML Intern — ShadowFox
                    </p>
                    <p className="mt-0.5 text-xs text-cyan-400">Mar 2025 – Apr 2025</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Developed an ML model using Python and Scikit-Learn, improving prediction accuracy by 90%.</li>
                      <li>Performed data cleaning, feature scaling, and hyperparameter tuning for optimized performance.</li>
                      <li>Implemented end-to-end ML workflows with real-world datasets and Scikit-learn pipelines.</li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Python","Scikit-learn","Machine Learning","Pandas","NumPy"].map((t) => (
                        <span key={t} className="rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/shadowfoxinfo/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 shrink-0 text-cyan-400 hover:text-cyan-300"
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
                    className="mt-1 shrink-0 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= ACHIEVEMENTS ================= */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6">
            <h2 className="text-lg font-semibold" style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Achievements</h2>

            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
              <div className="rounded-xl border border-amber-500/30 bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  🏆 Smart India Hackathon 2025 — Winner
                </p>
                <p className="mt-1">
                  Led ML development for a national-level problem statement,
                  delivering an AI-driven real-world solution.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/25 bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  🏆 Google Cloud Arcade Program — Achiever (2024)
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

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Adobe Hackathon — Participant
                </p>
                <p className="mt-1">
                  Participated in Adobe's national-level hackathon focused on creative AI solutions.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Cognizant Technoverse — Participant
                </p>
                <p className="mt-1">
                  Competed in Cognizant's technology challenge exploring emerging tech and problem solving.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  TVS Credit E.P.I.C Quiz — Participant
                </p>
                <p className="mt-1">
                  Participated in TVS Credit's national-level quiz competition on engineering and technology.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Redrob AI Challenge — Participant
                </p>
                <p className="mt-1">
                  Competed in an AI-focused challenge on intelligent automation and ML applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EDUCATION & CERTIFICATIONS ================= */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6">
            <h2 className="text-lg font-semibold" style={{ background: 'linear-gradient(135deg, #60a5fa, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Education</h2>
            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Bachelor of Engineering (Information Technology)
                </p>
                <p className="mt-0.5 text-xs text-cyan-400">2023 – Present</p>
                <p className="mt-1">
                  Shrimati Kashibai Navale College of Engineering
                </p>
                <p className="text-xs">
                  Savitribai Phule Pune University
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium text-[var(--text-primary)] mb-2">Semester-wise CGPA</p>
                  <div className="space-y-1.5">
                    {[
                      { sem: "Semester 1", cgpa: "8.91" },
                      { sem: "Semester 2", cgpa: "8.45" },
                      { sem: "Semester 3", cgpa: "9.32" },
                      { sem: "Semester 4", cgpa: "8.73" },
                      { sem: "Semester 5", cgpa: "8.38" },
                      { sem: "Semester 6", cgpa: "9.18" },
                    ].map(({ sem, cgpa }) => (
                      <div key={sem} className="flex items-center justify-between">
                        <span className="text-xs">{sem}</span>
                        <span className="rounded-full border border-[var(--border-color)] bg-[var(--surface-1)] px-2.5 py-0.5 text-xs font-medium text-cyan-300">{cgpa}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Science (PCM + Computer Science)
                </p>
                <p className="mt-0.5 text-xs text-cyan-400">2022 – 2023</p>
                <p className="mt-1">
                  M.I.T. Junior College
                </p>
                <p className="text-xs mt-1">
                  HSC — 71.17%
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  SSC 10th
                </p>
                <p className="mt-0.5 text-xs text-cyan-400">2021</p>
                <p className="mt-1">
                  Sahyadri National School
                </p>
                <p className="text-xs mt-1">
                  SSC — 85.4%
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6">
            <h2 className="text-lg font-semibold" style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Certifications</h2>
            <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Artificial Intelligence & Machine Learning
                </p>
                <p className="mt-1">PreGrad</p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Cloud Computing
                </p>
                <p className="mt-1">AcmeGrade</p>
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4">
                <p className="font-medium text-[var(--text-primary)]">
                  Python Pro
                </p>
                <p className="mt-1">Udemy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}