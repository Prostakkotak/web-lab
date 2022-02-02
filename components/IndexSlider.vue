<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="news in this.$store.state.news.newsList"
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
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>