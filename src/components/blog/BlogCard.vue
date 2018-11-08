<template>
  <v-card class="blog-card">
    <div class="title-container">
      <a class="title" target="_blank" :href="blog.href">
        <span>{{blog.title}}</span>
      </a>
      <span class="date-title">2018年8月</span>
    </div>
    <div class="img-container" v-if="blog.img">
      <img class="blog-img" :src="blog.img" height="auto" width="100%" />
    </div>
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

      transition-property: color;
      transition-duration: 1s;
    }

    .title:hover {
      color: black;
    }

    .date-title {
      color: grey;
      width: auto;
    }
  }

  .img-container {
    height: 160px;
    overflow: hidden;
    display: flex;
    align-items: center;

    .blog-img {
      width: 100%;
    }
  }
}
</style>

