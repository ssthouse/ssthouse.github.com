<template>
  <v-card class="blog-card">
    <span>{{blog.title}}</span>
    <img class="blog-img" :src="blog.image" />
  </v-card>
</template>
<script>
export default {
  props: ['blog'],
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.blog-card {
  .blog-img{
    
  }
}
</style>

