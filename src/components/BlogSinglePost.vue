<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <h5 class="card-header">#{{ post.id }} {{ post.title }}</h5>
          <div class="card-body">
            <p class="card-text">{{ post.text }}</p>
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
      name: "blogSinglePost",
      data(){
        return {
          post: []
        }
      },
      created(){
          this.post = PostServise.getPostById(this.$route.params.id)
      }
  }
</script>

<style scoped lang="scss">

</style>
