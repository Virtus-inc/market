<template>
  <v-container>
    <app-bar />
    <v-col class="mt-6">
      <post-list :posts="posts" v-if="!isPostLoading" />
      <v-col v-else><h3>Идет загрузка...</h3></v-col>
    </v-col>
  </v-container>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    AppBar,
    PostList,
  },
  data: () => ({
    posts: [],
    isPostLoading: false,
  }),
  methods: {
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch {
        console.log("Error");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
