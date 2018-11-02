<template>
  <div style="">

    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"></mu-refresh-control>

    <div style="" ref="page">
      <div>
      </div>
      <count-down-dialog></count-down-dialog>
    </div>

    <div class="add-count-down">
      <mu-float-button icon="add" secondary @click="onClickAddCountDown()"></mu-float-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'little',
  data() {
    return {
      countDowns: [],
      refreshing: false,
      trigger: null
    }
  },
  props: [],
  methods: {},
  computed: {
    countDownArray: function() {
      return this.countDowns
    }
  },
  created: function() {},
  mounted: function() {}
}
</script>

<style>
.add-count-down {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
