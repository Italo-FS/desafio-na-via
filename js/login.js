const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

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
	window.location = 'pages/difficulty.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);