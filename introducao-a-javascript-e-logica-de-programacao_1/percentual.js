let percentual = 100;

if(percentual >= 90 && percentual <= 100){
    console.log('A');
} else if(percentual >= 80 && percentual < 90) {
    console.log('B');
} else if(percentual >=  70 && percentual < 80) {
    console.log('C');
} else if(percentual >= 60 && percentual < 80) {
    console.log('D');
} else if(percentual >= 50 && percentual < 70) {
    console.log('E');
} else if(percentual < 50 && percentual >= 0) {
    console.log('F');
} else if (percentual < 0 || percentual > 100) {
    console.log('Erro');
}
