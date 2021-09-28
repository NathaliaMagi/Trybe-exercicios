const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EXERCÍCIO 1 ----------------------------------------------------------------

const addNightTurn = (obj, key, value) => {
  obj[key] = value;
  console.log(lesson2);
}

addNightTurn(lesson2, 'turno', 'noturno');

// EXERCÍCIO 2 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const showKeys = (obj) => {
  const keys = Object.keys(obj);
  console.log(keys);
}

showKeys(lesson2);

// EXERCÍCIO 3 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const sizeObject = (obj) => {
  let sizeArray = Object.entries(obj);
  console.log(`O tamanho do objeto é igual a: ${sizeArray.length}`);
}

sizeObject(lesson3);

// EXERCÍCIO 4 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const listvalues = (obj) => {
  const values = Object.values(obj);
  console.log(values);
}

listvalues(lesson1);

// EXERCÍCIO 5 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// EXERCÍCIO 6 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const totalStudentsinClass = (obj) => {
  const keys = Object.keys(obj);
  //console.log(keys);
  let total = 0;

  for (let index = 0; index < keys.length; index += 1) {
    const percorreKeys = keys[index]; // retorna [lesson1 / lesson2/ lesson3]
    total += obj[percorreKeys].numeroEstudantes;
  }
  return total;
}

console.log(`Total de alunos nas aulas: ${totalStudentsinClass(allLessons)}`);

// EXERCÍCIO 7 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const keyValuePosition = (obj, position) => {
  const valor = Object.values(obj)[position];
  console.log(`O valor é de: ${valor}
Na posição: ${position}`);
}
keyValuePosition(lesson2, 2);


// EXERCÍCIO 8 ----------------------------------------------------------------
console.log(`-------------------------------------------------------\n`);

const verifyPare = (obj, keyName, valueKey) => {
  const array = Object.entries(obj);
  // console.log(array);
  let iquals = false;
  for (let index in array) {
    if (array[index][0] === keyName && array[index][1] === valueKey) {
      iquals = true;
    }
  }
  return iquals;
}

console.log(verifyPare(lesson2, 'materia', 'História'));