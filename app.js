document.addEventListener("DOMContentLoaded", () => {

const data = resumeData;

// LEFT
document.getElementById("profile-name").innerText = data.profile.name;
document.getElementById("profile-nickname").innerText = data.profile.nickname;
document.getElementById("profile-title").innerText = data.profile.title;
document.getElementById("profile-bio").innerText = data.profile.bio;

const c = data.profile.contact;

document.getElementById("contact-email").innerText = c.email;
document.getElementById("contact-phone").innerText = c.phone;
document.getElementById("contact-location").innerText = c.location;
document.getElementById("contact-website").innerText = c.website;

// EXPERIENCE
document.getElementById("experience-timeline").innerHTML =
data.experience.map(e =>
  `<div><b>${e.role}</b><br>${e.company}<br>${e.duration}</div>`
).join("");

// EDUCATION
document.getElementById("education-timeline").innerHTML =
data.education.map(e =>
  `<div><b>${e.degree}</b><br>${e.institution}<br>${e.duration}</div>`
).join("");

// SKILLS
document.getElementById("skills-grid").innerHTML =
[
  ...data.skills.frontend,
  ...data.skills.backend,
  ...data.skills.tools
].map(s =>
  `<div>${s.name} - ${s.level}%</div>`
).join("");

// PROJECTS
document.getElementById("projects-grid").innerHTML =
data.projects.map(p =>
  `<div><b>${p.title}</b><br>${p.description}</div>`
).join("");

});
