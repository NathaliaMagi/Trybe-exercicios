// Desafio 10
const techList = (arrayTec, name) => {
  let listaTecnologia = [];
  let array = arrayTec.sort();

  if (array.length === 0) return 'Vazio!';

  for (let index in array) {
    listaTecnologia.push({
      tech: array[index],
      name // não precisa colocar name:name por ser redudante
    });
  }
  return listaTecnologia;
}
  // console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],"Lucas"));

  module.exports = techList;