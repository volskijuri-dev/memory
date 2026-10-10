import "../styles/style.scss";

import type {ThemeName, Player, BoardSize, MemoryCard, MemoryTheme} from "./game-types";
import { themePreviews, cardBacks, themes } from "./game-themes";
import {CARD_FLIP_DELAY, GAME_END_DELAY, GAME_OVER_DURATION} from "./game-constants";
import { themePreviewImage } from "./game-elements";

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
    selectedThemeDisplay,
    selectedPlayerDisplay,
    selectedSizeDisplay,
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

/** Returns the selected theme name from the settings.
 * @returns The selected theme or the default of "coding".
 */
function getSelectedTheme(): ThemeName {
    const input =
        document.querySelector<HTMLInputElement>(
            'input[name="theme"]:checked'
        );

    return (input?.value as ThemeName) ?? "coding";
}

/** Returns the selected starting player from the settings.
 * @returns The selected player or the default of "blue".
 */
function getSelectedPlayer(): Player {
    const input =
        document.querySelector<HTMLInputElement>(
            'input[name="player"]:checked'
        );

    return (input?.value as Player) ?? "blue";
}

/**
 * Checks whether a value is a supported board size.
 * @param size - The number of cards to validate.
 * @returns True if the board size is supported.
 */
function isBoardSize(size: number): size is BoardSize {
    return size === 16 || size === 24 || size === 36;
}

/**
 * Returns the selected board size.
 * @returns The selected size or the default of 16 cards.
 */
function getSelectedBoardSize(): BoardSize {
    const input = document.querySelector<HTMLInputElement>(
        'input[name="board-size"]:checked'
    );
    const size = Number(input?.value);

    return isBoardSize(size) ? size : 16;
}

/**
 * Updates the selected theme name in the settings summary.
 * @param theme - The selected memory theme.
 */
function updateThemeSummary(theme: ThemeName): void {
    selectedThemeDisplay.textContent = themes[theme].name;
}

/**
 * Updates the selected player in the settings summary.
 * @param player - The selected starting player.
 */
function updatePlayerSummary(player: Player): void {
    selectedPlayerDisplay.textContent =
        player === "blue" ? "Blue" : "Orange";
}

/**
 * Updates the selected board size in the settings summary.
 * @param size - The selected number of cards.
 */
function updateBoardSizeSummary(size: BoardSize): void {
    selectedSizeDisplay.textContent = `${size} cards`;
}

/**
 * Updates the preview image for the selected theme.
 * @param theme - The selected memory theme.
 */
function updateThemePreview(theme: ThemeName): void {
    themePreviewImage.src = themePreviews[theme];
    themePreviewImage.alt =
        `/${themes[theme].name} theme preview`;
}

/**
 * Updates all settings summary values and the theme preview.
 */
function updateSettingsSummary(): void {
    const theme = getSelectedTheme();
    const player = getSelectedPlayer();
    const size = getSelectedBoardSize();

    updateThemeSummary(theme);
    updatePlayerSummary(player);
    updateBoardSizeSummary(size);
    updateThemePreview(theme);
}

/** Initializes the settings summary and theme preview on page load. */
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
    createCards();
    shuffleCards();
    setBoardLayout();
    renderCards();
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
 * Gets the symbols required for the selected board size.
 * @returns The selected card symbols.
 */
function getCardSymbols(): string[] {
    const pairCount = boardSize / 2;
    return themes[currentTheme].symbols.slice(0, pairCount);
}

/**
 * Creates a memory card with a unique ID.
 * @param symbol - The card image source.
 * @param index - The position in the card array.
 * @returns The new memory card.
 */
function createMemoryCard(
    symbol: string,
    index: number
): MemoryCard {
    return {
        id: index + 1,
        symbol,
        isMatched: false
    };
}

/**
 * Creates matching pairs for the current game.
 */
function createCards(): void {
    const symbols = getCardSymbols();
    const duplicatedSymbols = [...symbols, ...symbols];
    cards = duplicatedSymbols.map(createMemoryCard);
}



/**
 * Swaps two cards in the card array.
 * @param firstIndex - The index of the first card.
 * @param secondIndex - The index of the second card.
 */
function swapCards(firstIndex: number, secondIndex: number): void {
    [cards[firstIndex], cards[secondIndex]] = [
        cards[secondIndex],
        cards[firstIndex]
    ];
}

/**
 * Generates a random index within the specified range.
 * @param maxIndex - The highest possible index.
 * @returns A random index between zero and maxIndex.
 */
function getRandomIndex(maxIndex: number): number {
    return Math.floor(Math.random() * (maxIndex + 1));
}

/**
 * Shuffles all memory cards using the Fisher-Yates algorithm.
 */
function shuffleCards(): void {
    for (let index = cards.length - 1; index > 0; index--) {
        const randomIndex = getRandomIndex(index);
        swapCards(index, randomIndex);
    }
}

/**
 * Applies the selected board size to the game board.
 */
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


/**
 * Creates an image with the specified properties.
 * @param source - The image source.
 * @param alt - The alternative text.
 * @param className - The CSS class name.
 * @returns The configured image element.
 */
function createCardImage(
    source: string,
    alt: string,
    className: string
): HTMLImageElement {
    const image = document.createElement("img");
    image.src = source;
    image.alt = alt;
    image.draggable = false;
    image.classList.add(className);
    return image;
}

/**
 * Creates the back side of a memory card.
 * @returns The card back element.
 */
function createCardBack(): HTMLSpanElement {
    const back = document.createElement("span");
    back.classList.add("memory-card__back");
    const image = createCardImage(
        cardBacks[currentTheme],
        `${themes[currentTheme].name} card back`,
        "memory-card__back-image"
    );
    back.appendChild(image);
    return back;
}

/**
 * Creates the front side of a memory card.
 * @param card - The card data.
 * @returns The card front element.
 */
function createCardFront(card: MemoryCard): HTMLSpanElement {
    const front = document.createElement("span");
    front.classList.add("memory-card__front");
    const image = createCardImage(
        card.symbol,
        "Memory card symbol",
        "memory-card__image"
    );
    front.appendChild(image);
    return front;
}

/**
 * Creates the inner container of a memory card.
 * @param card - The card data.
 * @returns The card inner element.
 */
function createCardInner(card: MemoryCard): HTMLSpanElement {
    const inner = document.createElement("span");
    inner.classList.add("memory-card__inner");
    inner.appendChild(createCardBack());
    inner.appendChild(createCardFront(card));
    return inner;
}

/**
 * Creates a clickable memory card element.
 * @param card - The card data.
 * @returns The configured card button.
 */
function createCardElement(card: MemoryCard): HTMLButtonElement {
    const element = document.createElement("button");
    element.classList.add("memory-card");
    element.type = "button";
    element.dataset.id = card.id.toString();
    element.setAttribute("aria-label", "Memory-Karte");
    element.appendChild(createCardInner(card));
    element.addEventListener("click", () => flipCard(element, card));
    return element;
}

/**
 * Renders all memory cards on the game board.
 */
function renderCards(): void {
    board.innerHTML = "";

    cards.forEach((card) => {
        board.appendChild(createCardElement(card));
    });
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