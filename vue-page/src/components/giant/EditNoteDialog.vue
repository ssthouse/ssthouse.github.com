<template>
  <div>
    <v-dialog v-model="showDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="onClickCloseButton()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="onClickSaveButton()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default{
    name: 'edit-note-dialog',
    data () {
      return {}
    },
    props: ['showDialog'],
    methods: {
      onClickCloseButton () {

      },
      onClickSaveButton () {

      }
    },
    computed: {},
    created: function () {

    }
  }
</script>

<style>

</style>
