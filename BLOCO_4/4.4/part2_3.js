/*
    Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
*/

let array = [2, 4, 6, 7, 10, 0, -3];
let smallerValueIndex = array[0];

function smallerIndex(array) {

    for(let index = 0; index < array.length; index+=1){
        if(array[index] < smallerValueIndex){
            smallerValueIndex = index;
        }
    }

    return smallerValueIndex;

}

console.log(smallerIndex(array));