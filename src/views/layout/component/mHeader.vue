<template>
  <div class="view_app">
    <el-row>
      <el-col :span="4" class="logo">
        logo
      </el-col>
      <el-col :span="18">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >


          <el-menu-item v-for="(item,index) in menuList" :index="item.path" >
            {{ item.title }}
          </el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="2">
        user
      </el-col>
    </el-row>
</div>
</template>

<script setup>
import { onMounted,ref,defineProps,defineEmits } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  menuList: Array
});
const emit = defineEmits(['updateParentData']);
const router = useRouter()
const route = useRoute()
const activeIndex = ref("1")

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


function sendToParent() {
  emit('updateParentData', '子组件数据');
}
</script>



<style scoped>
.logo {
  background-image: url("@/assets/logo.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>