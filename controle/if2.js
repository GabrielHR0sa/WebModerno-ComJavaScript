function teste1(num){
    if(num > 7)
        console.log(num);
        console.log("Final");    
}
        /* no primeiro caso do teste 6 aparece somente o final, que não
        faz parte do bloco if, e no segundo aparece os dois. O final aparece
        em todos pois não faz parte do if, por não ter {}*/
teste1(6);
teste1(8);

function teste2(num){
    if(num > 7);{
        console.log(num);
    }
}
        /* no segundo caso, executa ambos os testes e exibe ambos pois a 
        sentença do if acaba no ; antes do {}. Tomar cuidado com o ;*/
teste2(6);
teste2(8);