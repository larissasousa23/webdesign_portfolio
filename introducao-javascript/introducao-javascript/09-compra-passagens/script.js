const nomeAluno = "Ayumi"
const mediaFinal = 4.2;
let situacao;
if (mediaFinal >= 7) {
    situacao = "Aprovado"
} else {
    situacao = "reprovado";
}
document.getElementById("resultado").textContent=
`${nomeAluno}- média ${mediaFinal.toFixed(1)}: ${situacao}`;