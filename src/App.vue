<template>
  <div id="app">
<!--     <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!--    <ZentCodingSchool />-->
    <Ex/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ZentCodingSchool from './components/ZentCodingSchool.vue'
import Ex from "@/components/Homeworks/Session4/Product";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ZentCodingSchool,
    Ex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
