<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
//import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
// import Main from './components/Main.vue';

let isHomePage = ref();
const reviewNames = ['Сравнение Canon EOS 2000D и Canon EOS 90D'];

function checkPath(value) {
    isHomePage.value = value;
}
</script>

<template>
    <Navbar :navbarType="isHomePage" :reviewNames="reviewNames"></Navbar>
    <RouterView @update="checkPath" />
</template>

<style scoped></style>
