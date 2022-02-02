<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      class="grey lighten-4"
      :mini-variant="miniVariant"
      :clipped="clipped"
      permanent
      app
    >
      <v-card
        flat
        align="center"
        justify="center"
        class="col-12 grey lighten-4 my-4"
      >
        <img src="../static/Logo.svg" alt="" v-show="!miniVariant" :class="{'d-block': !miniVariant}" />
        <img src="../static/MiniLogo.svg" alt="" v-show="miniVariant" :class="{'d-block': miniVariant}">

      </v-card>
      <v-list class="pa-0">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="col">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Главная",
          to: "/",
        },
        {
          icon: "mdi-newspaper-variant",
          title: "Новости",
          to: "/newspage",
        },
      ],
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  computed: {
    miniVariant() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
        case "xl":
          return false;
      }
      return this.miniVariant;
    },
  },
};
</script>