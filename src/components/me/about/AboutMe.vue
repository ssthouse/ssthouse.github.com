<template>
  <v-card class="main-card">
    <v-flex xs12>
      <span class="main-title">{{$t('aboutMe')}}</span>
    </v-flex>
    <v-divider></v-divider>

    <img :src="duoUrl" width="260px" height="260px" />

    <div class="self-description">
      <span>{{$t('selfDescription')}}</span>
    </div>

    <div class="self-description">
      <span>
        <a href="https://www.worksap.com/" target="_blank">Works Applications</a>
        前端开发工程师
      </span>
    </div>
  </v-card>
</template>
<script>
const duoUrl = require('../../../assets/small_duo.jpg')

export default {
  data() {
    return {
      duoUrl
    }
  }
}
</script>
<style lang="less">
.main-card {
  padding: 16px;
  margin: 12px;

  .main-title {
    width: 100%;
    font-size: 28px;
  }

  .self-description {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    span {
      font-size: 18px;
    }
  }
}
</style>
