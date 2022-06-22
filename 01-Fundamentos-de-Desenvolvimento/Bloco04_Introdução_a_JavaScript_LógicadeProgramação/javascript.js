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

const num1=10
const num2=47
const num3=72

if (num1%2==0 || num2%2==0 || num3%2==0) {
    console.log(false)
} else {
    console.log(true)
}

/*
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

const num4=105
const num5=472
const num6=728

if (num4%2!=0 || num5%2!=0 || num6%2!=0) {
    console.log(true)
} else {
    console.log(false)
}

/*
Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

const valorCusto= 50
const valorVenda= 100
const quantidade= 1000

let receita = quantidade*valorVenda 
let impostoSobreOCusto= valorCusto*(20/100)
let valorCustoTotal= quantidade*(valorCusto + impostoSobreOCusto)
let lucro= receita - valorCustoTotal

if (valorCusto==0 || valorVenda==0) {
    console.log("Valores Inválidos")
} else {
    console.log(lucro)
}

/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/

const salarioBruto = 3000

if (salarioBruto>0 && salarioBruto<=1556.94) {
    console.log(salarioBruto*(92/100))
} else if (salarioBruto>=1556.95 && salarioBruto<1903.99) {
    console.log(salarioBruto*(91/100))
} else if (salarioBruto>=1903.99 && salarioBruto<=2594.92) {
    console.log((salarioBruto*(83.5/100))+142.80)
} else if (salarioBruto>= 2594.93 && salarioBruto<=2826.65) {
    console.log((salarioBruto*(81.5/100))+142.80)
} else if (salarioBruto>=2826.66 && salarioBruto<=3751.05) {
    console.log((salarioBruto*(74/100))+354.80)
} else if (salarioBruto>=3751.06 && salarioBruto<=4664.68) {
    console.log((salarioBruto*(66.5/100))+636.13)
} else if (salarioBruto>4664.68 && salarioBruto<=5189.82) {
    console.log((salarioBruto*(61.5/100))+869.36)
} else if (salarioBruto>5189.82) {
    console.log((salarioBruto*(72.5/100))+869.36-570.88)
} else {
    console.log("Valor Inválido!")
}   
