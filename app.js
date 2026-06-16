function calculateProfit(){

let cost =
Number(document.getElementById("cost").value);

let shipping =
Number(document.getElementById("shipping").value);

let price =
Number(document.getElementById("price").value);

let profit =
price - cost - shipping;

let margin =
((profit/price)*100).toFixed(1);

document.getElementById(
"profitResult"
).innerHTML =
`Profit: $${profit}<br>Margin: ${margin}%`;

}

function convertCurrency(){

let usd =
Number(document.getElementById("usd").value);

let krw =
(usd*1380).toLocaleString();

document.getElementById(
"currencyResult"
).innerHTML =
`${usd} USD ≈ ${krw} KRW`;

}

function calculateInventory(){

let unitPrice =
Number(document.getElementById("unitPrice").value);

let quantity =
Number(document.getElementById("quantity").value);

let value =
unitPrice * quantity;

document.getElementById(
"inventoryResult"
).innerHTML =
`Inventory Value: $${value}`;

}
