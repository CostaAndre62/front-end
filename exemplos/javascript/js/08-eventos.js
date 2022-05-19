/* const pagina = document.querySelector("body");
const titulo = document.querySelector("h1");
const msg = document.querySelector("#mensagem"); */

/* Exemplo 1: */
// Ouvinte/Monitor de Eventos
/* titulo.addEventListener("click", function(){
    pagina.style.backgroundColor = 'lightgreen';
    msg.textContent = "Cor alterada!";
}); */

const pagina = document.querySelector("body");
const titulo  =  document.querySelector("h1");
const msg = document.querySelector("#mensagem");

// Ouvinte/Monitor de Eventos
titulo.addEventListener("click", function(){
      pagina.style.backgroundColor = 'lightgreen' ;
      msg.textContent = "Cor alterada!" ;
});

/* Exemplo 2: modo noturno */
const botao = document.querySelector('#noturno');
botao.addEventListener("click", function(){
    pagina.classList.toggle('modo-noturno');

    if (botao.textContent == 'Ativar') {
        botao.textContent = 'Desativar';
    } else {
        botao.textContent = 'Ativar';
    }
});



/* Exemplo 3: simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

formulario.addEventListener("submit", function(event){
    // Anulando o comportamento padrão de redirecionamento
    event.preventDefault();
    
    // Capturando o que foi digitado
    let nome = campoNome.value;
    let nota1 = campoNota1.value;
    let nota2 = campoNota2.value;

    console.log(nome, nota1, nota2);

    // Limpar os campos do formulário
    formulario.reset();
});


