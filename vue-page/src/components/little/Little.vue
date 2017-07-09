<template>
  <div>
    <mu-card style="margin: 8px;">
      <mu-card-media>
        <count-down v-for="item in countDownArray"
                    :countDown="item">
        </count-down>
      </mu-card-media>
    </mu-card>
  </div>
</template>

<script>
  import * as countDown from '../cloud/count_down'
  import CountDown from './CountDown.vue'

  export default{
    name: 'little',
    components: {'count-down': CountDown},
    data () {
      return {
        countDowns: []
      }
    },
    props: [],
    methods: {},
    computed: {
      countDownArray: function () {
        return this.countDowns
      }
    },
    created: function () {
      // countDown.createCountDown(false, 'test save count down', new Date())
      countDown.getCountDown(false)
        .then(beanArray => {
          if (beanArray !== undefined && beanArray !== null) {
            this.countDowns = beanArray
            console.log(beanArray)
          }
        }, error => {
          console.log(error)
        })
    }
  }
</script>

<style>

</style>
