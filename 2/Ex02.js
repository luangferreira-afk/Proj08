let valorPedido = parseFloat(prompt("Valor do pedido:"));
let brinde = "Nenhum";

if (valorPedido > 50) {
    let temCartao = prompt("Possui Cartão Fidelidade? (Sim/Não)").toLowerCase();
    if (temCartao === "sim") {
        valorPedido = valorPedido * 0.90; // 10% de desconto
    } else {
        brinde = "Cookie de brinde";
    }
}

console.log("Valor a pagar: R$ " + valorPedido.toFixed(2));
console.log("Brinde: " + brinde);