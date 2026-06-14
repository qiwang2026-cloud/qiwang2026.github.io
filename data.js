const resumeData = {
  profile: {
    name: "Wang Qi",
    nickname: "Rei",
    title: "International Commerce & Business Student",
    bio: "International Commerce student at Konkuk University. I run a doll clothing business, play guitar in an underground band, and explore AI + digital business.",

    contact: {
      email: "qiwang2026@outlook.com",
      phone: "010-59311153",
      location: "Seoul, South Korea",
      github: "https://github.com/qiwang2026-cloud",
      linkedin: "https://linkedin.com",
      website: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    }
  },

  experience: [
    {
      role: "Doll Clothing Business Owner",
      company: "Independent Shop",
      duration: "2024 - Present",
      description: "Designed and sold handmade doll clothing products online."
    },
    {
      role: "Guitarist",
      company: "Underground Band",
      duration: "2023 - Present",
      description: "Performed live music in student band activities."
    }
  ],

  education: [
    {
      degree: "Bachelor of International Commerce & Business",
      institution: "Konkuk University",
      duration: "2026 - Present",
      description: "Studying global business, marketing, and digital commerce."
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
      { name: "Business", level: 80 }
    ],
    tools: [
      { name: "ChatGPT", level: 95 },
      { name: "GitHub", level: 85 }
    ]
  },

  projects: [
    {
      title: "AI Portfolio Website",
      description: "AI-assisted personal portfolio.",
      tags: ["HTML", "CSS", "JS"]
    },
    {
      title: "Doll Clothing Business",
      description: "E-commerce handmade product business.",
      tags: ["Business", "Design"]
    }
  ]
};

window.resumeData = resumeData;
