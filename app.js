document.addEventListener("DOMContentLoaded", () => {

document.getElementById("name").innerText = data.name;
document.getElementById("title").innerText = data.title;
document.getElementById("bio").innerText = data.bio;

document.getElementById("experience").innerHTML =
data.experience.map(i => `<div class="item">${i}</div>`).join("");

document.getElementById("education").innerHTML =
data.education.map(i => `<div class="item">${i}</div>`).join("");

document.getElementById("skills").innerHTML =
data.skills.map(i => `<div class="item">${i}</div>`).join("");

document.getElementById("projects").innerHTML =
data.projects.map(i => `<div class="item">${i}</div>`).join("");

document.getElementById("contact").innerText = data.contact;

});
