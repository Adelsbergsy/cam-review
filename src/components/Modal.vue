<script setup>
import { onMounted, ref, watch } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
    openModal: Boolean,
});
const emit = defineEmits(['updateModalState']);
const isOpened = ref(props.openModal);

watch(
    () => props.openModal,
    (newVal) => (isOpened.value = newVal)
);

const modalWindow = ref(null);
const overlay = ref(null);
const closeButton = ref(null);

onMounted(() => {
    closeButton.value.addEventListener('click', () => {
        isOpened.value = false;
        emit('updateModalState', isOpened.value);
    });

    document.body.addEventListener('keyup', (event) => {
        const key = event.code;
        if (key === 'Escape') {
            isOpened.value = false;
            emit('updateModalState', isOpened.value);
        }
    });
    overlay.value.addEventListener('click', () => {
        isOpened.value = false;
        emit('updateModalState', isOpened.value);
    });
});
</script>

<template>
    <div
        class="modal"
        :class="isOpened ? 'modal_active' : ''"
        ref="modalWindow"
    >
        <div class="modal__window">
            <div class="modal__content">
                <Icon></Icon>
            </div>
            <button ref="closeButton" class="modal__button">
                <img src="/src/assets/images/close.svg" alt="X" />
            </button>
        </div>
        <div ref="overlay" class="modal__overlay"></div>
    </div>
</template>
