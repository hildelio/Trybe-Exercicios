// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

    // function testingScope(escopo) {
    //   if (escopo === true) {
    //     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    //     console.log(ifScope);
    //   } else {
    //     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    //     console.log(elseScope);
    //   }
    //   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
    // }

    // testingScope(true);

function testingScope(escopo) {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 🚀 Crie uma função que retorne um array em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function (a, b) {
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Crie uma função que receba um número e retorne seu fatorial.

function fatorial(num) {
  let result = num;
  for (let i = 1; i <= num; i += 1) {
    result *= i;
  }
  return result;
}
console.log(fatorial(5));


