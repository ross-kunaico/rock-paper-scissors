import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './game-container.css?inline';
import { TitleAndScoreBox } from "./title-and-score-box";
import { Gameplay } from "./gameplay";
import { RulesButton } from "./rules-button";

export const GameContainer = component$(() => {
    useStyles$(styles);
    return <div class="game-container">
        <TitleAndScoreBox />
        <Gameplay />
        <RulesButton />
    </div>;
});
