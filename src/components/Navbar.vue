<script setup>
import { computed, inject } from 'vue';

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
                <ul class="revbar__list">
                    <li class="revbar__list__item">
                        <router-link to="/1">{{ reviewNames[0] }}</router-link>
                    </li>
                    <!-- /.revbar__link -->
                </ul>
                <!-- /.revbar -->
            </nav>
            <!-- <div id="teleport"></div> -->
        </template>
        <template v-else-if="props.navbarType === 'review'">
            <nav class="navbar">
                <div class="navbar__current-review">
                    <h4 class="navbar__current-review__title">
                        {{ reviewNames[0] }}
                    </h4>
                </div>
                <ul class="navbar__list">
                    <li class="navbar__list__item">
                        <a href="#about-author" class="navbar__list__item__link"
                            >Об авторе</a
                        >
                    </li>
                    <li class="navbar__list__item">
                        <a
                            href="#cameras-characteristics"
                            class="navbar__list__item__link"
                            >Характеристики обозреваемых фотоаппаратов</a
                        >
                    </li>
                    <!-- /.navbar__list__item -->
                </ul>
                <!-- /.navbr__list -->

                <div class="navbar__back-link">
                    <router-link to="/"
                        >Вернуться на главную страницу</router-link
                    >
                </div>
            </nav></template
        >
        <template v-else>
            <nav class="navbar error">
                <div class="navbar__back-link">
                    <router-link to="/"
                        >Вернуться на главную страницу</router-link
                    >
                </div>
            </nav>
        </template>
        <div id="teleport"></div>
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
