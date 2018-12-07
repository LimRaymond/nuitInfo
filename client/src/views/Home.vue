<template>
  <v-app :dark="mydark">
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title>&copyNUIT DE L'INFO 2018</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="darkmod()" icon>
          <v-icon>brightness_3</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <list-card/>
  </v-app>
</template>

<script>
import ListCard from "../components/ListCard";

export default {
  name: "Home",
  components: {
    ListCard
  },
  data: () => ({
    mydark: true
  }),
  methods: {
    darkmod: function() {
      if (this.mydark) this.mydark = false;
      else this.mydark = true;
      console.log(this.mydark);
    }
  }
};
</script>
