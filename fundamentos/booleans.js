let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("Números verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = Infinity));
console.log(!!"texto");

console.log("----------------------------------");

console.log("Números falsos");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("----------------------------------");

console.log("Para finalizar");
console.log(!!('' || null || 0 || 'uepaa'));        //comparando valores, será somente verdadeiro 1, sendo o ultimo
console.log(('' || null || 0 || 'uepaa'));          // exibi-se somente o verdadeiro

console.log("----------------------------------");

let nome = '';
console.log((nome || 'Desconhecido'));              // caso nome esteja vazio, exibe desconhecido pois nome recebe false. Caso tenha nome exibe o nome que recebe true.