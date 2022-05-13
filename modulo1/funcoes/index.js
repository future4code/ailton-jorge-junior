// #### Exercícios de interpretação de código 01

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))  imprime o a multivplicação de 2 * 5
// console.log(minhaFuncao(10)) imprime o a multivplicação de 10 * 5

// se tirar o console.log nada vai ser retornado.

// #### Exercícios de interpretação de código 02

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {  a função transforma o testo em minusculo e testa se a palavra cenoura esta no texto
// 	return texto.toLowerCase().includes("cenoura") i true ii true iii false
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// console.log(outraFuncao)

// ### Exercícios de escrita de código 01

// ######  A  ######

function imprimir(){
    const texto = ("Eu sou Jorge, tenho 44 anos, moro em São Mateus e sou estudante.");
   console.log(texto);
}
imprimir();

// ######  B  ######

function informacao(nome,idade,cidade,profissao){
    nome = prompt("Qual o seu nome ?");
    idade = prompt("Qual a sua idade ?");
    cidade = prompt("Qua a cidade que você mora ?");
    profissao = prompt("Qual a sua profissão ?");

    const resposta = console.log("Eu sou " + nome + " tenho " + idade +" anos, moro em "+ cidade + " e sou " + profissao);
    return (resposta);

}

informacao();

// ### Exercícios de escrita de código 02

// ######  A  ######

function soma(num1,num2){
    num1 = prompt ("Digite um numero");
    num2 = prompt ("Digite outro numero");
    const numero01 = Number(num1);
    const numero02 = Number(num2);
    const resultado = numero01 + numero02; 
    return(console.log("A soma dos dois numero é " + resultado));

}

soma();

// ######  B  ######

function maior(num1,num2){
    num1 = prompt ("Digite um numero");
    num2 = prompt ("Digite outro numero");
    const numero01 = Number(num1);
    const numero02 = Number(num2);
    const resultado = numero01 >= numero02;
    return(console.log(resultado));
}

maior();

// ######  C  ######

function pares(num){
    num = prompt ("Digite um numero");
    const numero = Number(num);
    const resultado = numero % 2 === 0;
    return(console.log(resultado));
}
pares();

// ######  D  ######

function tamanhoString(frase){
    frase = prompt("Escreva uma frase.");
    const resultado1 = frase.length;
    const resultado2 = frase.toUpperCase();

    return (console.log("A frase " + resultado2 + " tem " + resultado1 + " caracteres. "));
}

tamanhoString();


// ### Exercícios de escrita de código 03

function calculadora(num1,num2){
    num1 = prompt ("Digite um numero");
    num2 = prompt ("Digite outro numero");
    const numero01 = Number(num1);
    const numero02 = Number(num2);
    const soma = numero01 + numero02; 
    const subtracao = numero01 - numero02;
    const divisao = numero01 / numero02; 
    const multiplicacao = numero01 * numero02; 

    return(console.log("Números inseridos: " + numero01 + "e" + numero02 + "\n" +
    "Soma : " + soma+ "\n" + 
    "Diferença : " + subtracao + "\n" +
    "Multiplicação : " + multiplicacao + "\n" +
    "Divisão :" + divisao ))
    
}

calculadora();