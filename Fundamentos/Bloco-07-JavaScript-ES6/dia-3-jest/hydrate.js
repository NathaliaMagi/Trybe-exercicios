const hydrate = (string) => {
  // Para extrair o número de uma string é preciso usar do método match
  // que é uma expressão regular que determnina a busca por dígitos em uma frase
  // /\d+/g (global flag/parar procurar todos)
  // Gera como resultado uma array dos resultados encontrados
  // Para transformar os elementos strings em Inteiros usa do termo parseInt();
  let reg = /\d+/g;
  let regString = string.match(reg);
  let regInt;
  let arrayInt = [];
  let sum = 0;

  for (let index = 0; index < regString.length; index += 1) {
    regInt = parseInt(regString[index]);
    arrayInt.push(regInt);
    sum += arrayInt[index];
  }
  const result = (sum === 1) ? (`${sum} copo de água`) : (`${sum} copos de água`);
  return result;
}

module.exports = hydrate;