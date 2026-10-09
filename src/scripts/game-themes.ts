
import type { ThemeName, MemoryTheme } from "./game-types";

import themeCodingPreview from "../assets/image/theme-preview/theme-coding.png";
import themeGamingPreview from "../assets/image/theme-preview/theme-gaming.png";
import themeDaProjectsPreview from "../assets/image/theme-preview/theme-da-projects.png";
import themeFoodPreview from "../assets/image/theme-preview/theme-food.png";

import cardBackCoding from "../assets/image/card-back/card-back-coding.svg?url";
import cardBackGaming from "../assets/image/card-back/card-back-gaming.svg?url";
import cardBackAcademy from "../assets/image/card-back/card-back-academy.svg?url";
import cardBackFood from "../assets/image/card-back/card-back-food.svg?url";

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

/** Maps each theme to its corresponding preview image. */
export const themePreviews: Record<ThemeName, string> = {
    coding: themeCodingPreview,
    gaming: themeGamingPreview,
    academy: themeDaProjectsPreview,
    food: themeFoodPreview
};

/** Maps each theme to its corresponding card back image. */
export const cardBacks: Record<ThemeName, string> = {
    coding: cardBackCoding,
    gaming: cardBackGaming,
    academy: cardBackAcademy,
    food: cardBackFood
};

/** Defines all memory themes and their card symbols. */
export const themes: Record<ThemeName, MemoryTheme> = {
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
