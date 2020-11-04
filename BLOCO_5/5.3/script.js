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
function createsFridayButton(string) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.id = newButtonID;
    newButton.innerHTML = string;
    buttonsContainer.appendChild(newButton);
}
createsFridayButton('Sexta-feira');

/* Exercício 5 */
function changeFridayText() {

    let fridayButton = document.getElementById('btn-friday');
    let fridays = document.querySelectorAll('.friday');

    fridayButton.addEventListener('click', function () {


        for (let index = 0; index < fridays.length; index += 1) {

            if (fridays[index].innerText != 'Sexta-feira') {
                fridays[index].innerText = 'Sexta-feira';
            } else {
                fridays[index].innerText = dezDaysList[index];
            }
        }
    })
}
changeFridayText();

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