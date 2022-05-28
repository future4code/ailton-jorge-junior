// Exercícios de interpretação de código 01


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array) 
//   }) ####vai imprimir o condeudo dos 3 objetos usuario com o indice


// Exercícios de interpretação de código 02


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB) // ####vai imprimir os nomes dos usuarios

// Exercícios de interpretação de código 03


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC) #### vai ser impresso os itens diferentes do apelido Chijo

// Exercícios de escrita de código 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomePetes = pets.map((item,index,array) => {
    return item.nome
 })
console.log(nomePetes)

const salsicha = pets.filter((item) => {
         return item.raca === "Salsicha"
      }).map((pets) => {
          return pets.nome
      })
console.log(salsicha)

const desconto = pets.filter((item) => {
    return item.raca === 'Poodle'
}).map((pets) => {
    return (`Você ganhou um cupom de desconto de 10% para tosa o/a ${pets.nome}`)
         
})

 console.log (desconto)

 // Exercícios de escrita de código 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const nomeProdutos = produtos.map((item) => {
        return item.nome
    })
    console.log(nomeProdutos)
const produtoDesconto = produtos.filter((item) => {
        return item.preco = item.preco - (item.preco*0.05)
    })
    console.log(produtoDesconto)


const nomeBebidas = produtos.filter((item) => {
        return item.categoria === 'Bebidas'
    }).map((produtos) => {
        return produtos.nome
    })
    console.log(nomeBebidas)

  
const nomeProdutosYpe = produtos.filter((item) => {
        return item.nome.includes('Ypê')
    }).map((produtos) => {
        return produtos.nome
    })
    console.log(nomeProdutosYpe)

const compreYpe = produtos.filter((item) => {
    return item.nome.includes('Ypê')
}).map((produtos) => {
    return (`Compre ${produtos.nome} por ${produtos.preco}`)
         
})

 console.log (compreYpe)



