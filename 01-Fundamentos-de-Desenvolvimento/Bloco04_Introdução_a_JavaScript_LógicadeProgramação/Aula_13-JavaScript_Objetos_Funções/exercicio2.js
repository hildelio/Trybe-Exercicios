// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true

function verificaPalindrome(palavra) {
    let arr = palavra.split('')
    let reverso = arr.reverse()
    let palavraReverso = reverso.join('')
    if (palavra === palavraReverso) {
        return true
    } else {
        return false
    }
}
console.log(verificaPalindrome('arara')); 

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorValor(array) {
    let maior = 0

for (let i = 0; i < array.length; i +=1 ) {
    if (array[i] > maior) {
        maior = array[i];
    }
}
return maior
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));
let array = [2, 3, 6, 7, 10, 1]
console.log(array.findIndex(indexMaiorValor));
function indexMaiorValor(array) {
    return array === 10
}

