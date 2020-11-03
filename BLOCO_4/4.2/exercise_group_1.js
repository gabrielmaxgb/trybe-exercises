let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mediaAritmetica = 0;
let maior_i = numbers[0];
let cont_impar = 0;
let menor_i = numbers[0];

for(let i = 0;  i<numbers.length; i++) {
    console.log(numbers[i]);

    sum = sum + numbers[i]; 



    if(numbers[i] > maior_i){
        maior_i = numbers[i];
    }

    if((numbers[i] % 2) != 0) {
        cont_impar += 1;
    }
    
    if(numbers[i] < menor_i){
        menor_i = numbers[i];
    }

}

console.log(sum);

mediaAritmetica = sum / numbers.length;
console.log(mediaAritmetica);

let exercise4 = (mediaAritmetica > 20) ? `Valor ${mediaAritmetica} maior que 20` : 'Valor menor ou igual a 20' ;
console.log(exercise4);

console.log(maior_i);

if(cont_impar == 0){
    console.log('Nenhum ímpar encontrado');
} else {
    console.log(cont_impar);
}

console.log(menor_i);

let array = [];
for(let i = 1;  i <= 25; i++) {
    array.push(i);
}
console.log(array);

let resultado_divisao;
for(let i = 0; i < array.length ; i++){
    resultado_divisao = array[i]/2;
    console.log(resultado_divisao);
}
