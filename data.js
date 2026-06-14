const resumeData = {
  profile: {
    name: "Wang Qi",
    title: "Student",
    bio: "Portfolio Website",

    contact: {
      email: "test@email.com",
      phone: "000",
      location: "Seoul"
    }
  },

  about: "This is my personal portfolio website.",

  experience: [
    {
      role: "Research Assistant",
      company: "University Lab"
    }
  ],

  education: [
    {
      degree: "Bachelor Degree",
      institution: "University"
    }
  ],

  skills: {
    frontend: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" }
    ]
  },

  projects: [
    {
      title: "Portfolio Website"
    }
  ]
};

window.resumeData = resumeData;
