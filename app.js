document.addEventListener("DOMContentLoaded", () => {

const d = resumeData;

// PROFILE
document.getElementById("profile-name").innerText = d.profile.name;
document.getElementById("profile-nickname").innerText = d.profile.nickname;
document.getElementById("profile-title").innerText = d.profile.title;
document.getElementById("profile-bio").innerText = d.profile.bio;

// CONTACT
const c = d.profile.contact;
document.getElementById("contact-email").innerText = c.email;
document.getElementById("contact-phone").innerText = c.phone;
document.getElementById("contact-location").innerText = c.location;
document.getElementById("contact-website").innerText = c.website;

// EXPERIENCE
document.getElementById("experience-timeline").innerHTML =
d.experience.map(e =>
  `<div>
    <b>${e.role}</b><br>
    ${e.company}<br>
    ${e.duration}
  </div>`
).join("");

// EDUCATION
document.getElementById("education-timeline").innerHTML =
d.education.map(e =>
  `<div>
    <b>${e.degree}</b><br>
    ${e.institution}<br>
    ${e.duration}
  </div>`
).join("");

// SKILLS
document.getElementById("skills-grid").innerHTML =
[
  ...d.skills.frontend,
  ...d.skills.backend,
  ...d.skills.tools
].map(s =>
  `<div>${s.name} - ${s.level}%</div>`
).join("");

// PROJECTS
document.getElementById("projects-grid").innerHTML =
d.projects.map(p =>
  `<div>
    <b>${p.title}</b><br>
    ${p.description}
  </div>`
).join("");

});
