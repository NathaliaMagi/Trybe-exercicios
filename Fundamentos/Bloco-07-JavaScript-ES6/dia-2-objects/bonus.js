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

// EXERCÍCIO 1 ----------------------------------------------------------
// exercício 5 (parte-II)
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const mathClass = (obj) => {
    const keys = Object.keys(obj);
    let total = 0;

    for (let index in keys) {
        const percorreKeys = keys[index];
        if (obj[percorreKeys].materia === 'Matemática') {
            total += obj[percorreKeys].numeroEstudantes;
        }
    }
    return total;
}

console.log(`Total de alunos nas aulas de Matemática : ${mathClass(allLessons)}`);

// EXERCÍCIO 2 ----------------------------------------------------------

const teacherReport = (obj, teacher) => {
  array = {};
  let totalAlunos = 0;
  for (let index in array) {
    if (obj[array[index]].professor === teacher) {
      array.professor = teacher;
      array.aulas = obj[array[index]].materia;
      totalAlunos += obj[array[index]].numeroEstudantes;
    }
  }
  return array;
}
console.log(teacherReport(allLessons, 'Maria Clara'));