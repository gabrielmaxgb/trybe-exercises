const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O retorno deveria ser [1, 2, 4]');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O retorno não deveria ser [1, 2, 3, 4]');

const myArr = [6, 7, 8, 9];
myRemove(myArr);
assert.deepStrictEqual(myArr, [6, 7, 8, 9]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);