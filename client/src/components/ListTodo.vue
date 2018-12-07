<template>
  <v-flex v-if="suppr" xs12 ma-3>
    <v-card color="blue lighten-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">
            <span>{{value}}</span>
          </div>
          <span>{{content}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="rm()" color="red lighten-1">DELETE ME</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Api from "../services/api.js";
export default {
  props: ["value", "id", "content"],
  data: () => ({
    suppr: true,
  }),
  methods: {
    rm: function() {
      this.suppr = false;
      Api().post('/removeTask', { idTask: this.id}).then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
    }
  }

};
</script>

<style>
</style>