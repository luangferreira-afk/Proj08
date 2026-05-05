let valorCompra = parseFloat(prompt("Valor da compra:"));
let regiao = prompt("Região: 1-Sul, 2-Sudeste, 3-Outras");
let frete = 0;

if (valorCompra <= 250) {
    if (regiao === "2") frete = 10;
    else if (regiao === "1") frete = 20;
    else frete = 30;
}

let totalFinal = valorCompra + frete;
console.log("Valor da compra: R$ " + valorCompra.toFixed(2));
console.log("Frete: R$ " + frete.toFixed(2));
console.log("Total: R$ " + totalFinal.toFixed(2));