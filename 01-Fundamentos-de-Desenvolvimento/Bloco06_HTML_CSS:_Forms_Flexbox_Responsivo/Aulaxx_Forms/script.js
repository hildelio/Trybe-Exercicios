// SELETORES
// Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

const HREF_LINK = document.querySelector("#href").addEventListener('click' , function link(event) {
    event.preventDefault();
});

// Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

const INPUT_CHECKBOX = document.querySelector("#input-checkbox").addEventListener('click', function checkbox(event) {
    event.preventDefault();
});

// Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)

const INPUT_TEXT = document.querySelector("#input-text").addEventListener('click', function text(event) {
    event.preventDefault();
});


