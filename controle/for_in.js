//alternativa para percorrero array, não muito interessante, existem outros métodos melhores

const notas = [6, 7, 8, 1];

for(i in notas){// percorrendo um array, exibe sua pasição e valor
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa){
    console.log(atributo, pessoa[atributo]);
}