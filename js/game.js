const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const timer = document.querySelector(".timer");

const difficulty = {
  easy: 4,
  medium: 9,
  hard: 14,
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");
    const numberOfQuestions = difficulty[localStorage.getItem("difficulty")]

    if (disabledCards.length === numberOfQuestions * 2) {
        clearInterval(this.loop);
        alert(
            `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`
        );
        window.location = 'game.html';
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

        checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = "";
            secondCard = "";
        }, 500);
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

function sortQuestions() {
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
        selectedCards.push({ id: x.id, content: x.question });
        selectedCards.push({ id: x.id, content: `R: ${x.answer}` });
    });

    const shuffledArray = selectedCards.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((x) => {
        const card = createCard(x.id, x.content);
        grid.appendChild(card);
    });
};

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
};

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem("player");
    startTimer();
    loadGame();
};
