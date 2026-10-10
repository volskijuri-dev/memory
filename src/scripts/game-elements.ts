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

export {
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
    themePreviewImage,
    home,
};
