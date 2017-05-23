<template>
  <div style="margin-top: 0; padding-top: 0;">
    <mu-card style="margin: 8px; ">
      <mu-card-media>
        <img src="../../assets/baby_family.jpeg" alt="baby_family">
      </mu-card-media>
      <mu-card-header>
        <div class="md-title">{{'已相爱: ' + getLoveLength()}}</div>
      </mu-card-header>
    </mu-card>

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
