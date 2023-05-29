const button_host = document.querySelector('.mode__button_p2p_host');
const button_join = document.querySelector('.mode__button_p2p_join');

function choiseMode(choise) {
	if (choise === 'host') {
		window.location = 'hosting.html';
	} else if (choise === 'join') {
		window.location = 'joining.html';
	} else {
		throw new Error('Modo de jogo não suportado.')
	}
}

button_host.addEventListener('click', function () {
	choiseMode('host');
});

button_join.addEventListener('click', function () {
	choiseMode('join');
});
