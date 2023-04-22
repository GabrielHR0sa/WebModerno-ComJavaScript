function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota + " de nota");
    }else{
        console.log("Reprovado com " + nota + " de nota");
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor);
    }
}

/* os valores em js podem ser considerados booleans, 
valores abaixo que não aparecem são false, os que aparecem são true.*/

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});