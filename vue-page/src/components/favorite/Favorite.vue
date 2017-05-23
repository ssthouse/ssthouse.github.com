<template>
  <div style="height: 100%">
    <!--<mu-card style="margin: 8px; ">-->
    <!--<mu-card-media>-->
    <!--<img src="../../assets/dabao.jpeg" alt="大宝">-->
    <!--</mu-card-media>-->
    <!--</mu-card>-->
    <mu-card style="height: 50%;">
      <mu-card-text>{{littleBabyNote}}</mu-card-text>
    </mu-card>

    <mu-card style="height: 50%;">
      <mu-card-text>{{giantBabyNote}}</mu-card-text>
    </mu-card>
  </div>
</template>

<script>
  export default{
    name: 'favorite',
    data () {
      return {
        littleBabyNote: '',
        giantBabyNote: ''
      }
    },
    props: [],
    methods: {},
    computed: {},
    created: function () {

    }
  }
</script>

<style>

</style>
