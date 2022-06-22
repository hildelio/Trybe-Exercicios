/*
Faça cinco programas, um para cada operação aritmética básica.Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.Faça programas para:
Adição(a + b)
Subtração(a - b)
Multiplicação(a * b)
Divisão(a / b)
Módulo(a % b)
*/

let a = 9
let b = 13

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* 
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

console.log(Math.max(a, b))

/* 
Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

const x=1
const y=2
const z=3

console.log(Math.max(x,y,z))

/*
Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

console.log(a>0)
console.log(a<=0)

/*
Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/

const alfa=90
const beta=60
const gama=30

if (alfa+beta+gama==180 && alfa>=0 && beta>=0 && gama>=0) {
    console.log( "Alfa, Beta e Gama são ângulos de um triângulo!")
} else if (alfa<0) {
    console.log("Alfa é um ângulo inválido!")
} else if (beta<0) {
    console.log("Beta é um ângulo inválido!")
} else if (gama<0) {
    console.log("Gama é um ângulo inválido!")
} else {
    console.log("Não são ângulos de um triângulo!")
}

/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

/* 
Tendo em vista que este exercício explora conteúdos ainda não estudados, acredito que o intuito é utilizar uma lógica com a estrutura "If" sem a necessidade de resolução. Mesmo tendo ciência do não funcionamento da função abaixo optei por deixar dessa forma com o intuito de não antecipar de forma precipitada os conteúdos a serem vistos.
*/
/*
let pecadexadrez=/rainha/i
função(pecadexadrez); {
    função(movimentar); {
        if (pecadexadrez==movimentospossiveis && destino==vazio){
            função(avança)
        } else {
            console.log("Movimento inválido")
        }
    }
}
*/
/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let nota

if (nota>=90 && nota<=100) {
    console.log("Nota A")
} else if (nota>=80 && nota<90) {
    console.log("Nota B")
} else if (nota>=70 && nota<80) {
    console.log("Nota C")
} else if (nota>=60 && nota<70) {
    console.log("Nota D")
} else if (nota>=50 && nota<60) {
    console.log("Nota E")
} else if (nota>=0 && nota<50) {
    console.log("Nota F")
} else {
    console.log("Nota Inválida")
} 

/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

