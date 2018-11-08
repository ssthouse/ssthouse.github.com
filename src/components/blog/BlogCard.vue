<template>
  <v-card class="blog-card">
    <a class="title" target="_blank" :href="blog.href">
      <span>{{blog.title}}</span>
    </a>
    <img class="blog-img" :src="blog.img" height="160px" />
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
  padding: 8px;

  .title {
    font-size: 1.4rem;
    width: 100%;
    text-align: left;
  }

  .blog-img {
    width: 100%;
  }
}
</style>

