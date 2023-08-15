<script setup>
import { onMounted } from 'vue';
import { jarallax, jarallaxVideo } from 'jarallax';

jarallaxVideo();

onMounted(() => {
    let jarallaxArray = document.querySelectorAll('.side-parallax');
    jarallaxArray.forEach((image) => {
        jarallax(image, { speed: 0.2, type: 'scroll' });
    });
});
</script>

<template>
    <div class="side-parallax-container">
        <div class="jarallax side-parallax" id="teleportedImage1"></div>
        <div
            class="jarallax side-parallax"
            data-jarallax
            data-video-src="mp4:/video_2023-07-24_19-22-02.mp4"
            id="teleportedVideo"
        ></div>
        <div class="jarallax side-parallax" id="teleportedImage2"></div>
    </div>
</template>
