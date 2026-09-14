const nomeDoce = "Paçoca";
const preco = 1.5;
const disponivel = true;

console.log(nomeDoce, preco, disponivel);

document.getElementById("resultado")
.textContent =
`${nomeDoce} custa R$` +
` ${preco.toFixed(2)} - disponível:` +
` ${disponivel}`;