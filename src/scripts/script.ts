import "../styles/style.scss";

type ThemeName = "coding" | "gaming" | "academy" | "food";
type Player = "blue" | "orange";
type BoardSize = 16 | 24 | 36;

type MemoryCard = {
    id: number;
    symbol: string;
    isMatched: boolean;
};

type MemoryTheme = {
    name: string;
    symbols: string[];
};


/* -------------------------
   THEMES
------------------------- */

const themes: Record<ThemeName, MemoryTheme> = {
    coding: {
        name: "Code vibes",
        symbols: [
            "💻", "⌨️", "🖱️", "🧑‍💻", "⚙️", "🗄️",
            "🌐", "🐞", "📱", "🔧", "📂", "🔒",
            "🚀", "🧠", "💾", "🔗", "🖥️", "📡"
        ]
    },

    gaming: {
        name: "Gaming",
        symbols: [
            "🎮", "🕹️", "👾", "🏆", "🎯", "⚔️",
            "🛡️", "💎", "👑", "🔥", "💣", "🚗",
            "🏎️", "🧩", "🎲", "🐉", "🦸", "🥇"
        ]
    },

    academy: {
        name: "DA Projects",
        symbols: [
            "📚", "📝", "💻", "🎓", "📊", "🧑‍💻",
            "📋", "🗂️", "🔨", "⚙️", "🚀", "🌐",
            "📱", "🧠", "💡", "🛠️", "📈", "🏁"
        ]
    },

    food: {
        name: "Foods",
        symbols: [
            "🍕", "🍔", "🌮", "🍟", "🍣", "🍩",
            "🍪", "🥗", "🍝", "🥐", "🍓", "🍉",
            "🥑", "🍰", "🥞", "🍎", "🍌", "🥝"
        ]
    }
};


/* -------------------------
   HTML ELEMENTE
------------------------- */

const settingsElement =
    document.querySelector<HTMLElement>("#settings");

const gameElement =
    document.querySelector<HTMLElement>("#game");

const gameBoard =
    document.querySelector<HTMLElement>("#game-board");

const startButton =
    document.querySelector<HTMLButtonElement>("#start-button");

const exitButton =
    document.querySelector<HTMLButtonElement>("#exit-button");

const blueScoreElement =
    document.querySelector<HTMLElement>("#blue-score");

const orangeScoreElement =
    document.querySelector<HTMLElement>("#orange-score");

const currentPlayerElement =
    document.querySelector<HTMLElement>("#current-player");

const selectedThemeElement =
    document.querySelector<HTMLElement>("#selected-theme");

const selectedPlayerElement =
    document.querySelector<HTMLElement>("#selected-player");

const selectedSizeElement =
    document.querySelector<HTMLElement>("#selected-size");


if (
    !settingsElement ||
    !gameElement ||
    !gameBoard ||
    !startButton ||
    !exitButton ||
    !blueScoreElement ||
    !orangeScoreElement ||
    !currentPlayerElement ||
    !selectedThemeElement ||
    !selectedPlayerElement ||
    !selectedSizeElement
) {
    throw new Error(
        "Ein benötigtes HTML-Element wurde nicht gefunden."
    );
}


/* -------------------------
   SICHERE REFERENZEN
------------------------- */

const settings = settingsElement;
const game = gameElement;
const board = gameBoard;

const start = startButton;
const exit = exitButton;

const blueScoreDisplay = blueScoreElement;
const orangeScoreDisplay = orangeScoreElement;
const currentPlayerDisplay = currentPlayerElement;

const selectedThemeDisplay = selectedThemeElement;
const selectedPlayerDisplay = selectedPlayerElement;
const selectedSizeDisplay = selectedSizeElement;


/* -------------------------
   SPIELZUSTAND
------------------------- */

let currentTheme: ThemeName = "coding";
let startingPlayer: Player = "blue";
let currentPlayer: Player = "blue";
let boardSize: BoardSize = 16;

