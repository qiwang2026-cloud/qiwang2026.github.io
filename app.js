document.addEventListener("DOMContentLoaded", () => {
  const data = window.resumeData || {};

  // 如果数据没加载，直接提示（防止 silent fail）
  if (!window.resumeData) {
    console.error("resumeData not found. Check data.js loading order.");
    return;
  }

  // =====================
  // PROFILE
  // =====================
  const setText = (id, value) => {
    const el = document.querySelector(id);
    if (el) el.innerText = value || "";
  };

  setText("#profile-name", data.profile?.name);
  setText("#profile-nickname", data.profile?.nickname);
  setText("#profile-title", data.profile?.title);
  setText("#profile-bio", data.profile?.bio);

  // =====================
  // CONTACT
  // =====================
  const setAttr = (id, attr, value) => {
    const el = document.querySelector(id);
    if (el && value) el.setAttribute(attr, value);
  };

  setText("#contact-email", data.profile?.contact?.email);
  setText("#contact-phone", data.profile?.contact?.phone);
  setText("#contact-location", data.profile?.contact?.location);

  setAttr("#contact-email", "href", `mailto:${data.profile?.contact?.email || ""}`);
  setAttr("#contact-phone", "href", `tel:${data.profile?.contact?.phone || ""}`);
  setAttr("#contact-website", "href", data.profile?.contact?.website);
  setAttr("#contact-github", "href", data.profile?.contact?.github);
  setAttr("#contact-linkedin", "href", data.profile?.contact?.linkedin);

  setText("#contact-website", data.profile?.contact?.website);

  // =====================
  // ABOUT
  // =====================
  const about = document.querySelector("#about-text");
  if (about) about.innerText = data.profile?.bio || "";

  // =====================
  // EXPERIENCE
  // =====================
  const experience = data.experience || [];
  const expEl = document.querySelector("#experience-timeline");

  if (expEl) {
    expEl.innerHTML = experience
      .map(item => `
        <div class="card reveal">
          <h3>${item.role || ""}</h3>
          <p>${item.company || ""} | ${item.duration || ""}</p >
          <p style="opacity:0.7">${item.description || ""}</p >
        </div>
      `)
      .join("");
  }

  // =====================
  // EDUCATION
  // =====================
  const education = data.education || [];
  const eduEl = document.querySelector("#education-timeline");

  if (eduEl) {
    eduEl.innerHTML = education
      .map(item => `
        <div class="card reveal">
          <h3>${item.degree || ""}</h3>
          <p>${item.institution || ""}</p >
          <p style="opacity:0.7">${item.description || ""}</p >
        </div>
      `)
      .join("");
  }

  // =====================
  // SKILLS
  // =====================
  const skills =
    [
      ...(data.skills?.frontend || []),
      ...(data.skills?.backend || []),
      ...(data.skills?.tools || [])
    ];

  const skillsEl = document.querySelector("#skills-grid");

  if (skillsEl) {
    skillsEl.innerHTML = skills
      .map(s => `
        <div class="card reveal">
          <div style="display:flex;justify-content:space-between;">
            <span>${s.name || ""}</span>
            <span>${s.level || 0}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" data-level="${s.level || 0}"></div>
          </div>
        </div>
      `)
      .join("");
  }

  // =====================
  // PROJECTS
  // =====================
  const projects = data.projects || [];
  const projEl = document.querySelector("#projects-grid");

  if (projEl) {
    projEl.innerHTML = projects
      .map(p => `
        <div class="card reveal">
          <h3>${p.title || ""}</h3>
          <p style="opacity:0.7">${p.description || ""}</p >
          <div>
            ${(p.tags || []).map(t => `<span>#${t} </span>`).join("")}
          </div>
        </div>
      `)
      .join("");
  }

  // =====================
  // SKILL ANIMATION
  // =====================
  setTimeout(() => {
    document.querySelectorAll(".skill-fill").forEach(el => {
      el.style.width = el.dataset.level + "%";
    });
  }, 400);

  // =====================
  // SCROLL REVEAL
  // =====================
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

  // =====================
  // MOUSE GLOW
  // =====================
  const glow = document.createElement("div");
  glow.className = "glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  console.log("Portfolio loaded successfully 🚀");
});
