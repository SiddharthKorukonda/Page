# 🎮 Super Mario Themed Portfolio

A vibrant, animated personal portfolio website with a Super Mario-inspired theme. Features a unique retro pipe-based navigation system and a professional "Classic Mode" toggle for recruiters.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)

## ✨ Features

- 🎮 **Retro Mode**: Super Mario-inspired theme with animated pipes, drifting clouds, and pixel aesthetics
- 💼 **Classic Mode**: Clean, professional layout for recruiter-friendly viewing
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⌨️ **Accessible**: Keyboard navigable, ARIA labels, visible focus states
- 🚀 **Fast**: Optimized for Lighthouse performance scores
- 📄 **Single Data File**: All your content in one easy-to-edit file

## 🗂️ Project Structure

```
src/
├── components/
│   ├── icons/          # Icon components
│   │   └── index.tsx
│   ├── svg/            # Custom SVG components (Pipe, Cloud, etc.)
│   │   ├── Brick.tsx
│   │   ├── Cloud.tsx
│   │   ├── Ground.tsx
│   │   ├── Pipe.tsx
│   │   ├── QuestionBlock.tsx
│   │   └── Star.tsx
│   ├── Card.tsx        # Reusable card component
│   ├── PageShell.tsx   # Page wrapper with nav and layout
│   ├── PipeMap.tsx     # Homepage pipe navigation
│   ├── PipeTile.tsx    # Individual pipe navigation tile
│   ├── SearchInput.tsx # Search input component
│   ├── TagFilter.tsx   # Tag filter component
│   └── TopNav.tsx      # Top navigation bar
├── context/
│   └── ThemeContext.tsx # Theme state management
├── data/
│   └── content.ts      # 📝 YOUR CONTENT GOES HERE
├── pages/
│   ├── About.tsx
│   ├── Awards.tsx
│   ├── Experience.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── Research.tsx
├── styles/
│   └── index.css       # Global styles and Tailwind
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 Customizing Your Content

All your portfolio content lives in **one file**: `src/data/content.ts`

### Site Configuration

Edit the `siteConfig` object at the top of the file:

```typescript
export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "Building impactful solutions with code and creativity",
  email: "your.email@example.com",
  resumeUrl: "https://example.com/resume.pdf",
  linkedinUrl: "https://linkedin.com/in/yourprofile",
  githubUrl: "https://github.com/yourusername",
}
```

### Adding a New Project

Add to the `projects` array:

```typescript
{
  id: "project-unique-id",
  title: "Project Name",
  problem: "The problem you solved",
  solution: "What you built",
  impact: "Measurable results (use numbers!)",
  techStack: ["React", "Node.js", "PostgreSQL"],
  tags: ["Full Stack", "E-Commerce"],
  links: {
    demo: "https://...",      // optional
    github: "https://...",    // optional
    article: "https://...",   // optional
  },
  featured: true,  // optional - highlights the project
}
```

### Adding Experience

Add to the `experiences` array:

```typescript
{
  id: "exp-unique-id",
  title: "Job Title",
  company: "Company Name",
  location: "City, State",
  startDate: "Jan 2023",
  endDate: "Present",  // or specific date
  bullets: [
    "Achievement with measurable impact...",
    "Another achievement...",
  ],
  technologies: ["TypeScript", "React", "AWS"],  // optional
}
```

### Adding Research Papers

Add to the `research` array:

```typescript
{
  id: "research-unique-id",
  title: "Paper Title",
  venue: "Conference Name 2024",  // or "In Progress"
  authors: ["Your Name", "Co-author"],
  myRole: "Lead researcher...",
  summary: "One paragraph summary...",
  link: "https://arxiv.org/...",  // optional
  year: 2024,
}
```

### Adding Awards

Add to the `awards` array:

```typescript
{
  id: "award-unique-id",
  name: "Award Name",
  organization: "Awarding Organization",
  description: "Brief description of the achievement",
  year: 2024,
}
```

### Updating Skills

Edit the `skills` array to add/modify skill categories:

```typescript
{
  category: "Languages",
  skills: ["TypeScript", "Python", "Go"],
}
```

### Updating About Page

Edit the `about` object:

```typescript
export const about = {
  bio: `Your bio here. 
  
  Use double line breaks for paragraphs.`,

  highlights: [
    { label: "Years of Experience", value: "5+" },
    // Add more stats...
  ],

  interests: ["Machine Learning", "Open Source"],

  education: [
    {
      degree: "M.S. Computer Science",
      school: "University Name",
      year: "2023",
    },
  ],
}
```

## 🌐 Deploying to GitHub Pages

This portfolio is configured for easy deployment to GitHub Pages.

### Automatic Deployment

1. Push your code to the `main` branch
2. Go to your repo's **Settings > Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. The included workflow will automatically build and deploy on every push

### For Non-Username Repos

If your repo is NOT `yourusername.github.io`, update the `base` in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Add your repo name here
  build: {
    outDir: 'dist',
  },
})
```

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains your static site
# Upload contents to any static hosting service
```

## 🎨 Theme Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'mario-red': '#E52521',
  'mario-blue': '#049CD8',
  'mario-green': '#43B047',
  // ... etc
}
```

### Animations

Customize animations in `tailwind.config.js`:

```javascript
animation: {
  'float': 'float 3s ease-in-out infinite',
  'bob': 'bob 2s ease-in-out infinite',
  // ... etc
}
```

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Visible focus indicators
- ✅ Respects `prefers-reduced-motion`
- ✅ Good color contrast ratios
- ✅ No autoplay audio
- ✅ No flashing effects

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Inspired by the classic Super Mario Bros. aesthetic
- Built with React, TypeScript, Tailwind CSS, and Vite
- Icons designed with accessibility in mind

---

**Happy building!** 🎮✨
