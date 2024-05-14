<template>

    <div>{{ count }}</div>
    <a-button type="primary" @click="increment">按钮</a-button>
</template>

<script>
    import {ref, onMounted, reactive, getCurrentInstance} from 'vue';

    export default {
        setup() {

            const instance = getCurrentInstance(); // 获取组件实例
            // 响应式状态
            const count = ref(0)

            // 用来修改状态、触发更新的函数
            function increment() {
                count.value++
            }

            // 生命周期钩子
            onMounted(() => {
                console.log(`The initial count is ${count.value}.`)
            })
            // 通过 instance.ctx 访问到旧的 Vue 2.x 上下文
            // console.log(instance.ctx.increment === increment); // true

            // 返回响应式数据和方法，以便它们可以在模板中使用
            return {
                count,
                increment
            };
        }
    };
</script>


<style scoped>

</style>
