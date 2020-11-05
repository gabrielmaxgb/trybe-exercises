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

function createMonthDays() {
    let daysList = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dayListItem = document.createElement('li');

        if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
            dayListItem.className = 'day holiday';
        } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
            dayListItem.className = 'day friday';
        }else if (dezDaysList[index] === 25) {
            dayListItem.className = 'day holiday friday';
        } else {
            dayListItem.className = 'day';
        }
        dayListItem.innerHTML = dezDaysList[index];
        daysList.appendChild(dayListItem);
    }
};
createMonthDays();

/* Exercício 2 */
function createsHolidayButton(string) {
    let getButtonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday';

    newButton.id = newButtonId;
    newButton.innerHTML = string;
    getButtonContainer.appendChild(newButton);
}
createsHolidayButton('Feriados');

/* Exercício 3 */
function changeBgColor() {
    let holidayButton = document.getElementById('btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'white';
    let newBackgroundColor = 'green';

    holidayButton.addEventListener('click', function () {

        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor == newBackgroundColor) {
                holidays[index].style.backgroundColor = backgroundColor;
            } else {
                holidays[index].style.backgroundColor = newBackgroundColor;
            }
        }
    });
}
changeBgColor();

/* Exercício 4 */
function createsFridayButton(friday) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.id = newButtonID;
    newButton.innerHTML = friday;
    buttonsContainer.appendChild(newButton);
}
createsFridayButton('Sexta-feira');

/* Exercício 5 */
function changeFridayText(theFridays) {

    let fridayButton = document.getElementById('btn-friday');
    let fridays = document.querySelectorAll('.friday');

    fridayButton.addEventListener('click', function () {


        for (let index = 0; index < fridays.length; index += 1) {

            if (fridays[index].innerText != 'Sexta-feira') {
                fridays[index].innerText = 'Sexta-feira';
            } else {
                fridays[index].innerText = theFridays[index];
            }
        }
    })
}
let theFridays = [ 4, 11, 18, 25 ];
changeFridayText(theFridays);

/* Exercício 6 */
function mouseOver() {
    let day = document.getElementById('days');

    day.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '40px';
      event.target.style.fontWeight = 'bold';
    })
  };
function mouseOut() {
    let day = document.getElementById('days');

    day.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
mouseOver();
mouseOut();

/* Exercício 7 */
function addTask(task) {
    let myTasks = document.querySelector('.my-tasks');
    let tarefa = document.createElement('span');
    tarefa.innerHTML = task;
    myTasks.appendChild(tarefa);
}
addTask('cozinhar');

/* Exercício 8 */
function addsSubtitle(color) {
    let myTasks = document.querySelector('.my-tasks');
    let subtitle = document.createElement('div');

    subtitle.className = 'task';
    subtitle.style.backgroundColor = color;
    myTasks.appendChild(subtitle);
}
addsSubtitle('green');

/* Exercício 9  */
function addEvent() {

    let currentTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function (event) {

        if (currentTask.length === 0) {
            event.target.className = 'task selected';
          } else {
            event.target.className = 'task';
          }
    });

}
addEvent();

/* Exercício 10 */           //https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-7-solutions
function colorDay() {
    let selectedTask = document.getElementsByClassName('task selected');
    let day = document.getElementById('days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    day.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };

  colorDay();

  /* Bônus */            //https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-7-solutions
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