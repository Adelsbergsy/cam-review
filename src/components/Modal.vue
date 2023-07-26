<script setup>
import { onMounted, ref, watch } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
    openModal: Boolean,
});
const emit = defineEmits(['updateModalState']);
let tmp = ref(props.openModal);
watch(
    () => props.openModal,
    (newVal) => (tmp.value = newVal)
);
const modalWindow = ref(null);
const overlay = ref(null);
const closeButton = ref(null);
const body = document.querySelector('body');
// onMounted(() => setTimeout(() => console.log(props.authorVNode), 1));
onMounted(() => {
    closeButton.value.addEventListener('click', () => {
        tmp.value = false;
        emit('updateModalState', tmp.value);
    });

    body.addEventListener('keyup', (event) => {
        const key = event.code;
        console.log(key);
        if (key === 'Escape') {
            tmp.value = false;
            emit('updateModalState', tmp.value);
        }
    });
    overlay.value.addEventListener('click', () => {
        tmp.value = false;
        emit('updateModalState', tmp.value);
    });
});
</script>

<template>
    <div class="modal" :class="tmp ? 'modal_active' : ''" ref="modalWindow">
        <div class="modal__window">
            <div class="modal__window__content">
                <Icon></Icon>
            </div>
            <button ref="closeButton" class="modal__window__button">
                <img src="/src/assets/images/close.svg" alt="X" />
            </button>
        </div>
        <div ref="overlay" class="modal__overlay"></div>
    </div>
</template>
