 //utilizando array
 
 function rand([min = 0, max = 1000]){
    if (min > max){                     // se o valor de minimo for maior que o máximo, troca a ordem dos dois
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);  // pra arredondar pra baixo
}

 console.log(rand([50, 40])); // passando o minimo maior pra entrar no if
 console.log(rand([992])); // passando somente um valor, que cai no minimo
 console.log(rand([, 10])); // passando somente o segundo valor, que é o maximo, portanto o minimo é 0
 console.log(rand([])); // passando somente a function, gerando os valores atribuidos na propria function
