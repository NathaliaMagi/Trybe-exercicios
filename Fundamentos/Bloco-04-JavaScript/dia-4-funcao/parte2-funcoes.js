////// 1 - Verificação de Palíndromo

function testPalindrome(palavra){
    let divide = palavra.split("");
    let reverte = divide.reverse();
    let junta = reverte.join("");

    let esperado;

    if(palavra === junta){
        esperado = true;
    }else{
        esperado = false;
    }
    return esperado;
}

console.log("Resposta para PALÍDROMO: "+testPalindrome('sarah'));
console.log("-------------------------------------------------");

/////// 2 - Maior número

// function maiorValor(numeros){
//     let valorMaior = 0;
//     for(let cont = 0; cont< numeros[valorMaior] ; cont+=1){
//         if (numeros[valorMaior] > numeros[cont]){
//             valorMaior = cont;
//         }
//     }

//     return valorMaior;
// }

// console.log(maiorValor[2,4,6,8,10]);

function indiceDoMaior(numeros) { //// GABARITO
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

  console.log("-------------------------------------------------");

  function indiceDoMenor (numeros2){
      let indiceMenor = 0;

      for(let indice2 in numeros2){
        if(numeros2[indiceMenor]>numeros2[indice2]){
            indiceMenor = indice2;
        }
      }

      return indiceMenor;
  }

  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));