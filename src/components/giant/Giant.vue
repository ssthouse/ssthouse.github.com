<template>
  <div style="width: 100%; height: 100%; display: block; position: relative">
    <div style="width: 100%; height: 100%; display: block; position: absolute;">
      <mu-card style="height: 50%; width: 100%; position: relative;">
        <div ref="littleNote"
             style="height: 100%; text-align: left; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;
           font-size: larger; overflow-y: scroll;"
             class="little-editable"
             @blur="onLittleNoteBlur">
          {{littleBabyNote}}
        </div>
      </mu-card>

      <v-divider></v-divider>

      <mu-card style="height: 50%; width: 100%; position: relative;">
        <div ref="giantNote"
             style="height: 100%; text-align: left; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;
           font-size: larger; overflow-y: scroll;"
             class="giant-editable"
             @blur="onGiantNoteBlur">
          {{giantBabyNote}}
        </div>
      </mu-card>

      <mu-snackbar v-if="snackbar" message="获取fastnote出错 :|"></mu-snackbar>
    </div>
  </div>
</template>

<script>
  import * as newNote from '../cloud/new-note-dao'
  import MediumEditor from 'medium-editor'

  export default{
    name: 'favorite',
    data () {
      return {
        littleBabyNote: '稍等哦, 大宝在拼命加载...',
        giantBabyNote: '稍等哦, 大宝在拼命加载...',
        snackbar: false,
        showDialog: false,
        littleNoteEditor: null,
        giantNoteEditor: null
      }
    },
    props: [],
    methods: {
      showSnackbar () {
        this.snackbar = true
        if (this.snackbar) clearTimeout(this.snackTimber)
        this.snackTimber = setTimeout(() => { this.snackbar = false }, 2000)
      },
      onOpenLittleDialog () {
        this.showDialog = true
      },
      onOpenGiantDialog () {

      },
      onLittleNoteBlur () {
        console.log('on little blur')
        newNote.saveNewNoteBean(this.littleNoteEditor.getContent(), true)
      },
      onGiantNoteBlur () {
        console.log('on giant blur')
        newNote.saveNewNoteBean(this.giantNoteEditor.getContent(), false)
      }
    },
    computed: {},
    created: function () {
      newNote.getLittleBabyNote()
        .then(noteBean => {
          console.log(noteBean)
          this.$refs['littleNote'].innerHTML = noteBean.attributes.content
        }, errMsg => {
          this.showSnackbar()
        })
      newNote.getGiantBabyNote()
        .then(noteBean => {
          console.log(noteBean)
          this.$refs['giantNote'].innerHTML = noteBean.attributes.content
        }, errMsg => {
          this.showSnackbar()
        })

      let self = this
      setTimeout(function () {
        self.littleNoteEditor = new MediumEditor('.little-editable')
        console.log(this.littleNoteEditor)
        self.giantNoteEditor = new MediumEditor('.giant-editable')
        console.log(this.giantNoteEditor)
      }, 1000)
    }
  }
</script>

<style>
</style>
