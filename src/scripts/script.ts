import "../styles/style.scss";

import themeCodingPreview from "../assets/image/theme-preview/theme-coding.png";
import themeGamingPreview from "../assets/image/theme-preview/theme-gaming.png";
import themeDaProjectsPreview from "../assets/image/theme-preview/theme-da-projects.png";
import themeFoodPreview from "../assets/image/theme-preview/theme-food.png";

import cardBackCoding from "../assets/image/card-back/card-back-coding.svg?url";
import cardBackGaming from "../assets/image/card-back/card-back-gaming.svg?url";
import cardBackAcademy from "../assets/image/card-back/card-back-academy.svg?url";
import cardBackFood from "../assets/image/card-back/card-back-food.svg?url";

import playerBlueIcon from "../assets/image/result/player-blue.svg?url";
import playerOrangeIcon from "../assets/image/result/player-orange.svg?url";


import gitIcon from "../assets/image/code-vibes/git.svg?url";
import typescriptIcon from "../assets/image/code-vibes/typescript.svg?url";
import angularIcon from "../assets/image/code-vibes/angular.svg?url";
import bootstrapIcon from "../assets/image/code-vibes/bootstrap.svg?url";
import cssIcon from "../assets/image/code-vibes/css.svg?url";
import djangoIcon from "../assets/image/code-vibes/django.svg?url";
import firebaseIcon from "../assets/image/code-vibes/firebase.svg?url";
import githubIcon from "../assets/image/code-vibes/github.svg?url";
import group16Icon from "../assets/image/code-vibes/group16.svg?url";
import group17Icon from "../assets/image/code-vibes/group17.svg?url";
import htmlIcon from "../assets/image/code-vibes/html.svg?url";
import javascriptIcon from "../assets/image/code-vibes/javascript.svg?url";
import nodejsIcon from "../assets/image/code-vibes/nodejs.svg?url";
import pythonIcon from "../assets/image/code-vibes/python.svg?url";
import sassIcon from "../assets/image/code-vibes/sass.svg?url";
import sqlIcon from "../assets/image/code-vibes/sql.svg?url";
import terminalIcon from "../assets/image/code-vibes/terminal.svg?url";
import vscodeIcon from "../assets/image/code-vibes/vscode.svg?url";

import bananaIcon from "../assets/image/gaming/banana.svg?url";
import circleGuardIcon from "../assets/image/gaming/circle-guard.svg?url";
import coinIcon from "../assets/image/gaming/coin.svg?url";
import controllerIcon from "../assets/image/gaming/controller.svg?url";
import creeperIcon from "../assets/image/gaming/creeper.svg?url";
import diceIcon from "../assets/image/gaming/dice.svg?url";
import gameboyIcon from "../assets/image/gaming/gameboy.svg?url";
import ghostIcon from "../assets/image/gaming/ghost.svg?url";
import levelUpIcon from "../assets/image/gaming/level-up.svg?url";
import mazeIcon from "../assets/image/gaming/maze.svg?url";
import mushroomIcon from "../assets/image/gaming/mushroom.svg?url";
import pacmanIcon from "../assets/image/gaming/pacman.svg?url";
import playingCardIcon from "../assets/image/gaming/playing-card.svg?url";
import puzzleIcon from "../assets/image/gaming/puzzle.svg?url";
import retroGameIcon from "../assets/image/gaming/retro-game.svg?url";
import squareGuardIcon from "../assets/image/gaming/square-guard.svg?url";
import triangleGuardIcon from "../assets/image/gaming/triangle-guard.svg?url";
import playButtonIcon from "../assets/image/gaming/play-button.svg?url";

