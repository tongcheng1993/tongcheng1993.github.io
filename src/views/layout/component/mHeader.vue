<template>
  <div class="view_app">
    <el-row>
      <el-col :span="4">
        logo
      </el-col>
      <el-col :span="18">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="/dashboard">dashboard</el-menu-item>
          <el-menu-item index="/english" >english</el-menu-item>
<!--          <el-sub-menu index="2">-->
<!--            <template #title>Workspace</template>-->
<!--            <el-menu-item index="2-1">item one</el-menu-item>-->
<!--            <el-menu-item index="2-2">item two</el-menu-item>-->
<!--            <el-menu-item index="2-3">item three</el-menu-item>-->
<!--            <el-sub-menu index="2-4">-->
<!--              <template #title>item four</template>-->
<!--              <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--              <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--              <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--            </el-sub-menu>-->
<!--          </el-sub-menu>-->

<!--          <el-menu-item index="4">Orders</el-menu-item>-->
        </el-menu>
      </el-col>
      <el-col :span="2">
        user
      </el-col>
    </el-row>
</div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
defineProps({
  title: String,
  likes: Number
})
const router = useRouter()
const route = useRoute()
const activeIndex = ref("1")
const addClick = () => {
  activeIndex.value+= 2
}
const handleSelect = (key, keyPath)=>{
  console.log(key, keyPath)
// 路由跳转 && 设置参数
  router.push({
    path: key,
    query: {
      id: 123,
    },
  })
}
onMounted(()=>{
  let path = route.path
  console.log(path)
  activeIndex.value= path
})
</script>



<style scoped>

</style>