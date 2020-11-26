const assert = require('assert');

const greetPeople = (parameter) => {

    let result = [];

    for (let index = 0; index < parameter.length; index += 1) {

        result.push(`Hello ${parameter[index]}`);

    }

    return result;

};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);