<script setup>
import Main from '../components/Main.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

const pageType = 'home';
</script>

<template>
    <Navbar :navbarType="pageType"></Navbar>
    <Main></Main>
    <Sidebar></Sidebar>
</template>

<style scoped></style>
