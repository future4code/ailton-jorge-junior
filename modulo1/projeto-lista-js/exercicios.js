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
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
  altura = prompt("Digite a altura do retângulo");
  largura = prompt("Digite a largura do retâmgulo");
  const Altura = Number(altura);
  const Largura = Number(largura);
  const resultado = Altura * Largura;
  return (console.log(resultado));

}


// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  // implemente sua lógica aqui
  anoAtual  = Number(prompt("Digite o ano atual"));
  anoNascimento = Number(prompt("Digite o ano do seu nascimento"));

  return (console.log(anoAtual - anoNascimento));
  

}

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui
  peso = Number(prompt ("Digite o seu peso."));
  altura = Number(prompt("Digite a sua altura."));
  const resultado = peso / (altura*altura);
  const imcFinal = resultado.toFixed(1);

  return (console.log(imcFinal));
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  // implemente sua lógica aqui
  nome = prompt("Qual o seu nome");
  idade = prompt("Qual a sua idade.");
  email = prompt ("Qual o seu eamil.");
  
  return (console.log("Meu nome é " + nome + 
  ", tenho "  + idade+ " anos, e o meu email é "
  + email + "."))
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("Digite sua cor favorita.");
  cor2 = prompt("Digite outra cor favorita.");
  cor3 = prompt("Digite mais uma cor favorita.");
  const cores = [cor1,cor2,cor3];

  return (console.log(cores));
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string =prompt("Digite uma frase.");

  return (console.log(string.toUpperCase()));
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo  = Number(prompt("Qual o custo do teatro."));
  valorIngresso = Number(prompt("Qual o valor do ingresso."));

  return (console.log(custo / valorIngresso));
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 =prompt("Digite uma palavra.");
  string2 =prompt("Digite outra palavra.");
  const tamanho1 = string1.length;
  const tamanho2 = string2.length;

  return (console.log(tamanho1 === tamanho2))
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  array[0] = prompt("Digite uma palavra.");
  array[1] = prompt("Digite outra palavra.");
  array[2] = prompt("Digite mais uma palavra.");

  return (console.log(array[0]));
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array[0] = prompt("Digite uma palavra.");
  array[1] = prompt("Digite outra palavra.");
  array[2] = prompt("Digite mais uma palavra.");
  const ultimo = array.length -1 ;

  return (console.log(array[ultimo]));
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1  =prompt("Digite uma palavra.");
  string2  =prompt("Digite outra palavra.");
  const palavra1 = string1.toUpperCase();
  const palavra2 = string2.toUpperCase();

  return ((console.log(palavra1 === palavra2)));
  //Fiz o teste no console e funcionou mas na correção automatica esta dado erro.

}

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