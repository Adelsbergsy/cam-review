<script setup>
import { onMounted } from 'vue';
import { jarallax, jarallaxVideo } from 'jarallax';

jarallaxVideo();

onMounted(() => {
    let jarallaxArray = document.querySelectorAll('.main-parallax');
    jarallaxArray.forEach((image) => {
        jarallax(image, { speed: 0.2, type: 'scale' });
    });
    jarallaxArray = document.querySelectorAll('.aside-parallax');
    jarallaxArray.forEach((image) => {
        jarallax(image, { speed: 0.2, type: 'scroll' });
    });
});
</script>

<template>
    <main>
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
        <teleport to="#teleport"
            ><div class="jarallax aside-parallax" id="teleportedImage1"></div>
            <div
                class="jarallax aside-parallax"
                data-jarallax
                data-video-src="mp4:/video_2023-07-24_19-22-02.mp4"
                id="teleportedVideo"
            ></div>
            <div class="jarallax aside-parallax" id="teleportedImage2"></div
        ></teleport>
    </main>
</template>
