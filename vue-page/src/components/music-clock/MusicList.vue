<template>
    <v-layout row>
        <v-list two-line style="width: 100%;">
            <template v-for="item in items">
                <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                <v-list-tile avatar v-else v-bind:key="item.title" @click="">
                    <v-list-tile-avatar>
                        <img v-bind:src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        musicList: [],
        items: [
          {
            avatar: '/static/coldplay_demo.jpg',
            title: 'Brunch this weekend?'
          },
          {divider: true, inset: true},
          {
            avatar: '/static/coldplay_demo.jpg',
            title: 'Summer BBQ'
          },
          {divider: true, inset: true},
          {
            avatar: '/static/coldplay_demo.jpg',
            title: 'Oui oui'
          }
        ]
      }
    },
    name: 'music-list',
    components: {},
    methods: {},
    created () {
//      var fs = require('fs')
//      var path = require('path')
//      var musicDirPath = path.resolve('static', 'music')
//      this.musicList = []
//      var self = this
//      fs.readdir(musicDirPath, function (err, files) {
//        if (err) {
//          alert(err)
//          return
//        }
//        for (var index in files) {
//          var listItem = {
//            avatar: '/static/coldplay_demo.jpg',
//            title: files[index]
//          }
//          self.musicList.push(listItem)
//        }
//      })
    }
  }
</script>

<style>

    full-width {
        width: 100%;
    }

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
