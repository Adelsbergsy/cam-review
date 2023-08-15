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
    <div class="container">
        <Navbar :navbarType="pageType"></Navbar>
        <RevFill></RevFill>
    </div>
</template>

<style scoped lang="scss">
.container {
    grid-template-columns: 270px 1fr;
}
</style>
