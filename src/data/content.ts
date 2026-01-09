// ============================================
// SITE CONFIGURATION
// Edit these values to customize your portfolio
// ============================================

export const siteConfig = {
  // Your name as displayed across the site
  name: "Siddharth Korukonda",
  
  // Your professional role/title
  role: "Computer Science (AI/DS) & Economics @ Stony Brook University",
  
  // One-line value statement shown on homepage
  tagline: "Building impactful solutions with code and creativity",
  
  // Your email address
  email: "siddharth.korukonda.sk@gmail.com",
  
  // Link to your resume PDF (can be a Google Drive link, Dropbox, or hosted file)
  resumeUrl: "https://example.com/resume.pdf",
  
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
    article?: string
  }
  image?: string // Optional: path to project thumbnail
  featured?: boolean
}

export const projects: Project[] = [
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
    links: {},
    featured: true,
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
    links: {},
    featured: true,
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
    id: "exp-1",
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2023",
    endDate: "Present",
    bullets: [
      "Led development of microservices architecture serving 1M+ daily active users",
      "Reduced API response times by 60% through caching optimization and query improvements",
      "Mentored 4 junior engineers, conducting weekly code reviews and 1:1 sessions",
      "Drove adoption of TypeScript across the frontend team, reducing production bugs by 35%",
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    id: "exp-2",
    title: "Software Engineer",
    company: "Startup Labs",
    location: "New York, NY",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    bullets: [
      "Built core features for a SaaS platform from 0 to 10K users in 18 months",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
      "Designed and developed RESTful APIs consumed by web and mobile clients",
      "Collaborated with product team to define technical requirements and sprint planning",
    ],
    technologies: ["JavaScript", "React", "Python", "Django", "Docker", "GCP"],
  },
  {
    id: "exp-3",
    title: "Software Engineering Intern",
    company: "Big Tech Co",
    location: "Seattle, WA",
    startDate: "May 2020",
    endDate: "Aug 2020",
    bullets: [
      "Developed internal tool that automated report generation, saving 10 hours/week",
      "Contributed to open-source SDK used by 500+ developers",
      "Presented project demo to 100+ engineers at end-of-internship showcase",
    ],
    technologies: ["Java", "Spring Boot", "React", "AWS Lambda"],
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
  venue: string // Conference name, journal, or "In Progress"
  authors: string[]
  myRole: string
  summary: string
  link?: string
  year: number
}

export const research: Research[] = [
  {
    id: "research-1",
    title: "Optimizing Neural Network Inference on Edge Devices",
    venue: "International Conference on Machine Learning (ICML) 2024",
    authors: ["Your Name", "Dr. Jane Smith", "Dr. John Doe"],
    myRole: "Lead researcher responsible for model optimization and benchmarking",
    summary: "Developed novel quantization techniques that reduce model size by 75% while maintaining 98% accuracy, enabling real-time inference on resource-constrained IoT devices.",
    link: "https://arxiv.org/abs/example",
    year: 2024,
  },
  {
    id: "research-2",
    title: "A Survey of Privacy-Preserving Machine Learning Techniques",
    venue: "IEEE Transactions on Information Forensics and Security",
    authors: ["Your Name", "Research Team"],
    myRole: "Co-author focusing on federated learning section",
    summary: "Comprehensive review of state-of-the-art privacy-preserving ML methods including differential privacy, secure multi-party computation, and federated learning.",
    link: "https://ieeexplore.ieee.org/example",
    year: 2023,
  },
  {
    id: "research-3",
    title: "Improving Code Generation with Retrieval-Augmented Models",
    venue: "In Progress - Targeting NeurIPS 2025",
    authors: ["Your Name", "Lab Members"],
    myRole: "Primary investigator designing retrieval pipeline",
    summary: "Exploring how retrieval-augmented generation can improve code completion accuracy and reduce hallucinations in large language models.",
    year: 2025,
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
  year: number
}

export const awards: Award[] = [
  {
    id: "award-1",
    name: "Best Paper Award",
    organization: "ACM Conference on Computer Science",
    description: "Recognized for outstanding contribution to the field of distributed systems",
    year: 2024,
  },
  {
    id: "award-2",
    name: "Dean's List",
    organization: "University of Technology",
    description: "Achieved top 5% GPA in Computer Science department for 4 consecutive semesters",
    year: 2023,
  },
  {
    id: "award-3",
    name: "1st Place - National Hackathon",
    organization: "TechCrunch Disrupt Hackathon",
    description: "Won first place among 500+ teams for building an AI-powered accessibility tool",
    year: 2023,
  },
  {
    id: "award-4",
    name: "Google Developer Scholarship",
    organization: "Google",
    description: "Selected as one of 100 recipients globally for excellence in mobile development",
    year: 2022,
  },
  {
    id: "award-5",
    name: "Outstanding Teaching Assistant",
    organization: "Department of Computer Science",
    description: "Recognized for exceptional support in Data Structures & Algorithms course",
    year: 2022,
  },
  {
    id: "award-6",
    name: "Research Excellence Fellowship",
    organization: "National Science Foundation",
    description: "Awarded $25,000 fellowship to pursue research in machine learning",
    year: 2021,
  },
]

// ============================================
// ABOUT
// Your bio and personal information
// ============================================

export const about = {
  bio: `I'm a software engineer passionate about building products that make a difference. 
  With a strong foundation in full-stack development and machine learning, I enjoy tackling 
  complex problems and turning them into elegant solutions.

  When I'm not coding, you'll find me contributing to open-source projects, mentoring 
  aspiring developers, or exploring the latest advancements in AI. I believe in 
  writing clean, maintainable code and creating inclusive technology that serves everyone.`,

  highlights: [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Research Papers", value: "3" },
    { label: "Open Source Contributions", value: "100+" },
  ],

  interests: [
    "Machine Learning",
    "Distributed Systems",
    "Open Source",
    "Developer Tools",
    "Technical Writing",
  ],

  education: [
    {
      degree: "M.S. Computer Science",
      school: "Stanford University",
      year: "2023",
    },
    {
      degree: "B.S. Computer Science",
      school: "UC Berkeley",
      year: "2021",
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

// Get awards grouped by year
export function getAwardsByYear(): Map<number, Award[]> {
  const grouped = new Map<number, Award[]>()
  awards.forEach(award => {
    const existing = grouped.get(award.year) || []
    grouped.set(award.year, [...existing, award])
  })
  return new Map([...grouped.entries()].sort((a, b) => b[0] - a[0]))
}
