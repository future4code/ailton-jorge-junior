//##### Exercícios de interpretação de código 01

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor) vai somar 1+2+3+4 e vai imprimir 10

//##### Exercícios de interpretação de código 02

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	} vai entrar no if so quando for maior que 18
// } imprime 19, 21, 23, 25, 27, 30
// usa o metodo indexOf

//##### Exercícios de interpretação de código 03

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// } cada vez que entrar no for vai acrecentar masi um *

// quantidadePets = +prompt("Quantos petes você tem ?")

//############ Exercícios de escrita de código 01


if (quantidadePets === 0){
    console.log('Que pena! Você pode adotar um pet!')
}else if(quantidadePets > 0){
    let nomePet = []
    for (let i = 0; i < quantidadePets ;i++ ){
        nomePet[i] = prompt('Qual o nome do seu pet')
        console.log(`Os nomes dos seus ${i +1}º chama ${nomePet[i]}`)
    }
}else{
    console.log('Quantidades de pets informado inválido.')
}


// ############ Exercícios de escrita de código 02

arrayOriginal = [2,3,5,6,2,8,9,12,33,54,32]

function imprimir(array){
    for(i = 0; i < array.length; i++){
        console.log(`O ${i+1}º elemento do vetor é ${array[i]}`)
        
    }

}

imprimir(arrayOriginal);

arrayOriginal = [2,3,5,6,2,8,9,12,33,54,32]

function imprimirDivDez(array){
    for(i = 0; i < array.length; i++){
        console.log(`O ${i+1}º elemento do vetor dividido por 10 é ${array[i]/10}`)
    }

}


imprimirDivDez(arrayOriginal)


arrayOriginal = [2,3,5,6,2,8,9,12,33,54,32]

function imprimirNumerosPares(array){
    let novoArray = []
    let valor
    for(i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
        valor = array[i]
        novoArray = valor
        console.log(novoArray)
        }
                
    }
    console.log(novoArray)
}
imprimirNumerosPares(arrayOriginal)

imprimir(arrayOriginal);

arrayOriginal = [2,3,5,6,2,8,9,12,33,54,32]

function imprimirMaiorMenor(array){
    let maior = array[0]
    let menor = array[0]

    for(i = 0; i < array.length; i++){
        if (maior < array[i]) {
            maior = array[i]       
        }else if((menor > array[i] )){
            menor = array[i]     
        }
    }
    console.log(`O maior número do array é ${maior}. \nO menor número é ${menor}.`)
}

imprimirMaiorMenor(arrayOriginal)