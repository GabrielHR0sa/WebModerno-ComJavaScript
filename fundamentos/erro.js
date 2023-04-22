/*   Código base que da o erro
function imprimirNomeGritado(obj){
    console.log(obj.name.toUpperCase() + "!!!");
}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj) */

function tratarErroELancar(erro){
    throw new Error("Erro no sistema");
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    }catch (e){
        tratarErroELancar(e)
    }
}

const obj = { nome: "Roberto" }
imprimirNomeGritado(obj);

//try serve para pegar o excesso que gera o erro no código
// catch serve para pegar o erro do bloco try