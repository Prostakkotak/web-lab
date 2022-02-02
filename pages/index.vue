<template>
    <v-row
      fill-height
      align="center"
      justify="center"
      class="d-flex flex-column"
      style="height: 100vh"
    >
      <IndexSlider />
    </v-row>
</template>

<script>
import IndexSlider from '../components/IndexSlider.vue'
export default {
  components: {IndexSlider}
};
</script>