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
    <v-container>
      <v-layout wrap>
        <list-todo v-for="message in list" :key="message" :value="message.oui"/>
      </v-layout>
    </v-container>
  </v-app>
</template>


<script>
import ListTodo from "../components/ListTodo";
import Toolbar from "../components/Toolbar";

export default {
  name: "TodoList",
  components: {
    ListTodo,
    Toolbar
  },
  data: () => ({
    list: [{ oui: "Foo" }, { oui: "Bar" }],
    mydark: true,
  }),
  methods: {
    darkmod: function() {
        if (this.mydark)
            this.mydark = false;
        else
            this.mydark = true;
        console.log(this.mydark)
    }
  }
};
</script>
