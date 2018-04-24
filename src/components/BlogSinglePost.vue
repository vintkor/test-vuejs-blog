<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <h5 class="card-header">#{{ productId }}</h5>
          <div class="card-body">
            <p class="card-text">{{ postTitle }}</p>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "blogSinglePost",
        props: {
          title: {
            type: String,
            required: true
          }
        },
        data(){
          return {
            productId: this.$route.params.id,
            postTitle: this.title
          }
        },
        created(){
            // this.post = props.post
        }
    }
</script>

<style scoped lang="scss">

</style>
