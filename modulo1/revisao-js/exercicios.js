// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort()
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
  const pares = array.filter((array) => array % 2 === 0)
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const pares = array.filter((array) => array % 2 === 0)
  return pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior =0;
  for (let i = 0; i< array.length; i++){
    if(maior < array(i)){
      maior = array(i)
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num1
  let diferenca 
  let maiorDivisivelPorMenor = false
  if (maiorNumero < num2){
    maiorNumero = num2
    maiorDivisivelPorMenor = (maiorNumero % num1 === 0)
    diferenca = maiorNumero - num1
  }else {
    maiorDivisivelPorMenor = (maiorNumero % num2 === 0)
  diferenca = maiorNumero - num2
  } 
 
  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = []
   for(let i = 0 ; i < n ; i++){
     pares[i] = i*2
   }
   return (pares)
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoC === ladoB){
    return console.log('Equilátero')
  }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC ){
    return console.log('Isósceles')
  }else{
     return console.log('Escaleno')
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let maior,menor,quasemaior,quasemenor

  for (let i = 0 ; i > array.length ; i++){
    if (maior < array(i)){
      maior === array(i)
    }else if(menor > array(i)){
      menor === array(i)
    }
    if (quasemaior < array(i) && maior !== array(i)){
      quasemaior = array(i)
    }else if (quasemenor > array(i) && menor !== array(i)){
      quasemenor = array(i)
    }
  }
  return quasemaior,quasemenor
}
 
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const producao = [{nome: 'O Diabo Veste Prada', ano: 2006,
  diretor: 'David Frankel', atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']}
]
  return `Venha assistir ao filme ${producao.nome}, de ${producao.ano} , dirigido por ${producao.diretor} e estrelado por ${producao.atores}`
 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}