<template>
  <v-container>
    <app-bar />
    <v-col class="mt-6">
      <post-list v-if="!isPostLoading" :posts="posts.content" />
      <v-col v-else><h3>Идет загрузка...</h3></v-col>
    </v-col>
  </v-container>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import PostList from "@/components/PostList.vue";
import { useStoryblok } from "@storyblok/vue";

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
        const response = await useStoryblok("main", {
          version: "published",
          cv: Date.now(),
        });
        this.posts = response;
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
