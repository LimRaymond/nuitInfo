<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <span>{{$root.darkmod}}</span>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    darkmod: "sexe"
  })
};
</script>
