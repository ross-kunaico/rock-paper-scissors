import type { Signal} from "@builder.io/qwik";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './rules-modal.css?inline';
import ImgRules from '~/../frontend-mentor/images/image-rules.svg?jsx';
import IconClose from '~/../frontend-mentor/images/icon-close.svg?jsx';

export const RulesModal = component$<{showModal: Signal<boolean>}>((props) => {
    useStyles$(styles);
    const { showModal } = props;
    return <div class="rules-modal-container">
        <div class="rules-modal">
            <h2 class="rules-modal-title dark-text">RULES</h2>
            <div class="rules-modal-content">
                <ImgRules />
            </div>
            <button 
                class="rules-modal-close dark-text" 
                type="button" 
                onClick$={() => showModal.value = false}
                aria-label="Close"
            >
                <IconClose />
            </button>
        </div>
    </div>;
});