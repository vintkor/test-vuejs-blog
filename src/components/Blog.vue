<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="post in posts">
        <div class="card">
          <h5 class="card-header">{{ post.title }}</h5>
          <div class="card-body">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <router-link
              :to="{ name: 'blog-single-post', params: { id: post.id }, props: {title: post.title} }"
              class="btn btn-primary"
              :title="post.title">
              Read more</router-link>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
  import PostServise from '../services/PostServise'
  export default {
    name: "blog",
    data() {
      return {
        posts: []
      }
    },
    created(){
      this.posts = PostServise.posts
    }
  }
</script>

<style scoped lang="scss">

</style>
