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
