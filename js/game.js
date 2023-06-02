const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");

const buttonReloadGame = document.querySelector('.game__button_playAgain');
const buttonGiveUpGame = document.querySelector('.game__button_giveUp');

buttonReloadGame.addEventListener('click', () => {
	document.querySelector('.game-message').hidden = true;
	window.location = 'game.html';
});

buttonGiveUpGame.addEventListener('click', () => {
	clearInterval(this.loop);

	document.querySelector('#mainMessage').innerHTML = `Entendemos que nem sempre as coisas saem como esperado, e respeitamos sua decisão.<br><br>Apesar de você ter do jogo, ainda gostaríamos de contar com sua participação na pesquisa de usabilidade relacionada a
	ele. Sua opinião nos ajuda a aprimorar ainda mais o jogo e torná-lo uma ferramenta ainda melhor para a
	educação e conscientização sobre as regras e práticas de segurança no trânsito.
	<br><br> Clique no seguinte <a href="https://forms.gle/3S8ZK1ApnFpP8DBK9">link</a> para acessar o formulário
	de 	pesquisa.`

	document.querySelector('.game-message').hidden = false;
});

const difficulty = {
	easy: 3,
	medium: 5,
	hard: 7,
}

const createElement = (tag, className) => {
	const element = document.createElement(tag);
	element.className = className;
	return element;
};

let firstCard = "";
let secondCard = "";

let players = new Players();

//   =============================================================================

const checkEndGame = () => {
	const disabledCards = document.querySelectorAll(".disabled-card");
	const numberOfQuestions = difficulty[localStorage.getItem("difficulty")]

	if (disabledCards.length === numberOfQuestions * 2) {
		clearInterval(this.loop);

		document.querySelector('#mainMessage').innerHTML = `Parabéns ${players.getActualPlayer().name}!<br><br>
		Agora, gostaríamos de pedir sua ajuda para preencher uma pesquisa importante de usabilidade. Sua opinião é
		valiosa para nós, pois nos ajuda a aprimorar ainda mais o jogo e torná-lo uma ferramenta ainda melhor para a
		educação e conscientização sobre as regras e práticas de segurança no trânsito.
		<br><br> Clique no seguinte <a href="https://forms.gle/3S8ZK1ApnFpP8DBK9">link</a> para acessar o formulário
		de pesquisa.
		`
		document.querySelector('.game-message').hidden = false;
	}
};

const checkCards = () => {
	const firstCharacter = firstCard.getAttribute("id");
	const secondCharacter = secondCard.getAttribute("id");

	if (firstCharacter === secondCharacter) {
		firstCard.firstChild.classList.add("disabled-card");
		secondCard.firstChild.classList.add("disabled-card");

		firstCard = "";
		secondCard = "";

		players.addScoreToActualPlayer(1)
		checkEndGame();
		// players.switchTurn();
	} else {
		setTimeout(() => {
			firstCard.classList.remove("reveal-card");
			secondCard.classList.remove("reveal-card");

			firstCard = "";
			secondCard = "";

			players.switchTurn();
		}, 1000);
	}
};

const revealCard = ({ target }) => {
	if (target.parentNode.className.includes("reveal-card")) {
		return;
	}

	if (firstCard === "") {
		target.parentNode.classList.add("reveal-card");
		firstCard = target.parentNode;
	} else if (secondCard === "") {
		target.parentNode.classList.add("reveal-card");
		secondCard = target.parentNode;
		checkCards();
	}
};

const sortQuestions = () => {
	const sorteio = [];
	const numberOfQuestions = difficulty[localStorage.getItem("difficulty")]

	for (let i = 0; i < numberOfQuestions; i++) {
		const indice = Math.floor(Math.random() * questions.length);
		const elemento = questions.splice(indice, 1)[0];
		sorteio.push(elemento);
	}

	return sorteio;
}

