import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/PageTransition";

function Skills() {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Machine Learning",
      color: "from-cyan-400 to-blue-500",
      skills: [
        "Supervised & Unsupervised Learning",
        "Model Evaluation & Validation",
        "Feature Engineering",
        "Recommendation Systems",
        "Predictive Modeling",
        "ML Pipelines"
      ]
    },
    {
      title: "NLP & Computer Vision",
      color: "from-purple-400 to-pink-500",
      skills: [
        "Natural Language Processing",
        "Sentiment Analysis",
        "Text Vectorization",
        "Computer Vision",
        "Image Processing",
        "Object Detection (Fundamentals)"
      ]
    },
    {
      title: "Data & Analytics",
      color: "from-amber-400 to-orange-500",
      skills: [
        "Data Cleaning",
        "Exploratory Data Analysis (EDA)",
        "Feature Selection",
        "Statistical Analysis",
        "Real-world Dataset Handling"
      ]
    },
    {
      title: "Tools & Workflow",
      color: "from-emerald-400 to-teal-500",
      skills: [
        "Python",
        "Pandas & NumPy",
        "Scikit-learn",
        "Streamlit (ML Deployment)",
        "Jupyter Notebook",
        "Git & GitHub"
      ]
    }
  ];

  return (
    <PageTransition>
      <section
        ref={sectionRef}
        id="skills"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry-aligned technical skills built through real-world AI and ML projects
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            style={{ y, opacity }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12 }}
                className="relative rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3
                  className={`text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm rounded-lg bg-gray-800/60 text-gray-200 border border-gray-700 hover:border-cyan-400/40 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Applied Domains */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-20 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md p-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Applied Experience
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <li>
                • AI-powered smart water quality monitoring system (SIH winning product)
              </li>
              <li>
                • Movie recommendation engine using collaborative filtering
              </li>
              <li>
                • AI-based travel planning and decision-support systems
              </li>
              <li>
                • Real-time ML applications deployed via Streamlit
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Skills;