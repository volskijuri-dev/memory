import "../styles/style.scss";

/**
 * Memory Game
 * @author Juri Volski
 * @version 1.0.0
 */
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

/**
 * Defines the available memory themes and their associated symbols.
 */
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

/**
 * Maps each theme to its corresponding preview image.
 */
const themePreviews: Record<ThemeName, string> = {
    coding: themeCodingPreview,
    gaming: themeGamingPreview,
    academy: themeDaProjectsPreview,
    food: themeFoodPreview
};

/** Maps each theme to its corresponding card back image.
 */
const cardBacks: Record<ThemeName, string> = {
    coding: cardBackCoding,
    gaming: cardBackGaming,
    academy: cardBackAcademy,
    food: cardBackFood
};

/** Selects and validates all required HTML elements for the game.
 */
const homeScreenElement =
    document.querySelector<HTMLElement>("#home");

/** Selects and validates the play button element.
 */
const playButtonElement =
    document.querySelector<HTMLButtonElement>("#play-button");

/** Selects and validates the settings screen element.
 */
const settingsElement =
    document.querySelector<HTMLElement>("#settings");

/** Selects and validates the game screen element.
*/
const gameElement =
    document.querySelector<HTMLElement>("#game");

/** Selects and validates the game board element.
*/
const gameBoard =
    document.querySelector<HTMLElement>("#game-board");

/** Selects and validates the start button element.
*/
const startButton =
    document.querySelector<HTMLButtonElement>("#start-button");

/** Selects and validates the exit button element.
*/
const exitButton =
    document.querySelector<HTMLButtonElement>("#exit-button");

/** Selects and validates the exit modal element.
*/
const exitModal =
    document.querySelector<HTMLElement>("#exit-modal");

/** Selects and validates the back to game button element.
*/
const backToGameButton =
    document.querySelector<HTMLButtonElement>(
        "#back-to-game-button"
    );

/** Selects and validates the confirm exit button element.
*/
const confirmExitButton =
    document.querySelector<HTMLButtonElement>(
        "#confirm-exit-button"
    );

/** Selects and validates the game-over screen element.
*/
const gameOverScreen =
    document.querySelector<HTMLElement>(
        "#game-over-screen"
    );

/** Selects and validates the winner screen element.
*/
const winnerScreen =
    document.querySelector<HTMLElement>(
        "#winner-screen"
    );

/** Selects and validates the final blue score element.
*/
const finalBlueScoreElement =
    document.querySelector<HTMLElement>(
        "#final-blue-score"
    );

/** Selects and validates the final orange score element.
*/
const finalOrangeScoreElement =
    document.querySelector<HTMLElement>(
        "#final-orange-score"
    );

/** Selects and validates the winner label element.
*/
const winnerLabelElement =
    document.querySelector<HTMLElement>(
        "#winner-label"
    );

/** Selects and validates the winner name element.
*/
const winnerNameElement =
    document.querySelector<HTMLElement>(
        "#winner-name"
    );

/** Selects and validates the result icon element.
*/
const resultIconElement =
    document.querySelector<HTMLElement>(
        "#result-icon"
    );

/** Selects and validates the home button element.
*/
const homeButton =
    document.querySelector<HTMLButtonElement>(
        "#home-button"
    );

/** Selects and validates the blue score display element.
*/
const blueScoreElement =
    document.querySelector<HTMLElement>("#blue-score");

/** Selects and validates the orange score display element.
*/
const orangeScoreElement =
    document.querySelector<HTMLElement>("#orange-score");

/** Selects and validates the current player display element.
*/
const currentPlayerElement =
    document.querySelector<HTMLElement>("#current-player");

/** Selects and validates the selected theme display element.
*/
const selectedThemeElement =
    document.querySelector<HTMLElement>("#selected-theme");

/** Selects and validates the selected player display element.
*/
const selectedPlayerElement =
    document.querySelector<HTMLElement>("#selected-player");

/** Selects and validates the selected size display element.
*/
const selectedSizeElement =
    document.querySelector<HTMLElement>("#selected-size");

/** Selects and validates the theme preview image element.
*/
const themePreviewImage =
    document.querySelector<HTMLImageElement>(
        "#theme-preview-image"
    )!;

/** Validates the presence of all required HTML elements. */
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

/** Assigns validated HTML elements to constants for easier access. */
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

/** Delay before unmatched cards flip back. */
const CARD_FLIP_DELAY = 800;

/** Delay before displaying the game-over screen. */
const GAME_END_DELAY = 600;

/** Duration of the game-over screen. */
const GAME_OVER_DURATION = 1800;

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