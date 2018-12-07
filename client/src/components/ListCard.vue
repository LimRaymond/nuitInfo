<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 ma-3>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="600"
            :to="{ name: 'TodoList' }"
          >
            <v-img
              aspect-ratio="2"
              src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.15752-9/47573298_1994916357252981_1880754492312387584_n.jpg?_nc_cat=110&_nc_ht=scontent-lhr3-1.xx&oh=07a42d27a7a818eb4fbfae16cd5129d3&oe=5CB02E50"
            ></v-img>
            <v-card-title>
              <div>
                <span class="headline">TODO LIST</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 ma-3>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="600"
          >
            <v-img
              aspect-ratio="2"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7ba755625865.598c27c460739.png"
            ></v-img>
            <v-card-title>
              <div>
                <span class="headline">WEATHER</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 ma-3>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="600"
          >
            <v-img aspect-ratio="2" src="https://i.gifer.com/1UEn.gif"></v-img>
            <v-card-title>
              <div>
                <span class="headline">CHATBOT</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 ma-3>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="600"
            :to="{ name: 'Geo' }"
          >
            <v-img aspect-ratio="2" src="https://i.imgur.com/IiabxlL.jpg"></v-img>
            <v-card-title>
              <div>
                <span class="headline">WHERE I'AM ?</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs12 ma-3>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="600"
          >
            <v-img
              aspect-ratio="2"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/47578910_521025811715092_8291631503926886400_n.jpg?_nc_cat=107&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=36f91aaf07e9fb9723da4abf5f002fa5&oe=5C9AE13B"
            ></v-img>
            <v-card-title>
              <div>
                <span class="headline">URGENCY</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    onclick: function() {
      this.$router.push("TodoList");
    }
  }
};
</script>

<style>
</style>
