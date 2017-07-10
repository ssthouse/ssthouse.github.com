<template>
  <mu-card style="margin-bottom: 8px;">
    <mu-row>
      <mu-col width="70">
        <a style="font-size: large; color: black">{{countDown.attributes.content}}</a>
        <br/>
        <a>{{'还有' + dayNum + '天!'}}</a>
      </mu-col>
      <mu-col width="30"
              style="vertical-align: middle;margin: auto">
        <mu-flat-button label="delete"
                        style="vertical-align: middle"
                        @click="onClickDelete()"></mu-flat-button>
      </mu-col>
    </mu-row>
  </mu-card>
</template>

<script>
  import * as EventBus from '../utils/EventBus'

  export default{
    name: 'count-down',
    data () {
      return {
        dayNum: 10
      }
    },
    props: ['countDown'],
    methods: {
      onClickDelete () {
        // TODO
        this.countDown.destroy().then(success => {
          console.log('delete success')
          EventBus.instance.$emit(EventBus.UPDATE_COUNT_DOWN_LIST)
        }, fail => {
          console.log('delete err' + fail)
        })
      },
      removeRestTime (date) {
        date.setHours(0)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)
        return date
      }
    },
    computed: {},
    created: function () {
      let curDate = new Date()
      let targetDate = this.countDown.attributes.target_date
      curDate = this.removeRestTime(curDate)
      targetDate = this.removeRestTime(targetDate)
      this.dayNum = (targetDate.getTime() - curDate.getTime()) / (24 * 60 * 60 * 1000)
      console.log(curDate)
      console.log(targetDate)
      console.log(this.dayNum)
      console.log((targetDate.getMilliseconds() - curDate.getMilliseconds()))
    }
  }
</script>

<style>

</style>
