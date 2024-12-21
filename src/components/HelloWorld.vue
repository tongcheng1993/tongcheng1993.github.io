<template>
  <div class="greeting">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('Hello World!')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.greeting {
  color: red;
  font-weight: bold;
}
</style>
