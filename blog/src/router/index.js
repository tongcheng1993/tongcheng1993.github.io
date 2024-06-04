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
                path: 'study/college_english',
                component: () => import(/* webpackChunkName: "study/college_english" */ '../views/study/college_english.vue'),
            },
            {
                path: 'my_tool/date_tool',
                component: () => import(/* webpackChunkName: "my_tool/date_tool" */ '../views/my_tool/date_tool.vue'),
            },
            {
                path: 'it/first/chengxuyuan',
                component: () => import(/* webpackChunkName: "it/first/chengxuyuan" */ '../views/it/first/chengxuyuan.vue'),
            },
            {
                path: 'it/second/ruanjianshejishi',
                component: () => import(/* webpackChunkName: "it/second/ruanjianshejishi" */ '../views/it/second/ruanjianshejishi.vue'),
            },
            {
                path: 'it/third/xitongjiagoushi',
                component: () => import(/* webpackChunkName: "it/third/xitongjiagoushi" */ '../views/it/third/xitongjiagoushi.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
