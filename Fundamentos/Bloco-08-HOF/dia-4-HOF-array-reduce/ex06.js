const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
 return students.map((student, index) => {
    let media = grades[index].reduce((acc, nota) => acc + nota)/ 5
    return {
      name: student,
      avarege: media
    };
  });
}
console.log(studentAverage());

//Criar um array de objeto
/*
- [0] notas = [0] alunos
*/