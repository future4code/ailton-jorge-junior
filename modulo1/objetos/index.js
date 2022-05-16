// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) Globo horrio: 14h


// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"} gato herda tudo de cachorro nome idade e raça

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} troca todas as letras 'a' por 'o'.

// console.log(cachorro) Juca 3 SRD
// console.log(gato) Juba 3 SRD
// console.log(tartaruga) Jubo 3 SRD

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) o valor false
// console.log(minhaFuncao(pessoa, "altura")) indefinido não existe a propriedade altura em pessoa

// Exercícios de escrita de código 01

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
    function apelidos(obj){
        return console.log(`Eu sou ${obj.nome}, mas pode me chamar de: 
        ${obj.apelidos[0]}, ${obj.apelidos[1]}, ou ${obj.apelidos[2]}`)
    }
apelidos(pessoa);

// Exercícios de escrita de código 02

const pessoa1 = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 const pessoa2 = {
     ...pessoa1,
     apelidos:["Nandica","Lindinha","Gracinha"]

 }
 
    function apelidos(obj){
        return console.log(`Eu sou ${obj.nome}, mas pode me chamar de: 
        ${obj.apelidos[0]}, ${obj.apelidos[1]}, ou ${obj.apelidos[2]}`)
    }
apelidos(pessoa2);

// Exercícios de escrita de código 03

let carrinho = [];
const fruta01 ={
    nome:"Mamão",
    disponibilidade:"true"
}
const fruta02 ={
    nome:"Manga",
    disponibilidade:"true"
}
const fruta03 ={
    nome:"Banana",
    disponibilidade:"true"
}
function encherCarrinho(objeto1,objeto2,objeto3){
    console.log(carrinho = [objeto1,objeto2,objeto3]);
}

encherCarrinho(fruta01,fruta02,fruta03)

// Desafio 01

function informacoesUsuario(){
    const usuario ={
    Nome: prompt("Qual o seu nome ?"),
    Profissao: prompt("Qual a sua profissão ?"),
    Idade: Number(prompt("Qual a sua idade ?"))
    }
    console.log(usuario)

}
informacoesUsuario();

// Desafio 02

const filme1={
    nome: "Java",
    anoLancamento: 2010
}
const filme2 = {
    nome: "C#",
    anoLancamento: 2010
}
function verificarFilme(obj1,obj2){
    teste01 = filme1.anoLancamento < filme2.anoLancamento;
    teste02 = filme1.anoLancamento === filme2.anoLancamento;

   return console.log(" O primeiro filme foi lançado antes do segundo? " + teste01 +"\n"
   +" O primeiro filme foi lançado no mesmo ano do segundo? " + teste02)
   
}
verificarFilme(filme1,filme2)

// Desafio 03

let carrinho = [];
const fruta01 ={
    nome:"Mamão",
    disponibilidade:"true"
}
const fruta02 ={
    nome:"Manga",
    disponibilidade:"true"
}
const fruta03 ={
    nome:"Banana",
    disponibilidade:"true"
}
function encherCarrinho(objeto1,objeto2,objeto3){
    console.log(carrinho = [objeto1,objeto2,objeto3]);
}
function verificarFruta(objeto){
  
    
    return console.log(objeto.nome, !objeto.disponibilidade)
}
encherCarrinho(fruta01,fruta02,fruta03)

verificarFruta(fruta01)