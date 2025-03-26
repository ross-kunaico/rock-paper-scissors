import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './game-container.css?inline';
import { TitleAndScoreBox } from "./title-and-score-box";
import { Gameplay } from "./gameplay";
import { RulesButton } from "./rules-button";
import { useSignal } from "@builder.io/qwik";

export const GameContainer = component$(() => {
    useStyles$(styles);
    const score = useSignal(0);
    return <div class="game-container">
        <TitleAndScoreBox score={score.value} />
        <Gameplay score={score} />
        <RulesButton />
    </div>;
});
