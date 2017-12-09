<template>
  <v-container fluid>
    <v-layout row>
      <v-card class="main-banner">
        <v-card-media
          class="main-page-card-media"
          src="../static/little.jpg"
          height="200px"
          alt="baby_family">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{'已相爱: ' + getLoveLength()}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
      </v-card>
    </v-layout>

  </v-container>
</template>

<script>
  const beginDate = new Date(2016, 2, 14)

  export default{
    name: 'duoduo',
    data () {
      return {}
    },
    props: [],
    methods: {
      getLoveLength () {
        let curDate = new Date()
        curDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate())
        let dayNum = (curDate.getTime() - beginDate.getTime()) / (24 * 60 * 60 * 1000)
        return dayNum + '天'
      }
    },
    computed: {},
    created: function () {
    }
  }
</script>

<style lang="less">
  .main-banner {
    max-width: 300px;
    height: auto;
  }

  .main-page-card-media {
    max-width: 300px;
    color: white;
  }
</style>
