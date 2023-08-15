<script setup>
import { ref, onMounted } from 'vue';
import Modal from './Modal.vue';
import Cameras from './Cameras.vue';

const author = ref();
const openModal = ref(false);

function checkModal(value) {
    openModal.value = value;
}

onMounted(() => {
    author.value.addEventListener('click', () => (openModal.value = true));
});
</script>

<template>
    <Modal :openModal="openModal" @updateModalState="checkModal"></Modal>
    <section class="introduction">
        <article class="author-info">
            <h5 class="author-info__title review-title" id="about-author">
                Об авторе
            </h5>
            <img
                src="/src/assets/images/author.jpg"
                alt="introduction author"
                title="Показать контакты автора"
                class="author-info__image"
                ref="author"
            />
            <p class="author-info__text">
                Алексей Олегин - профессиональный фотограф, в свободное время
                подрабатывает в небольшой IT-компании, мечтает завести пять
                кошек, которые станут фотомоделями и его личными музами. Алексей
                по случайному стечению обстоятельств приобретает фотокамеры
                Canon, несмотря на то что он всегда хотел иметь фотоаппарат
                "Зенит". В данной статье Алексей проведёт сравнительный обзор
                двух его любимых фотокамер от компании Canon. Вас ждут множество
                великолепных фото, созданных мастером, и его авторитетное мнение
                об устройствах, с помощью которых они были сделаны. Погнали!
            </p>
        </article>
        <Cameras></Cameras>
    </section>
</template>

<style scoped></style>
