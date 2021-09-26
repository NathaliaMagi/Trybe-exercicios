const scop = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

//   testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b); // como se fosse uma função de comparação
console.log(`O resultado do vetor em ordem crescente é: \n${oddsAndEvens}`);

const factorial = (num) => {
  for (let index = 1; index < num; index += 1) {
    num *= index;
  }
}
factorial(3);
