const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const projects = [
  /* ---------------- SIH WINNING PROJECT ---------------- */
  {
    title: "ReWater AI Smart Water Intelligence Platform",
    slug: slugify("ReWater AI Smart Water Intelligence Platform"),
    category: "AI / ML",
    image: "/images/projects/peakminds.jpg",
    icon: "award",
    isSIH: true,
    tech: [
      "Machine Learning",
      "Python",
      "Streamlit",
      "Water Quality Analytics",
      "Data Science"
    ],
    problem:
      "Industries struggle with real-time wastewater monitoring, compliance validation, and decision support for treatment processes.",
    solution:
      "An AI-driven smart water intelligence platform that predicts water quality, checks regulatory compliance, and assists operators with treatment insights.",
    impact: [
      { text: "Winner – Smart India Hackathon (SIH)" },
      { text: "Real-world industrial wastewater use case" },
      { text: "Built as ML Developer in a team environment" }
    ],
    github: [],
    live: "https://peakminds-core.vercel.app/"
  },

  /* ---------------- DEBT STRESS RADAR ---------------- */
  {
    slug: "debt-stress-radar",
    title: "Debt Stress Radar™",
    category: "AI / ML",
    isSIH: false,
    tech: [
      "Machine Learning",
      "Regression",
      "SHAP",
      "Streamlit",
      "FinTech"
    ],
    problem:
      "Borrowers often realize financial stress too late, after EMI defaults or credit score drops, due to lack of early warning systems.",
    solution:
      "Built an explainable ML-based early warning system that predicts a continuous debt stress score, visualizes risk using a radar dashboard, and explains key risk drivers using SHAP.",
    impact: [
      { text: "Explainable AI-based financial risk assessment" },
      { text: "Advisor-friendly, non-black-box ML system" },
      { text: "Product-grade Streamlit deployment" }
    ],
    github: [
      {
        label: "GitHub Repository",
        url: "https://github.com/Vvl1232/Debt-Stress-Radar-"
      }
    ],
    live: "https://sutnzypjggwokzmelqzac5.streamlit.app/"
  },

  /* ---------------- MOVIE RECOMMENDATION SYSTEM ---------------- */
  {
    title: "Movie Recommendation System",
    slug: slugify("Movie Recommendation System"),
    category: "Machine Learning",
    image: "/images/projects/movies.jpg",
    icon: "film",
    tech: [
      "Python",
      "Machine Learning",
      "Collaborative Filtering",
      "Streamlit"
    ],
    problem:
      "Users face content overload and struggle to find movies aligned with their preferences.",
    solution:
      "A machine-learning-based recommendation engine that suggests personalized movies using similarity models.",
    impact: [
      { text: "Personalized recommendations" },
      { text: "Deployed interactive ML app" },
      { text: "End-to-end ML pipeline" }
    ],
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Vvl1232/Movies-Recommendation-System"
      }
    ],
    live: "https://movies-recommendation-system-ky7frujzrzneuqwkgxovbk.streamlit.app/"
  },

  /* ---------------- SENTIMENT ANALYSIS ---------------- */
  {
    title: "Sentiment Analysis System",
    slug: slugify("Sentiment Analysis System"),
    category: "NLP",
    tech: ["NLP", "NLTK", "Scikit-learn", "Python"],
    icon: "message-circle",
    problem:
      "Manual sentiment classification does not scale for large text datasets.",
    solution:
      "Built an end-to-end NLP pipeline using TF-IDF and ML classifiers achieving high accuracy.",
    impact: [
      { text: "90% classification accuracy" },
      { text: "Scalable text processing" },
      { text: "Production-ready pipeline" }
    ],
    github: [
      {
        url: "https://github.com/Vvl1232/Sentiment-Analysis",
        label: "GitHub Repo"
      }
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
  },

  /* ---------------- OPEN CV PROJECT ---------------- */
  {
    title: "Real-Time Object Detection",
    slug: slugify("Real-Time Object Detection"),
    category: "Computer Vision",
    tech: ["YOLOv8", "OpenCV", "Python", "Deep Learning"],
    icon: "eye",
    problem:
      "Object detection models often fail to meet real-time latency requirements.",
    solution:
      "Optimized YOLOv8 inference pipeline with preprocessing and bounding-box tuning to achieve real-time FPS.",
    impact: [
      { text: "30 FPS real-time detection" },
      { text: "Multi-class object recognition" },
      { text: "Low-latency deployment ready" }
    ],
    github: [
      {
        url: "https://github.com/Vvl1232/OpenCV-Hand-placement-project",
        label: "GitHub Repo"
      }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },

  /* ---------------- AI TRAVEL PLANNER ---------------- */
  {
    title: "AI-Powered Travel Itinerary",
    slug: slugify("AI-Powered Travel Itinerary"),
    category: "AI Applications",
    image: "/images/projects/travel.jpg",
    icon: "map",
    tech: [
      "Python",
      "AI Planning",
      "Streamlit",
      "Prompt Engineering"
    ],
    problem:
      "Travel planning is time-consuming and fragmented across multiple platforms.",
    solution:
      "An AI-powered planner that generates smart itineraries based on user preferences, duration, and location.",
    impact: [
      { text: "Automated itinerary generation" },
      { text: "Improved travel decision-making" },
      { text: "Fast, user-friendly AI interface" }
    ],
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Vvl1232/AI-powered-travel-planner"
      }
    ],
    live: "https://ai-powered-travel-planner-doae9rxehnbyb5rx9k5oapp.streamlit.app/"
  },

  /* ---------------- PYTHON PROJECTS ---------------- */
  {
    title: "Python Projects Collection",
    slug: slugify("Python Projects Collection"),
    category: "Python Development",
    image: "/images/projects/mini-projects.jpg",
    icon: "code",
    tech: [
      "Python",
      "Various Libraries",
      "Data Analysis",
      "Web Development"
    ],
    problem:
      "Need for practical implementation of Python programming concepts and libraries.",
    solution:
      "A collection of Python projects demonstrating various applications and problem-solving approaches.",
    impact: [
      { text: "Diverse Python implementations" },
      { text: "Practical application of concepts" },
      { text: "Showcases coding versatility" }
    ],
    github: [
      {
        label: "GitHub Profile",
        url: "https://github.com/Vvl1232"
      }
    ],
    live: "https://share.streamlit.io/user/vvl1232"
  }
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
