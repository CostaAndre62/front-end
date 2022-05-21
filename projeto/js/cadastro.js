// Endereço da API json-server para CANDIDATOS
let urlCandidatos = "http://localhost:3000/candidatos";

// Selecionando os campos no HTML
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    // Montando um objeto com os dados do formulário
    let dados = {
        nome: campoNome.value,
        data: campoData.value,
        telefone: campoTelefone.value,
        email: campoEmail.value,

        // Instrução abaixo permite pegar o título da
        // vaga escolhida
        vaga: campoVaga.selectedOptions[0].textContent
    };

    console.log(dados);
});
