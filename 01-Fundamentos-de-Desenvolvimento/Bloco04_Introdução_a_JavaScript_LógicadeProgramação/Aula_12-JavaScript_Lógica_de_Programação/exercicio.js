//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}
console.log(sum);

//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let resultado = 1
for (let i = 1; i <= 10; i += 1) {
resultado *= i;
}
console.log(resultado)

/*
Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
*/

let word = 'tryber'
let arr = word.split('')
let reverse = arr.reverse()
let result = reverse.join('')
console.log(result);

/*
Considere o array de strings abaixo:
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

/*
Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
*/

for (let num = 2; num <= 50; num += 1) {
  console.log(num)
}

let primo = (num) => {
  for (let indexx = 2; indexx < num; indexx += 1) {
    if (num % indexx === 0) {
      console.log(false); 
    }
    console.log(num > 1); 
  }
}
