/**
 * Repetições
 */
/*
var c = 1
while(c <= 10) {
    //...
    c++
}

for (var c = 1; c <= 10; c++) {

}*/

/*
var c = 1;
while (c <= 5) {
    console.log(c);
    c++;
}*/
/*
var c = 1;
do {
    console.log(c);
    c++;
} while (c <= 5);
*/

/*
console.log('Vai começar...')
for(var c = 1; c <= 4; c++){
    console.log(c)
}
console.log('FIM')
*/

//Arrays ou Vetores
let num = [5,4,8];
console.log('Mostra o número de posições do vetor');
console.log(num);
console.log('coloque o numero 6 na posição 3');
num[3]=6;
console.log(num);
console.log('coloque na última posição o número 7');
num.push(7);
console.log(num);
//mostra quantas posições tem o vetor
console.log(`O vetor tem ${num.length} posições`);
//...
console.log('Coloca o vetor em ordem entre cochetes');
num.sort();
console.log(num);
//...
console.log('Coloca em ordem fora dos cochetes');
console.log(`${num}`);
//...
console.log('Mostra o número e sua posição')
console.log(`Na primeira posição valor do vetor é ${num[0]}`);
