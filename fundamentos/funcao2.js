// armazenando uma funcao em uma variável
// onde a function é anonima, sem nome, sendo a mesmma estrutura.
const imprimirSoma = function (a, b){
console.log(a+b);
}

imprimirSoma(2, 3); // valores atribuidos a A e B dentro da function

//Armazenando uma function arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,3));

// retorno explicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));