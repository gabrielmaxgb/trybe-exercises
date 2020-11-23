const findXAndReplace = (string) => {

    let replace = 'Printar: x';

    replace.split(' ').forEach(element => {
        for (let index = 0; index < element.length; index += 1) {
            if (element[index] === 'x') {
                element[index] = string;
            }
        }
        return replace;
    })
};
findXAndReplace('eu aqui');


let replace = 'Printar: x';
replace.split(' ').forEach((element) => console.log(element.length));
console.log(replace.split(' '));
