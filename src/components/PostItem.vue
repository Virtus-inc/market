<template>
  <v-col>
    {{ post }}
  </v-col>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
