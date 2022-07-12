const login = document.querySelector('.trybewarts-login');
login.addEventListener('submit', function(event) {
  if (document.getElementById('login').value === 'tryber@test.com' && document.getElementById('senha').value === '123456') {
    event.preventDefault();
    alert('Olá Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
})

const form = document.getElementById('evaluation-form')
document.addEventListener('submit', function(event) {
  const agree = document.getElementById('agreement') 
  const button = document.getElementById('submit-btn')
  if (agree.checked) {
    button.disabled = false
  } else {
    button.disabled = true
  }
})
