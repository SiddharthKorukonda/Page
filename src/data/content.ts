// ============================================
// SITE CONFIGURATION
// Edit these values to customize your portfolio
// ============================================

export const siteConfig = {
  // Your name as displayed across the site
  name: "Siddharth Korukonda",

  // Shown between name and role (home + nav)
  headline: "Incoming SDE Co-op @ IBM",
  
  // Your professional role/title
  role: "Computer Science (spec. AI/DS) @ Stony Brook University",
  
  // One-line value statement shown on homepage
  tagline: "Building impactful solutions with code and creativity",
  
  // Your email address
  email: "siddharth.korukonda.sk@gmail.com",
  
  // Link to your resume PDF (can be a Google Drive link, Dropbox, or hosted file)
  resumeUrl: "/Resume - 4_7_26.pdf",
  
  // Your LinkedIn profile URL
  linkedinUrl: "https://www.linkedin.com/in/siddharth-korukonda",
  
  // Your GitHub profile URL
  githubUrl: "https://github.com/SiddharthKorukonda",
}

// ============================================
// PROJECTS
// Add, edit, or remove projects below
// ============================================

export interface Project {
  id: string
  title: string
  date: string
  bullets: string[]
  techStack: string[]
  tags: string[]
  links: {
    demo?: string
    github?: string
    githubRepo?: string // GitHub link for icon only (title won't be clickable)
    article?: string
  }
  image?: string // Optional: path to project thumbnail
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "realityrpg",
    title: "RealityRPG - AI Gamified Goal-Tracking Platform",
    date: "February 2026",
    bullets: [
      "Enabled immersive goal tracking by building an AI-powered platform that converts personal goals into interactive 3D environments using Gaussian Splatting reconstruction to visually represent user progress and milestones",
      "Generated navigable 3D worlds by developing a reconstruction pipeline that processes user-uploaded images with Luma AI and renders real-time scenes in Three.js for browser-based exploration",
      "Automated personalized challenges by integrating Gemini and LangChain agents that analyze user-defined goals and dynamically generate quests, feedback, and progress tracking within the environment",
    ],
    techStack: ["React", "Next.js", "Three.js", "Gaussian Splatting", "Luma AI", "Gemini", "LangChain"],
    tags: ["AI/ML", "Gamification", "3D"],
    links: {
      github: "https://github.com/SiddharthKorukonda/RealityRPG",
      article: "https://www.linkedin.com/feed/update/urn:li:activity:7439122744694255616/",
    },
    featured: true,
  },
  {
    id: "surveilens",
    title: "SurveiLens - Real-Time AI Safety Platform",
    date: "November 2025",
    bullets: [
      "Integrated OpenCV video analysis and ElevenLabs audio transcription through Gemini reasoning to generate real-time risk assessments",
      "Enhanced detection precision by combining object tracking, action recognition, and VADER sentiment to minimize false positives",
      "Enabled multi-device connectivity by streaming RTSP/WebRTC snapshots to Flask and syncing event data into Snowflake for analysis",
      "Leveraged NeuralSeek to coordinate multimodal AI pipelines, enforce risk-based policies, and broadcast alerts to the live monitoring dashboard",
    ],
    techStack: ["React", "Flask", "NeuralSeek", "Snowflake", "ElevenLabs", "OpenCV", "Gemini", "VADER", "WebRTC/RTSP", "Vultr"],
    tags: ["AI/ML", "Full Stack", "Real-Time"],
    links: {
      github: "https://www.linkedin.com/feed/update/urn:li:activity:7394241662300073984/",
    },
    featured: true,
  },
  {
    id: "camguard",
    title: "CamGuard - Agentic Fall Triage & Response System",
    date: "February 2026",
    bullets: [
      "Built a multimodal, agentic AI safety system that integrates computer vision and LLM reasoning to proactively detect bed fall risks for elderly individuals and infants",
      "Implemented a full pipeline spanning real-time video ingestion, pose and boundary detection with OpenCV, contextual reasoning with Gemini, and structured incident logging and analytics in Snowflake",
      "Designed Snowflake databases to store incident timelines, agent decisions, confidence scores, and configuration states, then transformed that data into training inputs for a RAG-based chatbot that lets users dynamically adjust system objectives through natural language without manual backend changes",
      "Created staging tables and export pipelines to push curated datasets to DigitalOcean for continuous machine learning retraining and LLM fine-tuning on real-world outcomes",
      "Integrated ElevenLabs for real-time AI voice synthesis, enabling context-aware safety alerts that translate model reasoning into clear, human-readable escalation responses",
    ],
    techStack: ["React Native", "Flask", "OpenCV", "Gemini", "Snowflake", "DigitalOcean", "Python", "WebSockets", "ElevenLabs"],
    tags: ["AI/ML", "Computer Vision", "Real-Time"],
    links: {
      github: "https://github.com/SiddharthKorukonda/CamGuard",
      article: "https://www.linkedin.com/feed/update/urn:li:activity:7432292605763354624/",
    },
    featured: false,
  },
  {
    id: "fastfacts",
    title: "FastFacts - Real-Time AI Fact-Checking Desktop App",
    date: "October 2025",
    bullets: [
      "Developed a desktop application that performs real-time fact-checking on live system audio using an agentic AI workflow",
      "Implemented an automated pipeline with OpenAI Speech-to-Text for transcription, Gemini for claim detection, and Tavily MCP for retrieving reputable online sources",
      "Used Gemini to analyze evidence and classify claims as true, false, or unsubstantiated, returning a final verdict upon session completion",
      "Integrated Comet's Opik to evaluate LLM outputs, ensuring consistency, reliability, and explainability across all agent interactions",
    ],
    techStack: ["Electron", "React", "Flask", "Opik", "LangChain", "Tavily", "Gemini", "OpenAI Speech-to-Text"],
    tags: ["AI/ML", "Desktop App", "LangChain"],
    links: {
      github: "https://www.linkedin.com/feed/update/urn:li:activity:7381389500104511488/",
    },
    featured: false,
  },
  {
    id: "sbu-care-connect",
    title: "NourishAI",
    date: "January 2025",
    bullets: [
      "Built a React frontend with a map API that lets patients search the nearest Stony Brook Hospital partner by address, and added a chat box powered by an OpenAI LLM for patient guidance",
      "Developed a Python Flask backend with an SQL database for partner locations and a separate SQL database for patient records, and used a NoSQL store for patient chat logs with APIs that serve map searches and chat sessions",
      "Implemented authentication and login tied to a user key in SQL, secured data storage and access controls, and personalized features and content for each patient after sign in",
    ],
    techStack: ["React", "Map API", "Flask", "SQL", "NoSQL", "OpenAI API", "Auth/JWT"],
    tags: ["Full Stack", "Healthcare", "AI/ML"],
    links: {
      githubRepo: "https://github.com/SiddharthKorukonda/NourishAI",
    },
    featured: false,
  },
]

