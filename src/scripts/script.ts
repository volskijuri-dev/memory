import "../styles/style.scss";

import type {ThemeName, Player, BoardSize, MemoryCard} from "./game-types";
import {CARD_FLIP_DELAY, GAME_END_DELAY, GAME_OVER_DURATION} from "./game-constants";
import { createCards, shuffleCards, setBoardLayout, renderCards } from "./game-cards";
import { getSelectedTheme, getSelectedPlayer, getSelectedBoardSize, updateSettingsSummary } from "./game-settings";

import playerBlueIcon from "../assets/image/result/player-blue.svg?url";
import playerOrangeIcon from "../assets/image/result/player-orange.svg?url";


import {
    homeScreen,
    playButton,
    settings,
    game,
    board,
    start,
    exit,
    modal,
    backToGame,
    confirmExit,
    blueScoreDisplay,
    orangeScoreDisplay,
    currentPlayerDisplay,
    gameOver,
    winner,
    finalBlueScore,
    finalOrangeScore,
    winnerLabel,
    winnerName,
    resultIcon,
    home,
} from "./game-elements";

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

/**
 * Applies the selected theme to all game screens.
 */
function applyGameTheme(): void {
    const themeClasses = [
        "theme-coding", "theme-gaming",
        "theme-academy", "theme-food"
    ];

    [game, gameOver, winner].forEach((screen) => {
        screen.classList.remove(...themeClasses);
        screen.classList.add(`theme-${currentTheme}`);
    });
}

/**
 * Resets scores, selected cards, and game state.
 */
function resetGameState(): void {
    blueScore = 0;
    orangeScore = 0;
    foundPairs = 0;
    resetTurn();
    boardLocked = false;
    updateScores();
    updateCurrentPlayer();
}

/**
 * Prepares and renders the selected card layout.
 */
function prepareGameBoard(): void {
    cards = createCards(currentTheme, boardSize);
    shuffleCards(cards);
    setBoardLayout(boardSize);
    renderCards(cards, currentTheme, flipCard);
}

/**
 * Starts a new game using the selected settings.
 */
function startGame(): void {
    currentTheme = getSelectedTheme();
    startingPlayer = getSelectedPlayer();
    currentPlayer = startingPlayer;
    boardSize = getSelectedBoardSize();

    applyGameTheme();
    resetGameState();
    prepareGameBoard();

    settings.classList.add("hidden");
    game.classList.remove("hidden");
}


/**
 * Checks whether a memory card can be flipped.
 * @param element - The selected card element.
 * @param card - The selected card data.
 * @returns True if the card can be flipped.
 */
function canFlipCard(
    element: HTMLButtonElement,
    card: MemoryCard
): boolean {
    return !boardLocked &&
        !card.isMatched &&
        element !== firstCard;
}

/**
 * Stores the first selected memory card.
 * @param element - The selected card element.
 * @param card - The selected card data.
 */
function selectFirstCard(
    element: HTMLButtonElement,
    card: MemoryCard
): void {
    firstCard = element;
    firstCardId = card.id;
}

/**
 * Stores the second selected memory card.
 * @param element - The selected card element.
 * @param card - The selected card data.
 */
function selectSecondCard(
    element: HTMLButtonElement,
    card: MemoryCard
): void {
    secondCard = element;
    secondCardId = card.id;
    checkForMatch();
}

/**
 * Flips a memory card and processes the selection.
 * @param element - The selected card element.
 * @param card - The selected card data.
 */
function flipCard(
    element: HTMLButtonElement,
    card: MemoryCard
): void {
    if (!canFlipCard(element, card)) return;

    element.classList.add("flipped");

    if (firstCard === null) {
        selectFirstCard(element, card);
        return;
    }

    selectSecondCard(element, card);
}

/**
 * Finds a memory card by its ID.
 * @param id - The ID of the card.
 * @returns The matching card or undefined.
 */
function findCardById(id: number): MemoryCard | undefined {
    return cards.find((card) => card.id === id);
}

/**
 * Processes two selected cards and checks for a match.
 * @param first - The first selected card.
 * @param second - The second selected card.
 */
function compareCards(first: MemoryCard, second: MemoryCard): void {
    if (first.symbol === second.symbol) {
        handleMatch(first, second);
        return;
    }

    handleNoMatch();
}


/**
 * Checks whether the two selected cards match.
 */
function checkForMatch(): void {
    if (firstCardId === null || secondCardId === null) return;

    const first = findCardById(firstCardId);
    const second = findCardById(secondCardId);

    if (!first || !second) return;

    compareCards(first, second);
}


/**
 * Marks two matching cards and updates the game state.
 * @param firstCardData - The first matched card data.
 * @param secondCardData - The second matched card data.
 */
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

/**
 * Increments the score for the current player and updates the display.
 */
