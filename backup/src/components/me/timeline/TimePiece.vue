<template>
  <div class="time-piece">
    <div class="title-row">
      <v-chip :disabled="true" class="time-title">
        <v-icon>event</v-icon>
        {{timeTitle}}
      </v-chip>
      <span class="sub-title">{{title}}</span>
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['timeTitle', 'title'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.time-piece {
  background-color: #eeeeee;
  border-radius: 5px;
  font-size: 1.6rem;
  margin-bottom: 16px;
  padding: 4px 8px 0px 8px;

  .title-row {
    text-align: left;

    .time-title {
      i {
        margin-right: 8px;
      }
      min-width: 120px;
      font-size: 1.4rem;
    }

    .sub-title {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .content {
    padding: 8px 16px;
    font-size: 1.05rem;
    text-align: left;
  }
}
</style>

