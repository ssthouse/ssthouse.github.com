<template>
  <v-container fluid>
    <v-layout row wrap>

      <v-flex xs12 lg9>
        <timeline></timeline>
      </v-flex>

      <v-flex xs12 lg3>
        <about-me></about-me>
        <contact-me></contact-me>
      </v-flex>

      <v-flex xs12 lg6>
        <count-date-card></count-date-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CountDateCard from './count-date-card/CountDateCard.vue'
import AboutMe from './about/AboutMe.vue'
import ContactMe from './about/ContactMe.vue'
import Timeline from './timeline/Timeline.vue'

export default {
  name: 'duoduo',
  components: { CountDateCard, AboutMe, ContactMe, Timeline },
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
