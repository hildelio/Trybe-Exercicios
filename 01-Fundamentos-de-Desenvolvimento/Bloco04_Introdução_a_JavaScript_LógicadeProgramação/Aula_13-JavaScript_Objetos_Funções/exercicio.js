/*
Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
*/

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for (let key in names) {
    console.log('Olá ' + names[key]);
}

/*
 Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
*/

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (const key in car) {
    console.log(key, car[key])
}


//Imprima no console uma mensagem de boas-vindas para a personagem abaixo, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-Vinda, ' + info.personagem + '!');

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim'

//  Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let key in info) {
    console.log(key)
}

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let key in info) {
    console.log(info[key])
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

novoObjeto = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes'
};

for (let key in novoObjeto) {
    console.log(novoObjeto[key])
}

// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
let qLivros
if (leitor.livrosFavoritos < []) {
    qLivros = 'Nenhum Livro'
} else if (leitor.livrosFavoritos === []) {
    qLivros = 1
} else if (leitor.livrosFavoritos === [],[]) {
    qLivros = 2
} else {
    qLivros = 'muitos'
}
console.log(leitor.nome + ' tem ' + qLivros + ' livros favoritos.')

