<template>
  <v-hover v-slot="{ hover }">
    <NuxtLink :to="`/${newsData.id}`" class="link">
      <v-card
        :elevation="hover ? 12 : 2"
        class="pa-4 my-2 col newsItem"
        :class="{ 'on-hover': hover }"
      >
        <img :src="'/' + newsData.preview_image" alt="" />
        <div class="newsItem__text-section">
          <h2>{{ newsData.name }}</h2>
          <p class="newsItem__shorttext">
            {{ newsData.desc }}
          </p>
          <p>{{ newsData.date }}</p>
        </div>
      </v-card>
    </NuxtLink>
  </v-hover>
</template>

<script>
export default {
  props: {
    newsData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.on-hover {
  cursor: pointer;
  transform: scale(1.003);
  transition: 200ms;
}

.link {
  text-decoration: none;
}

.newsItem {
  display: flex;

  &__text-section {
    margin-left: 8px;
  }

  &__shorttext {
    max-width: 50ch;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  img {
    height: 100%;
    max-width: 140px;
  }
}
</style>