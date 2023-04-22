const valores = [7.7, 8.9, 6.3, 9.2];
console.log("Valor na posição 0: " + valores[0], "Valor na posição 3: " + valores[3]);
console.log(valores[4]); //caso não tenha outro indice, ele exibe undefined.


valores[4] = 10;
console.log(valores);
console.log(valores.length); //length mostra o numero de elementos.

valores.push({id: 3}, null, false, 'teste' ); // push serve para adcionar elementos ao array
console.log(valores);

console.log(valores.pop()); // pega o ultimo valor do array e deleta
delete valores[0]; // deleta o indice informado 
console.log(valores);