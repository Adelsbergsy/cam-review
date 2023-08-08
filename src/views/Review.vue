<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

const route = useRoute();
const router = useRouter();
const pageType = 'review';

const currentReview = computed(() => route.path.slice(1));

const RevFill = defineAsyncComponent(() =>
    import(`../components/Review${currentReview.value}.vue`).catch((err) => {
        if (err.name === 'Error') {
            router.push('error');
        }
    })
);
</script>

<template>
    <Navbar :navbarType="pageType"></Navbar>
    <RevFill></RevFill>
</template>
