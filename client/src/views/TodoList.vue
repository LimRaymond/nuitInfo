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
    <v-dialog v-model="dialog" width="500">
      <v-btn
        style="margin: auto;display: inherit;margin-top: 30px;"
        slot="activator"
        color="success"
        dark
      >ADD TASK</v-btn>

      <v-card>
        <v-card-title class="success" primary-title>Privacy Policy</v-card-title>
        <v-container mb-3>
          <v-form v-model="valid">
            <v-text-field v-model="name" :rules="nameRules" :counter="15" label="Title" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="Tâche à faire" required></v-text-field>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false" @click.native="send()">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      items: [],
      dialog: false,
      valid: false,
      name: "",
      nameRules: [v => !!v || "Title is required"],
      email: "",
      emailRules: [v => !!v || "E-mail is required"]
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
    },
    send: function() {
      Api()
        .post("/addTask", { title: this.name, task: this.email })
        .then(response => {
          console.log(response)
          var tab = {
            id: response.message,
            title: this.name,
            task: this.email
          };
          this.items.push(tab);
        });
    }
  }
};
</script>
