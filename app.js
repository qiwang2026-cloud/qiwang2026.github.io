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
data.experience.map(e => `
  <div>
    <h3>${e.role}</h3>
    <p>${e.company}</p >
    <small>${e.duration}</small>
  </div>
`).join("");

// EDUCATION
document.getElementById("education-timeline").innerHTML =
data.education.map(e => `
  <div>
    <h3>${e.degree}</h3>
    <p>${e.institution}</p >
    <small>${e.duration}</small>
  </div>
`).join("");

// SKILLS
document.getElementById("skills-grid").innerHTML =
[
  ...data.skills.frontend,
  ...data.skills.backend,
  ...data.skills.tools
].map(s => `
  <div>
    ${s.name} - ${s.level}%
  </div>
`).join("");

// PROJECTS
document.getElementById("projects-grid").innerHTML =
data.projects.map(p => `
  <div>
    <h3>${p.title}</h3>
    <p>${p.description}</p >
  </div>
`).join("");

});
