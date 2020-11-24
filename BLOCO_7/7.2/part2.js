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

//   Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addsNewKey = (obj, key, value) => {obj[key] = value};
;

console.log(addsNewKey(lesson2, 'lala', 'lele'));

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson2));

/* Crie uma função para mostrar o tamanho de um objeto. */

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const objSize = (obj) => listKeys(obj).length;
console.log(objSize(lesson3));

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */

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



const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */



const numberOfStudents = (obj) => {

    let numberOfStudents = 0;
    let array = Object.keys(obj);

    for(keys in array) {
        numberOfStudents += obj[array[keys]].numeroEstudantes;
    }

    return numberOfStudents;
};
console.log(numberOfStudents(allLessons));

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  console.log(Object.keys(lesson1)[0]);

const objValue = (obj, position) => Object.values(obj)[position];
console.log(objValue(lesson1, 0));

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */


const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
const keyValueCheck = (obj, key, value) => {
    for (let index = 0; index < Object.keys(obj).length; index += 1) {
        if (Object.keys(obj)[index] == key && Object.values(obj)[index] == value) {
            return true;
        }
    }
    return false;
};
console.log(keyValueCheck(lesson1, 'turno', 'manhã'));

/* Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5. */
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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);



let arr = Object.keys(allLessons);
console.log(Object.keys(allLessons[arr[1]]));
