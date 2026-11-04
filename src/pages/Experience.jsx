import PageTransition from "../components/PageTransition";
import {
  ExternalLink,
  Briefcase,
  Award,
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  Trophy
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "President and Technical Mentor",
      company: "IIC ECELL",
      period: "08/2025 – Present",
      link: "https://iicecellskncoe.com/",
      bullets: [
        "Led technical projects, managed the college website, and organized major campus innovation events like Hackathons, Internship fair, Mega Ideathon etc."
      ]
    },
    {
      role: "Chief Coordinator",
      company: "ZeroGravity",
      period: "01/2025 – Present",
      link: "https://www.linkedin.com/company/zerogravity-cc/",
      bullets: [
        "Coordinated technical events and seminars improving student engagement across campus.",
        "Organized 2 Stage Idea Presentation Competition “Innovio 2k26” as Event Coordinator and 2 day flagship event “Technospark2k26”."
      ]
    },
    {
      role: "AI Intern",
      company: "Codec Technologies India",
      period: "06/2025 – 07/2025",
      link: "https://codectechnologies.in/",
      bullets: [
        "Designed and trained ML models for Sentiment Analysis and Recommendation Systems using NLP + Python.",
        "Implemented TF-IDF, cosine similarity, and evaluation metrics improving model performance by 95%."
      ]
    },
    {
      role: "AIML Intern",
      company: "ShadowFox",
      period: "03/2025 – 04/2025",
      link: "https://www.linkedin.com/company/shadowfoxinfo/",
      bullets: [
        "Developed an ML model using Python & Scikit-Learn, improving prediction accuracy by 90%.",
        "Performed data cleaning, feature scaling, and hyperparameter tuning for optimized performance."
      ]
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Winner 2025",
      subtitle: "National Level Innovation Competition",
      description:
        "Winner of SIH 2025 for developing ReWater, an AI-based wastewater reuse platform with ML models for real-time water quality analysis and treatment decision support."
    },
    {
      title: "Google Cloud Arcade Program Achiever of 2024",
      subtitle: "Cloud Architecture & Hands-on Labs",
      description:
        "Completed hands-on cloud labs, quests, and challenges focused on Google Cloud Platform fundamentals, infrastructure, and secure deployments."
    },
    {
      title: "Google Crowdsource Active Contributor",
      subtitle: "Multilingual & AI Dataset Contribution",
      description:
        "Contributing to multilingual data validation, image recognition, and machine learning model training tasks since 2023."
    },
    {
      title: "Hackathons & Challenges",
      subtitle: "Competitive Problem Solving",
      description:
        "Active participant in top competitive hackathons and challenges including Adobe Hackathon, TVS Credit Quiz, Cognizant Technoverse, and Redrob AI Challenge."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.E. IT)",
      institution: "Shrimati Kashibai Navale College of Engineering",
      university: "Savitribai Phule Pune University",
      period: "2023 – Present",
      status: "Third Year Student",
      sgpas: [
        { sem: "Sem 1", score: "8.91" },
        { sem: "Sem 2", score: "8.45" },
        { sem: "Sem 3", score: "9.32" },
        { sem: "Sem 4", score: "8.73" },
        { sem: "Sem 5", score: "8.38" },
        { sem: "Sem 6", score: "9.18" }
      ]
    },
    {
      degree: "Higher Secondary (Science - PCM + Computer Science)",
      institution: "M.I.T. Junior College",
      period: "2022 – 2023",
      score: "71.17%"
    },
    {
      degree: "Secondary School Certificate (SSC 10th)",
      institution: "Sahyadri National School",
      period: "2021",
      score: "85.4%"
    }
  ];

  const certifications = [
    {
      title: "Artificial Intelligence & Machine Learning (AIML)",
      issuer: "PreGrad",
      tag: "AI / ML"
    },
    {
      title: "Cloud Computing",
      issuer: "AcmeGrade",
      tag: "Cloud"
    },
    {
      title: "Python Pro",
      issuer: "Udemy",
      tag: "Programming"
    }
  ];

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4">
            <Trophy className="h-3.5 w-3.5" />
            Background & Credentials
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Experience & Achievements
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] text-base md:text-lg">
            Roles, leadership positions, academic milestones, and recognitions that demonstrate hands-on execution and real-world impact.
          </p>
        </div>

        {/* ================= ROW 1: EXPERIENCE & ACHIEVEMENTS ================= */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Experience */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-4">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Work Experience</h2>
                <p className="text-xs text-[var(--text-secondary)]">Internships & Leadership roles</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-5 transition-all hover:border-cyan-400/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] text-base">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-cyan-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-800/80 px-2.5 py-1 text-xs text-gray-400 border border-gray-700/50">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg p-1.5 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors"
                          title="Visit link"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-4">
              <div className="rounded-lg bg-amber-500/10 p-2 text-amber-400 border border-amber-400/20">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Achievements & Recognitions</h2>
                <p className="text-xs text-[var(--text-secondary)]">Hackathon wins & community impact</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-5 transition-all hover:border-amber-400/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] text-base">
                        {ach.title}
                      </h3>
                      <p className="text-xs font-medium text-amber-400/90 mt-0.5">
                        {ach.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= ROW 2: EDUCATION & CERTIFICATIONS ================= */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Education - 7 Cols */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6 md:p-8 lg:col-span-7">
            <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-4">
              <div className="rounded-lg bg-fuchsia-500/10 p-2 text-fuchsia-400 border border-fuchsia-400/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Education</h2>
                <p className="text-xs text-[var(--text-secondary)]">Academic journey & grades</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] text-base">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-fuchsia-400 mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                          {edu.university}
                        </p>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gray-800/80 px-2.5 py-1 text-xs text-gray-400 border border-gray-700/50">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </span>
                  </div>

                  {edu.score && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-300 border border-fuchsia-400/20">
                        Percentage: {edu.score}
                      </span>
                    </div>
                  )}

                  {edu.sgpas && (
                    <div className="mt-4">
                      <p className="text-xs font-medium text-gray-400 mb-2">Semester SGPA:</p>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {edu.sgpas.map((item, sIdx) => (
                          <div
                            key={sIdx}
                            className="rounded-lg border border-gray-700/60 bg-gray-900/60 px-2 py-1.5 text-center"
                          >
                            <span className="block text-[10px] text-gray-400 uppercase tracking-wider">{item.sem}</span>
                            <span className="block text-sm font-bold text-cyan-300">{item.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Courses & Certifications - 5 Cols */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] p-6 md:p-8 lg:col-span-5">
            <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-4">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-400/20">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Courses & Certifications</h2>
                <p className="text-xs text-[var(--text-secondary)]">Verified specialized skill sets</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-2)] p-4 flex items-center justify-between gap-3 hover:border-emerald-400/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-[var(--text-primary)] text-sm">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        Certified by <span className="font-semibold text-emerald-400">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 whitespace-nowrap">
                    {cert.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
