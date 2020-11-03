let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for(let i = 1; i < numbers.length; i++){
    for(let j = 0; j < i; j++){
        if(numbers[i] < numbers[j]){
            let position = numbers[i]

            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log(numbers);

for(let i = 1; i < numbers.length; i++){
    for(let j = 0; j < i; j++){
        if(numbers[i] > numbers[j]){
            let position = numbers[j]

            numbers[j] = numbers[i];
            numbers[i] = position;
        }
    }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];

for (let i = 0; i < numbers.length; i++) {

  let aux = i + 1;

  if(i != numbers.length - 1){
    novoNumbers.push(numbers[i] * numbers[aux]);
  } else {
    novoNumbers.push(numbers[i] * 2);
  }

}

console.log(novoNumbers);
