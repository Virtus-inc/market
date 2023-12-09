<template>
  <v-container>
    <div v-if="posts.length > 0">
      <h3>Список товаров:</h3>
      <post-item v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <h2 v-else>Список товаров пуст</h2>
  </v-container>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostItem,
  },
};
</script>
