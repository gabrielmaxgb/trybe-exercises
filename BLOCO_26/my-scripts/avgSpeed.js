const readline = require('readline-sync');
const {
  questionInt
} = readline;
const distance = questionInt('Distância percorrida: ');
const elapsedTime = questionInt('Tempo decorrido: ');

const avgSpeed = (distance, elapsedTime) => {
  return distance / elapsedTime;
}

console.log(avgSpeed(distance, elapsedTime));