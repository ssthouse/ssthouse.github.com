<template>
  <div class="blog-container">
    <h3 class="blog-category">D3.js 相关</h3>
    <blog-card v-for="blog in d3BlogList" :key="blog.title" :blog="blog" class="blog-card"></blog-card>

    <h3 class="blog-category">数据可视化实践</h3>
    <blog-card v-for="blog in dataVizBlogList" :key="blog.title" :blog="blog" class="blog-card"></blog-card>

    <h3 class="blog-category">前端杂谈</h3>
    <blog-card v-for="blog in frontEndBlogList" :key="blog.title" :blog="blog" class="blog-card"></blog-card>
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
          title: 'D3.js 学习之旅',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/d3-guide/d3_roadmap_cn.md'
        },
        {
          title: '以 Join 的方式来思考 D3.js',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/thinking-with-join/thinking-with-join.md'
        },
        {
          title: '用 D3.js 十分钟实现字符跳动效果',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/charactor-jump/charactor-jump.md'
        },

        {
          title: '[译] D3.js 嵌套选择集 (Nested Selection)',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/how-selections-work/blog.md'
        },
        {
          title: '[译] D3.js 之 d3-shap 简介]',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/d3-shape-intro/blog.md'
        }
      ],
      dataVizBlogList: [
        {
          title: '可视化讲解 DOM 构建过程',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/dom-render/blog.md'
        },

        {
          title: '可视化讲解 深度优先遍历 (DFT)',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/viz-depth-first-traversal/blog.md'
        },
        {
          title:
            '用 D3.js 画一个手机专利关系图, 看看苹果,三星,微软间的专利纠葛',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/mobile-patent-suit/blog.md'
        }
      ],
      frontEndBlogList: [
        {
          title: '使用 github pages, 快速部署你的静态网页',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/use-github-page-efficiently/blog.md'
        },
        {
          title: '创建, 发布自己的 Vue UI 组件库',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/create-own-vue-library/blog.md'
        }
      ]
    }
  },
  props: [],
  methods: {},
  computed: {},
  created: function() {}
}
</script>

<style lang="less">
.blog-container {
  padding: 16px;

  .blog-category {
    font-size: 2rem;
    text-align: left;
    margin: 32px 0 12px 0;
    padding: 4px 16px;
    border-left: 4px solid #1976d2aa;
    background-color: rgba(238, 238, 238, 0.746);
  }

  .blog-card {
    margin-bottom: 16px;
  }
}
</style>
