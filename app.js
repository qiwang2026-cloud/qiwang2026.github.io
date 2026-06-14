document.addEventListener("DOMContentLoaded", () => {

const data = window.resumeData;

if (!data) {
  document.body.innerHTML = "DATA NOT FOUND";
  return;
}

const set = (id, v) => {
  const el = document.getElementById(id);
  if (el) el.innerText = v || "";
};

const setLink = (id, v, prefix="") => {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = v || "";
    if (v && prefix) el.href = prefix + v;
  }
};

// PROFILE
set("profile-name", data.profile?.name);
set("profile-title", data.profile?.title);
set("profile-bio", data.profile?.bio);

// CONTACT
const c = data.profile?.contact || {};

setLink("contact-email", c.email, "mailto:");
setLink("contact-phone", c.phone, "tel:");
setLink("contact-location", c.location);
setLink("contact-website", c.website);

// EXPERIENCE
const exp = document.getElementById("experience-timeline");
exp.innerHTML = (data.experience || [])
.map(e => `
  <div class="item">
    <b>${e.role}</b><br/>
    <span>${e.company}</span>
  </div>
`).join("");

// EDUCATION
const edu = document.getElementById("education-timeline");
edu.innerHTML = (data.education || [])
.map(e => `
  <div class="item">
    <b>${e.degree}</b><br/>
    <span>${e.institution}</span>
  </div>
`).join("");

// SKILLS
const skills = [
  ...(data.skills?.frontend || []),
  ...(data.skills?.backend || []),
  ...(data.skills?.tools || [])
];

document.getElementById("skills-grid").innerHTML =
skills.map(s => `<div class="item">${s.name}</div>`).join("");

// PROJECTS
document.getElementById("projects-grid").innerHTML =
(data.projects || []).map(p => `
  <div class="item">
    <b>${p.title}</b><br/>
    <span>${p.description || ""}</span>
  </div>
`).join("");

});
