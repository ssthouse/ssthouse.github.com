<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 lg6>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const littleUrl = require('../../assets/little.jpg')

const beginDate = new Date(2016, 2, 14)

export default {
  name: 'duoduo',
  data() {
    return {
      littleUrl
    }
  },
  props: [],
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
  },
  computed: {},
  created: function() {}
}
</script>

<style lang="less">
.main-banner {
  height: auto;
  max-width: 400px;

  .headline {
    text-align: left;
  }
}

.main-page-card-media {
  color: white;
}
</style>
