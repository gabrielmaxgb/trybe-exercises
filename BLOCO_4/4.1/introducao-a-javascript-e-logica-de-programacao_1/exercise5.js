let a = 100, b = 41, c = 40;

let sum = a+b+c;

function isTriangle(sum) {

    if(sum == 180){

        console.log('São ângulos de um triângulo.');
    
    } else {
    
        console.log('Não são valores válidos para representar ângulos internos de um triângulo!');
    
    }

}

isTriangle(sum);
