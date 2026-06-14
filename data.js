/**
 * Resume & Portfolio Data Configuration
 * FINAL STABLE VERSION (GitHub Pages safe)
 */

const resumeData = {
  profile: {
    name: "Wang Qi",
    nickname: "Rei",
    title: "International Commerce & Business Student",
    tagline: "Business Student • Creator • Musician • AI Explorer",
    bio: "Freshman at Konkuk University majoring in International Commerce and Business. I run a doll clothing business, design handmade outfits, and perform as a guitarist in an underground band. I am interested in AI tools, digital business, and creative entrepreneurship.",
    avatar: "",

    contact: {
      email: "qiwang2026@outlook.com",
      phone: "010-59311153",
      location: "Seoul, South Korea",
      github: "https://github.com/qiwang2026-cloud",
      linkedin: "",
      website: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    }
  },

  experience: [
    {
      role: "Doll Clothing Business Owner",
      company: "Independent Online Shop",
      duration: "2024 - Present",
      location: "Seoul, South Korea",
      description: "Designing and selling handmade doll clothing through online platforms.",
      highlights: [
        "Designed original doll outfits and accessories",
        "Managed online sales and customer communication",
        "Created product photography and marketing content",
        "Built real e-commerce experience"
      ]
    },
    {
      role: "Guitarist",
      company: "Independent Underground Band",
      duration: "2023 - Present",
      location: "Seoul, South Korea",
      description: "Performing as guitarist in student band activities.",
      highlights: [
        "Live stage performances",
        "Band collaboration",
        "Music arrangement participation",
        "Creative expression through music"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of International Commerce & Business",
      institution: "Konkuk University",
      duration: "2026 - Present",
      description: "Focus on global trade, digital commerce, marketing, and entrepreneurship."
    }
  ],

  skills: {
    frontend: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 70 }
    ],

    backend: [
      { name: "AI Tools", level: 90 },
      { name: "Business Analysis", level: 80 },
      { name: "Digital Marketing", level: 75 }
    ],

    tools: [
      { name: "ChatGPT", level: 95 },
      { name: "GitHub", level: 85 },
      { name: "Canva", level: 85 },
      { name: "Microsoft Office", level: 90 }
    ]
  },

  projects: [
    {
      title: "AI Portfolio Website",
      description: "Personal portfolio website built with AI tools and deployed on GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript", "AI"],
      live: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    },
    {
      title: "Doll Clothing Business Project",
      description: "Handmade doll clothing design and online sales experience.",
      tags: ["E-commerce", "Design", "Marketing"],
      live: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    },
    {
      title: "AI Study Assistant Concept",
      description: "AI-based productivity concept for student learning planning.",
      tags: ["AI", "Productivity", "JavaScript"],
      live: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    }
  ]
};

// IMPORTANT: make it globally accessible for GitHub Pages templates
window.resumeData = resumeData;
