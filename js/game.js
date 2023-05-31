const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");

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

let players = [
    {
        name: 'Player1',
        id: 'PlayerA',
        score: 0,
        turn: true,
		color: '#0000FF',
    },
    {
        name: 'Player2',
        id: 'PlayerB',
        score: 0,
        turn: false,
		color: '#FF0000',
    },
]

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");
    const numberOfQuestions = difficulty[localStorage.getItem("difficulty")]

    if (disabledCards.length === numberOfQuestions * 2) {
        clearInterval(this.loop);
        // alert(
        //     `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`
        // );
        window.location = 'game.html';
    }
};

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute("id");
    const secondCharacter = secondCard.getAttribute("id");

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add("disabled-card");
        secondCard.firstChild.classList.add("disabled-card");

		firstCard

        firstCard = "";
        secondCard = "";

		switchPlayer(getTurnOwner());
        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = "";
            secondCard = "";
			
			switchPlayer(getTurnOwner());
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

function getTurnOwner() {
    for(let i=0; i<players.length; i++) {
        if (players[i]['turn']) return i;
    }
}

const switchPlayer = (playerTurnIndex) => {
	console.log(playerTurnIndex)
	if (playerTurnIndex === players.length - 1) {
		players[0]['turn'] = true;
	} else {
		players[playerTurnIndex+1]['turn'] = true;
	}
	players[playerTurnIndex]['turn'] = false;

	updatePlayerColors(getTurnOwner());
}

const updatePlayerColors = (playerTurnIndex) => {
	console.log(players[playerTurnIndex].color)
	document.querySelectorAll('.face').forEach(x => {
		if (!x.classList.contains('disabled-card')) {
			x.style = 'border: 5px solid ' + players[playerTurnIndex].color
		}
	});
}

const setPlayers = () => {
    const mode = localStorage.getItem("mode");
	const headerContainer = document.querySelector('.header-container');

	const createPlayer = (playerName) => {
		const header = document.createElement('header');
		const player = document.createElement('span');
		const score = document.createElement('span');

		player.innerHTML = playerName;

		header.appendChild(player);
		header.appendChild(score);
		headerContainer.appendChild(header);
	}
	
	if (mode === 'single') {
		createPlayer(localStorage.getItem("player"));		
	} else if (mode === 'local') {
		createPlayer(localStorage.getItem("player"));		
		// createPlayer('Player 2');
	} else if (mode === 'p2p') {
	
	} else {
		throw new Error('Modo de jogo não suportado.')
	}
}

window.onload = () => {
	setPlayers();
    loadGame();
};
