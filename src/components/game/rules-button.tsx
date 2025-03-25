import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './rules-button.css?inline';
import { RulesModal } from "./rules-modal";

export const RulesButton = component$(() => {
    useStyles$(styles);
    const showRulesModal = useSignal(false);
    return <>
        <div class="rules-button-container">
            <button class="rules-button" type="button" onClick$={() => showRulesModal.value = true}>RULES</button>
        </div>
        {showRulesModal.value && <RulesModal showModal={showRulesModal} />}
    </>;
});