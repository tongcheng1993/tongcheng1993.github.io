<template>
  <div class="view_app">
    <p>{{name}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
const name = ref('dashboard')
</script>


<style scoped>

</style>