const tituloFilme = "Afonsinha de volta pra casa";
const classificacaoMinima = 16;
const idadeEspectador = 18;
const podeAssistir = idadeEspectador >= classificacaoMinima;

console.log(podeAssistir);

document.getElementById("resultado").textContent =
  `${tituloFilme} (${classificacaoMinima} anos) - idade ${idadeEspectador}: pode assistir? ${podeAssistir}`;