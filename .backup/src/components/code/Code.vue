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
          sourceCodeHref: 'https://github.com/ssthouse/github-visualization',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/github-visualization/img/visual-github-repo.gif'
        },
        {
          title: '可视化讲解 DOM 构建过程',
          description: '可视化分析浏览器构建DOM的过程',
          href: 'https://ssthouse.github.io/visual-explain/#/list/domRender',
          sourceCodeHref: 'https://github.com/ssthouse/visual-explain',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/dom-render/img/step9.png'
        },
        {
          title: '可视化讲解 深度优先遍历',
          description: '可视化分析深度遍历过程中栈的变化',
          href: 'https://ssthouse.github.io/visual-explain/#/list/dft',
          sourceCodeHref: 'https://github.com/ssthouse/visual-explain',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/viz-depth-first-traversal/img/demo.gif'
        },
        {
          title: '用 D3.js 画一个手机专利关系图',
          href: 'https://ssthouse.github.io/visual-explain/#/list/patent-suit',
          sourceCodeHref: 'https://github.com/ssthouse/visual-explain',
          img:
            'https://raw.githubusercontent.com/ssthouse/d3-blog/master/mobile-patent-suit/img/demo.gif'
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