// ============================================
// EXPERIENCE
// Add your work experience below
// ============================================

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string // Use "Present" for current role
  bullets: string[]
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    id: "exp-sbu-ta",
    title: "Undergraduate Teaching Assistant",
    company: "Stony Brook University",
    location: "Stony Brook, NY",
    startDate: "Jan 2026",
    endDate: "Present",
    bullets: [
      "Created assignments and labs for CSE 220 (System Fundamentals I).",
      "Delivered assistance to students in lectures of approximately 200 students.",
      "Graded assignments and held weekly recitations and office hours.",
    ],
    technologies: ["C", "Assembly", "System Programming"],
  },
  {
    id: "exp-sbu-hospital",
    title: "Software Developer",
    company: "Stony Brook University Hospital",
    location: "Stony Brook, NY",
    startDate: "Jan 2025",
    endDate: "Present",
    bullets: [
      "Design and build the hospital website in React and Flask, create reusable UI components, develop secure APIs, manage SQL and NoSQL data, implement login and roles, and keep pages fast and accessible",
      "Collaborate with BS/MD and pre-med students to analyze de-identified patient records, curate datasets, and train/evaluate clinical AI models, incorporating feedback to improve model quality",
      "Write clear docs, help teammates and staff use the tools, watch error logs, and fix issues to keep everything stable",
    ],
    technologies: ["React", "Flask", "SQL", "NoSQL", "REST APIs", "Authentication"],
  },
  {
    id: "exp-sbu-research",
    title: "Undergraduate Researcher",
    company: "Secure Distributed Computation and Learning Networks Research",
    location: "Stony Brook, NY",
    startDate: "Aug 2024",
    endDate: "Present",
    bullets: [
      "Maintained 80% consensus in Byzantine networks by projecting updates onto convex sets and eliminating adversarial values",
      "Achieved 77% valid input preservation in real-time decision-making under adversarial corruption",
      "Enabled stable updates with 93% agent interaction through controlled neighborhood protocols",
    ],
    technologies: ["Distributed Systems", "Machine Learning", "Byzantine Fault Tolerance"],
  },
]

