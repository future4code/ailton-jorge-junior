/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    if(confirm("Bem-vindo ao jogode Blackjack!\n Quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
      
      let verifica = true

      while(verifica){
      let cartaUsuario(i) = comprarCarta();
      let cartaComputador(i) = comprarCarta();


      }

      const cartaUsuario1 = comprarCarta();
      const cartaUsuario2 = comprarCarta();
      const cartaUsuarioTotal = (cartaUsuario1.valor) + (cartaUsuario2.valor)

      const cartaComputador1 = comprarCarta();
      const cartaComputador2 = comprarCarta();
      const cartaComputadorTotal = (cartaComputador1.valor) + (cartaComputador2.valor)

      
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${cartaUsuarioTotal} pontos `)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${cartaComputadorTotal} pontos `)

      if (cartaUsuarioTotal > cartaComputadorTotal){
         console.log("O usuário ganhou!")
      }else if(cartaUsuarioTotal < cartaComputadorTotal){
         console.log("O computador ganhou!")
      }else{
         console.log("Empate!")
      }


   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O jogo acabou.")
   }