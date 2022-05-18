/* Loops (Estruturas de Repetição)

while (enquanto)
do/while (faça/enquanto)
for (para) */

// while
/* let contador = 1;
while(contador <= 5){
    console.log(`Valor de contador: ${contador}`);
    contador++; // incremento
    // contador += 2;
} */


/* Nomes comuns para variáveis de controle
de loop: i, j ou k */

// do/while (SEMPRE IRÁ FUNCIONAR NO MÍNIMO 1X)
/* let i = 1; // variável de controle do loop
do {
    console.log(`Valor de i: ${i}`);
    i++;
} while( i <= 3 ) */

// for
// variavel de controle ; condição ; atualização
/* for( let i = 1; i <= 5; i++ ){
    console.log(`I vale ${i}`);
} */


/* Loops para acessar Arrays */
let bandas = ["Rush", "Pink Floyd", "Van Halen", "Yes", "Slayer", "Iron Maiden", "Genesis"];

for( let i = 0; i < bandas.length; i++ ){
    console.log(bandas[i]);
}

console.log("--------");

/* for/of (bom para arrays) */
console.log("for/of");
for(let banda of bandas){
    console.log(banda);
}

console.log("------");

/* for/in (bom para objetos) */
let pessoa = {
    nome: "Tiago",
    idade: 38
};

for(let dados in pessoa){
    console.log(`${dados} - ${pessoa[dados]}`);
    // console.log(pessoa[dados]);
}

































 