// ============================================
// SKILLS
// List your technical skills
// ============================================

export interface SkillCategory {
  category: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "Go"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "FastAPI", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
  {
    category: "Tools",
    skills: ["Git", "Linux", "Vim", "Figma", "Jira"],
  },
]

// ============================================
// RESEARCH
// Add your research papers and publications
// ============================================

export interface Research {
  id: string
  title: string
  venue: string
  date: string // e.g., "2025 – 2026"
  authors: string[]
  myRole: string
  summary: string
  bullets?: string[]
  technologies?: string[]
  link?: string
  linkedinUrl?: string
  year: number
}

export const research: Research[] = [
  {
    id: "research-kalshi-cpi",
    title: "Pre-Release Uncertainty and CPI Forecast Errors in Kalshi Prediction Markets",
    venue: "Independent Research",
    date: "2026",
    authors: ["Siddharth Korukonda", "Jiabin Chen", "Andrew Luong"],
    myRole: "Researcher modeling how pre-release prediction-market uncertainty relates to CPI forecast errors using econometrics and machine learning.",
    summary: "Built a 77-month CPI forecasting panel integrating BLS CPI, Kalshi KXCPI contracts, market volatility, commodities, and expectations data, then evaluated uncertainty effects on forecast misses with econometric and tree-based models.",
    bullets: [
      "Built a **77-month** CPI forecasting panel from BLS CPI data, Kalshi KXCPI contracts, VIX, oil prices, and inflation expectations, converting **155** prediction-market range contracts into implied forecasts, uncertainty measures, entropy, and tail-risk signals.",
      "Modeled the relationship between pre-release uncertainty and CPI forecast errors using OLS with Newey-West errors, quantile regression, Random Forest, Gradient Boosted Trees, SHAP analysis, and expanding-window time-series cross-validation.",
      "Found that higher uncertainty was associated with larger CPI forecast misses, with quantile effects rising from **1.06** at the median to **1.52** at the 90th percentile, while Kalshi's high-uncertainty win rate fell from **65.4%** to **50.0%**, challenging the original prediction-market dominance hypothesis.",
    ],
    technologies: [
      "Python",
      "Time-Series Cross-Validation",
      "Statsmodels",
      "Quantile Regression and Newey-West HAC",
      "Scikit-learn Tree Models and SHAP",
    ],
    link: "./Pre_Release_Uncertainty_and_CPI_Forecast_Errors.pdf",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7452232915360321536/",
    year: 2026,
  },
  {
    id: "research-nflpa",
    title: "NFLPA Analytics – Special Teams Workload and Injury Risk",
    venue: "NFL Players Association",
    date: "2025 – 2026",
    authors: ["Siddharth Korukonda"],
    myRole: "Researcher analyzing special teams workload and next-week injury risk using fixed-effects GLMs and validated inference.",
    summary: "Analyzed special teams workload and next-week injury risk using 5,950 NFL team-weeks, estimating fixed-effects Poisson and Negative Binomial models with clustered and bootstrap-validated inference.",
    bullets: [
      "Analyzed special teams workload and next-week injury risk using **5,950** **NFL team-weeks**, estimating fixed-effects Poisson and Negative Binomial models with clustered and bootstrap-validated inference.",
      "Shock workload weeks raised next-week injury probability by **2.52** **pp (offense)** and **1.39** **pp (defense)**, while workload volatility (25th–75th percentile) increased offensive injury risk by **2.46** **pp** with no meaningful defensive effect.",
      "League-level scaling implies **+8.8** **offensive** and **+5.7** **defensive** injuries per season attributable to shock workloads; results documented in a research paper submitted to the NFL Players Association.",
    ],
    technologies: ["Python", "DuckDB", "Statsmodels", "Poisson and Negative Binomial GLMs", "Fixed Effects"],
    link: "./Special Teams Workload Volatility and Next Week Injury Risk in the NFL.pdf",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7421059283984850944/",
    year: 2026,
  },
]

