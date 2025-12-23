import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  ChevronRight,
  ChevronUp,
  Github,
  ExternalLink,
  Cpu,
  Brain,
  Eye,
  Bot,
  MessageCircle,
  Code
} from "lucide-react";

import { EASE_CINEMATIC } from "../utils/animations";
import { projects as projectData } from "../data/projects";

/* ----------------------------- Category → Icon ----------------------------- */

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

/* ----------------------------- Project Card ----------------------------- */

const ProjectCard = ({ project, isExpanded, onClick }) => {
  const Icon = getCategoryIcon(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-xl border border-gray-800/50
        bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm
        ${isExpanded ? "ring-1 ring-cyan-400/40" : "hover:border-cyan-400/30"}
        transition-all duration-300`}
    >
      {/* Header */}
      <div className="cursor-pointer" onClick={onClick}>
        <div className="p-6">
          <div className="mb-4 flex items-start gap-4">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 p-3">
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>

              {project.isSIH && (
                <div className="absolute -right-1 -top-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 p-1 shadow-lg">
                  <Award className="h-3 w-3 text-white" />
                </div>
              )}
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                {project.isSIH && (
                  <span className="rounded bg-gradient-to-r from-amber-500 to-orange-600 px-2 py-0.5 text-xs font-bold text-white shadow-md">
                    SIH Winner
                  </span>
                )}
              </div>

              <span className="text-sm font-medium text-cyan-400">
                {project.category}
              </span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-gray-700/50 bg-gray-800/50 px-2.5 py-1 text-xs font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}

            {project.tech.length > 4 && (
              <span className="rounded-full bg-gray-800/20 px-2.5 py-1 text-xs text-gray-500">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Problem */}
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-300">
            {project.problem}
          </p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-gray-800/50 pt-4">
            <div className="flex items-center text-sm font-medium text-cyan-400">
              {isExpanded ? "Show Less" : "View Details"}
              {isExpanded ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronRight className="ml-1 h-4 w-4" />
              )}
            </div>

            <div className="flex items-center space-x-2">
              {project.github?.length > 0 && (
                <a
                  href={project.github[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-lg p-2 hover:bg-gray-800/50"
                >
                  <Github className="h-4 w-4 text-gray-400" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-lg p-2 hover:bg-gray-800/50"
                >
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Expanded ---------------- */}
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="mb-6">
            <h4 className="mb-2 font-semibold text-white">Solution</h4>
            <p className="text-sm text-gray-400">{project.solution}</p>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 font-semibold text-white">Impact</h4>
            <div className="grid gap-3 md:grid-cols-3">
              {project.impact.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-700/50 bg-gray-800/40 p-3 text-sm text-gray-300"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/projects/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              Read Full Case Study
            </Link>

            {project.github?.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                <Github className="h-4 w-4" />
                {repo.label}
              </a>
            ))}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm text-white hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* ----------------------------- Projects Section ----------------------------- */

const Projects = () => {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projectData.map((p) => p.category))];

  const filtered =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-12 text-center">
        <span className="text-sm font-medium text-cyan-400">MY WORK</span>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Featured Projects
        </h2>
        <div className="mx-auto my-6 h-1 w-16 bg-cyan-500" />
        <p className="mx-auto max-w-2xl text-sm text-gray-400">
          A curated selection of projects showcasing AI/ML, real-world impact,
          and production-ready engineering.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
              filter === category
                ? "border border-cyan-400/20 bg-cyan-500/10 text-cyan-400"
                : "border border-gray-700/50 bg-gray-800/30 text-gray-300 hover:bg-gray-700/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isExpanded={expanded === project.slug}
              onClick={() =>
                setExpanded(expanded === project.slug ? null : project.slug)
              }
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;