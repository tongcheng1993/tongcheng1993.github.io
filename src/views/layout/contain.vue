<template>
  <div class="view_app">
    <el-container>
      <el-header>
        <m-header></m-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script setup>

import MHeader from '@/views/layout/component/mHeader.vue'
import {ref} from 'vue'

const name = ref('contain')


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