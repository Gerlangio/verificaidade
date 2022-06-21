let num = [5, 8, 2, 9, 3];
//num.sort();//Coloca o vetor em ordem
//num.push(1);//Coloca o número 1 na última posição
//num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(1);
if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor está na posição ${pos}`);
}