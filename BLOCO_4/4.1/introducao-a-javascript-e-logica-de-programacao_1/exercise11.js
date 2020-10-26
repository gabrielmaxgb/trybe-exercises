let salarioBruto = 3000, INSS, IR;

if(salarioBruto <= 1556.94){
    INSS = salarioBruto * 8/100;
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    INSS = salarioBruto * 9/100;
} else if(salarioBruto >=2594.93 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 11/100;
} else if(salarioBruto > 5182.82){
    INSS = 570.88;
}

let salario_INSS = salarioBruto - INSS;

if(salario_INSS <= 1903.98){
    IR = 0;
} else if(salario_INSS >= 1903.99 && salario_INSS <= 2826.65) {
    IR = (salario_INSS * 7.5/100) - 142.80;
} else if(salario_INSS >= 2826.66 && salario_INSS <= 3751.05) {
    IR = (salario_INSS * 15/100) - 354.80;
} else if(salario_INSS >= 3751.06 && salario_INSS <= 4664.68) {
    IR = (salario_INSS * 22.5/100) - 636.13;
} else if(salario_INSS > 4664.68) {
    IR = (salario_INSS *27.5/100) - 869.36;
}

let salarioLiquido = salario_INSS - IR;

console.log(salarioLiquido, INSS, salario_INSS, IR);