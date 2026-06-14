/**

* Resume & Portfolio Data Configuration
* Edit this file to update the content displayed on your resume website.
  */

const resumeData = {
profile: {
name: "Wang Qi",
nickname: "Rei",
title: "International Commerce and Business Student",
bio: "I am a freshman majoring in International Commerce and Business at Konkuk University. Besides my studies, I run a doll clothing business where I design and sell handmade outfits for dolls. I am also a guitarist in an underground band and enjoy music, creativity, and entrepreneurship. Recently, I have been exploring how AI tools can be applied to business, design, and everyday life.",
avatar: "images/avatar.png",
contact: {
email: "[qiwang2026@outlook.com](mailto:qiwang2026@outlook.com)",
phone: "010-59311153",
location: "Seoul, South Korea",
github: "https://github.com/qiwang2026-cloud",
linkedin: "#",
website: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
}
},

experience: [
{
role: "Doll Clothing Business Owner",
company: "Independent Online Shop",
duration: "2024 - Present",
location: "Seoul, South Korea",
description: "Designing, producing, and selling handmade doll clothing products through online communities and social media platforms.",
highlights: [
"Designed original doll outfits and accessories.",
"Managed customer communication and order fulfillment.",
"Created product photography and promotional content.",
"Developed practical experience in e-commerce and entrepreneurship."
]
},
{
role: "Guitarist",
company: "Independent Underground Band",
duration: "2023 - Present",
location: "Seoul, South Korea",
description: "Performing as a guitarist and participating in independent music activities.",
highlights: [
"Performed at local live events and student activities.",
"Collaborated with band members on music arrangements.",
"Developed teamwork and stage performance skills.",
"Explored creative expression through music."
]
}
],

education: [
{
degree: "Bachelor of International Commerce and Business",
institution: "Konkuk University",
duration: "2026 - Present",
description: "Freshman student focusing on international business, digital commerce, marketing, entrepreneurship, and global trade."
}
],

skills: {
frontend: [
{ name: "HTML", level: 75 },
{ name: "CSS", level: 70 },
{ name: "JavaScript", level: 65 }
],

```
backend: [
  { name: "AI Tools", level: 90 },
  { name: "Business Analysis", level: 75 },
  { name: "Digital Commerce", level: 80 },
  { name: "Market Research", level: 75 }
],

tools: [
  { name: "ChatGPT", level: 95 },
  { name: "GitHub", level: 80 },
  { name: "Microsoft Office", level: 90 },
  { name: "Canva", level: 85 }
]
```

},

projects: [
{
title: "AI Resume & Portfolio Website",
category: "web",
description: "A personal portfolio website created with the assistance of AI tools and deployed on GitHub Pages.",
tags: ["HTML", "CSS", "JavaScript", "ChatGPT"],
link: "https://github.com/qiwang2026-cloud/qiwang2026.github.io",
live: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
},
{
title: "Doll Clothing Business Portfolio",
category: "business",
description: "A project showcasing doll clothing design, product photography, online marketing, and e-commerce operations.",
tags: ["E-commerce", "Design", "Marketing"],
link: "https://github.com/qiwang2026-cloud/qiwang2026.github.io",
live: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
},
{
title: "AI Study Assistant",
category: "web",
description: "A simple web application developed with AI assistance to help students organize study plans and improve learning efficiency.",
tags: ["AI", "JavaScript", "Productivity"],
link: "https://github.com/qiwang2026-cloud/qiwang2026.github.io",
live: "https://qiwang2026-cloud.github.io/qiwang2026.github.io/"
}
]
};

// Export data for global browser script accessibility
if (typeof module !== 'undefined' && module.exports) {
module.exports = resumeData;
}
