<script setup>
// import { computed } from 'vue';
// import { useRoute } from 'vue-router';
import RevFill from '../components/ReviewFilling.vue';

// const route = useRoute();
// const currentRouteName = computed(() => route.name);
// console.log(currentRouteName.value);
const emit = defineEmits(['update']);
emit('update', false);
</script>

<template>
    <RevFill></RevFill>
</template>
