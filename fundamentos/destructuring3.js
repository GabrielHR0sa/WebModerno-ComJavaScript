 function rand({min = 0, max = 1000}) { // definindo valor maximo e minimo
    const valor = Math.random() * (max - min) + min; // function pra gerar numero aleatórios
    return Math.floor(valor);
 }

 const obj = {max: 50, min: 40}     // definindo novos valores com object
 console.log(rand(obj))

 console.log(rand({min: 955}))

 console.log(rand({})); // gerador random utilizando a função rand com suas definições de valor