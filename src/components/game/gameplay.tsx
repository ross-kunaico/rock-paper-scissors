import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './gameplay.css?inline';
import { GameplaySymbol } from "./gameplay-symbol";

export const Gameplay = component$(() => {
    useStyles$(styles);
    const userChoice = useSignal('');
    const computerChoice = useSignal('');
    return <div class="gameplay">
        {!userChoice.value && <div class="gameplay_choose">
                <div class="gameplay_choose_top-row">
                    <GameplaySymbol symbol="paper" />
                    <GameplaySymbol symbol="scissors" />
                </div>
                <GameplaySymbol symbol="rock" />
            </div>}
        {userChoice.value && <div class="gameplay_result">
            {userChoice.value}
            {computerChoice.value}
        </div>}
    </div>;
});