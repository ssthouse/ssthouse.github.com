<template>
  <div style="margin-top: 0; padding-top: 0;">
    <md-card style="margin: 8px; ">
      <md-card-media>
        <img src="../../assets/baby_family.jpeg" alt="baby_family">
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{'已相爱: ' + getLoveLength()}}</div>
      </md-card-header>
    </md-card>

    <a href="static/index.html">哈哈哈</a>
  </div>
</template>

<script>
  const beginDate = new Date(2016, 2, 14)

  export default{
    name: 'home',
    data () {
      return {}
    },
    props: [],
    methods: {
      getLoveLength () {
        let curDate = new Date()
        curDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate())
        let dayNum = (curDate.getTime() - beginDate.getTime()) / (24 * 60 * 60 * 1000)
        return dayNum + '天'
      }
    },
    computed: {},
    created: function () {

    }
  }
</script>

<style>

</style>
