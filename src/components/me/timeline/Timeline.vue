<template>
  <div>
    <time-piece time-title="2013年 9月" title="就读于华中科技大学 自动化专业">
      <div slot="content">按照分数够得上的专业挑了5个志愿,最终选上了第三志愿
        <b>自动化</b>
      </div>
    </time-piece>

    <time-piece time-title="2014年 2月" title="加入电工电子创新基地(又名: STI, 基地组织), 学习单片机,FPGA开发">
      <div slot="content">目标是成为一名硬件开发工程师
        <span class="emoji">🤔</span>
      </div>
    </time-piece>

    <time-piece time-title="2014年 10月" title="百无聊赖的国庆节, 自学起了Android开发">
      <div slot="content">我的第一个App: 一个简单的计算器. 似乎软件开发更有乐趣一些
        <span class="emoji"> 🌝</span>
      </div>
    </time-piece>

    <time-piece time-title="2015年 4月" title="通过通宵测试, 加入华中科技大学 Dian团队. 🤘">
      <div slot="content">很幸运加入了这样一个团队, 周围都是志趣相同的小伙伴, 让人很有归属感.</div>
    </time-piece>

    <time-piece time-title="2015年 6月" title="我的第一个上线的App: 微弹幕 Lite">
      <div slot="content">一个很有趣的弹幕小工具, 上线三个月约5w下载量.
        <span class="emoji">😎</span>
      </div>
    </time-piece>

    <time-piece time-title="2016年 1月" title="加入校友的创业公司(🤖方向),负责Android 和 iOS 客户端开发">
      <div slot="content">独立完成Android和iOS双端的原生开发任务, 工作量和压力比较大, 也学到了很多.</div>
    </time-piece>

    <time-piece time-title="2016年 6月" title="华为实习, 怎么说呢, 没啥收货🙉">
    </time-piece>

    <time-piece time-title="2016年 9月" title="秋招">
      <div slot="content">收获17份offer. 最后一个也是最终选择的offer:
        <b>Works Applications R & D Engineer</b>
      </div>
    </time-piece>

    <time-piece time-title="2017年 6月" title="毕业 🎓">
      <div slot="content">华中科技大学 自动化学院毕业杯:
        <span style="font-weight: bold;">🏀班赛冠军🏆</span>
        <span style="font-weight: bold; margin-left: 16px;">🏓单打冠军🏆</span>
      </div>
    </time-piece>

    <time-piece time-title="2017年 8月" title="入职 WAP, 开始上班🐶的生活">
      <div slot="content">

      </div>
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
.emoji {
  font-size: 24px;
}
</style>

