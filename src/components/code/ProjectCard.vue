<template>
  <v-card class="project-card">
    <div v-bind:style="{'background-image':'url(' + imgUrl + ')' }">
      <span>
        description
      </span>
    </div>
  </v-card>
</template>
<script>
const imgUrl = require('../../assets/small_duo.jpg')

export default {
  data() {
    return {
      imgUrl
    }
  }
}
</script>
<style lang="less">
.project-card {
  padding: 0;
}
</style>
