import "../styles/style.scss";

type MemoryCard = {
    id: number;
    symbol: string;
    isMatched: boolean;
};

const gameBoard = document.querySelector<HTMLElement>("#game-board");
const movesElement = document.querySelector<HTMLElement>("#moves");
const pairsElement = document.querySelector<HTMLElement>("#pairs");
const restartButton = document.querySelector<HTMLButtonElement>("#restart-button");

if (!gameBoard || !movesElement || !pairsElement || !restartButton) {
    throw new Error("Ein benötigtes HTML-Element wurde nicht gefunden.");
}

const board = gameBoard;
const movesDisplay = movesElement;
const pairsDisplay = pairsElement;
const restart = restartButton;

const symbols: string[] = [
    "🍎",
    "🍌",
    "🍇",
    "🍓",
    "🍒",
    "🥝",
    "🍋",
    "🍉"
];

let cards: MemoryCard[] = [];

let firstCard: HTMLButtonElement | null = null;
let secondCard: HTMLButtonElement | null = null;

let firstCardId: number | null = null;
let secondCardId: number | null = null;

let moves: number = 0;
let foundPairs: number = 0;

let boardLocked: boolean = false;


/* -------------------------
   SPIEL STARTEN
------------------------- */

function startGame(): void {
    moves = 0;
    foundPairs = 0;

    firstCard = null;
    secondCard = null;

    firstCardId = null;
    secondCardId = null;

    boardLocked = false;

    movesDisplay.textContent = "0";
    pairsDisplay.textContent = "0";

    createCards();
    shuffleCards();
    renderCards();
}


/* -------------------------
   KARTEN ERSTELLEN
------------------------- */

function createCards(): void {
    const duplicatedSymbols = [
        ...symbols,
        ...symbols
    ];

    cards = duplicatedSymbols.map((symbol, index) => {
        return {
            id: index + 1,
            symbol: symbol,
            isMatched: false
        };
    });
}


/* -------------------------
   KARTEN MISCHEN
------------------------- */

function shuffleCards(): void {
    for (let i = cards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [cards[i], cards[randomIndex]] = [
            cards[randomIndex],
            cards[i]
        ];
    }
}


/* -------------------------
   KARTEN ANZEIGEN
------------------------- */

function renderCards(): void {
    board.innerHTML = "";

    cards.forEach((card) => {
        const cardElement = document.createElement("button");

        cardElement.classList.add("memory-card");
        cardElement.type = "button";
        cardElement.dataset.id = card.id.toString();
        cardElement.setAttribute("aria-label", "Memory-Karte");

        const cardInner = document.createElement("span");
        cardInner.classList.add("memory-card__inner");

        const cardBack = document.createElement("span");
        cardBack.classList.add("memory-card__back");
        cardBack.textContent = "?";

        const cardFront = document.createElement("span");
        cardFront.classList.add("memory-card__front");
        cardFront.textContent = card.symbol;

        cardInner.appendChild(cardBack);
        cardInner.appendChild(cardFront);

        cardElement.appendChild(cardInner);

        cardElement.addEventListener("click", () => {
            flipCard(cardElement, card);
        });

        board.appendChild(cardElement);
    });
}


/* -------------------------
   KARTE UMDREHEN
------------------------- */

function flipCard(
    cardElement: HTMLButtonElement,
    card: MemoryCard
): void {

    if (boardLocked) {
        return;
    }

    if (card.isMatched) {
        return;
    }

    if (cardElement === firstCard) {
        return;
    }

    cardElement.classList.add("flipped");

    if (firstCard === null) {
        firstCard = cardElement;
        firstCardId = card.id;

        return;
    }

    secondCard = cardElement;
    secondCardId = card.id;

    moves++;
    movesDisplay.textContent = moves.toString();

    checkForMatch();
}


/* -------------------------
   KARTEN VERGLEICHEN
------------------------- */

function checkForMatch(): void {
    if (
        firstCardId === null ||
        secondCardId === null ||
        firstCard === null ||
        secondCard === null
    ) {
        return;
    }

    const firstCardData = cards.find(
        (card) => card.id === firstCardId
    );

    const secondCardData = cards.find(
        (card) => card.id === secondCardId
    );

    if (!firstCardData || !secondCardData) {
        return;
    }

    if (firstCardData.symbol === secondCardData.symbol) {
        handleMatch(firstCardData, secondCardData);
    } else {
        handleNoMatch();
    }
}


/* -------------------------
   PAAR GEFUNDEN
------------------------- */

function handleMatch(
    firstCardData: MemoryCard,
    secondCardData: MemoryCard
): void {

    firstCardData.isMatched = true;
    secondCardData.isMatched = true;

    firstCard?.classList.add("matched");
    secondCard?.classList.add("matched");

    foundPairs++;

    pairsDisplay.textContent = foundPairs.toString();

    resetTurn();

    checkGameEnd();
}


/* -------------------------
   KEIN PAAR
------------------------- */

function handleNoMatch(): void {
    boardLocked = true;

    setTimeout(() => {
        if (firstCard) {
            firstCard.classList.remove("flipped");
        }

        if (secondCard) {
            secondCard.classList.remove("flipped");
        }

        resetTurn();

        boardLocked = false;
    }, 800);
}


/* -------------------------
   SPIELZUG ZURÜCKSETZEN
------------------------- */

function resetTurn(): void {
    firstCard = null;
    secondCard = null;

    firstCardId = null;
    secondCardId = null;
}


/* -------------------------
   SPIELENDE PRÜFEN
------------------------- */

function checkGameEnd(): void {
    if (foundPairs === symbols.length) {
        setTimeout(() => {
            alert(
                `Geschafft! Du hast alle Paare in ${moves} Zügen gefunden.`
            );
        }, 300);
    }
}


/* -------------------------
   NEU STARTEN
------------------------- */

restart.addEventListener("click", () => {
    startGame();
});


/* -------------------------
   ERSTES SPIEL STARTEN
------------------------- */

startGame();