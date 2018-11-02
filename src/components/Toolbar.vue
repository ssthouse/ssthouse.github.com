<template>
  <v-toolbar color="blue darken-3" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>SSTHOUSE</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="blog">Blog</v-btn>
      <v-btn flat to="code">Code</v-btn>
      <v-btn flat to="me">Me</v-btn>
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
