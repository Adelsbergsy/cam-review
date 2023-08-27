<script setup>
import { reactive, onMounted } from 'vue';

import Introduction from './Introduction.vue';
import Cameras from './Cameras.vue';
import Zoom from './Zoom.vue';
import PhotoOverlay from './PhotoOverlay.vue';
import Summarizing from './Summarizing.vue';
import Gallery from './Gallery.vue';

const emit = defineEmits(['transmitRefsList']);

const refsList = reactive({ id: [], text: [] });

function addRef(id, text) {
    refsList.id.push(id);
    refsList.text.push(text);
}

onMounted(() => {
    emit('transmitRefsList', refsList);
});
</script>

<template>
    <article class="review-container">
        <Introduction @transmitRef="addRef"></Introduction>
        <Cameras @transmitRef="addRef"></Cameras>
        <Zoom @transmitRef="addRef"></Zoom>
        <PhotoOverlay @transmitRef="addRef"></PhotoOverlay>
        <Summarizing @transmitRef="addRef"></Summarizing>
        <Gallery @transmitRef="addRef"></Gallery>
    </article>
</template>

<style scoped></style>
