const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Adicione o código do exercício aqui:

function containsA() {
  return names.reduce((acc, currName) => acc + currName.split('')
    .reduce((acc, currLetra) => { (currLetra === 'a' || currLetra === 'A') ? acc + 1 : acc }, 0), 0);
}
console.log(containsA());