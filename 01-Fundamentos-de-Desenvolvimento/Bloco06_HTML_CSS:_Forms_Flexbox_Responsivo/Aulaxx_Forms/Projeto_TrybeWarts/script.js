const form = document.querySelector('.trybewarts-login');
form.addEventListener('submit', function(event) {
  if (document.getElementById('login').value === 'tryber@test.com' && document.getElementById('senha').value === '123456') {
    event.preventDefault();
    alert('Olá Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
})