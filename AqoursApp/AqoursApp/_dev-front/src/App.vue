<template>
  <div id="app">
  <v-app id="inspire" dark>
    <header-view />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import HeaderView from './components/globals/Header/Header';
import store from './store';

export default {
  name: 'app',
  components: {
    HeaderView,
  },
  store
}
</script>
<style lang="scss" src="./components/globals/style/style.scss"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
