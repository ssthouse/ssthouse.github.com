<template>
  <v-card class="main-card">
    <v-flex xs12>
      <span class="main-title">{{$t('aboutMe')}}</span>
    </v-flex>
    <v-divider></v-divider>

    <img :src="duoUrl" width="300px" height="300px" />

    <div class="self-description">
      <span>{{$t('selfDescription')}}</span>
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
<style lang="less" scoped>
.main-card {
  padding: 16px;

  .main-title {
    width: 100%;
    font-size: 28px;
  }

  .self-description {
    display: flex;
    flex-direction: column;

    span {
      font-size: 20px;
    }
  }
}
</style>
