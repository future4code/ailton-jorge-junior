// ### Exercício 01. 

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) Será impresso false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) # Será impresso false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) # Será impresso true

// console.log("d. ", typeof resultado) # Será impresso boolean

// ### Exercício 02

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero # quando se pega valores do pronpt 
// eles são do tipo string não da para fazer calculos matematicos

// console.log(soma) # Será impresso os valores digitados de forma concatenads já que são textos

//20### Exercício 03

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
numero01 = Number(primeiroNumero)
numero02 = Number(segundoNumero)
const soma = numero01 + numero02

console.log(soma)