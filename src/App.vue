<template>
  <v-container>
    <AppBar />
    <PostProduct />
  </v-container>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import PostProduct from "@/components/PostProduct.vue";

export default {
  components: {
    AppBar,
    PostProduct,
  },
};
</script>
