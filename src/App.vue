<template>
  <img alt="Vue logo" src="./assets/logo.jpeg" class="logo" />
  <LandingPage msg="Welcome to Your Vue.js App" />
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  height: 150px;
  width: 150px;
  /* border-radius: 50%; */
  /* object-fit: cover; */
  /* float: left; */
}
</style>
