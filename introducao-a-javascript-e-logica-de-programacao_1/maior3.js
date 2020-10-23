let a = 4,
    b = 4,
    c = 4;

if (a > b && a > c || a == b && a > c || a == c && a > b) {
    console.log(a);

} else if (b > a && b > c || b == a && b > c || b == c && b > a) {
    console.log(b);

} else if (c > b && c > a || c == a && c > b || c == b && c > a) {
    console.log(c);
} else if (a == b && a == c) {
    console.log('Os três números são iguais');
}
