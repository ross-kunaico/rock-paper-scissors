import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './title-and-score-box.css?inline';

type TitleAndScoreBoxProps = {
    score: number;
};

export const TitleAndScoreBox = component$<TitleAndScoreBoxProps>((props) => {
    useStyles$(styles);
    const { score } = props;
    return <div class="title-and-score-box">
        <h1 class="title-and-score-box__title">ROCK<br/>PAPER<br/>SCISSORS</h1>
        <div class="title-and-score-box__score-box">
            <span class="score-text">SCORE</span>
            <span class="score-value dark-text">{score}</span>
        </div>
    </div>;
});