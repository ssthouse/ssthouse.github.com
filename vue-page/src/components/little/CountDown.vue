<template>
  <div>
    <a style="font-size: large">{{countDown.attributes.content}}</a>
    <a>{{countDown.attributes.target_date}}</a>
  </div>
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
