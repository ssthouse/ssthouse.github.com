<template>
  <v-card class="blog-card">
    <div class="title-container">
      <a class="title" target="_blank" :href="blog.href">
        <span>{{blog.title}}</span>
      </a>
      <span class="date-title">2018年8月</span>
    </div>
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

  span {
    font-size: 1.4rem;
  }

  .title-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4px;

    .title {
      font-size: 1.6rem;
      text-align: left;
    }

    .date-title {
      color: grey;
      width: auto;
    }
  }

  .blog-img {
    width: 100%;
  }
}
</style>

