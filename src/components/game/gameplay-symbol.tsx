import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './gameplay-symbol.css?inline';
import IconPaper from '~/../frontend-mentor/images/icon-paper.svg?jsx';
import IconRock from '~/../frontend-mentor/images/icon-rock.svg?jsx';
import IconScissors from '~/../frontend-mentor/images/icon-scissors.svg?jsx';

type GameplaySymbolProps = {
    symbol: 'rock' | 'paper' | 'scissors';
    isVictorious?: boolean;
};

export const GameplaySymbol = component$<GameplaySymbolProps>((props) => {
    const { symbol } = props;
    useStyles$(styles);
    return <div class={`gameplay-symbol ${props.isVictorious ? 'victorious' : ''}`} >
        <button class="gameplay-symbol-button" type="button" onClick$={() => {}} aria-label={symbol}>
            <div class={`symbol-outer-circle symbol-bg-${symbol}`}>
                <div class="symbol-inner-circle symbol-icon">
                    {symbol === 'rock' && <IconRock />}
                    {symbol === 'paper' && <IconPaper />}
                    {symbol === 'scissors' && <IconScissors />}
                </div>
            </div>
        </button>
    </div>;
});