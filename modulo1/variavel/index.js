// ########## Exercícios de interpretação de código ###########

// let a = 10  
// let b = 10

// console.log(b) ###imprime o valor 10 que esta na variavel b.

// b = 5
// console.log(a, b) ### imprime o valor 10 que esta na variavel a e o valor 5 que esta na variavel b.

// let a = 10  
// let b = 20
// c = a  ### a variavel c recebe o valor que estava em a 10.
// b = c  ### a variavel b recebe o valor que estava em c 10.
// a = b  ### a variavel a recebe o valor que estava em b 10.

// console.log(a, b, c) ### Vai ser impresso 10 10 10

// let p = prompt("Quantas horas você trabalha por dia?") ### seria melhor usar horasTrabalhadas 
// let t = prompt("Quanto você recebe por dia?") ### seria mrlhor usar valorDia
// alert(`Voce recebe ${t/p} por hora`) ### vai imprimir valorDia dividido pela horasTrabalhadas

// ########## Exercícios de escrita de código ###########

// Exercício 01

let nome;
let idade;

console.log(typeof nome, typeof idade) // undefined undefined
// não foi atribuido valor de variavel por isso ficou com indefinida.

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade");
console.log(typeof nome, typeof idade) // agora as duas são string
console.log("Olá",nome,", você tem",idade,"anos");

// Exercício 02

let pergunta01;
let pergunta02;
let pergunta03;

pergunta01 = prompt("Java e javascript são a mesma coisa?");
pergunta02 = prompt("Uma constante pode ser declarada sem receber valor?");
pergunta03 = prompt("String é um tipo de variável?");

console.log("Java e javascript são a mesma coisa? -", pergunta01);
console.log("Uma constante pode ser declarada sem receber valor? -", pergunta02);
console.log("String é um tipo de variável? -", pergunta03);

// Exercício 03
let a = 10
let b = 25
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);