// ============================================
// AWARDS
// Add your awards and achievements
// ============================================

export interface Award {
  id: string
  name: string
  organization: string
  description: string
  date: string // e.g., "November 2025"
  sortOrder: number // for sorting (higher = more recent, e.g., 202511 for Nov 2025)
}

export const awards: Award[] = [
  {
    id: "award-hopperhacks-2026",
    name: "HopperHacks 2026",
    organization: "Stony Brook University",
    description: "• Best Usage of ElevenLabs",
    date: "February 2026",
    sortOrder: 202602,
  },
  {
    id: "award-sbuhacks-2025",
    name: "SBUHacks 2025",
    organization: "Stony Brook University",
    description: "• Best Usage of NeuralSeek\n• Best Usage of Snowflake",
    date: "November 2025",
    sortOrder: 202511,
  },
  {
    id: "award-divhacks-2025",
    name: "Columbia DivHacks 2025",
    organization: "Columbia University",
    description: "• Best Hack - Entertainment\n• Best Usage of Opik",
    date: "October 2025",
    sortOrder: 202510,
  },
  {
    id: "cert-jpmc-swe",
    name: "Software Engineer Job Simulation",
    organization: "JP Morgan Chase",
    description: "Completed virtual job simulation program",
    date: "September 2025",
    sortOrder: 202509,
  },
  {
    id: "cert-jpmc-quant",
    name: "Quantitative Research Job Simulation",
    organization: "JP Morgan Chase",
    description: "Completed virtual job simulation program",
    date: "June 2025",
    sortOrder: 202506,
  },
  {
    id: "award-aime-2022",
    name: "American Invitational Mathematics Examination",
    organization: "The Bronx High School of Science",
    description: "• AIME - 5\n• AMC 12B - 106.5\n• Total - 156.5",
    date: "February 2022",
    sortOrder: 202202,
  },
]

// ============================================
// ABOUT
// Your bio and personal information
// ============================================

export const about = {
  bio: `I'm a Computer Science and Economics student at Stony Brook University with a strong focus on artificial intelligence, distributed systems, and applied machine learning. I enjoy building end-to-end systems that move from research ideas to real, deployed products, especially in safety-critical and data-intensive environments.

My work spans full-stack development and AI research, including building production web platforms for Stony Brook University Hospital, contributing to secure distributed learning research under adversarial conditions, and developing real-time multimodal AI systems that combine computer vision, NLP, and agentic reasoning. I've led and contributed to award-winning projects at national hackathons, where my teams were recognized for effective AI orchestration, evaluation, and scalable system design.

Technically, I work across Python, Java, C and JavaScript, with experience in frameworks such as React, Flask, Spring Boot, PyTorch, and cloud-native tools like Docker, Kubernetes, and Snowflake. I care deeply about building systems that are not only intelligent, but reliable, interpretable, and usable by real people.

I'm currently seeking opportunities in software engineering, AI and ML, and applied data science where I can work on challenging problems, learn from strong engineers and researchers, and build technology with real-world impact.

This site is a collection of my work, projects, and experiments as I continue growing as an engineer and researcher.

The theme is also my creativity, so hope you enjoy exploring :)`,

  highlights: [
    { label: "Hackathon Awards", value: "5" },
    { label: "Projects Built", value: "5" },
    { label: "Certifications", value: "2" },
  ],

  coursework: [
    "Theory of Computation",
    "Analysis of Algorithms",
    "Data Structures",
    "Object-Oriented Programming",
    "Systems Fundamentals",
    "Programming Abstractions",
    "Linear Algebra",
    "Calculus I–IV",
    "Data Mining",
    "Probability Theory",
    "Game Theory",
    "Graph Theory",
    "Software Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Logic",
    "Scripting",
  ],

  education: [
    {
      degree: "B.S. in Computer Science (spec. AI/DS)",
      school: "Stony Brook University",
      year: "Expected May 2027",
    },
    {
      degree: "B.A. in Economics",
      school: "Stony Brook University",
      year: "Expected May 2027",
    },
  ],
}

// ============================================
// HELPER FUNCTIONS
// Utility functions for working with content
// ============================================

// Get all unique tags from projects
export function getAllProjectTags(): string[] {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

// Get awards sorted by date (newest first)
export function getSortedAwards(): Award[] {
  return [...awards].sort((a, b) => b.sortOrder - a.sortOrder)
}