const createCard = (id, content) => {
	const card = createElement("div", "card");
	const front = createElement("div", "face front");
	const back = createElement("div", "face back");
	const p = createElement("p", "card-content");

	p.innerHTML = content;

	front.appendChild(p);
	card.appendChild(front);
	card.appendChild(back);

	card.addEventListener("click", revealCard);
	card.setAttribute("id", id);

	return card;
};

const loadGame = () => {
	const sortedCards = sortQuestions();
	let selectedCards = [];
	sortedCards.map((x) => {
		selectedCards.push({ id: x.id, content: `Pergunta<br>${x.question}` });
		selectedCards.push({ id: x.id, content: `Resposta<br>${x.answer}` });
	});

	const shuffledArray = selectedCards.sort(() => Math.random() - 0.5);

	shuffledArray.forEach((x) => {
		const card = createCard(x.id, x.content);
		grid.appendChild(card);
	});
};

const setCardColors = (color) => {
	document.querySelectorAll('.face').forEach(x => {
		if (!x.classList.contains('disabled-card')) {
			x.style.borderColor = color
		}
	});
}

const setPlayers = () => {
	const mode = localStorage.getItem("mode");
	if (mode === 'single') {
		players.addPlayer(localStorage.getItem("playerAName"), "#E68301");
	} else if (mode === 'local') {
		players.addPlayer(localStorage.getItem("playerAName"), '#0000FF');
		players.addPlayer("Player2", '#FF0000');
	} else if (mode === 'p2p') {

	} else {
		throw new Error('Modo de jogo não suportado.')
	}
}

function Players() {
	this.__players = [];

	this.addPlayer = (playerName, playerColor) => {
		this.__players.push(new Player(playerName, playerColor))
	}

	this.getTurnOwner = () => {
		for (let i = 0; i < this.__players.length; i++) {
			if (this.__players[i].getTurn()) return i;
		}
		return 0;
	}

	this.getActualPlayer = () => {
		return this.__players[this.getTurnOwner()];
	}

	this.switchTurn = (index = -1) => {
		if (index === -1) {
			playerTurnIndex = this.getTurnOwner();
			this.__players[playerTurnIndex].setTurn(false);
			if (playerTurnIndex === this.__players.length - 1) {
				this.__players[0].setTurn(true);
			} else {
				this.__players[playerTurnIndex + 1].setTurn(true);
			}
		} else if (index >= 0) {
			this.getActualPlayer().setTurn(false);
			this.__players[index].setTurn(true);
		} else {
			throw new Error('Erro: index não encontrado.')
		}
	}

	this.addScoreToActualPlayer = (score) => {
		this.getActualPlayer().addScore(score);
	}
}

function Player(playerName, playerColor) {
	this.__createToken = () => {
		var rand = function () {
			return Math.random().toString(36).substr(2); // remove `0.`
		};
		return rand() + rand(); // to make it longer
	};

	this.__createElements = (playerToken) => {
		const headerContainer = document.querySelector('.header-container');
		const header = document.createElement('header');
		header.id = playerToken;

		const player = document.createElement('span');
		const score = document.createElement('span');

		player.innerHTML = playerName;
		score.id = 'score_' + this.id;

		header.appendChild(player);
		header.appendChild(score);
		headerContainer.appendChild(header);
		header.style.borderColor = this.color;
	}

	this.getTurn = () => {
		return this.turn;
	}

	this.setTurn = (mode) => {
		this.turn = mode;
		if (mode === true) setCardColors(this.color);
	}

	this.getColor = () => {
		return this.color;
	}

	this.addScore = (score) => {
		this.score += score;
		this.updateScore();
	}

	this.updateScore = () => {
		try {
			document.getElementById('score_' + this.id).innerHTML = this.score;
		} catch {
			throw new Error('Erro ao tentar alterar o elemento de score do player');
		}
	}

	this.name = playerName;
	this.id = this.__createToken();
	this.score = 0;
	this.turn = false;
	this.color = playerColor;

	this.__createElements(this.__createToken());
	this.updateScore();
}

window.onload = () => {
	setPlayers();
	loadGame();
	players.switchTurn(0);
};
