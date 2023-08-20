<script setup lang="ts">
import { RouterView } from 'vue-router';
import { provide } from 'vue';

provide('reviewNames', ['Сравнение Canon EOS 2000D и Canon EOS 90D']);
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
