const readline = require('readline-sync');
const {
  questionFloat
} = readline;

const peso = questionFloat('Qual seu peso? ');
const altura = questionFloat('Qual sua altura? ');

const calculaIMC = (peso = 0, altura = 0) => {
  const imc = peso / altura**2;

  if(imc <= 18.5) {
    return {
      imc: imc,
      'situação': 'Abaixo do peso (magreza)',
    };
  }

  if(imc <= 24.9) {
    return {
      imc: imc,
      'situação': 'Peso normal',
    };
  }

  if(imc <= 29.9) {
    return {
      imc: imc,
      'situação': 'Acima do peso (sobrepeso)',
    };
  }

  if(imc <= 34.9) {
    return {
      imc: imc,
      'situação': 'Obesidade grau I',
    };
  }

  if(imc <= 39.9) {
    return {
      imc: imc,
      'situação': 'Obesidade grau II',
    };
  }

  if(imc >= 40.0) {
    return {
      imc: imc,
      'situação': 'Obesidade graus III e IV',
    };
  }

}

console.log(calculaIMC(peso, altura));
