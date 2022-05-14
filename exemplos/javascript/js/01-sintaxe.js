// ctrl ; (comentário de uma linha)
/* shift alt a (comentário
de várias linhas) */

// Comando de saída
console.log("Olá JavaScript!");

/*  Variáveis e constantes
var -> variável de escopo global (NÃO É RECOMENDÁVEL)
let -> variável de escopo global ou de bloco
const -> constante de escopo global ou de bloco */

const nome = "Tiago";
var escola = "Impacta";
let ano = 2022;

console.log(nome);
console.log(escola);
console.log(ano);

console.log(nome, escola, ano);

/* O aluno Tiago está estudando na Impacta
neste ano de 2022. */

/* CONCATENAÇÃO (tradicional) */
console.log(
    "O aluno "+nome+" está estudando na "+escola+" neste ano de "+ano
);

/* TEMPLATE LITERAL/STRING (moderno) */
console.log(
    `O aluno ${nome} está estudando na ${escola} neste ano de ${ano}`
);