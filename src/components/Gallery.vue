<script setup>
import { ref } from 'vue';

const counter = ref(1);
const path = ref();
const modalWindow = ref();

function toggleSlide(mode) {
    async function getFiles() {
        const response = await fetch('/api/v1/galleryFiles');
        const result = await response.json();
        const length = result.files.length;

        if (mode === 'next') {
            if (counter.value < length) {
                counter.value++;
            } else {
                counter.value = 1;
            }
        } else if (mode === 'prev') {
            if (counter.value > 1) {
                counter.value--;
            } else {
                counter.value = length;
            }
        }

        const curPhoto = result.files[counter.value - 1];
        path.value = `src/assets/images/gallery/${curPhoto}`;
    }

    getFiles();
}

async function getDefaultPhoto() {
    const response = await fetch('/api/v1/galleryFiles');
    const result = await response.json();
    const photo = result.files[0];
    path.value = `src/assets/images/gallery/${photo}`;
}

function openWindow() {
    modalWindow.value.showModal();
}

function closeWindow() {
    modalWindow.value.close();
}

getDefaultPhoto();
</script>

<template>
    <section class="gallery">
        <h5 class="review-title" id="gallery">Галерея</h5>
        <div class="image-container">
            <img
                class="image-container__slide"
                :src="path"
                @click="openWindow"
                alt="Photo"
            />
            <button
                class="image-container__toggle-slide"
                @click="toggleSlide('prev')"
            >
                &#10094;
            </button>
            <button
                class="image-container__toggle-slide"
                @click="toggleSlide('next')"
            >
                &#10095;
            </button>
        </div>
        <dialog class="modalWindow" ref="modalWindow">
            <img :src="path" alt="photo" class="modalWindow__photo" />
            <button @click="closeWindow" class="modalWindow__close">
                &#10005;
            </button>
        </dialog>
    </section>
</template>