import friesIcon from "../assets/image/food/fries.svg?url";
import pizzaIcon from "../assets/image/food/pizza.svg?url";
import sandwichIcon from "../assets/image/food/sandwich.svg?url";
import donutIcon from "../assets/image/food/donut.svg?url";
import sushiIcon from "../assets/image/food/sushi.svg?url";
import hotdogIcon from "../assets/image/food/hotdog.svg?url";
import burgerIcon from "../assets/image/food/burger.svg?url";
import pretzelIcon from "../assets/image/food/pretzel.svg?url";
import cupcakeIcon from "../assets/image/food/cupcake.svg?url";
import cakeIcon from "../assets/image/food/cake.svg?url";
import puddingIcon from "../assets/image/food/pudding.svg?url";
import chocolateIcon from "../assets/image/food/chocolate.svg?url";
import muffinIcon from "../assets/image/food/muffin.svg?url";
import noodlesIcon from "../assets/image/food/noodles.svg?url";
import wrapIcon from "../assets/image/food/wrap.svg?url";
import iceCreamIcon from "../assets/image/food/ice-cream.svg?url";
import saladIcon from "../assets/image/food/salad.svg?url";
import cookiesIcon from "../assets/image/food/cookies.svg?url";

// DA PROJECTS
import soupIcon from "../assets/image/da-projects/soup.svg?url";
import ramenIcon from "../assets/image/da-projects/ramen.svg?url";
import eggsIcon from "../assets/image/da-projects/eggs.svg?url";
import flowerIcon from "../assets/image/da-projects/flower.svg?url";
import joinIcon from "../assets/image/da-projects/join.svg?url";
import chefIcon from "../assets/image/da-projects/chef.svg?url";
import logoGreenIcon from "../assets/image/da-projects/logo-green.svg?url";
import basketIcon from "../assets/image/da-projects/basket.svg?url";
import pokeballIcon from "../assets/image/da-projects/pokeball.svg?url";
import numberGridIcon from "../assets/image/da-projects/number-grid.svg?url";
import beeIcon from "../assets/image/da-projects/bee.svg?url";
import arrowIcon from "../assets/image/da-projects/arrow.svg?url";
import chatIcon from "../assets/image/da-projects/chat.svg?url";
import wizardIcon from "../assets/image/da-projects/wizard.svg?url";
import treeIcon from "../assets/image/da-projects/tree.svg?url";
import networkIcon from "../assets/image/da-projects/network.svg?url";
import landscapeIcon from "../assets/image/da-projects/landscape.svg?url";
import spiralIcon from "../assets/image/da-projects/spiral.svg?url";


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

const themes: Record<ThemeName, MemoryTheme> = {
    coding: {
        name: "Code vibes",
        symbols: [
            gitIcon, typescriptIcon, angularIcon, bootstrapIcon, cssIcon, djangoIcon,
            firebaseIcon, githubIcon, group16Icon, group17Icon, htmlIcon, javascriptIcon,
            nodejsIcon, pythonIcon, sassIcon, sqlIcon, terminalIcon, vscodeIcon
        ]
    },

    gaming: {
        name: "Gaming",
        symbols: [
            diceIcon, ghostIcon, mushroomIcon, controllerIcon, squareGuardIcon, coinIcon,
            triangleGuardIcon, circleGuardIcon, retroGameIcon, bananaIcon, gameboyIcon,
            playingCardIcon, puzzleIcon, pacmanIcon, creeperIcon, mazeIcon, levelUpIcon, playButtonIcon
        ]
    },

    academy: {
        name: "DA Projects",
        symbols: [
            soupIcon, ramenIcon, eggsIcon, flowerIcon, joinIcon, chefIcon,
            logoGreenIcon, basketIcon, pokeballIcon, numberGridIcon, beeIcon, arrowIcon,
            chatIcon, wizardIcon, treeIcon, networkIcon, landscapeIcon, spiralIcon
        ]
    },

    food: {
        name: "Foods",
        symbols: [
            friesIcon, pizzaIcon, sandwichIcon, donutIcon, sushiIcon, hotdogIcon,
            burgerIcon, pretzelIcon, cupcakeIcon, cakeIcon, puddingIcon, chocolateIcon,
            muffinIcon, noodlesIcon, wrapIcon, iceCreamIcon, saladIcon, cookiesIcon
        ]
    }
};

const themePreviews: Record<ThemeName, string> = {
    coding: themeCodingPreview,
    gaming: themeGamingPreview,
    academy: themeDaProjectsPreview,
    food: themeFoodPreview
};

const cardBacks: Record<ThemeName, string> = {
    coding: cardBackCoding,
    gaming: cardBackGaming,
    academy: cardBackAcademy,
    food: cardBackFood
};

const homeScreenElement =
    document.querySelector<HTMLElement>("#home");

