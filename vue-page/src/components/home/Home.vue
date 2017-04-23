<template>
  <div style="margin-top: 0; padding-top: 0;">
    <md-card style="margin: 8px; ">
      <md-card-media>
        <img src="../../assets/duoduo.jpeg" alt="People">
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{'已相爱: ' + getLoveLength()}}</div>
      </md-card-header>
    </md-card>

    <md-card style="margin: 8px; ">
      <md-card-media>
        <img src="../../assets/duoduo.jpeg" alt="People">
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{'已相爱: ' + getLoveLength()}}</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data () {
      return {}
    },
    props: [],
    methods: {
      getLoveLength () {
        return '404天'
      }
    },
    computed: {},
    created: function () {

    }
  }
</script>

<style>

</style>
