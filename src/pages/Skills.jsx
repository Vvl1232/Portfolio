import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/PageTransition";

/* ─── gradient color map (inline styles for Tailwind v4 compat) ─── */
const GRADIENTS = {
  cyan:   "linear-gradient(135deg, #22d3ee, #3b82f6)",
  orange: "linear-gradient(135deg, #fb923c, #f97316)",
  purple: "linear-gradient(135deg, #c084fc, #a855f7)",
  pink:   "linear-gradient(135deg, #f472b6, #ec4899)",
  blue:   "linear-gradient(135deg, #60a5fa, #2563eb)",
  green:  "linear-gradient(135deg, #4ade80, #22c55e)",
  yellow: "linear-gradient(135deg, #facc15, #eab308)",
  teal:   "linear-gradient(135deg, #2dd4bf, #14b8a6)",
};

const GLOW_COLORS = {
  cyan:   "rgba(34,211,238,0.35)",
  orange: "rgba(251,146,60,0.35)",
  purple: "rgba(192,132,252,0.35)",
  pink:   "rgba(244,114,182,0.35)",
  blue:   "rgba(96,165,250,0.35)",
  green:  "rgba(74,222,128,0.35)",
  yellow: "rgba(250,204,21,0.35)",
  teal:   "rgba(45,212,191,0.35)",
};

const BORDER_HOVER = {
  cyan:   "rgba(34,211,238,0.45)",
  orange: "rgba(251,146,60,0.45)",
  purple: "rgba(192,132,252,0.45)",
  pink:   "rgba(244,114,182,0.45)",
  blue:   "rgba(96,165,250,0.45)",
  green:  "rgba(74,222,128,0.45)",
  yellow: "rgba(250,204,21,0.45)",
  teal:   "rgba(45,212,191,0.45)",
};

/* ─── skill categories data ─── */
const skillCategories = [
  {
    title: "Machine Learning",
    gradient: "cyan",
    skills: [
      "Classification", "Regression", "Clustering", "Feature Engineering",
      "Model Evaluation", "Model Development", "Scikit-learn",
    ],
  },
  {
    title: "Deep Learning",
    gradient: "orange",
    skills: [
      "TensorFlow", "Keras", "PyTorch", "CNN", "Transfer Learning", "YOLOv8",
    ],
  },
  {
    title: "NLP",
    gradient: "purple",
    skills: [
      "NLTK", "TF-IDF", "Text Processing", "Sentiment Analysis",
    ],
  },
  {
    title: "Computer Vision",
    gradient: "pink",
    skills: [
      "OpenCV", "Image Processing", "Object Detection",
    ],
  },
  {
    title: "Generative AI",
    gradient: "blue",
    skills: [
      "Hugging Face", "Transformers", "Prompt Engineering", "Gemini API",
    ],
  },
  {
    title: "Big Data",
    gradient: "green",
    skills: [
      "PySpark", "Apache Spark", "Apache Kafka",
    ],
  },
  {
    title: "Data Engineering",
    gradient: "teal",
    skills: [
      "ETL", "RDD", "DataFrames", "Spark SQL",
    ],
  },
  {
    title: "Data Analysis",
    gradient: "orange",
    skills: [
      "NumPy", "Pandas", "Matplotlib", "Seaborn",
    ],
  },
  {
    title: "Programming",
    gradient: "yellow",
    skills: [
      "Python", "Java", "C++", "SQL",
    ],
  },
  {
    title: "Software & Platforms",
    gradient: "cyan",
    skills: [
      "Git", "GitHub", "Jupyter Notebook", "Google Colab",
      "Streamlit", "Google Cloud", "VS Code",
    ],
  },
];

/* ─── Skill Card ─── */
function SkillCard({ category, index, isVisible }) {
  const [hovered, setHovered] = React.useState(false);
  const { gradient } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "1rem",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        background: "rgba(15,15,15,0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: `1px solid ${hovered ? BORDER_HOVER[gradient] : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered
          ? `0 8px 32px ${GLOW_COLORS[gradient]}, 0 0 0 1px ${BORDER_HOVER[gradient]}`
          : "0 2px 12px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "border 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
    >
      {/* Card heading */}
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          marginBottom: "1.15rem",
          background: GRADIENTS[gradient],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {category.title}
      </h3>

      {/* Badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "0.35rem 0.85rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.82)",
              transition: "background 0.25s ease, border-color 0.25s ease, color 0.25s ease",
              whiteSpace: "nowrap",
              lineHeight: 1.5,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor = BORDER_HOVER[gradient];
              e.currentTarget.style.color = "rgba(255,255,255,0.95)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "rgba(255,255,255,0.82)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Skills Page ─── */
function Skills() {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <section
        ref={sectionRef}
        id="skills"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Skills &amp; Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technical skills built through real-world AI, ML, Data Engineering, and Generative AI projects
            </p>
          </motion.div>

          {/* 8-Card Responsive Grid */}
          <motion.div
            style={{ y, opacity }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
                alignItems: "stretch",
              }}
              className="skills-grid"
            >
              {skillCategories.map((category, index) => (
                <SkillCard
                  key={category.title}
                  category={category}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}

export default Skills;