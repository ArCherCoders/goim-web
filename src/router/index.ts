import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("@/views/login/Login.vue"),
        },
        {
            path: '/main',
            name: 'main',
            component: () => import("@/views/main/Main.vue"),
        },
    ]
})

export default router


