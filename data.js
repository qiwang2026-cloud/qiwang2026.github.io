const resumeData = {
  profile: {
    name: "Wang Qi",
    nickname: "Rei",
    title: "International Commerce & Business Student",
    bio: "Freshman at Konkuk University. I run a doll clothing business, design handmade outfits, and play guitar in an underground band. I explore AI tools for business, creativity, and productivity.",
    avatar: "",

    contact: {
      email: "qiwang2026@outlook.com",
      phone: "010-59311153",
      location: "Seoul, South Korea",
      github: "https://github.com/qiwang2026-cloud",
      website: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
    }
  },

  skills: {
    frontend: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 70 }
    ],
    backend: [
      { name: "AI Tools", level: 90 },
      { name: "Business", level: 80 },
      { name: "Marketing", level: 75 }
    ],
    tools: [
      { name: "ChatGPT", level: 95 },
      { name: "GitHub", level: 85 },
      { name: "Canva", level: 85 }
    ]
  },

  projects: [
    {
      title: "AI Portfolio Website",
      description: "Personal portfolio built with AI tools and deployed on GitHub Pages.",
      tags: ["HTML", "CSS", "JS"]
    },
    {
      title: "Doll Clothing Business",
      description: "Handmade doll clothing design and online business experience.",
      tags: ["Business", "Design"]
    }
  ]
};

window.resumeData = resumeData;
