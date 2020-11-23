const longestWord = text => text.split(' ').sort((a, b) => a.length - b.length).reverse()[0];
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
