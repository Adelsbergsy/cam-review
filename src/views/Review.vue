<script setup>
import { ref, computed } from 'vue';
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

const refsId = ref();
const refsText = ref();

function transmitRefsList(refs) {
    refsId.value = refs.id;
    refsText.value = refs.text;
}
</script>

<template>
    <div class="container">
        <Navbar
            :navbarType="pageType"
            :refsId="refsId"
            :refsText="refsText"
        ></Navbar>
        <RevFill @transmitRefsList="transmitRefsList"></RevFill>
    </div>
</template>

<style scoped lang="scss">
.container {
    grid-template-columns: 270px 1fr;
    @media screen and (max-width: 1200px) {
        grid-template-columns: 150px 800px;
        max-width: 1000px;
        padding-left: 0;
    }
    @media screen and (max-width: 998px) {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0;
        place-items: center;
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr;
        max-width: 350px;
    }
}
</style>
