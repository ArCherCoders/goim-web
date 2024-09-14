import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            name: 'main',
            component: () => import("@/views/main/Main.vue"),
            children: [
                {
                    path: '/main/friends',
                    component: () => import("@/views/main/friends/Friends.vue"),
                },
                {
                    path: '/main/session',
                    component: () => import("@/views/main/session/Session.vue"),
                },
                {
                    path: '/main/profile',
                    component: () => import("@/views/main/profile/Profile.vue"),
                }
            ]
        },
    ]
})

export default router
