<script setup>
import { ref, computed, onMounted } from 'vue';
import Main from '../components/Main.vue';
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router';

const emit = defineEmits(['update']);
emit('update', true);
//onMounted(() => location.reload());
</script>

<template>
    <Main></Main>
</template>

<style scoped></style>