const playButtonElement =
    document.querySelector<HTMLButtonElement>("#play-button");


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

const exitModal =
    document.querySelector<HTMLElement>("#exit-modal");

const backToGameButton =
    document.querySelector<HTMLButtonElement>(
        "#back-to-game-button"
    );

const confirmExitButton =
    document.querySelector<HTMLButtonElement>(
        "#confirm-exit-button"
    );

const gameOverScreen =
    document.querySelector<HTMLElement>(
        "#game-over-screen"
    );

const winnerScreen =
    document.querySelector<HTMLElement>(
        "#winner-screen"
    );

const finalBlueScoreElement =
    document.querySelector<HTMLElement>(
        "#final-blue-score"
    );

const finalOrangeScoreElement =
    document.querySelector<HTMLElement>(
        "#final-orange-score"
    );

const winnerLabelElement =
    document.querySelector<HTMLElement>(
        "#winner-label"
    );

const winnerNameElement =
    document.querySelector<HTMLElement>(
        "#winner-name"
    );

const resultIconElement =
    document.querySelector<HTMLElement>(
        "#result-icon"
    );

const homeButton =
    document.querySelector<HTMLButtonElement>(
        "#home-button"
    );

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

const themePreviewImage =
    document.querySelector<HTMLImageElement>(
        "#theme-preview-image"
    )!;


if (
    !homeScreenElement ||
    !playButtonElement ||
    !settingsElement ||
    !gameElement ||
    !gameBoard ||
    !startButton ||
    !exitButton ||
    !exitModal ||
    !backToGameButton ||
    !confirmExitButton ||
    !blueScoreElement ||
    !orangeScoreElement ||
    !currentPlayerElement ||
    !selectedThemeElement ||
    !selectedPlayerElement ||
    !selectedSizeElement ||
    !gameOverScreen ||
    !winnerScreen ||
    !finalBlueScoreElement ||
    !finalOrangeScoreElement ||
    !winnerLabelElement ||
    !winnerNameElement ||
    !resultIconElement ||
    !themePreviewImage ||
    !homeButton

) {
    throw new Error(
        "Ein benötigtes HTML-Element wurde nicht gefunden."
    );
}

const homeScreen = homeScreenElement;
const playButton = playButtonElement;
const settings = settingsElement;
const game = gameElement;
const board = gameBoard;

const start = startButton;
const exit = exitButton;
const modal = exitModal;
const backToGame = backToGameButton;
const confirmExit = confirmExitButton;

const blueScoreDisplay = blueScoreElement;
const orangeScoreDisplay = orangeScoreElement;
const currentPlayerDisplay = currentPlayerElement;

const selectedThemeDisplay = selectedThemeElement;
const selectedPlayerDisplay = selectedPlayerElement;
const selectedSizeDisplay = selectedSizeElement;

const gameOver = gameOverScreen;
const winner = winnerScreen;

const finalBlueScore = finalBlueScoreElement;
const finalOrangeScore = finalOrangeScoreElement;

const winnerLabel = winnerLabelElement;
const winnerName = winnerNameElement;
const resultIcon = resultIconElement;

const home = homeButton;


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

    themePreviewImage.src = themePreviews[theme];

    themePreviewImage.alt = `/${themes[theme].name} theme preview`;
}

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

