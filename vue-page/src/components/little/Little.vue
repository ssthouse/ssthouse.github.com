<template>
  <div>
    <mu-card style="margin: 8px;">
      <mu-card-media>
        <img src="../../assets/where_are_you.jpg" alt="小宝">
      </mu-card-media>
    </mu-card>
  </div>
</template>

<script>
  import * as countDown from '../cloud/count_down'

  export default{
    name: 'little',
    data () {
      return {}
    },
    props: [],
    methods: {},
    computed: {},
    created: function () {
      // countDown.createCountDown(false, 'test save count down', new Date())
      countDown.getCountDown(false)
        .then(beanArray => {
          console.log(beanArray)
        }, error => {
          console.log(error)
        })
    }
  }
</script>

<style>

</style>
