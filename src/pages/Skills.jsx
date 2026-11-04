import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Cpu, Sparkles, CheckCircle2 } from "lucide-react";

function Skills() {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
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

  const skillCategories = [
    {
      title: "Machine Learning",
      color: "from-cyan-400 to-blue-500",
      skills: [
        "Scikit-learn",
        "Classification",
        "Regression",
        "Clustering",
        "Feature Engineering",
        "Model Development",
        "Model Evaluation",
        "Hyperparameter Tuning"
      ]
    },
    {
      title: "Deep Learning & Computer Vision",
      color: "from-purple-400 to-pink-500",
      skills: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "CNN",
        "Transfer Learning",
        "YOLOv8",
        "OpenCV",
        "Image Processing",
        "Object Detection"
      ]
    },
    {
      title: "Generative AI & NLP",
      color: "from-fuchsia-400 to-rose-500",
      skills: [
        "Hugging Face",
        "Transformers",
        "Prompt Engineering",
        "Gemini API",
        "NLP",
        "NLTK",
        "TF-IDF",
        "Text Processing",
        "Sentiment Analysis"
      ]
    },
    {
      title: "Data Analysis & Visualization",
      color: "from-amber-400 to-orange-500",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning",
        "Feature Scaling",
        "Statistical Analysis"
      ]
    },
    {
      title: "Big Data & Data Engineering",
      color: "from-blue-400 to-indigo-500",
      skills: [
        "PySpark",
        "Apache Spark",
        "Apache Kafka",
        "ETL Pipelines",
        "RDD",
        "DataFrames",
        "Spark SQL"
      ]
    },
    {
      title: "Programming & Platforms",
      color: "from-emerald-400 to-teal-500",
      skills: [
        "Python",
        "Java",
        "C++",
        "SQL",
        "Git",
        "GitHub",
        "Jupyter Notebook",
        "Google Colab",
        "Streamlit",
        "Google Cloud (GCP)",
        "VS Code"
      ]
    }
  ];

  const appliedHighlights = [
    {
      title: "ReWater AI – Wastewater Reuse Platform",
      tag: "SIH 2025 Winner",
      description:
        "Engineered ML models for real-time wastewater quality analysis, compliance validation, and treatment decision support."
    },
    {
      title: "AI Candidate Discovery Platform",
      tag: "Redrob AI Challenge",
      description:
        "Talent intelligence platform with AI-driven candidate discovery, automated potential scoring, and explainable hiring insights."
    },
    {
      title: "Brain Tumor Detection using CNN",
      tag: "Deep Learning & Healthcare",
      description:
        "Multiclass brain tumor classification model trained on MRI scans and deployed on Streamlit cloud for real-time inference."
    },
    {
      title: "Personalized Movie Recommendation Engine",
      tag: "Machine Learning",
      description:
        "End-to-end recommendation pipeline utilizing collaborative filtering, cosine similarity, and interactive web interface."
    },
    {
      title: "Real-Time Object Detection",
      tag: "Computer Vision",
      description:
        "High-performance video inference pipeline built using YOLOv8 and OpenCV for real-time multi-class object detection."
    },
    {
      title: "Sentiment Analysis on User Reviews",
      tag: "NLP & Text Mining",
      description:
        "Natural language classification model reaching 90% accuracy utilizing NLTK, TF-IDF vectorization, and tuned ML classifiers."
    }
  ];

  return (
    <PageTransition>
      <section
        ref={sectionRef}
        id="skills"
        className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Technical Arsenal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Comprehensive technical skills spanning AI/ML, Deep Learning, Generative AI, Big Data, and production systems.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            style={{ y, opacity }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-md p-6 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3
                    className={`text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
                  >
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs rounded-lg bg-gray-800/70 text-gray-200 border border-gray-700/60 hover:border-cyan-400/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Applied Domains / Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-16 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 border border-cyan-400/20">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Applied Experience & Project Deployments
                </h3>
                <p className="text-xs text-gray-400">Where these skills turn into tangible solutions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appliedHighlights.map((app, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800/80 bg-gray-950/60 p-4 transition-all hover:border-cyan-500/30"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-cyan-300">
                      {app.tag}
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                  </div>
                  <h4 className="font-medium text-white text-sm mb-1.5">
                    {app.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-400">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Skills;
