/* Arrays (Vetores e Matrizes) 
Lista de dados na memória */

// Criando um array
let alunos = ["Ozzy", "Dio", "Gillan", "Hughes"];

// Analisando a estrutura
console.log(alunos);

console.log(alunos[1]); // Dio
console.log(alunos[0]); // Ozzy

/* Mini-exercícios:
1) Crie um novo array chamado filmes
2) Coloque 5 filmes de sua preferência dentro dele
3) Monte uma frase (qualquer texto) e mostre no meio dela o nome de pelo menos 2 filmes do array. */
let filmes = [
    "Senhor dos Anéis",
    "Interestellar",
    "Homem Aranha - Sem volta pra casa",
    "Doutor Estranho 2",
    "Guerra Mundial Z"
];

console.log(filmes);

console.log(  // template string ``
    `${filmes[0]} é a série de filmes que mais curto. Neste ano, assisti ${filmes[2]} e gostei bastante.`
);

// MATRIZ (array de duas ou mais dimensões)
let bandas = [
    // 0        1           2
    ["Rush", "Pink Floyd", "Dream Theater"], // 0

    ["Slayer", "Iron Maiden"],  // 1

    ["Deep Purple", "Black Sabbath"] // 2
];

console.log(bandas[0][1]); // Pink Floyd
console.log(bandas[1][0]); // Slayer







