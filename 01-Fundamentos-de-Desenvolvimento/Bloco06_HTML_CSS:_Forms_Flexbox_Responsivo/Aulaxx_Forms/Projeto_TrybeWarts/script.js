const login = document.querySelector('.trybewarts-login');
login.addEventListener('submit', function(event) {
  if (document.getElementById('login').value === 'tryber@test.com' && document.getElementById('senha').value === '123456') {
    event.preventDefault();
    alert('Olá Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function ableDisableButton() {
  const agree = document.querySelector('#agreement');
  const button = document.querySelector('#submit-btn');
  if (agree.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

let count = 500;
let counter = document.getElementById('counter');
const textarea = document.querySelector('#textarea');
textarea.addEventListener('keypress', function(event) {
count = 500 - (textarea.value.length + 1);
counter.innerText = count + ' caracteres restantes.';
});

const form = document.querySelector('#evaluation-form');
form.addEventListener('submit', function(event) {
  
  // const all = document.querySelectorAll('#evaluation-form')
  // for (let i = 0; i < all.length; i += 1) {
  //   console.log(all[i].value)
  // }
  
  
});