import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './title-and-score-box.css?inline';

export const TitleAndScoreBox = component$(() => {
    useStyles$(styles);
    const scoreSignal = useSignal(10);
    return <div class="title-and-score-box">
        <h1 class="title-and-score-box__title">ROCK<br/>PAPER<br/>SCISSORS</h1>
        <div class="title-and-score-box__score-box">
            <span class="score-text">SCORE</span>
            <span class="score-value">{scoreSignal.value}</span>
        </div>
    </div>;
});