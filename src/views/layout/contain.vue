<template>
  <div class="view_app">
    <el-container>
      <el-header>
        <m-header :menu-list="menuList" @updateParentData="handleDataFromChild"></m-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        Footer
      </el-footer>
    </el-container>

  </div>
</template>

<script setup>

import MHeader from '@/views/layout/component/mHeader.vue'
import {ref,onMounted} from 'vue'

const name = ref('contain')
const menuList = ref([]);
const childData =  ref("");

onMounted(()=>{


  menuList.value= [
    {
      path:"/dashboard",
      title:"首页"
    },
    {
      path:"/blog",
      title:"博客"
    },
  ]
})

function handleDataFromChild(data) {
  childData.value = data;
}
</script>


<style >
.el-container {
  min-height: 100%;
  max-height: 100%;

}
.el-header {
  min-height: 10%;
  max-height: 10%;
}

.el-main {
  min-height: 80%;
  max-height: 80%;
}

.el-footer {
  min-height: 10%;
  max-height: 10%;
}
</style>