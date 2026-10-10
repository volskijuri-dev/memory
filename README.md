# Memory Game 🎮

A responsive, two-player Memory game built with **TypeScript**, **Vite**, and **SCSS**. Choose a theme, select who starts, and find matching pairs to earn points.

## 🌐 Live Demo

[Play the Memory Game](https://juri-volski.developerakademie.net/Memory/)

## ✨ Features

- **Two-player mode:** Blue Player vs. Orange Player
- **Four themes:** Code Vibes, Gaming, DA Projects, and Foods
- **Three board sizes:** 16, 24, or 36 cards
- **Randomized cards:** A new shuffled board for every game
- **Score tracking:** Earn a point for each matching pair
- **Turn-based gameplay:** A mismatch passes the turn to the other player
- **Game results:** Winner announcement or draw
- **Responsive layout:** Play on desktop and mobile devices
- **Navigation:** Start a game, confirm an exit, or return to the home screen

## 🕹️ How to Play

1. Open the game and select **Play**.
2. Choose a theme, a starting player, and a board size.
3. Select **Start** to begin.
4. Flip two cards to look for a matching pair.
5. Matching pairs stay revealed and earn the current player one point.
6. If the cards do not match, they flip back and the other player takes a turn.
7. When all pairs are found, the game displays the final scores and winner, or a draw.

## 🛠️ Built With

- **TypeScript** – game logic and type safety
- **SCSS** – styling and responsive layouts
- **Vite** – development server and production build
- **HTML** – page structure

## 🚀 Run Locally

Make sure **Node.js** and **npm** are installed.

```bash
# Clone the repository
git clone https://github.com/volskijuri-dev/memory.git

# Open the project directory
cd memory

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL shown in the terminal.

### Production Build

```bash
npm run build
```

The production files are generated in the `dist/` directory.

## 📁 Project Structure

```text
memory/
├── public/                 # Public assets
├── src/
│   ├── assets/             # Game images and icons
│   ├── scripts/
│   │   ├── script.ts       # Game flow and interactions
│   │   ├── game-cards.ts   # Card creation, shuffling, rendering
│   │   ├── game-constants.ts
│   │   ├── game-elements.ts
│   │   ├── game-results.ts # Game-over and winner screens
│   │   ├── game-settings.ts
│   │   ├── game-themes.ts
│   │   └── game-types.ts
│   └── styles/             # SCSS styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 👨‍💻 About This Project

This Memory game was developed as a TypeScript learning project at **Developer Akademie**. The focus was on interactive gameplay, reusable functions, clear module responsibilities, and responsive design.

**Developer:** Juri Volski

**Repository:** [github.com/volskijuri-dev/memory](https://github.com/volskijuri-dev/memory)
