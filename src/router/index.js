import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Review from '../views/Review.vue';
import Error from '../views/Error.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/:id(\\d+)',
            name: `review`,
            component: Review,
        },
        {
            path: '/:pathMatch(.*)*',
            component: Error
        }
    ],
});

export default router;