let cards: MemoryCard[] = [];

let firstCard: HTMLButtonElement | null = null;
let secondCard: HTMLButtonElement | null = null;

let firstCardId: number | null = null;
let secondCardId: number | null = null;

let blueScore = 0;
let orangeScore = 0;

let foundPairs = 0;
let boardLocked = false;


/* -------------------------
   SETTINGS AUSLESEN
------------------------- */

function getSelectedTheme(): ThemeName {
    const input =
        document.querySelector<HTMLInputElement>(
            'input[name="theme"]:checked'
        );

    return (input?.value as ThemeName) ?? "coding";
}


function getSelectedPlayer(): Player {
    const input =
        document.querySelector<HTMLInputElement>(
            'input[name="player"]:checked'
        );

    return (input?.value as Player) ?? "blue";
}


function getSelectedBoardSize(): BoardSize {
    const input =
        document.querySelector<HTMLInputElement>(
            'input[name="board-size"]:checked'
        );

    const size = Number(input?.value);

    if (size === 24) {
        return 24;
    }

    if (size === 36) {
        return 36;
    }

    return 16;
}


/* -------------------------
   SETTINGS ANZEIGE
------------------------- */

function updateSettingsSummary(): void {
    const theme = getSelectedTheme();
    const player = getSelectedPlayer();
    const size = getSelectedBoardSize();

    selectedThemeDisplay.textContent =
        themes[theme].name;

    selectedPlayerDisplay.textContent =
        player === "blue" ? "Blue" : "Orange";

    selectedSizeDisplay.textContent =
        `${size} cards`;
}


/* -------------------------
   SETTINGS EVENTS
------------------------- */

const settingInputs =
    document.querySelectorAll<HTMLInputElement>(
        'input[type="radio"]'
    );

settingInputs.forEach((input) => {
    input.addEventListener(
        "change",
        updateSettingsSummary
    );
});


/* -------------------------
   SPIEL STARTEN
------------------------- */

function startGame(): void {
    currentTheme = getSelectedTheme();
    startingPlayer = getSelectedPlayer();
    currentPlayer = startingPlayer;
    boardSize = getSelectedBoardSize();

    blueScore = 0;
    orangeScore = 0;
    foundPairs = 0;

    firstCard = null;
    secondCard = null;

    firstCardId = null;
    secondCardId = null;

    boardLocked = false;

    updateScores();
    updateCurrentPlayer();

    createCards();
    shuffleCards();
    setBoardLayout();
    renderCards();

    settings.classList.add("hidden");
    game.classList.remove("hidden");
}


/* -------------------------
   KARTEN ERSTELLEN
------------------------- */

function createCards(): void {
    const pairCount = boardSize / 2;

    const selectedSymbols =
        themes[currentTheme].symbols.slice(
            0,
            pairCount
        );

    const duplicatedSymbols = [
        ...selectedSymbols,
        ...selectedSymbols
    ];

    cards = duplicatedSymbols.map(
        (symbol, index) => {
            return {
                id: index + 1,
                symbol,
                isMatched: false
            };
        }
    );
}


/* -------------------------
   KARTEN MISCHEN
------------------------- */

function shuffleCards(): void {
    for (
        let i = cards.length - 1;
        i > 0;
        i--
    ) {
        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            cards[i],
            cards[randomIndex]
        ] = [
            cards[randomIndex],
            cards[i]
        ];
    }
}


/* -------------------------
   BOARD GRÖSSE
------------------------- */

function setBoardLayout(): void {
    board.classList.remove(
        "game-board--16",
        "game-board--24",
        "game-board--36"
    );

    board.classList.add(
        `game-board--${boardSize}`
    );
}


/* -------------------------
   KARTEN ANZEIGEN
------------------------- */

