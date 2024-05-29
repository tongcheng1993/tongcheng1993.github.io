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
                children: [
                    {
                        path: 'college_english',
                        component: () => import(/* webpackChunkName: "college_english" */ '../views/study/college_english.vue'),
                    },
                ]
            },
            {
                path: 'it',
                component: () => import(/* webpackChunkName: "it" */ '../views/layout/blank.vue'),
                children: [
                    {
                        path: 'first',
                        component: () => import(/* webpackChunkName: "first" */ '../views/layout/blank.vue'),
                        children: [
                            {
                                path: 'chengxuyuan',
                                component: () => import(/* webpackChunkName: "chengxuyuan" */ '../views/it/first/chengxuyuan.vue'),
                            }
                        ]
                    },
                    {
                        path: 'second',
                        component: () => import(/* webpackChunkName: "second" */ '../views/layout/blank.vue'),
                        children: [
                            {
                                path: 'ruanjianshejishi',
                                component: () => import(/* webpackChunkName: "ruanjianshejishi" */ '../views/it/second/ruanjianshejishi.vue'),
                            }
                        ]
                    },
                    {
                        path: 'third',
                        component: () => import(/* webpackChunkName: "third" */ '../views/layout/blank.vue'),
                        children: [
                            {
                                path: 'xitongjiagoushi',
                                component: () => import(/* webpackChunkName: "xitongjiagoushi" */ '../views/it/third/xitongjiagoushi.vue'),
                            }
                        ]
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
