const resumeData = {
  profile: {
    name: "Wang Qi",
    nickname: "Rei",
    title: "International Commerce & Business Student",
    bio: "Freshman at Konkuk University. I run a doll clothing business, design handmade outfits, and play guitar in an underground band. I am interested in AI tools, digital business, and creative development.",

    contact: {
      email: "qiwang2026@outlook.com",
      phone: "010-59311153",
      location: "Seoul, South Korea",
      github: "https://github.com/qiwang2026-cloud",
      linkedin: "https://www.linkedin.com",
      website: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    }
  },

  experience: [
    {
      role: "Doll Clothing Business Owner",
      company: "Independent Online Shop",
      duration: "2024 - Present",
      description: "Designing, producing, and selling handmade doll clothing products through online platforms.",
      highlights: [
        "Designed original doll outfits",
        "Managed online customer orders",
        "Built small e-commerce workflow"
      ]
    },
    {
      role: "Guitarist",
      company: "Underground Band",
      duration: "2023 - Present",
      description: "Performed as guitarist in student underground band activities.",
      highlights: [
        "Live performance experience",
        "Band collaboration",
        "Music arrangement practice"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of International Commerce & Business",
      institution: "Konkuk University",
      duration: "2026 - Present",
      description: "Studying global business, marketing, entrepreneurship, and digital commerce."
    }
  ],

  skills: {
    frontend: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 75 }
    ],

    backend: [
      { name: "AI Tools", level: 92 },
      { name: "Business Analysis", level: 80 },
      { name: "Digital Marketing", level: 78 }
    ],

    tools: [
      { name: "ChatGPT", level: 95 },
      { name: "GitHub", level: 85 },
      { name: "Canva", level: 88 }
    ]
  },

  projects: [
    {
      title: "AI Portfolio Website",
      description: "A personal portfolio built with AI tools and deployed on GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Doll Clothing Business",
      description: "Handmade doll clothing brand with online sales experience.",
      tags: ["Business", "Design", "E-commerce"]
    },
    {
      title: "AI Study Assistant",
      description: "Simple AI-based study planning concept project.",
      tags: ["AI", "Productivity", "Web"]
    }
  ]
};

window.resumeData = resumeData;
