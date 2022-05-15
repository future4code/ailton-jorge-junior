// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Qual a altura do retângulo ?"));
  const largura = Number(prompt("Qual a largura do retângulo ?"));

  console.log(altura*largura);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o anos atual."));
  const anoNascimento = Number(prompt("Digite o anos que você nasceu."));

  console.log(anoAtual-anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(prompt("Qual o seu peso?"));
  altura = Number(prompt("Qual a sua altura?"));
  const resultado = peso / (altura*altura);

  return resultado.toFixed(1);

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Qual o seu nome?");
  const idade = prompt("Qual a sua idade?");
  const email = prompt("Qual o seu email?")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é "+email+".");

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite a sua cor favorita.");
  const cor2 = prompt("Digite outra cor favorita.");
  const cor3 = prompt("Digite mais uma cor favorita.");
  const cores = [cor1,cor2,cor3];
  
  console.log(cores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt("Digite uma frase.");

  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = prompt("Qual o valor do teatro?");
  valorIngresso = prompt("Qual o valor do ingresso?");

  return custo/valorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Digite uma palavra.");
  string2 = prompt("Digite outra palavra.");
 
  return string1.lenght === string1.lenght;
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array [0] = prompt("Digite uma palavra");
  array [1] = prompt("Digite outra palavra");
  array [2] = prompt("Digite mais uma palavra");

  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array [0] = prompt("Digite uma palavra");
  array [1] = prompt("Digite outra palavra");
  array [2] = prompt("Digite mais uma palavra");

  return array[2];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array [0] = prompt("Digite uma palavra");
  array [1] = prompt("Digite outra palavra");
  array [2] = prompt("Digite mais uma palavra");

  array[4] = array[3];
  array[3] = array[0];
  array[0] = array[4];

  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Digite uma palavra.");
  string2 = prompt("Digite outra palavra.");

  return string1.toUpperCase() === string2.toUpperCase();

}
//################ O meu navegador estava bugando a correção automatica, fiz pelo console.

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}