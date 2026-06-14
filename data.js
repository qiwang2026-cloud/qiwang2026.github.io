const resumeData = {
  profile: {
    name: "Wang Qi",
    nickname: "Rei",
    title: "Student",
    bio: "Portfolio website",

    contact: {
      email: "test@email.com",
      phone: "000",
      location: "Seoul",
      website: "#"
    }
  },

  experience: [
    { role: "Work", company: "Company", duration: "Now", description: "..." }
  ],

  education: [
    { degree: "Degree", institution: "School", description: "..." }
  ],

  skills: {
    frontend: [{ name: "HTML", level: 80 }],
    backend: [],
    tools: []
  },

  projects: [
    { title: "Project", description: "Desc", tags: [] }
  ]
};

window.resumeData = resumeData;
