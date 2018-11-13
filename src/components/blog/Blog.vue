<template>
  <div class="blog-container">
    <h3 class="blog-category">D3.js 相关</h3>
    <blog-card v-for="blog in d3BlogList.sort(sortFunc)" :key="blog.title" :blog="blog" class="blog-card"></blog-card>

    <h3 class="blog-category">数据可视化实践</h3>
    <blog-card v-for="blog in dataVizBlogList.sort(sortFunc)" :key="blog.title" :blog="blog" class="blog-card"></blog-card>

    <h3 class="blog-category">前端杂谈</h3>
    <blog-card v-for="blog in frontEndBlogList.sort(sortFunc)" :key="blog.title" :blog="blog" class="blog-card"></blog-card>
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'

export default {
  components: { BlogCard },
  data() {
    return {
      sortFunc(blogOne, blogTwo) {
        return blogOne.dateTitle > blogTwo.dateTitle ? -1 : 1
      }
    }
  },
  props: [],
  methods: {},
  computed: {
    d3BlogList() {
      let list = [
        {
          title: 'D3.js 学习之旅',
          dateTitle: '2018-06-12',
          img: require('../../assets/d3-blog-img/d3-学习之路.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/d3-guide/d3_roadmap_cn.md'
        },
        {
          title: '以 Join 的方式来思考 D3.js',
          dateTitle: '2018-06-13',
          img: require('../../assets/d3-blog-img/think-with-join.jpg'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/thinking-with-join/thinking-with-join.md'
        },
        {
          title: '用 D3.js 十分钟实现字符跳动效果',
          dateTitle: '2018-06-16',
          img:
            'https://github.com/ssthouse/d3-blog/raw/master/charactor-jump/first-step.gif',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/charactor-jump/charactor-jump.md'
        },

        {
          title: '[译]D3.js 之 d3-selection 原理',
          dateTitle: '2018-06-29',
          img:
            'https://github.com/ssthouse/d3-blog/raw/master/how-selections-work/img/data_join.png',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/how-selections-work/blog.md'
        },
        {
          title: '[译] D3.js 嵌套选择集 (Nested Selection)',
          dateTitle: '2018-06-26',
          img:
            'https://github.com/ssthouse/d3-blog/raw/master/nested-selection/img/5.png',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/nested-selection/blog.md'
        },
        {
          title: '[译] D3.js 之 d3-shap 简介]',
          dateTitle: '2018-07-02',
          img: require('../../assets/d3-blog-img/d3-shape.jpg'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/d3-shape-intro/blog.md'
        }
      ]
      return list.sort(this.sortFunc)
    },
    dataVizBlogList: function() {
      let list = [
        {
          title: 'Github Repository 数据可视化',
          dateTitle: '2018-10-17',
          img: require('../../assets/d3-blog-img/github-viz.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/github-visualization/blog.md'
        },
        {
          title: '可视化讲解 DOM 构建过程',
          dateTitle: '2018-07-10',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/dom-render/img/step9.png',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/dom-render/blog.md'
        },

        {
          title: '可视化讲解 深度优先遍历 (DFT)',
          dateTitle: '2018-09-16',
          img: require('../../assets/d3-blog-img/dft-demo.png'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/viz-depth-first-traversal/blog.md'
        },
        {
          title:
            '用 D3.js 画一个手机专利关系图, 看看苹果,三星,微软间的专利纠葛',
          dateTitle: '2018-07-16',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/mobile-patent-suit/img/row_display.png',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/mobile-patent-suit/blog.md'
        }
      ]
      return list.sort(this.sortFunc)
    },
    frontEndBlogList() {
      let list = [
        {
          title: '使用 github pages, 快速部署你的静态网页',
          dateTitle: '2018-06-25',
          img: require('../../assets/d3-blog-img/github-page.jpg'),
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/use-github-page-efficiently/blog.md'
        },
        {
          title: '创建, 发布自己的 Vue UI 组件库',
          dateTitle: '2018-07-22',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/create-own-vue-library/blog.md'
        },

        {
          title: 'Attribute VS Property',
          dateTitle: '2018-11-13',
          href:
            'https://github.com/ssthouse/d3-blog/blob/master/frontend/attr-vs-prop/attr_vs_prop_cn.md'
        }
      ]
      return list.sort(this.sortFunc)
    }
  },
  created: function() {}
}
</script>

<style lang="less">
.blog-container {
  padding: 16px;
  padding-left: 10%;
  max-width: 1200px;

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
