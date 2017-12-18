<template>
  <div style="width: 100%; height: 100%; display: block; position: relative">
    <div style="width: 100%; height: 100%; display: block; position: absolute;">
      <mu-card style="height: 50%; width: 100%; position: relative;">
        <div ref="littleNote"
             style="height: 100%; text-align: left; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;
           font-size: larger; overflow-y: scroll;">
          {{littleBabyNote}}
        </div>
        <div style="position: absolute; right: 20px; bottom: 20px;">
          <v-btn
            @click.native="onOpenLittleDialog()"
            fab
            dark
            color="pink">
            <v-icon ref="fabIcon">edit</v-icon>
          </v-btn>
        </div>
      </mu-card>

      <v-divider></v-divider>

      <mu-card style="height: 50%; width: 100%; position: relative;">
        <div ref="giantNote"
             style="height: 100%; text-align: left; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;
           font-size: larger; overflow-y: scroll;">{{giantBabyNote}}
        </div>
        <div style="position: absolute; right: 20px; bottom: 20px;">
          <v-btn
            @click="onOpenGiantDialog()"
            fab
            dark
            color="pink">
            <v-icon ref="fabIcon">edit</v-icon>
          </v-btn>
        </div>
      </mu-card>

      <mu-snackbar v-if="snackbar" message="获取fastnote出错 :|"></mu-snackbar>
    </div>

    <edit-note-dialog :showDialog="showDialog"></edit-note-dialog>
  </div>
</template>

<script>
  import * as fastnote from '../cloud/fastnote'
  import EditNoteDialog from './EditNoteDialog'

  export default{
    components: {EditNoteDialog},
    name: 'favorite',
    data () {
      return {
        littleBabyNote: '稍等哦, 大宝在拼命加载...',
        giantBabyNote: '稍等哦, 大宝在拼命加载...',
        snackbar: false,
        showDialog: false
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
      },
      onOpenGiantDialog () {

      }
    },
    computed: {},
    created: function () {
      fastnote.getLittleBabyFastnote()
        .then(noteBean => {
          this.$refs['littleNote'].innerHTML = noteBean.attributes.content
        }, errMsg => {
          this.showSnackbar()
        })
      fastnote.getGiantBabyFastnote()
        .then(noteBean => {
          this.$refs['giantNote'].innerHTML = noteBean.attributes.content
          console.log(noteBean.attributes.content)
        }, errMsg => {
          this.showSnackbar()
        })
    }
  }
</script>

<style>
  .custom-fab {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
</style>
