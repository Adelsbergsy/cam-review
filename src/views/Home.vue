<script setup>
import Main from '../components/Main.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

const pageType = 'home';
</script>

<template>
    <div class="container">
        <Navbar :navbarType="pageType"></Navbar>
        <Main></Main>
        <Sidebar></Sidebar>
    </div>
</template>

<style scoped></style>
