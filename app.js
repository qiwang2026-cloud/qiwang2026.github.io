const skillsContainer =
document.getElementById("skills-container");

const projectsContainer =
document.getElementById("projects-container");

const skillGrid =
document.createElement("div");

skillGrid.className =
"skill-grid";

skills.forEach(skill=>{

    const item =
    document.createElement("div");

    item.className =
    "skill";

    item.innerHTML =
    `<h3>${skill}</h3>`;

    skillGrid.appendChild(item);

});

skillsContainer.appendChild(skillGrid);

const projectGrid =
document.createElement("div");

projectGrid.className =
"project-grid";

projects.forEach(project=>{

    const item =
    document.createElement("div");

    item.className =
    "project";

    item.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectGrid.appendChild(item);

});

projectsContainer.appendChild(projectGrid);
