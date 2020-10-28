/*
    Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
*/

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let biggerName = array[0];

function bigName(array) {

    for(index in array){
        if(array[index].split('').length > biggerName.split('').length){
            biggerName = array[index];
        }
    }

    return biggerName;

}

let result = bigName(array);
console.log(result);