//exibindo numeros pares e impares de 0 a 10 utilizando function.
console.log("Números impares de 0 a 10: ");
impar();
console.log("Números pares de 0 a 10: ");
par();


function impar() {

    for (let i = 0; i <= 10; i++) {
        if(i % 2 == 1){
            console.log(i);
        }
    }

}

function par() {

    for(let i = 0; i <= 10; i++){
        if(i % 2 == 0){
            console.log(i);
        }

    }

}
