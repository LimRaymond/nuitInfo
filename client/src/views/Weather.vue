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
    <v-layout row>
      <v-flex xs5 ma-auto>
        <v-card height="440" color="blue lighten-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">
                <span>Maintenant</span>
              </div>
              <br>
              <br>
              <span>Ou ? {{weather.Current.title}}</span>
              <br>
              <br>
              <span>Température ? {{weather.Current.temperature}}</span>
              <br>
              <br>
              <span>Humidité ? {{weather.Current.humidity}}</span>
              <br>
              <br>
              <span>Pression ? {{weather.Current.pressure}}</span>
              <br>
              <br>
              <span>Vitesse du vent ? {{weather.Current.windSpeed}}</span>
            </div>
          </v-card-title>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs5 ma-auto>
        <v-card height="440" color="blue lighten-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">
                <span>Dans 3 heures</span>
              </div>
              <br>
              <br>
              <span>Ou ? {{weather.Fore.title}}</span>
              <br>
              <br>
              <span>Température ? {{weather.Fore.temperature}}</span>
              <br>
              <br>
              <span>Humidité ? {{weather.Fore.humidity}}</span>
              <br>
              <br>
              <span>Pression ? {{weather.Fore.pressure}}</span>
              <br>
              <br>
              <span>Vitesse du vent ? {{weather.Fore.windSpeed}}</span>
            </div>
          </v-card-title>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import Api from "../services/api.js";

export default {
  name: "Home",
  data: () => ({
    mydark: true,
    position: null,
    weather: null
  }),
  mounted: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.position = position.coords;
        Api()
          .post("/weather", {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          .then(response => {
            this.weather = response.data;
            console.log(response.data.Current.title);
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  },
  methods: {
    maPosition: function(position) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(this.lat, this.lng);
    },
    darkmod: function() {
      if (this.mydark) this.mydark = false;
      else this.mydark = true;
      console.log(this.mydark);
    }
  }
};
</script>
