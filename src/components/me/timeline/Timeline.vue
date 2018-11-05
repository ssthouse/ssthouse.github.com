<template>
  <div>
    <time-piece time-title="2013年" title="就读于华中科技大学自动化专业">
      <div slot="content">content</div>
    </time-piece>

    <time-piece time-title="2015年" title="百无聊赖的国庆节, 自学起了Android开发">
      <div slot="content">content</div>
    </time-piece>

    <time-piece time-title="2016年" title="通过通宵测试, 加入华中科技大学 Dian团队.">
      <div slot="content">content</div>
    </time-piece>
  </div>
</template>
<script>
import TimePiece from './TimePiece.vue'

export default {
  components: { TimePiece },
  data() {
    return {}
  }
}
</script>
<style lang="less">
</style>

