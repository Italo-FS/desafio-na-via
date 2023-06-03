const button_single = document.querySelector('.mode__button_singleplayer');
const button_local = document.querySelector('.mode__button_local_multiplayer');
const button_p2p = document.querySelector('.mode__button_p2p_multiplayer');

function setMode(mode) {
	localStorage.setItem('mode', mode);
	if (mode === 'single' || mode === 'local') {
		window.location = 'game.html';
	} else if (mode === 'p2p') {
		window.location = 'connection.html';
	} else {
		throw new Error('Modo de jogo não suportado.')
	}
}

button_single.addEventListener('click', function () {
	setMode('single');
});

button_local.addEventListener('click', function () {
	setMode('local');
});

// button_p2p.addEventListener('click', function () {
// 	setMode('p2p');
// });