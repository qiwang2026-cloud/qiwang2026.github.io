document.addEventListener("DOMContentLoaded", () => {
  const data = window.resumeData;

  if (!data) {
    console.error("resumeData not loaded");
    return;
  }

  const safe = (v) => v ?? "";

  const setText = (id, value) => {
    const el = document.querySelector(id);
    if (el) el.innerText = safe(value);
  };

  const setAttr = (id, attr, value) => {
    const el = document.querySelector(id);
    if (el && value) el.setAttribute(attr, value);
  };

  // ================= PROFILE =================
  setText("#profile-name", data.profile?.name);
  setText("#profile-nickname", data.profile?.nickname);
  setText("#profile-title", data.profile?.title);
  setText("#profile-bio", data.profile?.bio);

  const c = data.profile?.contact || {};

  setText("#contact-location", c.location);

  setAttr("#contact-email", "href", `mailto:${c.email}`);
  setAttr("#contact-phone", "href", `tel:${c.phone}`);
  setAttr("#contact-website", "href", c.website);
  setAttr("#contact-github", "href", c.github);
  setAttr("#contact-linkedin", "href", c.linkedin);

  setText("#contact-email", c.email);
  setText("#contact-phone", c.phone);
  setText("#contact-website", c.website);

  // ================= EXPERIENCE =================
  const experience = data.experience || [];
  const expEl = document.querySelector("#experience-timeline");

  if (expEl) {
    expEl.innerHTML = experience.map(e => `
      <div class="card reveal">
        <h3>${safe(e.role)}</h3>
        <p>${safe(e.company)} | ${safe(e.duration)}</p >
        <p style="opacity:0.7">${safe(e.description)}</p >
      </div>
    `).join("");
  }

  // ================= EDUCATION =================
  const education = data.education || [];
  const eduEl = document.querySelector("#education-timeline");

  if (eduEl) {
    eduEl.innerHTML = education.map(e => `
      <div class="card reveal">
        <h3>${safe(e.degree)}</h3>
        <p>${safe(e.institution)}</p >
        <p style="opacity:0.7">${safe(e.description)}</p >
      </div>
    `).join("");
  }

  // ================= SKILLS =================
  const skills = [
    ...(data.skills?.frontend || []),
    ...(data.skills?.backend || []),
    ...(data.skills?.tools || [])
  ];

  const skillsEl = document.querySelector("#skills-grid");

  if (skillsEl) {
    skillsEl.innerHTML = skills.map(s => `
      <div class="card reveal">
        <div style="display:flex;justify-content:space-between;">
          <span>${safe(s.name)}</span>
          <span>${safe(s.level)}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" data-level="${safe(s.level)}"></div>
        </div>
      </div>
    `).join("");
  }

  // ================= PROJECTS =================
  const projects = data.projects || [];
  const projEl = document.querySelector("#projects-grid");

  if (projEl) {
    projEl.innerHTML = projects.map(p => `
      <div class="card reveal">
        <h3>${safe(p.title)}</h3>
        <p style="opacity:0.7">${safe(p.description)}</p >
        <div>
          ${(p.tags || []).map(t => `<span>#${t}</span>`).join(" ")}
        </div>
      </div>
    `).join("");
  }

  // ================= ANIMATION =================
  setTimeout(() => {
    document.querySelectorAll(".skill-fill").forEach(el => {
      el.style.width = (el.dataset.level || 0) + "%";
    });
  }, 400);

  console.log("Stable portfolio loaded ✔");
});
