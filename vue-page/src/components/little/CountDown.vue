<template>
  <mu-card style="margin-bottom: 8px;">
    <a style="font-size: large">{{countDown.attributes.content}}</a>
    <br/>
    <a>{{countDown.attributes.target_date}}</a>
  </mu-card>
</template>

<script>
  export default{
    name: 'count-down',
    data () {
      return {}
    },
    props: ['countDown'],
    methods: {},
    computed: {},
    created: function () {

    }
  }
</script>

<style>

</style>
