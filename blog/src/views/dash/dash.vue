<template>
    <div>{{ count }}</div>
    <a-button type="primary" @click="increment">按钮</a-button>
</template>

<script>
    import {getInfo} from  "../../api/baseApi"
    import {Button as AButton,} from 'ant-design-vue'

    export default {
        name: "dash",
        // 引用组件
        components: {
            AButton,
        },
        // 上级组件向本页面传递的参数
        props: {},
        // 本页面计算属性
        computed: {},
        // 本页面监听属性
        watch: {},
        data() {
            return {
                count: 0,
            }
        },
        methods: {

            // 初始化数据
            init() {
                let _that = this
                getInfo({}).then((data)=>{
                    _that.count = 1
                }).catch((error)=>{
                    console.log(error)
                })
            },

            increment() {
                let _that = this
                _that.count++
            }

        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
        },

    };
</script>


<style scoped>

</style>
