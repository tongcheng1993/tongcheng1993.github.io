<template>
  <div class="view_app login">
    <p>{{name}}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('login')
</script>



<style scoped>
.login {
  background-image: url("@/assets/logo.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>