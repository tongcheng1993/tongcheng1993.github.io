import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
        path: '/',
        name: '',
        component: () => import(/* webpackChunkName: "contain" */ '../views/layout/contain.vue'),
        redirect: '/dash',
        children: [
            {
                path: "dash",
                name: "dash",
                component: () => import(/* webpackChunkName: "dash" */ '../views/Dash.vue'),
            },
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
            },
            {
                path: "bank",
                name: "bank",
                component: () => import(/* webpackChunkName: "bank" */ '../views/layout/blank.vue'),
                children: [
                    {
                        path: "czb",
                        name: "czb",
                        component: () => import(/* webpackChunkName: "bank" */ '../views/bank/czb.vue'),
                    }
                ]
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
