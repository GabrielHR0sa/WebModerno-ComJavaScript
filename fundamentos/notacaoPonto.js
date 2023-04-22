// Você acessa os membros de um object, ou de uma function sempre através de uma notação ponto.

console.log(typeof console);

console.log(Math.ceil(6.1)); // math.ceil arredonda pra cima
console.log(Math.floor(6.1)); // math.floor arredonda pra baixo

const obj1 = {};
obj1.nome = "Bola";

function Obj (nome){
    this.nome = nome; // this. serve para exibir a variavel para fora da function, onde pode ser colocado o valor fora da function

}

const obj2 = new Obj("Cadeira"); // colocando um valor na variavel interna da function por fora da function
console.log(obj2.nome);