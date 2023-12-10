<template>
  <v-container>
    <v-col>
      <h3>Список товаров:</h3>
      <v-row>
        <post-item v-for="post in posts?.product" :key="post" :post="post" />
      </v-row>
    </v-col>
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