function addPoint(): void {
    if (currentPlayer === "blue") {
        blueScore++;
    } else {
        orangeScore++;
    }

    updateScores();
}


/**
 * Flips unmatched cards back and prepares the next turn.
 */
function resetUnmatchedCards(): void {
    firstCard?.classList.remove("flipped");
    secondCard?.classList.remove("flipped");
    resetTurn();
    switchPlayer();
    boardLocked = false;
}

/**
 * Locks the board and schedules unmatched cards to flip back.
 */
function handleNoMatch(): void {
    boardLocked = true;
    setTimeout(resetUnmatchedCards, CARD_FLIP_DELAY);
}

/**
 * Switches the current player and updates the display.
 */
function switchPlayer(): void {
    currentPlayer =
        currentPlayer === "blue"
            ? "orange"
            : "blue";

    updateCurrentPlayer();
}

/**
 * Updates the score displays for both players.
 */
function updateScores(): void {
    blueScoreDisplay.textContent =
        blueScore.toString();

    orangeScoreDisplay.textContent =
        orangeScore.toString();
}

/**
 * Returns the CSS class for the current player.
 * @returns The current player's CSS class.
 */
function getCurrentPlayerClass(): string {
    return currentPlayer === "blue"
        ? "player-blue"
        : "player-orange";
}

/**
 * Updates the current player's icon and accessibility label.
 */
function updateCurrentPlayer(): void {
    currentPlayerDisplay.classList.remove(
        "player-blue",
        "player-orange"
    );

    currentPlayerDisplay.classList.add(getCurrentPlayerClass());

    currentPlayerDisplay.setAttribute(
        "aria-label",
        `${currentPlayer === "blue" ? "Blue" : "Orange"} player`
    );
}

/**
 * Resets the current turn and clears the selected card references.
 */
function resetTurn(): void {
    firstCard = null;
    secondCard = null;

    firstCardId = null;
    secondCardId = null;
}

/**
 * Checks if the game has ended and schedules the game-over screen.
 */
function checkGameEnd(): void {
    const pairCount = boardSize / 2;

    if (foundPairs !== pairCount) {
        return;
    }

    boardLocked = true;

    setTimeout(showGameOver, GAME_END_DELAY);
}

/** Displays the game-over screen with final scores and schedules the winner display.
 */
function showGameOver(): void {
    game.classList.add("hidden");

    finalBlueScore.textContent =
        blueScore.toString();

    finalOrangeScore.textContent =
        orangeScore.toString();

    gameOver.classList.remove("hidden");

    setTimeout(showWinner, GAME_OVER_DURATION);
}

/**
 * Displays the result image for the winning player.
 * @param icon - The player's image source.
 * @param name - The player's display name.
 */
function setWinnerIcon(icon: string, name: string): void {
    resultIcon.innerHTML = `
        <img
            src="${icon}"
            alt="${name}"
            class="result-screen__image"
        >
    `;
}

/**
 * Displays the winning player's information.
 * @param name - The winner's display name.
 * @param color - The winner's text color.
 * @param icon - The winner's image source.
 */
function displayWinner(
    name: string,
    color: string,
    icon: string
): void {
    winnerLabel.textContent = "The winner is";
    winnerName.textContent = name;
    winnerName.style.color = color;
    setWinnerIcon(icon, name);
}

/**
 * Displays the result when both players have equal scores.
 */
function displayDraw(): void {
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

/**
 * Determines which player won the game.
 */
function displayGameResult(): void {
    if (blueScore > orangeScore) {
        displayWinner("Blue Player", "#1da1f2", playerBlueIcon);
        return;
    }

    if (orangeScore > blueScore) {
        displayWinner("Orange Player", "#ff8a00", playerOrangeIcon);
        return;
    }

    displayDraw();
}

/**
 * Opens the final result screen.
 */
function showWinner(): void {
    gameOver.classList.add("hidden");
    winner.classList.remove("hidden", "result-screen--draw");
    displayGameResult();
}

/**
 * Displays the settings screen and hides the home screen.
 */
function showSettings(): void {
    homeScreen.classList.add("hidden");
    settings.classList.remove("hidden");
}

/**
 * Returns to the home screen and resets the game state.
 */
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

/**
 * Opens the exit confirmation modal.
 */
function openExitModal(): void {
    modal.classList.remove("hidden");
}

/**
 * Closes the exit confirmation modal.
 */
function closeExitModal(): void {
    modal.classList.add("hidden");
}

/** Exits the current game and returns to the settings screen.
 */
function exitGame(): void {
    closeExitModal();
    game.classList.add("hidden");
    settings.classList.remove("hidden");

    board.innerHTML = "";

    resetTurn();

    boardLocked = false;
}

/**
 * Adds event listeners to the main control buttons.
 */
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