function renderCards(): void {
    board.innerHTML = "";

    cards.forEach((card) => {
        const cardElement =
            document.createElement("button");

        cardElement.classList.add(
            "memory-card"
        );

        cardElement.type = "button";

        cardElement.dataset.id =
            card.id.toString();

        cardElement.setAttribute(
            "aria-label",
            "Memory-Karte"
        );

        const cardInner =
            document.createElement("span");

        cardInner.classList.add(
            "memory-card__inner"
        );


        const cardBack =
            document.createElement("span");

        cardBack.classList.add(
            "memory-card__back"
        );

        cardBack.textContent = "</>";


        const cardFront =
            document.createElement("span");

        cardFront.classList.add(
            "memory-card__front"
        );

        cardFront.textContent =
            card.symbol;


        cardInner.appendChild(cardBack);
        cardInner.appendChild(cardFront);

        cardElement.appendChild(cardInner);


        cardElement.addEventListener(
            "click",
            () => {
                flipCard(
                    cardElement,
                    card
                );
            }
        );

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


    const firstCardData =
        cards.find(
            (card) =>
                card.id === firstCardId
        );


    const secondCardData =
        cards.find(
            (card) =>
                card.id === secondCardId
        );


    if (
        !firstCardData ||
        !secondCardData
    ) {
        return;
    }


    if (
        firstCardData.symbol ===
        secondCardData.symbol
    ) {
        handleMatch(
            firstCardData,
            secondCardData
        );
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

    addPoint();

    resetTurn();

    checkGameEnd();
}


/* -------------------------
   PUNKT VERGEBEN
------------------------- */

function addPoint(): void {
    if (currentPlayer === "blue") {
        blueScore++;
    } else {
        orangeScore++;
    }

    updateScores();
}


/* -------------------------
   KEIN PAAR
------------------------- */

function handleNoMatch(): void {
    boardLocked = true;

    setTimeout(() => {
        firstCard?.classList.remove(
            "flipped"
        );

        secondCard?.classList.remove(
            "flipped"
        );

        resetTurn();

        switchPlayer();

        boardLocked = false;
    }, 800);
}


/* -------------------------
   SPIELER WECHSELN
------------------------- */

function switchPlayer(): void {
    currentPlayer =
        currentPlayer === "blue"
            ? "orange"
            : "blue";

    updateCurrentPlayer();
}


/* -------------------------
   ANZEIGEN AKTUALISIEREN
------------------------- */

function updateScores(): void {
    blueScoreDisplay.textContent =
        blueScore.toString();

    orangeScoreDisplay.textContent =
        orangeScore.toString();
}


function updateCurrentPlayer(): void {
    currentPlayerDisplay.textContent =
        currentPlayer === "blue"
            ? "Blue"
            : "Orange";

    currentPlayerDisplay.classList.remove(
        "player-blue",
        "player-orange"
    );

    currentPlayerDisplay.classList.add(
        currentPlayer === "blue"
            ? "player-blue"
            : "player-orange"
    );
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
   SPIELENDE
------------------------- */

function checkGameEnd(): void {
    const pairCount =
        boardSize / 2;

    if (foundPairs !== pairCount) {
        return;
    }

    setTimeout(() => {
        let message: string;

        if (blueScore > orangeScore) {
            message =
                `Blue gewinnt ${blueScore}:${orangeScore}!`;
        } else if (
            orangeScore > blueScore
        ) {
            message =
                `Orange gewinnt ${orangeScore}:${blueScore}!`;
        } else {
            message =
                `Unentschieden ${blueScore}:${orangeScore}!`;
        }

        alert(message);
    }, 400);
}


/* -------------------------
   SPIEL VERLASSEN
------------------------- */

function exitGame(): void {
    game.classList.add("hidden");
    settings.classList.remove("hidden");

    board.innerHTML = "";

    resetTurn();

    boardLocked = false;
}


/* -------------------------
   BUTTON EVENTS
------------------------- */

start.addEventListener(
    "click",
    startGame
);

exit.addEventListener(
    "click",
    exitGame
);


/* -------------------------
   INITIALISIERUNG
------------------------- */

updateSettingsSummary();