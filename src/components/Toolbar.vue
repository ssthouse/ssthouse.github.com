<template>
  <v-toolbar color="darken-3" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>SSTHOUSE</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="blog">{{ $t('message.blog') }}</v-btn>
      <v-btn flat to="code">{{ $t("message.code") }}</v-btn>
      <v-btn flat to="me">{{ $t("message.me") }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
