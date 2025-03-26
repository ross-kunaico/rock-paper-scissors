import { $, component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './gameplay.css?inline';
import { GameplaySymbol } from "./gameplay-symbol";
import type { Symbol } from "./types/symbol";
import { determineResult } from "./utils/determine-result";

export const Gameplay = component$(() => {
    useStyles$(styles);

    const userChoice = useSignal<Symbol | undefined>();
    const computerChoice = useSignal<Symbol | undefined>();
    const result = useSignal<'win' | 'lose' | 'draw' | undefined>();

    const choices: Symbol[] = ['rock', 'paper', 'scissors'];

    const declareWinner = $(() => {
        setTimeout(() => {
            result.value = determineResult(userChoice.value!, computerChoice.value!);
        }, 600);
    });
    const makeComputerChoice = $(() => {
        setTimeout(() => {
            computerChoice.value = choices[Math.floor(Math.random() * choices.length)];
            declareWinner();
        }, 600);
    });
    const handleSymbolClick = $((symbol: Symbol) => {
        userChoice.value = symbol;
        makeComputerChoice();
    });
    const resetGame = $(() => {
        userChoice.value = undefined;
        computerChoice.value = undefined;
        result.value = undefined;
    });
    
    return <div class="gameplay">
        {!userChoice.value && <div class="gameplay_choose">
                <div class="gameplay_choose_top-row">
                    <GameplaySymbol symbol="paper" onSymbolClick$={handleSymbolClick} />
                    <GameplaySymbol symbol="scissors" onSymbolClick$={handleSymbolClick} />
                </div>
                <GameplaySymbol symbol="rock" onSymbolClick$={handleSymbolClick} />
            </div>}
        {userChoice.value && <div class="gameplay_results">
            <div class="gameplay_selections">
                <div class="gameplay_selection">
                <GameplaySymbol symbol={userChoice.value!} />
                <div class="gameplay_picked-text">
                    YOU PICKED
                </div>
            </div>
                <div class="gameplay_selection">
                    {computerChoice.value && <GameplaySymbol symbol={computerChoice.value!} /> || 
                    <div class="gameplay_empty_selection" aria-label="empty"></div>}
                    <div class="gameplay_picked-text">
                        THE HOUSE PICKED
                    </div>
                </div>
            </div>
            {result.value && <div class="gameplay_result">
                <div class="gameplay_result-text">
                    {result.value === 'win' ? 'YOU WIN' : result.value === 'lose' ? 'YOU LOSE' : 'DRAW'}
                </div>
                <button class="gameplay_play-again-btn dark-text" type="button" onClick$={resetGame}>
                    PLAY AGAIN
                </button>
            </div>}
        </div>}
    </div>;
});