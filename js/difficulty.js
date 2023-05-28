const button_easy = document.querySelector('.difficulty__button_easy');
const button_medium = document.querySelector('.difficulty__button_medium');
const button_hard = document.querySelector('.difficulty__button_hard');

function setDifficulty(difficulty) {  
  localStorage.setItem('difficulty', difficulty);
  window.location = 'mode.html';
}

button_easy.addEventListener('click', function() {
  setDifficulty('easy');
});

button_medium.addEventListener('click', function() {
  setDifficulty('medium');
});

button_hard.addEventListener('click', function() {
  setDifficulty('hard');
});
