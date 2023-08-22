<script setup>
import { ref } from 'vue';

const width = ref(50);
const leftPhoto = ref();
function show() {
    leftPhoto.value.style.width = width.value + '%';
}
</script>

<template>
    <section class="photo-overlay">
        <h5 class="review-title" id="photo-overlay">
            Сравнение качества фотографий, сделанных на обе камеры с одного
            ракурса
        </h5>
        <div class="text-container">
            Качество фотографий, сделанных на Canon EOS 90D и Canon EOS 2000D с
            одного ракурса, может зависеть от нескольких факторов, включая
            разрешение датчика изображения, объективы, настройки и навыки
            фотографа. Однако, в целом, Canon EOS 90D с его высоким разрешением
            32,5 мегапикселя должен предложить более детализированные и более
            четкие изображения по сравнению с Canon EOS 2000D с разрешением 24,1
            мегапикселя. EOS 90D также обладает более продвинутой системой
            автофокусировки, что может обеспечить более точное захватывание
            объектов и улучшенную резкость фотографий. Однако, если используются
            одинаковые объективы на обеих камерах и правильные настройки, можно
            получить высококачественные фотографии и на Canon EOS 2000D. В
            итоге, опыт и навык фотографа также сыграют важную роль в качестве
            фотографий, независимо от модели камеры.
        </div>
        <div class="image-container">
            <div class="image-container__left-photo" ref="leftPhoto"></div>
            <img
                class="image-container__right-photo"
                src="https://goo.su/7VRjXEU"
                alt="Photo"
            />
        </div>
        <input
            class="slider"
            type="range"
            min="0"
            max="100"
            v-model="width"
            @input="show"
            title="Двигайте ползунок для перемещения границы между фотографиями"
        />
    </section>
</template>

<style scoped lang="scss"></style>
