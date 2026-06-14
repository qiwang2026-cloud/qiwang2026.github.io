document.addEventListener("DOMContentLoaded", () => {
  const data = window.resumeData;
  if (!data) return;

  // ===== HERO =====
  document.querySelector("#name").innerText = data.profile.name;
  document.querySelector("#title").innerText = data.profile.title;
  document.querySelector("#bio").innerText = data.profile.bio;

  // ===== SKILLS =====
  const skillsEl = document.querySelector("#skills");

  const skills = [
    ...data.skills.frontend,
    ...data.skills.backend,
    ...data.skills.tools
  ];

  skillsEl.innerHTML = skills
    .map(
      s => `
      <div class="card reveal">
        <div style="display:flex;justify-content:space-between;">
          <span>${s.name}</span>
          <span>${s.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" data-level="${s.level}"></div>
        </div>
      </div>
    `
    )
    .join("");

  // ===== PROJECTS =====
  const projectEl = document.querySelector("#projects");

  projectEl.innerHTML = data.projects
    .map(
      p => `
      <div class="card reveal">
        <h3>${p.title}</h3>
        <p style="opacity:0.7">${p.description}</p >
        <div>
          ${p.tags.map(t => `<span>#${t} </span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");

  // ===== ANIMATION =====
  setTimeout(() => {
    document.querySelectorAll(".skill-fill").forEach(el => {
      el.style.width = el.dataset.level + "%";
    });
  }, 400);

  // ===== SCROLL REVEAL =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

  // ===== MOUSE GLOW =====
  const glow = document.createElement("div");
  glow.className = "glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
});
