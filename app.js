console.log("APP JS LOADED");
console.log(window.resumeData);
document.addEventListener("DOMContentLoaded", () => {
  const data = window.resumeData;
  if (!data) {
    console.error("resumeData not found");
    return;
  }

  // =====================
  // PROFILE
  // =====================
  const set = (id, value) => {
    const el = document.querySelector(id);
    if (el) el.innerText = value || "";
  };

  set("#profile-name", data.profile.name);
  set("#profile-nickname", data.profile.nickname);
  set("#profile-title", data.profile.title);
  set("#profile-bio", data.profile.bio);

  // contact
  const setHref = (id, value) => {
    const el = document.querySelector(id);
    if (el && value) el.href = value;
  };

  set("#contact-email", data.profile.contact.email);
  set("#contact-phone", data.profile.contact.phone);
  set("#contact-location", data.profile.contact.location);
  setHref("#contact-website", data.profile.contact.website);
  setHref("#contact-github", data.profile.contact.github);
  setHref("#contact-linkedin", data.profile.contact.linkedin);

  // =====================
  // ABOUT
  // =====================
  const about = document.querySelector("#about-text");
  if (about) about.innerText = data.profile.bio;

  // =====================
  // EXPERIENCE
  // =====================
  const exp = document.querySelector("#experience-timeline");

  if (exp) {
    exp.innerHTML = data.experience
      .map(item => `
        <div class="card reveal">
          <h3>${item.role}</h3>
          <p>${item.company} | ${item.duration}</p >
          <p style="opacity:0.7">${item.description}</p >
        </div>
      `)
      .join("");
  }

  // =====================
  // EDUCATION
  // =====================
  const edu = document.querySelector("#education-timeline");

  if (edu) {
    edu.innerHTML = data.education
      .map(e => `
        <div class="card reveal">
          <h3>${e.degree}</h3>
          <p>${e.institution}</p >
          <p style="opacity:0.7">${e.description}</p >
        </div>
      `)
      .join("");
  }

  // =====================
  // SKILLS
  // =====================
  const skillsGrid = document.querySelector("#skills-grid");

  const skills = [
    ...data.skills.frontend,
    ...data.skills.backend,
    ...data.skills.tools
  ];

  if (skillsGrid) {
    skillsGrid.innerHTML = skills
      .map(s => `
        <div class="card reveal">
          <div style="display:flex;justify-content:space-between;">
            <span>${s.name}</span>
            <span>${s.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" data-level="${s.level}"></div>
          </div>
        </div>
      `)
      .join("");
  }

  // =====================
  // PROJECTS
  // =====================
  const projectsGrid = document.querySelector("#projects-grid");

  if (projectsGrid) {
    projectsGrid.innerHTML = data.projects
      .map(p => `
        <div class="card reveal">
          <h3>${p.title}</h3>
          <p style="opacity:0.7">${p.description}</p >
          <div>
            ${p.tags.map(t => `<span>#${t} </span>`).join("")}
          </div>
        </div>
      `)
      .join("");
  }

  // =====================
  // ANIMATION
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
});
