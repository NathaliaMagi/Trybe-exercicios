const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculaNota = (gabarito, studentAnswars, funcCheck) => {
  const resultado = (funcCheck(gabarito, studentAnswars));
  return resultado;
}

// funcCheck: Checa se as respostas estão corretas e faz a contagem da pontuaçaõ final
// recebida pela pessoa estudante

const checkAnswers = (right, student) => {
  let nota = 0;
  for (let index = 0; index <= right.length; index += 1) {
    if (right[index] === student[index]) {
      nota += 1;
    } else {
      nota -= 0.5;
    }
  }
  return nota;
}

checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);

console.log(`Nota final do aluno: ${calculaNota(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers)}`);
