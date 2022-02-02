<template>
  <v-carousel v-model="model"  height="100vh">
    <v-carousel-item
      v-for="news in sliderNews"
      :key="news.id"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h2 class="text-h1">
              {{news.name}}
          </h2>
          <img :src="'/'+news.full_image" alt="">
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import {mapState} from "vuex"

export default {
  name: "indexSlider",
  computed: {
    ...mapState("news", ["newsList"]),
    sliderNews() {
      return this.newsList.filter(e => e.slider)
    }
  }
}
</script>