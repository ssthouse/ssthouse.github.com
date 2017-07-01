<template>
  <div>
    <mu-card style="margin: 8px; ">
      <mu-card-media>
        <img src="../../assets/baby_family.jpeg"
             alt="baby_family">
      </mu-card-media>

      <mu-card-title :title="'已相爱: ' + getLoveLength()"
                     style="text-align: left; padding-left: 20px;">
      </mu-card-title>
    </mu-card>
  </div>
</template>

<script>
  const beginDate = new Date(2016, 2, 14)

  export default{
    name: 'duoduo',
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
