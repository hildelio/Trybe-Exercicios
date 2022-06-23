let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
*/

for (num of numbers) {
    console.log(num);
}

/*
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
*/
let sum=0

for (num of numbers) {
    sum += num; 
}
console.log(sum);  

/*
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
*/

let soma=0

for (num of numbers) {
    soma += num; 
}
console.log(soma/numbers.length);

/*
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/

let somando=0

for (num of numbers) {
    somando += num; 
}
if (soma/numbers.length>20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

/*
 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 */

let maior = 0

for (let i = 0; i < numbers.length; i +=1 ) {
    if (numbers[i]>maior) {
        maior=numbers[i];
    } 
}
console.log(maior);

/*
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let impar = 0

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index]%2 != 0) {
        console.log(impar + 1); 
    } else if (impar = 0) {
        console.log("nenhum valor ímpar encontrado");
    }
}
//console.log(impar);

let imp = 0
/*
for (num of numbers) {
    if (num%2 != 0) {
        impar + 1
    }
}
*/