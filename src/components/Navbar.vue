<script setup>
import { inject } from 'vue';
import SideParallax from './SideParallax.vue';

const props = defineProps({
    navbarType: String,
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
            <nav class="navbar">
                <div class="navbar__current-review">
                    <h3 class="navbar__title">
                        {{ reviewNames[0] }}
                    </h3>
                </div>
                <ul class="navbar-list">
                    <li class="navbar-list__item">
                        <a href="#about-author" class="navbar-list__link"
                            >Об авторе</a
                        >
                    </li>
                    <li class="navbar-list__item">
                        <a
                            href="#cameras-characteristics"
                            class="navbar-list__link"
                            >Характеристики обозреваемых фотоаппаратов</a
                        >
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
            <nav class="navbar error">
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
.error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}
.navbar__back-link {
    margin-top: 0px;
}
</style>
