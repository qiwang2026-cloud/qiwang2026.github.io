document.addEventListener("DOMContentLoaded", () => {

  const data = window.resumeData;

  if (!data) {
    console.error("NO DATA LOADED");
    return;
  }

  const el = (id) => document.getElementById(id);

  // LEFT SIDE
  if (el("profile-name")) el("profile-name").innerText = data.profile?.name || "";
  if (el("profile-nickname")) el("profile-nickname").innerText = data.profile?.nickname || "";
  if (el("profile-title")) el("profile-title").innerText = data.profile?.title || "";
  if (el("profile-bio")) el("profile-bio").innerText = data.profile?.bio || "";

  const c = data.profile?.contact || {};
  if (el("contact-email")) el("contact-email").innerText = c.email || "";
  if (el("contact-phone")) el("contact-phone").innerText = c.phone || "";
  if (el("contact-location")) el("contact-location").innerText = c.location || "";
  if (el("contact-website")) el("contact-website").innerText = c.website || "";

  // RIGHT SIDE (SAFE)
  const exp = data.experience || [];
  const expBox = el("experience-timeline");
  if (expBox) {
    expBox.innerHTML = exp.map(i =>
      `<div><h3>${i.role}</h3><p>${i.company}</p ></div>`
    ).join("");
  }

  const edu = data.education || [];
  const eduBox = el("education-timeline");
  if (eduBox) {
    eduBox.innerHTML = edu.map(i =>
      `<div><h3>${i.degree}</h3></div>`
    ).join("");
  }

  const skills = [
    ...(data.skills?.frontend || []),
    ...(data.skills?.backend || []),
    ...(data.skills?.tools || [])
  ];

  const skillBox = el("skills-grid");
  if (skillBox) {
    skillBox.innerHTML = skills.map(i =>
      `<div>${i.name || ""}</div>`
    ).join("");
  }

  const proj = data.projects || [];
  const projBox = el("projects-grid");
  if (projBox) {
    projBox.innerHTML = proj.map(i =>
      `<div><h3>${i.title}</h3></div>`
    ).join("");
  }

  console.log("OK LOADED");
});
