<template>
  <div class="view_app" style="display: flex; align-items: center; justify-content: center;">
    <div style="width: 20% ;height: 100% ;">

    </div>
    <div style="width: 60% ;height: 100% ;">
      <router-view/>
    </div>
    <div style="width: 20% ;height: 100% ;">

    </div>

  </div>
</template>
<script setup>
</script>
<style >
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #fff;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #fff;
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.view_app{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #fff;
}
</style>
