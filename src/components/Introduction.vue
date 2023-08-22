<script setup>
import { ref, onMounted } from 'vue';
const author = ref();

const props = defineProps({
    updateModalState: Function,
});

onMounted(() => {
    author.value.addEventListener('click', () => {
        props.updateModalState(true);
    });
});
</script>

<template>
    <section class="introduction">
        <div class="author-info">
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
            <div class="author-info__text text-container">
                Алексей Олегин - профессиональный фотограф, в свободное время
                подрабатывает в небольшой IT-компании, мечтает завести пять
                кошек, которые станут фотомоделями и его личными музами. Алексей
                по случайному стечению обстоятельств приобретает фотокамеры
                Canon, несмотря на то что он всегда хотел иметь фотоаппарат
                "Зенит". В данной статье Алексей проведёт сравнительный обзор
                двух его любимых фотокамер от компании Canon. Вас ждут множество
                великолепных фото, созданных мастером, и его авторитетное мнение
                об устройствах, с помощью которых они были сделаны. Погнали!
            </div>
        </div>
    </section>
</template>
