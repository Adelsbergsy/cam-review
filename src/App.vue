<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';

let isHomePage = ref();
const reviewNames = ['Сравнение Canon EOS 2000D и Canon EOS 90D'];

function checkPath(value) {
    isHomePage.value = value;
}

// const serverHello = ref();

// fetch('/api/v1/hello')
//     .then((r) => r.json())
//     .then(({ message }) => {
//         serverHello.value = message;
//     });
</script>

<template>
    <!-- <h2>{{ serverHello }}</h2> -->
    <Navbar :navbarType="isHomePage" :reviewNames="reviewNames"></Navbar>
    <RouterView @update="checkPath" />
</template>

<style scoped></style>
