<template>
  <v-toolbar color="darken-3" dark fixed height="48px">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>SSTHOUSE</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat to="blog">{{ $t('message.blog') }}</v-btn>
      <v-btn flat to="code">{{ $t("message.code") }}</v-btn>
      <v-btn flat to="me">{{ $t("message.me") }}</v-btn>

      <v-select class="lang-selector" v-model="lang" :items="languages" label="" item-value="lang" dark solo></v-select>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {
      lang: 'cn',
      languages: [{ text: '中文', lang: 'cn' }, { text: 'English', lang: 'en' }]
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      const newUrl = window.location.href.split('?')[0] + `?lang=${lang}`
      window.location.href = newUrl
    }
  },
  created() {
    const urlParams = new URLSearchParams()
    this.lang = urlParams.get('lang') || 'cn'
    this.changeLanguage(this.lang)
  },
  watch: {
    lang: function(newVal, oldVal) {
      this.changeLanguage(newVal)
    }
  }
}
</script>
<style lang="less">
.lang-selector {
  min-width: 200px;
  background-color: #212121 !important;
  box-shadow: none !important;
}
</style>

