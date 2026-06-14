document.addEventListener("DOMContentLoaded", () => {

  console.log("app.js running");

  const data = window.resumeData;

  if (!data) {
    console.error("❌ resumeData not found");
    return;
  }

  // LEFT SIDE
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val || "";
  };

  set("profile-name", data.profile?.name);
  set("profile-nickname", data.profile?.nickname);
  set("profile-title", data.profile?.title);
  set("profile-bio", data.profile?.bio);

  const c = data.profile?.contact || {};

  set("contact-email", c.email);
  set("contact-phone", c.phone);
  set("contact-location", c.location);
  set("contact-website", c.website);

  // RIGHT SIDE SAFE RENDER
  const exp = data.experience || [];
  document.getElementById("experience-timeline").innerHTML =
    exp.map(e => `<div><h3>${e.role}</h3><p>${e.company}</p ></div>`).join("");

  const edu = data.education || [];
  document.getElementById("education-timeline").innerHTML =
    edu.map(e => `<div><h3>${e.degree}</h3><p>${e.institution}</p ></div>`).join("");

  const skills = [
    ...(data.skills?.frontend || []),
    ...(data.skills?.backend || []),
    ...(data.skills?.tools || [])
  ];

  document.getElementById("skills-grid").innerHTML =
    skills.map(s => `<div>${s.name} - ${s.level}%</div>`).join("");

  const projects = data.projects || [];
  document.getElementById("projects-grid").innerHTML =
    projects.map(p => `<div><h3>${p.title}</h3></div>`).join("");

  console.log("✅ render done");
});
