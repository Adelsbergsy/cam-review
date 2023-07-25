<script setup>
import { computed } from 'vue';

const props = defineProps({
    navbarType: Boolean,
    reviewNames: Array,
});
//console.log(props.navbarType);
</script>

<template>
    <div class="navbar-container">
        <template v-if="props.navbarType">
            <nav class="navbar">
                <h2 class="navbar__title">Обзоры</h2>
                <!-- <a href="#" class="navbar__link">Сравнение Canon и Canon</a> -->
                <!-- <a href="#" class="navbar__link">Test</a> -->
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
        <template v-else>
            <nav class="navbar">
                <div class="navbar__current-review">
                    <h4 class="navbar__current-review__title">
                        {{ reviewNames[0] }}
                    </h4>
                </div>
                <ul class="navbar__list">
                    <li class="navbar__list__item">
                        <a href="#About-author" class="navbar__list__item__link"
                            >Об авторе</a
                        >
                    </li>
                    <li class="navbar__list__item">
                        <a
                            href="#Cameras-characteristics"
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
        <div id="teleport"></div>
    </div>
</template>

<style scoped lang="scss"></style>
