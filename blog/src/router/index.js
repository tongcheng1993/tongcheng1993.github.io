import {createRouter, createWebHashHistory} from 'vue-router'
import layoutContain from '../views/layout/contain.vue'
import dashDash from '../views/dash/dash.vue'
import studyCollege_english from '../views/study/college_english.vue'
import my_toolDate_tool from '../views/my_tool/date_tool.vue'
import itFirstChengxuyuan from '../views/it/first/chengxuyuan.vue'
import itSecondRuanjianshejishi from '../views/it/second/ruanjianshejishi.vue'
import itThirdXitongjiagoushi from '../views/it/third/xitongjiagoushi.vue'
const routes = [
    {
        path: '/',
        component: layoutContain,

        children: [
            {
                path: "dash",
                component: dashDash,
            },
            {
                path: 'study/college_english',
                component: studyCollege_english,
            },
            {
                path: 'my_tool/date_tool',
                component: my_toolDate_tool,
            },
            {
                path: 'it/first/chengxuyuan',
                component: itFirstChengxuyuan,
            },
            {
                path: 'it/second/ruanjianshejishi',
                component: itSecondRuanjianshejishi,
            },
            {
                path: 'it/third/xitongjiagoushi',
                component: itThirdXitongjiagoushi,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
