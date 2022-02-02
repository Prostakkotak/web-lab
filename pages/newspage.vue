<template>
  <v-row class="d-flex flex-column pt-6" align="center">
    <v-autocomplete class="col-xs-12 col-sm-10 col-md-8 px-4" solo rounded dense>
    </v-autocomplete>
    <v-list class="d-flex flex-column col-xs-12 col-sm-10 col-md-8 px-4">
      <NewsItem v-for="news in this.$store.state.news.newsList"
    :key="news.id" :newsData=news  />
    </v-list>
  </v-row>
</template>

<script>

</script>

<style lang="scss">
.on-hover {
  cursor: pointer;
  transform: scale(1.003);
  transition: 200ms;
}

.link {
  text-decoration: none;
}
</style>

<script>
import NewsItem from '../components/NewsItem.vue'

export default {
  components: [NewsItem]
}
</script>