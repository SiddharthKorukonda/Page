// Recreated content configuration for portfolio site
// NOTE: This file was reconstructed after accidental deletion.

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: "Siddharth Korukonda",
  role: "Computer Science (AI/DS) & Economics @ Stony Brook University",
  tagline: "Building impactful solutions with code and creativity",
  email: "siddharth.korukonda.sk@gmail.com",
  resumeUrl: "/Resume - 2_23_26.pdf",
  linkedinUrl: "https://www.linkedin.com/in/siddharth-korukonda",
  githubUrl: "https://github.com/SiddharthKorukonda",
}

// ============================================
// PROJECTS
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
    githubRepo?: string
    article?: string
  }
  image?: string
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
    tags: ["AI/ML", "3D Graphics", "Gamification"],
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

// Minimal stubs for other content so the app compiles.

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  bullets: string[]
  technologies?: string[]
}

export const experiences: Experience[] = []

export interface Award {
  id: string
  name: string
  organization: string
  description: string
  date: string
  sortOrder: number
}

export const awards: Award[] = []

export const about = {
  bio: "",
  highlights: [],
  coursework: [],
  education: [],
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export const skills: SkillCategory[] = []

export interface Research {
  id: string
  title: string
  venue: string
  date: string
  authors: string[]
  myRole: string
  summary: string
  bullets?: string[]
  technologies?: string[]
  link?: string
  linkedinUrl?: string
  year: number
}

export const research: Research[] = []

export function getAllProjectTags(): string[] {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

export function getSortedAwards(): Award[] {
  return [...awards].sort((a, b) => b.sortOrder - a.sortOrder)
}

