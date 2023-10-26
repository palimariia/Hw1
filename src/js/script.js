var nam = document.getElementById('namexx');
if (nam) {
    
    nam.addEventListener('input', function() {
    var inputName = this.value;
    var nameShow = document.getElementById('name_show');
    nameShow.innerText = inputName;
    });  
}


var bir = document.getElementById('birth');
if (bir) {
    
    bir.addEventListener('input', function() {
    var inputBirth = this.value;
    var birthShow = document.getElementById('birth_show');
    birthShow.innerText = inputBirth;
    });  
}

var about = document.getElementById('inf');
if (about) {
    
    about.addEventListener('input', function() {
    var inputInf = this.value;
    var aboutShow = document.getElementById('about_show');
    aboutShow.innerText = inputInf;
    });  
}

const nameInput = document.getElementById('namexx');
const nameErrorSpan = document.querySelector('.error'); // Изменил имя переменной на nameErrorSpan

nameInput.addEventListener('input', function() {
  const name = this.value;

  if (!/^[\u0400-\u04FF\s]+$/.test(name)) {
    this.classList.add('error-input');
    nameErrorSpan.classList.add('error-displayed');
  } else {
    this.classList.remove('error-input');
    nameErrorSpan.classList.remove('error-displayed');
  }
});

nameInput.addEventListener('focus', function() {
  this.classList.remove('error-input');
  nameErrorSpan.classList.remove('error-displayed');
});

const telegramInput = document.getElementById('telegram');
const telegramErrorSpan = document.querySelector('.error'); // Изменил имя переменной на telegramErrorSpan

telegramInput.addEventListener('input', function() {
  const username = this.value;

  if (!/^@[a-zA-Z]+$/.test(username)) {
    this.classList.add('error-input');
    telegramErrorSpan.classList.remove('hidden');
  } else {
    this.classList.remove('error-input');
    telegramErrorSpan.classList.add('hidden');
  }
});

telegramInput.addEventListener('focus', function() {
  this.classList.remove('error-input');
  telegramErrorSpan.classList.add('hidden');
});

const phoneInput = document.getElementById('phone');
const phoneErrorSpan = document.querySelector('#phone + .error');

phoneInput.addEventListener('input', function() {
  const phoneNumber = this.value;

  if (!/^[0-9+]+$/.test(phoneNumber)) {
    this.classList.add('error-input');
    phoneErrorSpan.classList.remove('hidden');
  } else {
    this.classList.remove('error-input');
    phoneErrorSpan.classList.add('hidden');
  }
});

phoneInput.addEventListener('focus', function() {
  this.classList.remove('error-input');
  phoneErrorSpan.classList.add('hidden');
});