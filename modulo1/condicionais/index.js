//#####Exercícios de interpretação de código 01

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.") 
// } else {
//   console.log("Não passou no teste.")
// } #############################################
//      Se passou no teste o numero é par senão e impar

//#####Exercícios de interpretação de código 02

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para passar o preço das frusta escolhidas
// b) O preço da fruta Maçã é R$ 2,25
// c) O preço da fruta Pêra é R$ 5 pq sem o break ele entra no default e preco =5

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) numero está recebendo um valor que o usúario passa do tupo number
// b) 10 escreve Esse número passou no teste -10 vai dar erro pq a varivel mensagem só recebe valor se if for true
// c) vai o variavel mensagem fica indefinida se o if for false

// ##### Exercícios de escrita de código 01

const idade = Number(prompt("Qual a sua idade?"))
if(idade >= 18){
    console.log('Você pode dirigir.')
}
else{
    console.log('Você ainda nao pode dirigir')
}

// ##### Exercícios de escrita de código 02


function turno(){
    const turnoDia = prompt('Qual o horário que você estuda? \n Digite M (matutino) ou V (Vespertino) ou N (Noturno).')
    if (turnoDia === 'M'){
        console.log("Bom Dia!")
    } 
    else if (turnoDia === 'V'){
        console.log('Boa Tarde')
    }
    else if (turnoDia === 'N' ){
        console.log('Boa Noite')
    }
    else{
        console.log('Valor inválido')
    }
}
turno()

// ##### Exercícios de escrita de código 03


let turnoDia = prompt("Qual o horário que você estuda? \n Digite M (matutino) ou V (Vespertino) ou N (Noturno).")
let saudacao
switch (turnoDia) {
  case "M":
    saudacao = "Bom Dia!"
    break;
  case "V":
    saudacao = 'Boa Tarde'
    break;
  case "N":
    saudacao = 'Boa Noite'
    break;
  default:
    saudacao = 'Valor inválido'
    break;
}
console.log(saudacao)


// ##### Exercícios de escrita de código 04

const preco = prompt('Qual o valor do ingresso ?')
const tipo = prompt('Qual o genero do filme ?')

function validaFilme(valor,genero){
    if (valor<15 && genero === 'fantasia'){
        console.log('Bom filme!')
    } else{
        console.log('Escolha outro filme:')
    }
    
}
validaFilme(preco,tipo)

// ######## Desafio 01


const preco = prompt('Qual o valor do ingresso ?')
const tipo = prompt('Qual o genero do filme ?')
const comida = prompt('Qual o lanchinho você vai querer ?')


function validaFilme(valor,genero,lanche){
    if (valor<15 && genero === 'fantasia'){
        console.log(`Bom filme! \nAproveite o seu ${lanche}`)
    } else{
        console.log('Escolha outro filme:')
    }
    
}
validaFilme(preco,tipo,comida)

// ######## Desafio 02
// Ccheguei até aqui mas ainda esta dando erro
function vendaIngreco(){
    const nome = prompt('Qual o seu nome ?')
    const tipoJogo = prompt('Qual o tipo de jogo ? \n Digite IN indica internacional e DO indica doméstico')
    const etapaJogo = prompt('Qual a etapa do jogo ? \n SF indica semi-final DT indica decisão de terceiro lugar e FI indica final')
    const categoriaJogo = prompt('Qual a categoria do jogo ? \nPode ser as opções 1, 2, 3 ou 4;')
    const quantidade = Number(prompt('Quantos ingressos você quer ?'))
    let tipo 
    let ingresso
    let etapaNome
    let cifrao

   
        if(tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 1){
        ingresso = 1980;
        etapaNome = 'Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 2){
        ingresso = 1320;
        etapaNome = 'Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 3){
        ingresso = 880;
        etapaNome = 'Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'FI' && categoriaJogo === 4){
        ingresso = 330;
        etapaNome = 'Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'
    }else if(tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 1){
        ingresso = 1320;
        etapaNome = 'Semi Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 2){
        ingresso = 880;
        etapaNome = 'Semi Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 3){
        ingresso = 550;
        etapaNome = 'Semi Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'SF' && categoriaJogo === 4){
        ingresso = 220;
        etapaNome = 'Semi Final'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'
    }
    else if(tipoJogo === 'IN' && etapaJogo === 'DT' && categoriaJogo === 1){
        ingresso = 660;
        etapaNome = '3º lugar'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && tapaJogo === 'DT' && categoriaJogo === 2){
        ingresso = 440;
        etapaNome = '3º lugar'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' &&etapaJogo === 'DT' && categoriaJogo === 3){
        ingresso = 330;
        etapaNome = '3º lugar'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'

    }else if(tipoJogo === 'IN' && etapaJogo === 'DT' && categoriaJogo === 4){
        ingresso = 170;
        etapaNome = '3º lugar'
        tipo = 4,1
        tipoNome = 'Internacional'
        cifrao = 'U$'
    }else if(tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 1){ //inicio nacional
        ingresso = 1980;
        etapaNome = 'Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 2){
        ingresso = 1320;
        etapaNome = 'Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 3){
        ingresso = 880;
        etapaNome = 'Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'FI' && categoriaJogo === 4){
        ingresso = 330;
        etapaNome = 'Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'
    }else if(tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 1){
        ingresso = 1320;
        etapaNome = 'Semi Final'
        tipo = 1
        tipoNome = 'Nacional'

    }else if(tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 2){
        ingresso = 880;
        etapaNome = 'Semi Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 3){
        ingresso = 550;
        etapaNome = 'Semi Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'SF' && categoriaJogo === 4){
        ingresso = 220;
        etapaNome = 'Semi Final'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'
    }
    else if (tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 1){
        ingresso = 660;
        etapaNome = '3º lugar'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 2){
        ingresso = 440;
        etapaNome = '3º lugar'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' &&etapaJogo === 'DT' && categoriaJogo === 3){
        ingresso = 330;
        etapaNome = '3º lugar'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'

    }else if(tipoJogo === 'DO' && etapaJogo === 'DT' && categoriaJogo === 4){
        ingresso = 170;
        etapaNome = '3º lugar'
        tipo = 1
        tipoNome = 'Nacional'
        cifrao = 'R$'
    }else{
        console.log('Valor da etapa ou categoria inválido')
    }
    
    console.log('---Dados da compra')
    console.log(`Nome do cliente: ${nome}`)
    console.log(`Tipo do jogo:` + tipoNome)
    console.log(`Etapa do jogo:${etapaNome}`)
    console.log(`Categoria:${categoriaJogo}`)
    console.log(`Quantidade de Ingressos: ${quantidade} ingressos `)
    console.log(`---Valores---`)
    console.log(`Valor do ingresso:  ${cifrao} `+ ingresso*tipo)
    console.log(`Valor total:  ${cifrao} ` + ingresso*quantidade*tipo)

}
 
vendaIngreco();