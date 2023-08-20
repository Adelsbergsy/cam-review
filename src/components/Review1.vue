<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import Introduction from './Introduction.vue';
import Cameras from './Cameras.vue';
import Zoom from './Zoom.vue';
import PhotoOverlay from './PhotoOverlay.vue';

const openModal = ref(false);

function checkModal(value) {
    openModal.value = value;
}
</script>

<template>
    <article class="review-container">
        <Modal :openModal="openModal" @updateModalState="checkModal"></Modal>
        <Introduction :updateModalState="checkModal"></Introduction>
        <Cameras></Cameras>
        <Zoom></Zoom>
        <PhotoOverlay></PhotoOverlay>
    </article>
</template>

<style scoped></style>
