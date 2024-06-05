import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/layout/contain.vue'),

        children: [
            {
                path: "dash",
                component: () => import('../views/dash/dash.vue'),
            },
            {
                path: 'study/college_english',
                component: () => import('../views/study/college_english.vue'),
            },
            {
                path: 'my_tool/date_tool',
                component: () => import('../views/my_tool/date_tool.vue'),
            },
            {
                path: 'it/first/chengxuyuan',
                component: () => import('../views/it/first/chengxuyuan.vue'),
            },
            {
                path: 'it/second/ruanjianshejishi',
                component: () => import('../views/it/second/ruanjianshejishi.vue'),
            },
            {
                path: 'it/third/xitongjiagoushi',
                component: () => import( '../views/it/third/xitongjiagoushi.vue'),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
