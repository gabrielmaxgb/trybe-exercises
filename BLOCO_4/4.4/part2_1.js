/*
    Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
*/

let string = 'ovo';

function isPalindrome(string) {

    let trueOrFalse = (string.split('').reverse().join('') == string) ? true : false;
    return trueOrFalse;

    /*
        o método split('') divide uma string e aloca cada elemento em um elemento subsequente de um array
        o método reverse inverte a ordem dos elementos do array
        e o método join junta os elementos do array em uma string, indicado pelo '' no método join
    */

}

let result = isPalindrome(string);
console.log(result);

