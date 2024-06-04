//1引入stroe
import {createStore} from 'vuex'

//2、创建一个store对象
const store = createStore({
    //全局共享状态（数据）存放
    state: {
        meToken: ""
    },
    getters: {

    },
    //同步提交状态
    mutations: {
        setMeToken(state,payload){
            state.meToken = payload
        }
    },
    //提交操作（可以是同步也可以是异步）给mutations
    actions: {}
})

//3、导出
export default store

