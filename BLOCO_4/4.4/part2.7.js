/*
    Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
*/

let word = 'gabriel';
let ending = 'abriel';


let newArray = [];

function isEnding(word, ending) {

    let endingLength = ending.length;
    let wordString = word.substring(word.length - endingLength, word.length);

    console.log((wordString == ending) ? true : false);

}

isEnding(word, ending);