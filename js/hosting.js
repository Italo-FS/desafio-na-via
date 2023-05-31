const button_p2p = document.querySelector('.mode__button_p2p_copy');

function copyToken() {
	var text = document.getElementById("textoffer").innerHTML;

	navigator.clipboard.writeText(text)
	.then(() => {
		console.log('Text copied to clipboard');
	})
	.catch(err => {
		console.error('Error in copying text: ', err);
	});
}

button_p2p.addEventListener('click', function () {
	copyToken();
});