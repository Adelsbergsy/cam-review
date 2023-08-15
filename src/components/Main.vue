<script setup>
import { onMounted } from 'vue';
import { jarallax } from 'jarallax';

onMounted(() => {
    let jarallaxArray = document.querySelectorAll('.main-parallax');
    jarallaxArray.forEach((image) => {
        jarallax(image, { speed: 0.2, type: 'scale' });
    });
});
</script>

<template>
    <main class="main-container">
        <section class="title-container">
            <h1 class="title-container__title">CamReview</h1>
            <p class="title-container__text">
                Сайт посвящён фотографии и фотокамерам. Здесь вы можете
                насладиться множеством красивейших фото. Также вашему вниманию
                представлены обзоры фотоаппаратов.
            </p>
        </section>
        <div class="jarallax main-parallax"></div>
        <div class="jarallax main-parallax"></div>
        <div class="jarallax main-parallax"></div>
        <div class="jarallax main-parallax"></div>
        <div class="jarallax main-parallax"></div>
        <div class="jarallax main-parallax"></div>
    </main>
</template>
