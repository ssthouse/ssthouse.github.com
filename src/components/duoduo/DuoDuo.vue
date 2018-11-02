<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 lg6>
        <count-date-card></count-date-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CountDateCard from './count-date-card/CountDateCard.vue'

export default {
  name: 'duoduo',
  components: { CountDateCard },
  data() {
    return {}
  },
  props: [],
  methods: {},
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
