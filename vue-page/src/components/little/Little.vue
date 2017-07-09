<template>
  <div style="padding: 8px; width: 100%; height: 100%;">
    <mu-refresh-control :refreshing="refreshing"
                        :trigger="trigger"
                        @refresh="refresh"></mu-refresh-control>
    <div ref="list">
      <count-down v-for="item in countDownArray"
                  :countDown="item">
      </count-down>
    </div>

    <div class="add-count-down">
      <mu-float-button icon="add" secondary @click="onClickAddCountDown()"></mu-float-button>
    </div>

    <count-down-dialog></count-down-dialog>
  </div>
</template>

<script>
  import * as countDown from '../cloud/count_down'
  import CountDown from './CountDown.vue'
  import CountDownDialog from './CountDownDialog.vue'
  import * as EventBus from '../utils/EventBus'

  export default{
    name: 'little',
    components: {'count-down': CountDown, 'count-down-dialog': CountDownDialog},
    data () {
      return {
        countDowns: [],
        refreshing: false,
        trigger: null
      }
    },
    props: [],
    methods: {
      refresh () {
        this.refreshing = true
        this.fetchCountDownArray()
      },
      fetchCountDownArray () {
        // countDown.createCountDown(false, 'test save count down', new Date())
        countDown.getCountDown(this.$store.state.isCony)
          .then(beanArray => {
            if (beanArray !== undefined && beanArray !== null) {
              this.countDowns = beanArray
              console.log(beanArray)
            }
            this.refreshing = false
          }, error => {
            console.log(error)
            this.refreshing = false
          })
      },
      onClickAddCountDown () {
        EventBus.instance.$emit(EventBus.OPEN_COUNT_DOWN_DIALOG)
      }
    },
    computed: {
      countDownArray: function () {
        return this.countDowns
      }
    },
    created: function () {
      this.fetchCountDownArray()
      // 注册监听事件
      EventBus.instance.$on(EventBus.UPDATE_COUNT_DOWN_LIST, () => {
        this.fetchCountDownArray()
        console.log('get teh event to update conunt down list')
      })
    },
    mounted: function () {
      this.trigger = this.$refs.list
    }
  }
</script>

<style>
  .add-count-down {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
</style>
