import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../views/SignIn.vue';

const routes = [
    {
        path: '/',
        name: 'Auth Login',
        component: SignIn,
    },
    {
        path: '/signup',
        name: 'Auth SignUp',
        component: () => import('../views/SignUp.vue'),
    },
    {
        path: '/index',
        name: 'Главная страница',
        component: () => import('../views/Index.vue'),
    },
    {
        path: '/post/:id',
        name: 'Страница поста',
        component: () => import(/* webpackChunkName: "about" */ '../views/PostPage.vue'),
    },
    {
        path: '/schedule',
        name: 'Расписание занятий',
        component: () => import(/* webpackChunkName: "about" */ '../views/Schedule.vue'),
    },
    {
        path: '/user',
        name: 'Личный кабинет',
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
