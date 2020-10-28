 let a = 2, b = 2, c = 2;

function abc(a, b, c){

    let g = (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) ? true : false;
    return console.log(g);

}

abc(a, b, c);