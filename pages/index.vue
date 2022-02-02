<template>
    <v-row
      fill-height
      align="center"
      justify="center"
      class="d-flex flex-column"
      style="height: 100vh"
    >
      <h1 block class="mb-2" align="center">Добро пожаловать</h1>
      <h3 align='center' class="font-weight-medium mb-4">Это главная страница. Чтобы перейти к новостям, нажмите на кнопку</h3>
      <v-btn to="newspage/" class="blue" color="white--text"
        >Перейти к новостям</v-btn
      >
      <IndexSlider />
    </v-row>
</template>

<script>
import IndexSlider from '../components/IndexSlider.vue'
export default {
  components: ["IndexSlider"]
};
</script>