import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './rules-button.css?inline';

export const RulesButton = component$(() => {
    useStyles$(styles);
    return <div class="rules-button-container">
        <button class="rules-button" type="button">RULES</button>
    </div>;
});