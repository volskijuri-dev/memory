import type { ThemeName, Player, BoardSize } from "./game-types";
import { themePreviews, themes } from "./game-themes";
import {
    selectedThemeDisplay,
    selectedPlayerDisplay,
    selectedSizeDisplay,
    themePreviewImage,
} from "./game-elements";

/** Returns the selected theme name from the settings.
 * @returns The selected theme or the default of "coding".
 */
export function getSelectedTheme(): ThemeName {
    const input =
        document.querySelector<HTMLInputElement>(
            'input[name="theme"]:checked'
        );

    return (input?.value as ThemeName) ?? "coding";
}

/** Returns the selected starting player from the settings.
 * @returns The selected player or the default of "blue".
 */
export function getSelectedPlayer(): Player {
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
export function getSelectedBoardSize(): BoardSize {
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
export function updateSettingsSummary(): void {
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


