<template>
  <v-container>
    <v-layout row>
      <v-flex xs8>
        <v-text-field
          @change="onTimeSpanChange"
          :value="timeSpan"
          label="Time span"
          suffix="min"
          :rules="[numberRule]">
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import * as Types from '../../store/types'

  export default {
    name: 'setting',
    data () {
      return {
        timeSpan: 20,
        numberRule: function (value) {
          if (Number.isInteger(Number(value))) {
            return true
          }
          return 'Time need to be int ;)'
        }
      }
    },
    components: {},
    methods: {
      onTimeSpanChange (value) {
        this.$store.commit(Types.UPDATE_TIME_SPAN, value)
        this.$eventbus.$emit(this.EventType.TIME_SPAN_CHANGE, value)
      }
    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #wrapper {
    height: auto;
    padding: 60px 80px;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div {
    flex-basis: 50%;
  }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

</style>
