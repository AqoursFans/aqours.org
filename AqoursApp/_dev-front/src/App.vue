<template>
  <div id="app">
    <header-view />
    <menu-view />
    <router-view/>
  </div>
</template>

<script>
import HeaderView from './components/globals/Header/Header'
import MenuView from './components/globals/Menu/Menu'

export default {
  name: 'app',
  components: {
    HeaderView,
    MenuView
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
  margin-top: 5rem;
  margin-left: 10rem;
}
</style>
