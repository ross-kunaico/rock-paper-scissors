import { $, component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './gameplay.css?inline';
import { GameplaySymbol } from "./gameplay-symbol";

export const Gameplay = component$(() => {
    useStyles$(styles);
    const userChoice = useSignal('');
    const computerChoice = useSignal('');
    const handleSymbolClick = $((symbol: string) => {
        userChoice.value = symbol;
        // Generate computer choice or other game logic here
        const choices = ['rock', 'paper', 'scissors'];
        computerChoice.value = choices[Math.floor(Math.random() * choices.length)];
    });
    return <div class="gameplay">
        {!userChoice.value && <div class="gameplay_choose">
                <div class="gameplay_choose_top-row">
                    <GameplaySymbol symbol="paper" onSymbolClick$={handleSymbolClick} />
                    <GameplaySymbol symbol="scissors" onSymbolClick$={handleSymbolClick} />
                </div>
                <GameplaySymbol symbol="rock" onSymbolClick$={handleSymbolClick} />
            </div>}
        {userChoice.value && <div class="gameplay_result">
            {userChoice.value}
            {computerChoice.value}
        </div>}
    </div>;
});