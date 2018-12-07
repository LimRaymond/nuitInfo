<template>
  <v-flex xs12 ma-3>
    <v-card color="blue lighten-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">
            <span>message = {{value}}</span>
          </div>
          <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn color="blue darken-1">Listen now</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    todo: this.value
  })
};
</script>

<style>
</style>