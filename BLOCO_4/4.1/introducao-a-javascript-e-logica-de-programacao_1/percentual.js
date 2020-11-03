let percentual = 100;


function perc(percentual){

    if(percentual >= 90 && percentual <= 100){
        return console.log('A');
    } else if(percentual >= 80 && percentual < 90) {
        return console.log('B');
    } else if(percentual >=  70 && percentual < 80) {
        return console.log('C');
    } else if(percentual >= 60 && percentual < 80) {
        return console.log('D');
    } else if(percentual >= 50 && percentual < 70) {
        return console.log('E');
    } else if(percentual < 50 && percentual >= 0) {
        return console.log('F');
    } else if (percentual < 0 || percentual > 100) {
        return console.log('Erro');
    }

}

perc(percentual);


