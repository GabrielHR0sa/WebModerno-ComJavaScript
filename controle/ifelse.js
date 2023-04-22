const imprimirResultado = function(nota){
    if(nota > 6){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}

imprimirResultado(7);
imprimirResultado(4);
imprimirResultado("Epa"); // cuidado com a linguagem fracamente tipada