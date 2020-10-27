let n = 5;
let asteriscos = '';
let espaços = ' ';

if (n > 1){

    for (let rep = 0; rep < n; rep++) {
        asteriscos += '*';
        console.log(asteriscos);
    }

} else {
    console.log('n inválido');
}
