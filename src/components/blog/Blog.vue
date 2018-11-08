<template>
  <div class="blog-container">
    <h3>D3.js 相关</h3>
    <blog-card v-for="blog in d3BlogList" :key="blog.title" :blog="blog"></blog-card>

    <h3>数据可视化实践</h3>
    <blog-card v-for="blog in dataVizBlogList" :key="blog.title" :blog="blog"></blog-card>

    <h3>前端杂谈</h3>
    <blog-card v-for="blog in frontEndBlogList" :key="blog.title" :blog="blog"></blog-card>
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

<style>
.blog-container {
  padding: 16px;
}
</style>



// [](https://github.com/ssthouse/d3-blog/blob/master/nested-selection/blog.md)

// [[译]D3.js 之 d3-selection 原理]()

// ### D3 shape

// [()

// ### 数据可视化 实践

// []()

// []() ==> [在线 demo](https://ssthouse.github.io/visual-explain/#/list/domRender)

// []() ==> [在线demo](https://ssthouse.github.io/visual-explain/#/list/dft)

// []() ==> [在线 demo](https://ssthouse.github.io/visual-explain/#/list/patent-suit)

// [Github Repository 数据可视化](https://github.com/ssthouse/d3-blog/blob/master/github-visualization/blog.md) ==> [在线 demo](https://ssthouse.github.io/github-visualization/#/main)

// ### 前端 Tips:

// []()
