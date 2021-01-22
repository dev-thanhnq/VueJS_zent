<template>
  <div id="app">
<!--    <LoginLayout v-if="!checkLogin"/>-->
    <Admin/>
  </div>
</template>

<script>
// import LoginLayout from "@/components/Homeworks/Session5/LoginLayout";
import Admin from "@/components/Homeworks/Session5/Admin";
  export default {
    components: {
      // LoginLayout,
      Admin
    },
    data() {
      return {
        checkLogin: false
      }
    },
    methods: {

    },
    mounted() {
      localStorage.login = false
    },

  }
</script>

<style lang="scss">
body {
  font-family: Roboto,sans-serif;
  background: #f6f7f9!important;
  font-size: 14px;
  color: #253036;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
