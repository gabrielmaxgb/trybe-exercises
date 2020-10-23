let custo = 10, valorDeVenda = 20;

let lucro = valorDeVenda - (custo + custo*20/100);

if(custo < 0 || valorDeVenda < 0){
    console.log('Erro');
}