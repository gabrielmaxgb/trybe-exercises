/*
    Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

let array = [2, 3, 6, 7, 10, 1];
let biggerValueIndex = array[0];

function biggerIndex(array) {

    for(let index = 0; index < array.length; index+=1){
        if(array[index] > biggerValueIndex){
            biggerValueIndex = index;
        }
    }

    return biggerValueIndex;

}

console.log(biggerIndex(array));