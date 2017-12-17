<template>
  <v-container>
    <v-layout row wrap>
      <v-flex lg6 sm6 xs12>
        <v-card>
          <v-card-media src="static/coldplay_demo.jpg" height="300px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Cold play       ~~~It's so cold now 🐹🐷</h3>
            </div>
            <div id="music-player" class="aplayer" style="width: 100%;"></div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex lg6>
        <div class="d-flex align-center" style="margin-left: auto">
          <v-chip disabled color="pink" text-color="white" class="top-count-down"
                  style="margin-left: 16px; margin-right: 16px;">
            <v-icon left>alarm</v-icon>
            <span class="count-time-label">{{countDown.currentCountDownLabel}}</span>
          </v-chip>
        </div>
      </v-flex>
    </v-layout>
    <v-layout lg6 xs12>

    </v-layout>
    <v-layout row>
      <v-fab-transition>
        <v-btn
          fab
          dark
          fixed
          bottom
          right
          color="pink"
          @click.stop="onMusicClockFabClick">
          <v-icon ref="fabIcon">play_arrow</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-layout>
  </v-container>
</template>

<script>
  import APlayer from 'aplayer'
  import * as Types from '../../store/types'

  export default {
    data () {
      return {
        timeSpan: 100,
        musicPlayer: null,
        countDown: {
          running: false,
          startTime: null,
          currentCountDownLabel: this.getCountDownLabel(this.$store.state.Setting.timeSpan * 60)
        }
      }
    },
    name: 'music-clock',
    components: {},
    methods: {
      initMusicPlayer () {
        this.musicPlayer = new APlayer({
          element: document.getElementById('music-player'),                       // Optional, player element
          narrow: false,                                                     // Optional, narrow style
          autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
          mutex: true,                                                       // Optional, pause other players when this player playing
          theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
          mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
          preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
          listmaxheight: '513px',                                             // Optional, max height of play list
          music: {                                                           // Required, music info, see: ###With playlist
            title: 'Have a rest bao 🤔',                                          // Required, music title
            author: 'liuxy',                          // Required, music author
            url: this.randomOneSongUrl(),  // Required, music url
            pic: 'http://devtest.qiniudn.com/Preparation.jpg'    // Optional, music picture
          }
        })
      },
      onMusicClockFabClick () {
        // this.music.play()
        if (this.countDown.running) {
          this.endCountDown()
        } else {
          this.initMusicPlayer()
          this.startCountDown()
        }
      },
      randomOneSongUrl () {
        let songNames = ['Everglow.mp3', 'Fix-you.mp3', 'The-Scientist.mp3', 'Yellow.mp3', '只因当时太紧张.mp3']
        let randomIndex = Math.floor(Math.random() * songNames.length)
        let songName = songNames[randomIndex]
        return 'http://ssthouse.github.io/static/music/' + songName
      },
      getCountDownLabel (secondNum) {
        var minuteNum = Number.parseInt(secondNum / 60)
        var second = Number.parseInt(secondNum % 60)
        var secondStr = second >= 10 ? second : '0' + second
        return minuteNum + ':' + secondStr
      },
      startCountDown () {
        // re construct music player
        this.initMusicPlayer()

        this.$refs.fabIcon.textContent = 'pause'
        var startTime = new Date()
        this.countDown.running = true
        this.countDown.startTime = startTime
        this.countDownHandler = setInterval(() => {
          var curDate = new Date()
          var secondPassNum = Math.floor((curDate - this.countDown.startTime) / 1000)
          var leftSecNum = this.$store.state.Setting.timeSpan * 60 - secondPassNum
          this.countDown.currentCountDownLabel = this.getCountDownLabel(leftSecNum)
          // when time is over
          if (leftSecNum === 0) {
            alert('Time to have a rest 🤘')
            this.musicPlayer.play()
            this.endCountDown()
          }
        }, 1000)
      },
      endCountDown () {
        // TODO for now: restore count down
        clearInterval(this.countDownHandler)
        this.countDown.running = false
        this.countDown.currentCountDownLabel = this.getCountDownLabel(this.$store.state.Setting.timeSpan * 60)
        this.$refs.fabIcon.textContent = 'play_arrow'
      },
      initListener () {
        this.$eventbus.$on(this.EventType.TIME_SPAN_CHANGE, (value) => {
          if (this.countDown.running !== true) {
            this.countDown.currentCountDownLabel = this.getCountDownLabel(value * 60)
          }
        })
      }
    },
    created () {
      this.initListener()
      // load default time-span

      this.$storage.getItem('timeSpan')
        .then(value => {
          if (value !== undefined && value !== null) {
            this.$eventbus.$emit(this.EventType.TIME_SPAN_CHANGE, value)
            this.$store.commit(Types.UPDATE_TIME_SPAN, value)
          }
        })
    }
  }
</script>

<style lang="less">
  @base-size: 8px;

  .top-count-down {
    padding-left: @base-size;
    padding-right: @base-size;

    .count-time-label {
      font-size: large;
      font-weight: bold;
    }
  }
</style>
