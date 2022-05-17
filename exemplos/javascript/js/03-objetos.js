/* Objetos: estrutura de dados
não-indexados. Dados são formados
por pares de chave/valor. */

// Exemplo 1: objeto simples
let livro = {
    // chave : valor (propriedade)
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
};

console.log(livro);

console.log(livro.titulo);
console.log(livro.ano);


// Exemplo 2: objeto com array
let pessoa = {
    nome: "Jon Oliva",
    idade: 65,
    sexo: "masculino",
    telefones: ["11-222-333", "11-9555-7777"],
    medidas: {
        peso: 100,
        altura: 1.75
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.telefones[1]);
console.log(pessoa.medidas.altura);

/* Exercício:
1) Crie um array chamado livros, contendo
3 objetos/livro, cada um com um título e um autor 

2) Mostre no console o titulo e o autor de pelo menos 1 dos livros. */

let livros = [
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    },
    {
        titulo: "Game Of Thrones",
        autor: "George R.R. Martin"
    },
    {
        titulo: "Senhor dos Anéis",
        autor: "Tolkien"
    }
];

console.log(livros[1].titulo);
console.log(livros[1].autor);

console.log(livros[0].autor, livros[0].titulo);



