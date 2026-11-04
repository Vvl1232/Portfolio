const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const projects = [
  /* ---------------- SIH WINNING PROJECT ---------------- */
  {
    title: "ReWater AI – Wastewater Reuse Platform",
    slug: slugify("ReWater AI Wastewater Reuse Platform"),
    category: "AI / ML",
    image: "/images/projects/peakminds.jpg",
    icon: "award",
    isSIH: true,
    tech: [
      "Machine Learning",
      "Python",
      "Streamlit",
      "Water Quality Analytics",
      "Decision Support"
    ],
    problem:
      "Industries struggle with real-time wastewater monitoring, compliance validation, and decision support for treatment processes.",
    solution:
      "Smart India Hackathon Winning Product: Developed ML models for wastewater quality analysis and real-time treatment decision support.",
    impact: [
      { text: "Winner – Smart India Hackathon 2025" },
      { text: "Real-world industrial wastewater quality analysis" },
      { text: "Real-time treatment decision support system" }
    ],
    github: [],
    live: "https://edubotx-rewaters.vercel.app/"
  },

  /* ---------------- AI CANDIDATE DISCOVERY PLATFORM ---------------- */
  {
    title: "AI Candidate Discovery Platform",
    slug: slugify("AI Candidate Discovery Platform"),
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
    icon: "bot",
    tech: [
      "Python",
      "Streamlit",
      "Generative AI",
      "NLP",
      "Talent Intelligence",
      "Candidate Scoring"
    ],
    problem:
      "Recruiters struggle with manual candidate discovery, resume screening inefficiencies, and a lack of transparent, explainable scoring insights.",
    solution:
      "Built an AI-powered talent intelligence platform for candidate discovery, potential scoring, and explainable hiring insights for the Redrob AI Hackathon Challenge.",
    impact: [
      { text: "Redrob AI Hackathon Challenge Project" },
      { text: "AI-driven talent discovery & scoring engine" },
      { text: "Explainable hiring insights for recruiters" }
    ],
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Vvl1232/EduBotX---TalentDNA-AI"
      }
    ],
    live: "https://edubotx---talentdna-ai-53ur7yhy33x7m2cnqsvk9u.streamlit.app/"
  },

  /* ---------------- BRAIN TUMOR DETECTION USING CNN ---------------- */
  {
    title: "Brain Tumor Detection using CNN",
    slug: slugify("Brain Tumor Detection using CNN"),
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    icon: "brain",
    tech: [
      "CNN",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "Streamlit",
      "Medical Imaging"
    ],
    problem:
      "Manual classification of brain tumors from MRI scans is time-consuming and requires automated secondary validation tools to assist clinical diagnosis.",
    solution:
      "Developed a CNN-based deep learning model for multiclass brain tumor classification from MRI scans with an interactive Streamlit deployment.",
    impact: [
      { text: "Multiclass brain tumor classification" },
      { text: "Interactive Streamlit web deployment" },
      { text: "High-accuracy MRI scan diagnostic inference" }
    ],
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Vvl1232/Brain-Tumor-Detection-CNN"
      }
    ],
    live: "https://brain-tumor-detection-cnn-pyecjj848exbkfo6bzyazk.streamlit.app/"
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
      "Cosine Similarity",
      "Streamlit"
    ],
    problem:
      "Users face content overload and struggle to find movies aligned with their preferences and tastes.",
    solution:
      "Created a personalized movie recommendation engine using ML, cosine similarity, and collaborative filtering algorithms.",
    impact: [
      { text: "Personalized movie recommendations" },
      { text: "Deployed interactive Streamlit app" },
      { text: "End-to-end ML recommendation pipeline" }
    ],
    github: [
      {
        label: "GitHub Repo",
        url: "https://github.com/Vvl1232/Movies-Recommendation-System"
      }
    ],
    live: "https://movies-recommendation-system-ky7frujzrzneuqwkgxovbk.streamlit.app/"
  },

  /* ---------------- SENTIMENT ANALYSIS ON USER REVIEWS ---------------- */
  {
    title: "Sentiment Analysis on User Reviews",
    slug: slugify("Sentiment Analysis on User Reviews"),
    category: "NLP",
    tech: ["NLP", "NLTK", "Scikit-learn", "Python", "TF-IDF"],
    icon: "message-circle",
    problem:
      "Manual sentiment classification does not scale for large text datasets and customer feedback reviews.",
    solution:
      "Built a machine learning-based text classifier achieving 90% accuracy using TF-IDF vectorization and NLTK.",
    impact: [
      { text: "90% classification accuracy" },
      { text: "Scalable text processing & TF-IDF" },
      { text: "Production-ready NLP pipeline" }
    ],
    github: [
      {
        url: "https://github.com/Vvl1232/Sentiment-Analysis",
        label: "GitHub Repo"
      }
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
  },

  /* ---------------- REAL-TIME OBJECT DETECTION ---------------- */
  {
    title: "Real-Time Object Detection",
    slug: slugify("Real-Time Object Detection"),
    category: "Computer Vision",
    tech: ["YOLOv8", "OpenCV", "Python", "Deep Learning"],
    icon: "eye",
    problem:
      "Object detection models often fail to maintain real-time low-latency throughput on dynamic video feeds.",
    solution:
      "Developed a high-performance real-time object detection system using YOLOv8, OpenCV, and optimized inference.",
    impact: [
      { text: "High-performance real-time detection" },
      { text: "YOLOv8 multi-class object detection" },
      { text: "Optimized OpenCV video stream processing" }
    ],
    github: [
      {
        url: "https://github.com/Vvl1232/OpenCV-Hand-placement-project",
        label: "GitHub Repo"
      },
      {
        url: "https://github.com/Vvl1232/Realtime-CV-object-Detector-using-YOLOv8m",
        label: "YOLOv8m Model Repo"
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

  /* ---------------- AI CAREER ASSISTANT ---------------- */
  {
    title: "AI Career Assistant",
    slug: slugify("AI Career Assistant"),
    category: "AI Applications",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tech: [
      "Hugging Face",
      "Transformers",
      "Semantic Embeddings",
      "LLMs",
      "Hugging Face Spaces"
    ],
    problem: "Job seekers struggle with ATS optimization, skill gap identification, and generating tailored application materials across numerous job applications.",
    solution: "Developed an AI-powered Career Assistant that analyzes resumes and job descriptions using semantic embeddings, calculates ATS scores, identifies missing skills, and generates AI-based suggestions using large language models.",
    impact: [
      { text: "ATS score calculation and optimization suggestions" },
      { text: "Semantic skill gap analysis using embeddings" },
      { text: "Deployed on Hugging Face Spaces for instant access" },
      { text: "End-to-end AI recruitment assistance pipeline" }
    ],
    github: [],
    live: "https://huggingface.co/spaces/Vinitlimkar38/ai-career-assistant"
  },

  /* ---------------- DEBT STRESS RADAR ---------------- */
  {
    slug: slugify("Debt Stress Radar"),
    title: "Debt Stress Radar™",
    category: "Machine Learning",
    isSIH: false,
    tech: [
      "Machine Learning",
      "FinTech",
      "Regression",
      "SHAP",
      "Streamlit"
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
  }
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
