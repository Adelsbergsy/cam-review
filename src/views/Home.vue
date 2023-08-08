<script setup>
import Main from '../components/Main.vue';
import Navbar from '../components/Navbar.vue';

const pageType = 'home';
</script>

<template>
    <Navbar :navbarType="pageType"></Navbar>
    <Main></Main>
</template>

<style scoped></style>
