<template>
  <div>
    <mu-dialog :open="show" title="增加倒计时" @close="close">
      <mu-date-picker hintText="日期: "/>
      <br/>
      <mu-text-field hintText="时间内容"/>
      <br/>
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
  import * as EventBus from '../utils/EventBus'

  export default{
    name: 'count-down-dialog',
    data () {
      return {
        show: false
      }
    },
    props: ['showAddDialog'],
    methods: {
      close () {
        this.show = false
      }
    },
    computed: {},
    created: function () {
      EventBus.instance.$on(EventBus.OPEN_COUNT_DOWN_DIALOG, () => {
        this.show = true
      })
    }
  }
</script>

<style>

</style>
