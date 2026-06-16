const skillsContainer =
document.getElementById("skills-container");

const projectsContainer =
document.getElementById("projects-container");

const skillGrid =
document.createElement("div");

skillGrid.className = "skill-grid";

skills.forEach(skill => {

const item =
document.createElement("div");

item.className = "skill";

item.innerHTML =
`<h3>${skill}</h3>`;

skillGrid.appendChild(item);

});

skillsContainer.appendChild(skillGrid);

const projectGrid =
document.createElement("div");

projectGrid.className = "project-grid";

projects.forEach(project => {

const item =
document.createElement("div");

item.className = "project";

item.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>
`;

projectGrid.appendChild(item);

});

projectsContainer.appendChild(projectGrid);

function calculateProfit(){

const cost =
Number(document.getElementById("cost").value);

const shipping =
Number(document.getElementById("shipping").value);

const price =
Number(document.getElementById("price").value);

const totalCost =
cost + shipping;

const profit =
price - totalCost;

const margin =
((profit / price) * 100).toFixed(1);

document.getElementById("profitResult")
.innerHTML =
`Profit: $${profit}<br>Profit Margin: ${margin}%`;
}

function convertCurrency(){

const usd =
Number(document.getElementById("usd").value);

const rate = 1380;

const krw =
(usd * rate).toLocaleString();

document.getElementById("currencyResult")
.innerHTML =
`${usd} USD ≈ ${krw} KRW`;
}

function calculateInventory(){

const unitPrice =
Number(document.getElementById("unitPrice").value);

const quantity =
Number(document.getElementById("quantity").value);

const value =
unitPrice * quantity;

document.getElementById("inventoryResult")
.innerHTML =
`Inventory Value: $${value}`;
}
