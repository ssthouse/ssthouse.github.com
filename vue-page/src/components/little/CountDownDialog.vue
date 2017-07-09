<template>
  <div>
    <mu-dialog :open="show" title="增加倒计时" @close="close">
      <mu-date-picker hintText="日期: "
                      v-model="dateStr"/>
      <br/>
      <mu-text-field hintText="时间内容"
                     v-model="content"/>
      <br/>
      <mu-flat-button slot="actions" @click="onCancelClick()" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="onSureClick()" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
  import * as EventBus from '../utils/EventBus'
  import Util from '../utils/util'
  import * as CountDown from '../cloud/count_down'

  export default{
    name: 'count-down-dialog',
    data () {
      return {
        show: false,
        targetDate: new Date(),
        content: ''
      }
    },
    props: ['showAddDialog'],
    methods: {
      close () {
        this.show = false
      },
      onCancelClick () {
        this.show = false
      },
      onSureClick () {
        if (Util.isEmpty(this.content)) {
          return
        }
        // submit new countDown
        CountDown.createCountDown(this.$store.state.isCony, this.content, this.targetDate)
        // 触发更新事件
        EventBus.instance.$emit(EventBus.UPDATE_COUNT_DOWN_LIST)
        this.show = false
      }
    },
    computed: {
      dateStr () {
        return Util.getFormatDateStr(this.targetDate)
      }
    },
    created: function () {
      EventBus.instance.$on(EventBus.OPEN_COUNT_DOWN_DIALOG, () => {
        this.show = true
      })
    }
  }
</script>

<style>

</style>
