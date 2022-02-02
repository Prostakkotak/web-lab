<template>
  <v-row class="d-flex flex-column col-xs-12 col-sm-10 col-md-8 px-4">
    <v-btn class="caption mb-4" to="/newspage">&lt; - вернуться</v-btn>
    <img :src="'/' + newsData.full_image" alt="" />
    <h1>{{ newsData.name }}</h1>
    <p>{{ newsData.desc }}</p>
    <p class="caption">{{ newsData.date }}</p>

      <v-row>
        <v-col>
          <v-text-field
            v-model="user_name"
            :counter="40"
            label="Представьтесь"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="comment"
            :counter="200"
            label="Текст комментария"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="submitDisabled" class="mt-5 mb-10" @click="onSubmitClick"> Добавить комментарий </v-btn>

    <v-card
      class="pa-4 my-2 col comment"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="comment__text">
        {{ comment.comment }}
      </div>

      <div class="comment__author">Автор: {{ comment.user_name }}</div>
    </v-card>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    newsData: "",
    comments: [],
    user_name: "",
    comment: "",
    submitDisabled: false
  }),
  async asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  computed: { ...mapState("news", ["newsList"]) },
  async mounted() {
    this.newsData = this.newsList.find((e) => e.id == this.id);
    this.comments = await this.$store.dispatch(
      "news/getArticleComments",
      this.id
    );
  },
  methods: {
    async onSubmitClick() {
      this.submitDisabled = true
      await this.$store.dispatch("news/addArticleComment", {
        id: this.id,
        user_name: this.user_name,
        comment: this.comment,
      });

      this.comments = await this.$store.dispatch(
      "news/getArticleComments",
      this.id
    );

      this.comment = ""
      this.user_name = ""
      this.submitDisabled = false
    },
  },
};
</script>
<style scoped lang="scss">
.comment {
  &__author {
    font-size: 12px;
  }
}
</style>