<script setup>
import { inject } from 'vue';
import SideParallax from './SideParallax.vue';

const props = defineProps({
    navbarType: String,
    refsId: Array,
    refsText: Array,
});

const reviewNames = inject('reviewNames', ['Первая статья']);
</script>

<template>
    <div class="navbar-container">
        <template v-if="props.navbarType === 'home'">
            <nav class="navbar">
                <h2 class="navbar__title">Обзоры</h2>
                <ul class="navbar-list">
                    <li class="navbar-list__item">
                        <router-link to="/1">{{ reviewNames[0] }}</router-link>
                    </li>
                </ul>
            </nav>
            <SideParallax></SideParallax>
        </template>
        <template v-else-if="props.navbarType === 'review'">
            <nav class="navbar navbar-review">
                <div class="navbar__current-review">
                    <h3 class="navbar__title">
                        {{ reviewNames[0] }}
                    </h3>
                </div>
                <ul class="navbar-list">
                    <li
                        v-for="(id, index) in props.refsId"
                        class="navbar-list__item"
                    >
                        <a :href="`#${id}`" class="navbar-list__link">{{
                            props.refsText[index]
                        }}</a>
                    </li>
                </ul>
                <div class="navbar__back-link">
                    <router-link to="/"
                        >Вернуться на главную страницу</router-link
                    >
                </div>
            </nav>
        </template>
        <template v-else>
            <nav class="navbar navbar-error">
                <div class="navbar__back-link">
                    <router-link to="/"
                        >Вернуться на главную страницу</router-link
                    >
                </div>
            </nav>
        </template>
    </div>
</template>

<style scoped lang="scss">
.navbar-review h3,
a {
    @media screen and (max-width: 998px) {
        display: block;
        text-align: center !important;
    }
}
.navbar-review {
    @media screen and (max-width: 576px) {
        width: 300px;
    }
}

.navbar-error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    .navbar__back-link {
        margin-top: -20px;
    }
}
</style>
