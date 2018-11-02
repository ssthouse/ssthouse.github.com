<template>
  <v-card class="main-banner">
    <v-card-media class="main-page-card-media" :src="littleUrl" height="240px" alt="baby_family">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex>
            <span class="headline">{{`It has been: ${getLoveLength()} days`}}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
  </v-card>
</template>

<script>
const beginDate = new Date(2016, 2, 14)
const littleUrl = require('../../../assets/little.jpg')

export default {
  data() {
    return {
      littleUrl
    }
  },
  methods: {
    getLoveLength() {
      let curDate = new Date()
      curDate = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate()
      )
      let dayNum =
        (curDate.getTime() - beginDate.getTime()) / (24 * 60 * 60 * 1000)
      return dayNum
    }
  }
}
</script>
