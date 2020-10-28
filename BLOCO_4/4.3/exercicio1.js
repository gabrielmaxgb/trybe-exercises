let n = 2;
let asteriscos = '';

if (n > 1){

    for (let rep = 0; rep < n; rep++) {
        asteriscos += '*';
    }

    for (let rep = 0; rep < n; rep++) {
        console.log(asteriscos);
    }


} else {
    console.log('n inválido');
}