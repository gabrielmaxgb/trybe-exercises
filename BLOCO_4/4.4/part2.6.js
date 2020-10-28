/*
    Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
*/

let N = 5;
let somaTotal = N;

function somatorio(N) {

    for(let cont = N-1; cont > 0; cont -= 1){

        somaTotal += cont;

    }

    console.log(somaTotal);

}


somatorio(N);
