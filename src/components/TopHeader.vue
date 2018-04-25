<template>
  <div class="container">
    <header class="header row">
      <div class="col-12">
        <img src="../assets/logo.png" class="header__logo">
      </div>
      <div class="col-12">
        <nav class="nav nav-pills nav-justified">
          <router-link class="nav-item nav-link" :to="{name: 'HelloWorld'}">Home</router-link>
          <router-link class="nav-item nav-link" :to="{name: 'blog-post-list'}">Blog</router-link>
          <router-link class="nav-item nav-link" :to="{name: 'contact'}">Contact</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'TopHeader'
  }
</script>


<style lang="scss" scoped>
  .header {
    padding: 20px;
    a {
      color: #000;
      text-decoration: none;
      &.router-link-active {
        font-size: 16px;

      }
      &.router-link-exact-active {
        color: #fff;
        background: #42b883;
      }
    }
    &__logo {
      width: 80px;
      position: relative;
      margin-bottom: 30px;
    }
  }
</style>

