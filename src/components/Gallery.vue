<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['transmitRef']);

const counter = ref(1);
const path = ref();
const length = ref();
const curPhoto = ref();
const modalWindow = ref();
const closeButton = ref();
const timerId = ref();

function toggleSlide(mode) {
    if (mode === 'next') {
        if (counter.value < length.value) {
            counter.value++;
        } else {
            counter.value = 1;
        }
    } else if (mode === 'prev') {
        if (counter.value > 1) {
            counter.value--;
        } else {
            counter.value = length.value;
        }
    }
    clearTimeout(timerId.value);
    setSettings();
}

async function setSettings() {
    const response = await fetch('/api/v1/galleryFiles');
    const result = await response.json();
    length.value = result.files.length;
    curPhoto.value = result.files[counter.value - 1];
    path.value = `gallery/${curPhoto.value}`;

    timerId.value = setTimeout(function autoToggle() {
        if (counter.value < length.value) {
            counter.value++;
        } else {
            counter.value = 1;
        }
        curPhoto.value = result.files[counter.value - 1];
        path.value = `gallery/${curPhoto.value}`;

        timerId.value = setTimeout(autoToggle, 5000);
    }, 5000);
}

function pressEsc(event) {
    const key = event.code;
    if (key === 'Escape') {
        closeWindow();
    }
}

function openWindow() {
    clearTimeout(timerId.value);
    modalWindow.value.showModal();
    document.body.addEventListener('keyup', pressEsc);
}

function closeWindow() {
    modalWindow.value.close();
    document.body.removeEventListener('keyup', pressEsc);
    setSettings();
}

setSettings();

onMounted(() => {
    const id = document.getElementById('gallery').id;
    const text = document.getElementById('gallery').innerText;

    emit('transmitRef', id, text);
});
</script>

<template>
    <section class="gallery">
        <h5 class="review-title" id="gallery">Галерея</h5>
        <div class="image-container" id="gal">
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
            <button
                @click="closeWindow"
                class="modalWindow__close"
                ref="closeButton"
            >
                &#10005;
            </button>
        </dialog>
    </section>
</template>
