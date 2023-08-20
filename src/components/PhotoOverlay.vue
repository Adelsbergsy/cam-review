<script setup>
import { ref, onMounted } from 'vue';

const width = ref(50);
const leftPhoto = ref();
function show() {
    console.log(width.value);
    leftPhoto.value.style.width = width.value + '%';
}
onMounted(() => {
    console.log(leftPhoto.value.style);
    console.log(width.value + '%');
});
</script>

<template>
    <section class="photo-overlay">
        <h5 class="review-title" id="photo-overlay">
            Сравнение качества фотографий, сделанных на обе камеры с одного
            ракурса
        </h5>
        <div class="text-container">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            consectetur accusamus eaque dolores maiores nobis incidunt
            provident? Accusamus molestias, ex, magni quo veritatis, hic
            temporibus sunt repellat atque molestiae autem.
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
