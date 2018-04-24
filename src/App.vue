<template>
  <div id="app">
    <top-header></top-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import TopHeader from "./components/TopHeader";
  import MyFooter from "./components/MyFooter";

  export default {
    components: {
      MyFooter,
      TopHeader
    },
    name: 'App',
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>
