<template>
  <div class="time-piece">
    <div class="title-row">
      <v-chip disabled="true" class="time-title">
        <v-icon>event</v-icon>
        {{timeTitle}}
      </v-chip>
      <span class="title">{{title}}</span>
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
  font-size: 1.6rem;

  .title-row {
    text-align: left;

    .time-title {
      i {
        margin-right: 8px;
      }
      width: 120px;
      font-size: 1.4rem;
    }

    .title {
    }
  }

  .content {
  }
}
</style>

