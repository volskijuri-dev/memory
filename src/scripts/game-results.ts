import type { ThemeName } from "./game-types";
import { GAME_OVER_DURATION } from "./game-constants";
import playerBlueIcon from "../assets/image/result/player-blue.svg?url";
import playerOrangeIcon from "../assets/image/result/player-orange.svg?url";
import {
    game,
    gameOver,
    winner,
    finalBlueScore,
    finalOrangeScore,
    winnerLabel,
    winnerName,
    resultIcon,
} from "./game-elements";

/**
 * Applies the selected theme to all game screens.
 */
export function applyGameTheme(currentTheme: ThemeName): void {
    const themeClasses = [
        "theme-coding", "theme-gaming",
        "theme-academy", "theme-food"
    ];

    [game, gameOver, winner].forEach((screen) => {
        screen.classList.remove(...themeClasses);
        screen.classList.add(`theme-${currentTheme}`);
    });
}

/** Displays the game-over screen with final scores and schedules the winner display.
 */
export function showGameOver(blueScore: number, orangeScore: number): void {
    game.classList.add("hidden");

    finalBlueScore.textContent =
        blueScore.toString();

    finalOrangeScore.textContent =
        orangeScore.toString();

    gameOver.classList.remove("hidden");

    setTimeout(() => showWinner(blueScore, orangeScore), GAME_OVER_DURATION);
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
function displayGameResult(blueScore: number, orangeScore: number): void {
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
function showWinner(blueScore: number, orangeScore: number): void {
    gameOver.classList.add("hidden");
    winner.classList.remove("hidden", "result-screen--draw");
    displayGameResult(blueScore, orangeScore);
}

