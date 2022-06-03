```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let conta = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido){
             conta ++;
        }
    }

    return console.log(`O numero ${numeroEscolhido} apareceu ${conta}x`);
}
```