const input = document.querySelector('.menu__input');
const button = document.querySelector('.menu__button');
const form = document.querySelector('.menu-form');

const validateInput = ({ target }) => {
	if (target.value.length > 2) {
		button.removeAttribute('disabled');
		return;
	}

	button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
	event.preventDefault();
	if (document.querySelector("input").value.length < 3) return;
	localStorage.setItem('playerAName', input.value);
	window.location = 'pages/mode.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);