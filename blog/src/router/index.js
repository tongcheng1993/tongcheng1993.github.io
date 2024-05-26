import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
        path: '/',
        component: () => import(/* webpackChunkName: "contain" */ '../views/layout/contain.vue'),

        children: [
            {
                path: "dash",
                component: () => import(/* webpackChunkName: "dash" */ '../views/dash/dash.vue'),
            },
            {
                path: 'study',
                component: () => import(/* webpackChunkName: "study" */ '../views/layout/blank.vue'),
                children: []
            },
            {
                path: 'it',
                component: () => import(/* webpackChunkName: "it" */ '../views/layout/blank.vue'),
                children: [
                    {
                        path: 'first',
                        component: () => import(/* webpackChunkName: "first" */ '../views/layout/blank.vue'),
                    },
                    {
                        path: 'second',
                        component: () => import(/* webpackChunkName: "second" */ '../views/layout/blank.vue'),
                    },
                    {
                        path: 'third',
                        component: () => import(/* webpackChunkName: "third" */ '../views/layout/blank.vue'),
                    }
                ]
            },

        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
