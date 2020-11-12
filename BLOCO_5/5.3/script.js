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

  createDaysOfTheWeek();

  // Escreva seu código abaixo.

/* Exercício 1 */
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

/* Exercício 1 */
function setMonthDays() {

  let listOfDays = document.getElementById('days'); // ul

  for (let index = 0; index < dezDaysList.length; index += 1) {
    //Creates element li
    let listItem = document.createElement('li');
    listItem.innerHTML = dezDaysList[index];
    listOfDays.appendChild(listItem);
    listItem.className = 'day';

    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      listItem.className = 'day holiday';
    }
    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      listItem.className = 'day friday';
    }
    if (dezDaysList[index] === 25) {
      listItem.className = 'day holiday friday';
    }
  }
};
setMonthDays();

/* Exercício 2 */
function setHolidayButton(string) {

  let getButtonsContainer = document.querySelector('.buttons-container');
  let hollidayButton = document.createElement('button');

  hollidayButton.innerHTML = string;
  hollidayButton.id = 'btn-holiday';
  getButtonsContainer.appendChild(hollidayButton);

};
setHolidayButton('Feriados');

/* Exercício 3 */
function changeBgColorOfHoliday() {

  let getHolidays = document.querySelectorAll('.holiday'); // returns holidays
  let hollidayButton = document.getElementById('btn-holiday');
  let calendarColor = 'rgb(238,238,238)';
  let newColor = 'white';

  hollidayButton.addEventListener('click', function () {

    for (let index = 0; index < getHolidays.length; index += 1) { //percorre holidays mudando a cor

      let holiday = getHolidays[index];

      if (holiday.style.backgroundColor == newColor) {
        holiday.style.backgroundColor = calendarColor;
      } else {
        holiday.style.backgroundColor = newColor;
      }

    }
  });
};
changeBgColorOfHoliday();

/* Exercício 4 */
function setFridayButton(string) {

  let getButtonsContainer = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');

  fridayButton.innerHTML = string;
  fridayButton.id = 'btn-friday';
  getButtonsContainer.appendChild(fridayButton);

}
setFridayButton('Sexta-feira');

/* Exercício 5 */
function changeFridayInnerText(string){

  let getFridays = document.getElementsByClassName('friday'); //returns fridays elements
  let fridayButton = document.getElementById('btn-friday');

  fridayButton.addEventListener('click', function () {

    for (let index = 0; index < getFridays.length; index += 1) {

      let getFridaysNum = document.getElementsByClassName('friday')[index].innerHTML;

      if (getFridays[index].innerHTML == string) {
        getFridays[index].innerHTML = arrFriday[index];
      } else {
        getFridays[index].innerHTML = string;
      }



    }

  });

}
arrFriday = [ 4, 11, 18, 25 ];
changeFridayInnerText('Sextoooou');

/* Exercício 6 */
function zoomIn() {

  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {

    event.target.style.fontWeight = 'bold';

  });

}

function zoomOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '';
  })
};

zoomIn();
zoomOut();

/* Exercício 7 */
function addTask(task) {

  let myTasks = document.querySelector('.my-tasks');
  let newTask = document.createElement('span');

  newTask.innerHTML = task;
  myTasks.appendChild(newTask);
}
addTask('Estudar');

/* Exercício 8 */
function addTaskColor(color) {

  let myTasks = document.querySelector('.my-tasks');
  let subtitle = document.createElement('div');

  subtitle.className = 'task';
  subtitle.style.backgroundColor = color;
  myTasks.appendChild(subtitle);

}
addTaskColor('green');

/* Exercício 9 */

function selectTask() {

  let task = document.querySelector('.task');

  task.addEventListener('click', function (event) {

    if (event.target.className == 'task selected') {
      event.target.className = 'task';
    } else {
      event.target.className = 'task selected';
    }
  });
}
selectTask();

/* Exercício 10 */  // ENTENDER ISSO AQUI

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
/*function setDayColorTask() {

  let day = document.querySelector('.day');
  let dayColor = day.style.color;
  let taskColor = document.querySelector('.task', '.selected').style.backgroundColor;

  day.addEventListener('click', function () {

    if (dayColor != taskColor) {
      daycolor = taskColor;
    } else {
      dayColor = 'rgb(119,119,119)';
    }

  });

}
setDayColorTask();*/

/* Bônus */       // ENTENDER ISSO AQUI

/*Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.*/

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();