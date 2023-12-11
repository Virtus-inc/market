import { createApp } from 'vue';
import App from './App.vue';

// StoryBlok
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Store
import store from '@/store/store';

// Mdi Icons
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);

const vuetify = createVuetify({
	components,
	directives,
	iconSet: 'mdi'
});

app.use(store);

app.use(StoryblokVue, {
	accessToken: 'fFCOnJO075ZNv1XLptu4cwtt',
	use: [apiPlugin],
	apiOptions: {
		region: ''
	}
});

app.use(vuetify).mount('#app');
