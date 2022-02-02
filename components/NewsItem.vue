<template>
  <v-hover
    v-slot="{ hover }"
  >
    <NuxtLink :to="`/${newsData.id}`" class="link">
      <v-card
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover, 'pa-4 my-2 col': true }"
      >
        <h2>{{ newsData.name }}</h2>
        <p style="max-width: 70ch; overflow: hidden; white-space: nowrap">
          {{ newsData.desc }}
        </p>
        <p>{{ newsData.date }}</p>
      </v-card>
    </NuxtLink>
  </v-hover>
</template>

<script>
export default {
    props: ['newsData']
}
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