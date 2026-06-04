/**
 * Resume & Portfolio Data Configuration
 * Edit this file to update the content displayed on your resume website.
 */

const resumeData = {
  profile: {
    name: "Wang Qi",
    nickname: "Qi",
    title: "Full Stack Engineer & Creative Developer",
    bio: "Passionate software engineer specializing in building high-performance, visually stunning web experiences. I bridge the gap between clean engineering and elegant UI/UX design, bringing interactive products to life with modern technologies.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80", // Premium placeholder avatar
    contact: {
      email: "hello@miaomiao.dev",
      phone: "+81 (0) 90-1234-5678",
      location: "Tokyo, Japan",
      github: "https://github.com/qiwang2026",
      linkedin: "https://linkedin.com",
      website: "https://qiwang2026.github.io"
    }
  },
  experience: [
    {
      role: "Senior Software Engineer",
      company: "InnovateTech Solutions",
      duration: "2024 - Present",
      location: "Tokyo, Japan",
      description: "Leading a front-end engineering team of 5 in developing high-performance React/Next.js web applications. Created a custom component library that reduced feature development times by 30%.",
      highlights: [
        "Migrated legacy multi-page architectures to Next.js App Router, increasing page speeds by 45%.",
        "Implemented secure, real-time analytics dashboards using WebSockets and optimized charts.",
        "Introduced rigorous CI/CD test coverages (Jest, Playwright) achieving an 85% reduction in production regressions."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Studio",
      duration: "2022 - 2024",
      location: "Kyoto, Japan",
      description: "Designed and engineered highly interactive web layouts and user interfaces for high-profile clients globally. Focused on animations, design system engineering, and web performance.",
      highlights: [
        "Developed award-winning immersive marketing experiences integrating CSS 3D transforms and SVG animations.",
        "Refined accessibility (WCAG 2.1 AA compliance) boosting Lighthouse accessibility scores from 65 to 100.",
        "Collaborated closely with design leads to establish unified tokens for CSS styles, layouts, and colors."
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "Konkuk University",
      duration: "2018 - 2022",
      description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors."
    }
  ],
  skills: {
    frontend: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "React & Next.js", level: 95 },
      { name: "HTML5 / CSS3 / HSL Styles", level: 95 },
      { name: "Tailwind CSS / Sass", level: 90 },
      { name: "WebGL / SVG Animation", level: 75 }
    ],
    backend: [
      { name: "Node.js / Express", level: 85 },
      { name: "Python / FastAPI", level: 80 },
      { name: "GraphQL & RESTful APIs", level: 85 },
      { name: "PostgreSQL & MongoDB", level: 80 }
    ],
    tools: [
      { name: "Git & GitHub Workflow", level: 90 },
      { name: "Docker & Containerization", level: 75 },
      { name: "Figma (UI/UX Prototyping)", level: 85 },
      { name: "Vercel / AWS / Netlify", level: 80 }
    ]
  },
  projects: [
    {
      title: "Interactive Workspace Dashboard",
      category: "frontend",
      description: "A collaborative interactive board workspace built with React featuring drag-and-drop widgets and state synchronization.",
      tags: ["React", "TypeScript", "TailwindCSS", "Zustand"],
      link: "https://github.com/qiwang2026",
      live: "https://qiwang2026.github.io"
    },
    {
      title: "AI Image Art Generator API",
      category: "backend",
      description: "A backend service wrapper for diffusion models using Python/FastAPI, featuring Redis task queuing and image hosting.",
      tags: ["Python", "FastAPI", "Redis", "AWS S3"],
      link: "https://github.com/qiwang2026",
      live: "#"
    },
    {
      title: "Sleek Glassmorphic Audio Player",
      category: "frontend",
      description: "A gorgeous, hardware-accelerated audio visualization canvas built using Web Audio API and responsive glassmorphism styles.",
      tags: ["Vanilla JS", "Web Audio API", "CSS Grid", "Glassmorphism"],
      link: "https://github.com/qiwang2026",
      live: "https://qiwang2026.github.io"
    }
  ]
};

// Export data for global browser script accessibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = resumeData;
}
