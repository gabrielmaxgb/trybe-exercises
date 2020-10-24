let custo = 10, valorDeVenda = 20;
let imposto = custo*20/100;
let lucro = (valorDeVenda - (custo + imposto))*1000;

if(custo < 0 || valorDeVenda < 0){
    console.log('Erro');
}
console.log(lucro);