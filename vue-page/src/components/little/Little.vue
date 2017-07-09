<template>
  <div style="padding: 8px; width: 100%; height: 100%;">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-card-media>
      <count-down v-for="item in countDownArray"
                  :countDown="item">
      </count-down>
    </mu-card-media>
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
        countDowns: [],
        refreshing: false,
        trigger: null
      }
    },
    props: [],
    methods: {
      // TODO:
      refresh () {
        this.refreshing = true
        setTimeout(() => {
          const list = []
          for (let i = this.num; i < this.num + 10; i++) {
            list.push('item' + (i + 1))
          }
          this.refreshing = false
        }, 2000)
      }
    },
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
    },
    mounted: function () {
      this.trigger = this.$el
    }
  }
</script>

<style>

</style>