function startGame(): void {
    currentTheme = getSelectedTheme();
    game.classList.remove(
        "theme-coding",
        "theme-gaming",
        "theme-academy",
        "theme-food"
    );

    gameOver.classList.remove(
        "theme-coding",
        "theme-gaming",
        "theme-academy",
        "theme-food"
    );

    winner.classList.remove(
        "theme-coding",
        "theme-gaming",
        "theme-academy",
        "theme-food"
    );

    gameOver.classList.add(
        `theme-${currentTheme}`
    );

    winner.classList.add(
        `theme-${currentTheme}`
    );

    game.classList.add(`theme-${currentTheme}`);
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

        const cardBackImage =
            document.createElement("img");

        cardBackImage.src =
            cardBacks[currentTheme];

        cardBackImage.alt =
            `${themes[currentTheme].name} card back`;

        cardBackImage.draggable = false;

        cardBackImage.classList.add(
            "memory-card__back-image"
        );

        cardBack.appendChild(
            cardBackImage
        );
        const cardFront =
            document.createElement("span");

        cardFront.classList.add(
            "memory-card__front"
        );

        const cardImage =
            document.createElement("img");

        cardImage.src = card.symbol;
        cardImage.alt = "Memory card symbol";
        cardImage.draggable = false;

        cardImage.classList.add(
            "memory-card__image"
        );

        cardFront.appendChild(cardImage);

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

function addPoint(): void {
    if (currentPlayer === "blue") {
        blueScore++;
    } else {
        orangeScore++;
    }

    updateScores();
}

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

function switchPlayer(): void {
    currentPlayer =
        currentPlayer === "blue"
            ? "orange"
            : "blue";

    updateCurrentPlayer();
}

function updateScores(): void {
    blueScoreDisplay.textContent =
        blueScore.toString();

    orangeScoreDisplay.textContent =
        orangeScore.toString();
}


function updateCurrentPlayer(): void {
    currentPlayerDisplay.classList.remove(
        "player-blue",
        "player-orange"
    );

    currentPlayerDisplay.classList.add(
        currentPlayer === "blue"
            ? "player-blue"
            : "player-orange"
    );

    currentPlayerDisplay.setAttribute(
        "aria-label",
        currentPlayer === "blue"
            ? "Blue player"
            : "Orange player"
    );
}

function resetTurn(): void {
    firstCard = null;
    secondCard = null;

    firstCardId = null;
    secondCardId = null;
}

function checkGameEnd(): void {
    const pairCount = boardSize / 2;

    if (foundPairs !== pairCount) {
        return;
    }

    boardLocked = true;

    setTimeout(() => {
        showGameOver();
    }, 600);
}

function showGameOver(): void {
    game.classList.add("hidden");

    finalBlueScore.textContent =
        blueScore.toString();

    finalOrangeScore.textContent =
        orangeScore.toString();

    gameOver.classList.remove("hidden");

    setTimeout(() => {
        showWinner();
    }, 1800);
}


function showWinner(): void {
    gameOver.classList.add("hidden");

    winner.classList.remove(
        "hidden",
        "result-screen--draw"
    );

    if (blueScore > orangeScore) {
        winnerLabel.textContent = "The winner is";
        winnerName.textContent = "Blue Player";
        winnerName.style.color = "#1da1f2";

        resultIcon.innerHTML = `
            <img
                src="${playerBlueIcon}"
                alt="Blue Player"
                class="result-screen__image"
            >
        `;

        return;
    }

    if (orangeScore > blueScore) {
        winnerLabel.textContent = "The winner is";
        winnerName.textContent = "Orange Player";
        winnerName.style.color = "#ff8a00";

        resultIcon.innerHTML = `
            <img
                src="${playerOrangeIcon}"
                alt="Orange Player"
                class="result-screen__image"
            >
        `;

        return;
    }

    winner.classList.add("result-screen--draw");

    winnerLabel.textContent = "It's a";
    winnerName.textContent = "DRAW";
    winnerName.style.color = "";

    resultIcon.innerHTML = `
    <span
        class="result-screen__draw-icon"
        role="img"
        aria-label="Draw"
    ></span>
`;
}

function showSettings(): void {
    homeScreen.classList.add("hidden");
    settings.classList.remove("hidden");
}

function goHome(): void {
    winner.classList.add("hidden");
    gameOver.classList.add("hidden");
    game.classList.add("hidden");
    settings.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    board.innerHTML = "";
    resetTurn();
    boardLocked = false;
}

function openExitModal(): void {
    modal.classList.remove("hidden");
}


function closeExitModal(): void {
    modal.classList.add("hidden");
}

function exitGame(): void {
    closeExitModal();
    game.classList.add("hidden");
    settings.classList.remove("hidden");

    board.innerHTML = "";

    resetTurn();

    boardLocked = false;
}

playButton.addEventListener("click", showSettings);

start.addEventListener(
    "click",
    startGame
);

exit.addEventListener(
    "click",
    openExitModal
);

backToGame.addEventListener(
    "click",
    closeExitModal
);


confirmExit.addEventListener(
    "click",
    exitGame
);

home.addEventListener(
    "click",
    goHome
);

updateSettingsSummary();