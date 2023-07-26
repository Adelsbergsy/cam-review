<script setup>
import Main from '../components/Main.vue';

const emit = defineEmits(['update']);
emit('update', true);
</script>

<template>
    <Main></Main>
</template>

<style scoped></style>
