//hoisting é quando ocorre a leitura de uma variável primeiro, onde todas as outras linguagens leem de cima pra baixo, no js lê-se a variavel primeiro.
// não é muito aconselhado utilizar desse modo

console.log("a = " + a);
var a = 2;
console.log("a = " + a);