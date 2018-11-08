<template>
  <div class="blog-container">
    <blog-card v-for="blog in d3BlogList" :key="blog.title" :blog="blog"></blog-card>
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
  components: { BlogCard },
  data() {
    return {
      d3BlogList: [
        {
          title: 'D3.js 学习之路',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/d3-guide/d3_roadmap_cn.md'
        }
      ],
      dataVizBlogList: []
    }
  },
  props: [],
  methods: {},
  computed: {},
  created: function() {}
}
</script>

<style>
.blog-container {
  padding: 16px;
}
</style>
