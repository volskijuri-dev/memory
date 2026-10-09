
/**
 * Available memory game themes.
 */
export type ThemeName = "coding" | "gaming" | "academy" | "food";

/**
 * Available players.
 */
export type Player = "blue" | "orange";

/**
 * Supported board sizes.
 */
export type BoardSize = 16 | 24 | 36;

/**
 * Represents a single memory card.
 */
export type MemoryCard = {
    id: number;
    symbol: string;
    isMatched: boolean;
};

/**
 * Represents a memory game theme.
 */
export type MemoryTheme = {
    name: string;
    symbols: string[];
};
