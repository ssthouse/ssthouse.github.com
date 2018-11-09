<template>
  <div style="">
    <project-card v-for="project in projectList" :key="project.title" :project="project"></project-card>
  </div>

</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  components: { ProjectCard },
  data() {
    return {
      projectList: [
        {
          title: 'Github Repository 可视化',
          description: '可视化展示个人及following people的github 仓库',
          href: 'https://ssthouse.github.io/github-visualization/#/main',
          img: require('../../assets/d3-blog-img/github-viz.png')
        },
        {
          title: '可视化讲解 DOM 构建过程',
          href: 'https://ssthouse.github.io/visual-explain/#/list/domRender',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/dom-render/img/step9.png'
        },
        {
          title: '可视化讲解 深度优先遍历 (DFT)',
          href: 'https://ssthouse.github.io/visual-explain/#/list/dft',
          img: require('../../assets/d3-blog-img/dft-demo.png')
        },
        {
          title: '用 D3.js 画一个手机专利关系图',
          href: 'https://ssthouse.github.io/visual-explain/#/list/patent-suit',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/mobile-patent-suit/img/row_display.png'
        }
      ]
    }
  },
  props: [],
  methods: {},
  computed: {},
  created: function() {},
  mounted: function() {}
}
</script>

<style>
</style>
