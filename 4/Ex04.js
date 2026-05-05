let salario = parseFloat(prompt("Informe seu salário:"));
let parcelaDesejada = parseFloat(prompt("Valor da parcela desejada:"));

if (parcelaDesejada > (salario * 0.30)) {
    console.log("Empréstimo Negado: Parcela muito alta.");
} else {
    console.log("Empréstimo Pré-aprovado!");
}