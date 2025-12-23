import { Link, useParams } from "react-router-dom";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Award,
  Cpu,
  Brain,
  Eye,
  Bot,
  MessageCircle,
  Code
} from "lucide-react";
import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { getProjectBySlug } from "../data/projects";

/* ---------------- Category → Icon ---------------- */

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case "ai / ml":
      return Cpu;
    case "machine learning":
      return Brain;
    case "nlp":
      return MessageCircle;
    case "computer vision":
      return Eye;
    case "ai applications":
      return Bot;
    case "python development":
      return Code;
    default:
      return Code;
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  const CategoryIcon = project
    ? getCategoryIcon(project.category)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold text-white">Project not found</h1>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Back */}
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Header */}
        <header className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* Category */}
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {project.category}
            </p>

            {/* Title + Icon */}
            <div className="mb-4 flex items-start gap-4">
              <div className="relative">
                <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 p-3">
                  <CategoryIcon className="h-7 w-7 text-cyan-400" />
                </div>

                {project.isSIH && (
                  <div className="absolute -right-1 -top-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 p-1 shadow-lg">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>

              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {project.title}
              </h1>
            </div>

            {/* Problem */}
            <p className="text-gray-400">
              <span className="font-semibold text-cyan-300">Problem:</span>{" "}
              {project.problem}
            </p>

            {/* Tech */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-700/50 bg-gray-800/40 px-3 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github?.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800 px-5 py-3 text-sm text-white hover:bg-gray-700"
                >
                  <Github className="h-4 w-4" />
                  {repo.label}
                </a>
              ))}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-400"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <h2 className="text-lg font-semibold text-white">Approach</h2>
              <p className="mt-3 text-sm text-gray-400">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
              <h2 className="text-lg font-semibold text-white">Outcome</h2>
              <div className="mt-4 grid gap-3">
                {project.impact.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-700 bg-gray-800 p-3 text-sm text-gray-300"
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}