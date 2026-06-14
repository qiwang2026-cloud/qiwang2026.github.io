document.addEventListener("DOMContentLoaded", () => {

if (!window.data) return;

// ===== basic =====
document.getElementById("name").innerText = data.name;
document.getElementById("title").innerText = data.title;
document.getElementById("bio").innerText = data.bio;
document.getElementById("contact").innerText = data.contact;

// ===== render =====
const expBox = document.getElementById("experience");
const eduBox = document.getElementById("education");
const skillBox = document.getElementById("skills");
const projectBox = document.getElementById("projects");

// Experience clickable
expBox.innerHTML = data.experience.map((item, i) =>
  `<div class="card click" data-type="exp" data-index="${i}">
    ${item.title}
  </div>`
).join("");

// Education
eduBox.innerHTML = data.education.map((item, i) =>
  `<div class="card click" data-type="edu" data-index="${i}">
    ${item.title}
  </div>`
).join("");

// Skills with bar
skillBox.innerHTML = data.skills.map(item =>
  `<div class="skill">
    <span>${item.name}</span>
    <div class="bar"><div style="width:${item.level}%"></div></div>
  </div>`
).join("");

// Projects clickable
projectBox.innerHTML = data.projects.map((item, i) =>
  `<div class="card click" data-type="proj" data-index="${i}">
    ${item.title}
  </div>`
).join("");

// ===== modal =====
const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");

document.querySelectorAll(".click").forEach(el => {
  el.addEventListener("click", () => {
    const type = el.dataset.type;
    const index = el.dataset.index;

    let item;

    if (type === "exp") item = data.experience[index];
    if (type === "edu") item = data.education[index];
    if (type === "proj") item = data.projects[index];

    title.innerText = item.title;
    text.innerText = item.detail;

    modal.classList.remove("hidden");
  });
});

// close modal
document.getElementById("close").onclick = () => {
  modal.classList.add("hidden");
};

// ===== scroll animation =====
const items = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
}, { threshold: 0.15 });

items.forEach(i => obs.observe(i));

});
