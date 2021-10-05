const newEmployees = (dataPersons) => {
  const employees = {
    id1: dataPersons('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dataPersons('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dataPersons('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const personHired = (name) => {
  let nomeCOmpleto = name;
  name = name.toLowerCase();
  name = name.replace(' ', '_');
  const data = `{ ${nomeCOmpleto} , ${name}@trybe.com }`
  return data;
};

console.log(newEmployees(personHired));