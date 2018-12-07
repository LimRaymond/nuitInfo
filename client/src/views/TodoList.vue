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
        <list-todo
          v-for="message in items"
          :key="message.id"
          :value="message.title"
          :content="message.task"
          :id="message.id"
        />
      </v-layout>
    </v-container>
  </v-app>
</template>


<script>
import ListTodo from "../components/ListTodo";
import Toolbar from "../components/Toolbar";
import Api from "../services/api.js";

export default {
  name: "TodoList",
  components: {
    ListTodo,
    Toolbar
  },
  data() {
    return {
      list: [{ oui: "Foo" }, { oui: "Bar" }],
      mydark: true,
      items: []
    };
  },
  mounted() {
    Api()
      .get("/todolist")
      .then(response => {
        var tmp = [];
        for (var a in response.data.titleList) {
          var tab = {
            id: response.data.idInstance[a],
            title: response.data.titleList[a],
            task: response.data.taskList[a]
          };
          tmp.push(tab);
        }
        this.items = tmp;
      });
  },
  methods: {
    darkmod: function() {
      if (this.mydark) this.mydark = false;
      else this.mydark = true;
    }
  }
};
</script>
