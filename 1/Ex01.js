let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
let formaPagamento = prompt("Escolha: 1-PIX, 2-Cartão, 3-Financiamento");
let valorFinal, parcelas;

if (formaPagamento === "1") {
    valorFinal = valorCarro * 0.85; // 15% de desconto
    console.log("Valor final (PIX): R$ " + valorFinal.toFixed(2));
} else if (formaPagamento === "2") {
    valorFinal = valorCarro * 1.05; // 5% de juros
    let numParcelas = parseInt(prompt("Em quantas vezes (até 24x)?"));
    parcelas = valorFinal / numParcelas;
    console.log("Total: R$ " + valorFinal.toFixed(2) + " em " + numParcelas + "x de R$ " + parcelas.toFixed(2));
} else if (formaPagamento === "3") {
    valorFinal = valorCarro * 1.20; // 20% de juros
    let numParcelas = parseInt(prompt("Em quantas vezes (até 48x)?"));
    parcelas = valorFinal / numParcelas;
    console.log("Total: R$ " + valorFinal.toFixed(2) + " em " + numParcelas + "x de R$ " + parcelas.toFixed(2));
}