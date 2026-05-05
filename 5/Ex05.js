let idade = parseInt(prompt("Qual sua idade?"));
let estudante = prompt("É estudante? (sim/não)").toLowerCase();
let valorIngresso = 40;

if (idade < 12 || idade > 60 || estudante === "sim") {
    valorIngresso = 20;
}

console.log("Valor final do ingresso: R$ " + valorIngresso.toFixed(2));