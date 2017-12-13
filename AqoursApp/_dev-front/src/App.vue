<template>
  <div id="app">
    <header-view />
    <img src="./assets/logo.png">
    <router-view/>
    <div class="button">test</div>
  </div>
</template>

<script>
import HeaderView from './components/globals/Header/Header'

export default {
  name: 'app',
  components: {
    HeaderView
  }
}
</script>
<style src="./assets/font-awesome/css/font-awesome.min.css"></style>
<style lang="scss" src="./components/globals/style/style.scss"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
