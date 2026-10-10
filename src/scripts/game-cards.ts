import type { BoardSize, MemoryCard, ThemeName } from "./game-types";
import { cardBacks, themes } from "./game-themes";
import { board } from "./game-elements";

type CardClickHandler = (element: HTMLButtonElement, card: MemoryCard) => void;

/** Returns the symbols required for the selected board size. */
function getCardSymbols(theme: ThemeName, size: BoardSize): string[] {
    return themes[theme].symbols.slice(0, size / 2);
}

/** Creates a memory card with a unique ID. */
function createMemoryCard(symbol: string, index: number): MemoryCard {
    return { id: index + 1, symbol, isMatched: false };
}

/** Creates matching pairs for the selected theme and board size. */
export function createCards(theme: ThemeName, size: BoardSize): MemoryCard[] {
    const symbols = getCardSymbols(theme, size);
    return [...symbols, ...symbols].map(createMemoryCard);
}

/** Swaps two cards in the array. */
function swapCards(cards: MemoryCard[], first: number, second: number): void {
    [cards[first], cards[second]] = [cards[second], cards[first]];
}

/** Generates a random index within the specified range. */
function getRandomIndex(maxIndex: number): number {
    return Math.floor(Math.random() * (maxIndex + 1));
}

/** Shuffles the memory cards using Fisher-Yates. */
export function shuffleCards(cards: MemoryCard[]): void {
    for (let index = cards.length - 1; index > 0; index--) {
        swapCards(cards, index, getRandomIndex(index));
    }
}

/** Applies the selected board size to the game board. */
export function setBoardLayout(size: BoardSize): void {
    board.classList.remove("game-board--16", "game-board--24", "game-board--36");
    board.classList.add(`game-board--${size}`);
}

/** Creates an image with the specified properties. */
function createCardImage(
    source: string, alt: string, className: string
): HTMLImageElement {
    const image = document.createElement("img");
    image.src = source;
    image.alt = alt;
    image.draggable = false;
    image.classList.add(className);
    return image;
}

/** Creates the back side of a memory card. */
function createCardBack(theme: ThemeName): HTMLSpanElement {
    const back = document.createElement("span");
    back.classList.add("memory-card__back");
    const image = createCardImage(
        cardBacks[theme], `${themes[theme].name} card back`, "memory-card__back-image"
    );
    back.appendChild(image);
    return back;
}

/** Creates the front side of a memory card. */
function createCardFront(card: MemoryCard): HTMLSpanElement {
    const front = document.createElement("span");
    front.classList.add("memory-card__front");
    const image = createCardImage(card.symbol, "Memory card symbol", "memory-card__image");
    front.appendChild(image);
    return front;
}

/** Creates the inner container of a memory card. */
function createCardInner(card: MemoryCard, theme: ThemeName): HTMLSpanElement {
    const inner = document.createElement("span");
    inner.classList.add("memory-card__inner");
    inner.appendChild(createCardBack(theme));
    inner.appendChild(createCardFront(card));
    return inner;
}

/** Creates a clickable memory card element. */
function createCardElement(
    card: MemoryCard, theme: ThemeName, onFlip: CardClickHandler
): HTMLButtonElement {
    const element = document.createElement("button");
    element.classList.add("memory-card");
    element.type = "button";
    element.dataset.id = card.id.toString();
    element.setAttribute("aria-label", "Memory-Karte");
    element.appendChild(createCardInner(card, theme));
    element.addEventListener("click", () => onFlip(element, card));
    return element;
}

/** Renders all memory cards on the game board. */
export function renderCards(
    cards: MemoryCard[], theme: ThemeName, onFlip: CardClickHandler
): void {
    board.innerHTML = "";
    cards.forEach((card) => board.appendChild(createCardElement(card, theme, onFlip)));
}
