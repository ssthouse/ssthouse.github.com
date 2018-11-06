<template>
  <v-card class="main-card no-padding">
    <v-card-media class="main-page-card-media" :src="imageUrl" height="200px" alt="baby_family">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <div class="title-container">
            <span :class="['headline', position]">{{`It has been: ${getLoveLength()} days`}}</span>
          </div>
        </v-layout>
      </v-container>
    </v-card-media>
  </v-card>
</template>

<script>
export default {
  props: ['imageUrl', 'startDate', 'position'],
  data() {
    return {}
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
        (curDate.getTime() - this.startDate.getTime()) / (24 * 60 * 60 * 1000)
      return dayNum
    }
  }
}
</script>
<style lang="less">
.main-card.no-padding {
  padding: 0;
}

.title-container {
  display: flex;
  width: 100%;

  span {
    width: 100%;
    text-align: center !important;
  }

  .top {
    align-self: flex-start;
    justify-content: center;
  }

  .bottom {
    align-self: flex-end;
    justify-content: center;
  }
}
</style>

