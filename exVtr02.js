let num = [8, 1, 7, 4, 2, 9];
//num.sort();//posiciona em ordem
console.log(num);
/*
//Iniciando a variável posi, enquanto posi < o tamanho do vetor
for(let posi = 0; posi < num.length; posi++) {
    console.log(`A posição ${posi} tem o valor ${num[posi]}`);
}
*/
//Formula resumida
for(let posi in num) {
    console.log(`A posição ${posi} tem o valor ${num[posi]}`);
}