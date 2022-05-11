// ### Exercício 01

// let array
// console.log('a. ', array)  # imprime undefined

//  array = null
//  console.log('b. ', array) # imprime null

//  array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//  console.log('c. ', array.length) # imprime 11 numero de itens do array

// let i = 0
// console.log('d. ', array[i]) # imprime 3 o primeiro elemento do array

//  array[i+1] = 19
//  console.log('e. ', array)  # da erro o i valor de i é null não da para somar

// const valor = array[i+6]
// console.log('f. ', valor) # da erro o i valor de i é null não da para somar


// ### Exercício 02

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) # SUBI NUM ÔNIBUS EM MIRROCOS 27

// ### Exercício de escrita de código 01

const nome = prompt("Qual o seu nome?");
const email = prompt("Qual o seu email?");

console.log ("o email", email, "foi cadastrado com sucesso.");
console.log("Seja bem-vinda(o)", nome);

// ### Exercício de escrita de código 02

const comidas = ["coxinha", "macarrão","empada", "strogonoff","batata frita" ];
console.log(comidas);
console.log("Essas são as minhas comidas favoritas");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const comidaUsuario = prompt("Qual a sua comida preferida?");
comidas[1] = comidaUsuario;
console.log(comidas[1]);

// ### Exercício de escrita de código 03

let listaDeTarefas = [];
listaDeTarefas[0] = prompt("Escreva uma tarefa que você realiza no dia");
listaDeTarefas[1] = prompt("Escreva outra tarefa que você realiza no dia");
listaDeTarefas[2] = prompt("Escreva mais uma tarefa que você realiza no dia");
console.log(listaDeTarefas)
const removerTarefa = prompt("Qual das tarefas voçê ja realizou a 1 , a 2 ou a 3");
const remover = Number(removerTarefa);
listaDeTarefas.splice(remover);
console.log(listaDeTarefas)