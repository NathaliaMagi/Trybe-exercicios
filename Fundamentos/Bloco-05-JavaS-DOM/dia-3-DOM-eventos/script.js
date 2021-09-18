function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// exercício 1
function createDayNovember() {
  let dias = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let item = dezDaysList[index];
    let itemList = document.createElement('li');
    itemList.className = "day";
    itemList.innerText = item;

    if (item == [24] || item == [25] || item == [31]) {
      itemList.classList.add('holiday');
    }

    if (item == [4] || item == [11] || item == [18] || item == [25]) {
      itemList.classList.add('friday');
    }
    dias.appendChild(itemList);
  }
}

let buttonFeriado = document.createElement('button');
let buttonC = document.querySelector('.buttons-container');


// exercício 2
function buttonHoliday(feriados) {
  buttonFeriado.id = 'btn-holiday';
  buttonFeriado.innerText = feriados;
  buttonC.appendChild(buttonFeriado);
}

// exercício 3
function changeColorHolidays() {
  buttonFeriado.addEventListener('click', function () {
    let li = document.querySelectorAll('.holiday');
    for (let index = 0; index < li.length; index += 1) {
      let feriado = li[index];

      if (feriado.style.backgroundColor === 'orange') {
        feriado.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        feriado.style.backgroundColor = 'orange';
      }
    }
  })
}

// exercício 4
let buttonSexta = document.createElement('button');
function buttonFriday(sexta) {
  buttonSexta.id = 'btn-friday';
  buttonSexta.innerText = sexta;
  buttonC.appendChild(buttonSexta);
}

// exercício 5
function changeTextFriday() {
  buttonSexta.addEventListener('click', function () {
    let arraySexta = [4, 11, 18, 25];

    let sexta = document.querySelectorAll('.friday');
    for (let index = 0; index < sexta.length; index += 1) {
      if (sexta[index].innerText !== 'Sextou!') {
        sexta[index].innerText = 'Sextou!';
      } else {
        sexta[index].innerText = arraySexta[index];
      }
    }
  });
}

// exercício 6

let dayZoom = document.querySelectorAll('#days');
for (let index = 0; index < dayZoom.length; index += 1) {
  dayZoom[index].addEventListener('mouseover', addZoom);

  dayZoom[index].addEventListener('mouseout', resetZoom);
}

function addZoom(event) {
  event.target.style.fontSize = '25px';
}

function resetZoom(event) {
  event.target.style.fontSize = '20px';
}

// exercício 7
let mtarefa = document.querySelector('.my-tasks');

function customTasks(tarefa) {
  let task = document.createElement('span');
  task.innerHTML = tarefa;
  mtarefa.appendChild(task);
}

// exercicio 8
let div = document.createElement('div');
function colorCustomTasks(cor) {
  div.className = 'task';
  div.style.backgroundColor = cor;
  mtarefa.appendChild(div);
}

// exercicio 9 
function selectedTask(event) {
    let tarefas = event.target;
    if(tarefas.classList.contains('selected')) {
      tarefas.classList.remove('selected');
    } else {
      tarefas.classList.add('selected');
    } 
}

div.addEventListener('click', selectedTask)

// exercicio 10 
function addEvent() {
  
}


createDaysOfTheWeek();
createDayNovember();
buttonHoliday('Feriados');
changeColorHolidays();
buttonFriday("Sexta-Feira");
changeTextFriday();
customTasks('Cozinhar');
colorCustomTasks('pink')

