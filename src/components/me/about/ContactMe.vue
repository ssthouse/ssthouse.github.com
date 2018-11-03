<template>
  <v-card class="main-card">
    <span class="main-title">{{$t('contactMe')}}</span>

    <div class="info-item">{{$t('wechatQrCode')}}</div>
    <img width="240px" height="240px" :src="qrCodeUrl" />

    <div class="info-item" v-for="info in personalInfoList" :key="info.title">
      {{info.title}}
      <a :href="info.href" v-if="!info.pureText" target="_blank">{{info.text}}</a>
      <span v-if="info.pureText">{{info.text}}</span>
    </div>
  </v-card>
</template>

<script>
const qrCodeUrl = require('../../../assets/QR_300px.png')
export default {
  data() {
    return {
      qrCodeUrl,
      personalInfoList: [
        {
          title: '知乎:',
          href: 'https://www.zhihu.com/people/shenshuntain/',
          text: '@ssthouse',
          pureText: false
        },
        {
          title: 'Github:',
          href: 'https://github.com/ssthouse',
          text: '@ssthouse',
          pureText: false
        },
        {
          title: '邮箱:',
          text: 'ssthouse@163.com',
          pureText: true
        }
      ]
    }
  }
}
</script>
<style lang="less">
.main-card {
  .info-item {
    font-size: 16px;
  }
}
</style>

