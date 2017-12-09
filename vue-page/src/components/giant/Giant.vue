<template>
  <div style="height: 100%;">
    <mu-flexbox orient="vertical" style="height: 100%;">
      <mu-flexbox-item class="flex-demo">
        <mu-card style="height: 50%; width: 100%;">
          <div ref="littleNote"
               style="height: 100%; text-align: left; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;
           font-size: larger; overflow-y: scroll;">
            {{littleBabyNote}}
          </div>
        </mu-card>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        <mu-card style="height: 50%; width: 100%;">
          <div ref="giantNote"
               style="height: 100%; text-align: left; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;
           font-size: larger; overflow-y: scroll;">{{giantBabyNote}}
          </div>
        </mu-card>
      </mu-flexbox-item>
    </mu-flexbox>

    <mu-snackbar v-if="snackbar" message="获取fastnote出错 :|"></mu-snackbar>
  </div>
</template>

<script>
  import * as fastnote from '../cloud/fastnote'

  export default{
    name: 'favorite',
    data () {
      return {
        littleBabyNote: '稍等哦, 大宝在拼命加载...',
        giantBabyNote: '稍等哦, 大宝在拼命加载...',
        snackbar: false
      }
    },
    props: [],
    methods: {
      showSnackbar () {
        this.snackbar = true
        if (this.snackbar) clearTimeout(this.snackTimber)
        this.snackTimber = setTimeout(() => { this.snackbar = false }, 2000)
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

</style>
