// Acesse o elemento elementoOndeVoceEsta.

console.log(document.getElementById("elementoOndeVoceEsta"));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

console.log(document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "Red");

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let pF = document.getElementById("primeiroFilhoDoFilho").innerText = 'primeiroFilhoDoFilho'

// Acesse o primeiroFilho a partir de pai.

console.log(document.getElementById("pai").firstChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(document.getElementById("elementoOndeVoceEsta").previousSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling.nextSibling);

//Agora acesse o terceiroFilho a partir de pai.

console.log(document.getElementById("pai").lastElementChild.previousElementSibling);

// Crie um irmão para elementoOndeVoceEsta.

let pai = document.getElementById("pai");
let novoIrmaozinho = document.createElement("section");
novoIrmaozinho.innerText = 'Novo Irmãozinho';
pai.appendChild(novoIrmaozinho);
console.log(novoIrmaozinho);

// Crie um filho para elementoOndeVoceEsta.

let eu = document.getElementById("elementoOndeVoceEsta");
let novoFilhinho = document.createElement("section");
novoFilhinho.innerText = 'Novo Filhinho';
eu.appendChild(novoFilhinho);
console.log(novoFilhinho);

// Crie um filho para primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let novoNetinho = document.createElement("section");
novoNetinho.innerText = 'Novo Netinho';
primeiroFilhoDoFilho.appendChild(novoNetinho);
console.log(novoNetinho); 

// A partir desse filho criado, acesse terceiroFilho.

let neto = document.querySelector("#primeiroFilhoDoFilho section");
console.log(neto.parentNode.parentNode.nextSibling.nextSibling);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let paiDoPai = document.querySelectorAll("#paiDoPai");
paiDoPai.className = "paiDopai"
let paiDoPai2 = document.querySelectorAll(".paiDoPai")
console.log(paiDoPai2);
for (const tudo of paiDoPai2) {
    if (tudo !== document.getElementById("pai") || tudo !== document.getElementById("elementoOndeVoceEsta") || tudo !== document.getElementById("primeiroFilhoDoFilho")) {
        paiDoPai2.removeChild(tudo);
    }
    console.log(paiDoPai2);
}
// Acredito que o problema seja porque estou gerando uma Node list com o QueryselectorAll e estou tendo problemas com a identificação dos elementos HTML.

console.log(document.getElementById('stark_childs').lastChild)
 