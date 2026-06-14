document.addEventListener("DOMContentLoaded", () => {

  const data = window.resumeData;

  document.getElementById("profile-name").textContent =
    data.profile.name;

  document.getElementById("profile-title").textContent =
    data.profile.title;

  document.getElementById("profile-bio").textContent =
    data.profile.bio;

  document.getElementById("contact-email").textContent =
    data.profile.contact.email;

  document.getElementById("contact-phone").textContent =
    data.profile.contact.phone;

  document.getElementById("contact-location").textContent =
    data.profile.contact.location;

  document.getElementById("about-text").textContent =
    data.about;

  document.getElementById("experience-timeline").innerHTML =
    data.experience.map(item =>
      `<div><h3>${item.role}</h3><p>${item.company}</p></div>`
    ).join("");

  document.getElementById("education-timeline").innerHTML =
    data.education.map(item =>
      `<div><h3>${item.degree}</h3><p>${item.institution}</p></div>`
    ).join("");

  document.getElementById("skills-grid").innerHTML =
    data.skills.frontend.map(item =>
      `<span>${item.name}</span><br>`
    ).join("");

  document.getElementById("projects-grid").innerHTML =
    data.projects.map(item =>
      `<div>${item.title}</div>`
    ).join("");
});
