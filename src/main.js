import { createApp } from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// mdi Icons
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
  iconSet: "mdi",
});

app.use(StoryblokVue, {
  accessToken: "fFCOnJO075ZNv1XLptu4cwtt",
  use: [apiPlugin],
  apiOptions: {
    region: "",
  },
});

app.use(vuetify).mount("#app");
