<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to my Vue.js App"
            };
        }
    };
</script>

<style scoped>
    h1 {
        font-weight: normal;
    }
</style>
