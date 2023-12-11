<template>
	<v-app-bar color="primary" prominent app class="pr-16 pl-16">
		<v-app-bar-nav-icon variant="text" />
		<v-toolbar-title>Marketplace</v-toolbar-title>
		<v-spacer />
		<v-text-field
			v-model="voice"
			clearable
			density="compact"
			hide-details
			placeholder="Пошук"
			prepend-inner-icon="mdi-magnify"
			style="max-width: 300px"
			variant="solo"
		/>
		<v-btn
			:disabled="isStartRecognise"
			@click="startVoice()"
			variant="text"
			icon
		>
			<v-icon :class="{ 'red--text': isStartRecognise }">mdi-microphone</v-icon>
		</v-btn>
		<v-btn variant="text" icon="mdi-cart-variant" />
	</v-app-bar>
</template>

<style scoped>
.red--text {
	color: rgb(252, 113, 113);
}
.v-btn--disabled {
	opacity: 1 !important;
}
</style>

<script>
import { ref } from 'vue';
import debounce from 'lodash/debounce';

export default {
	data() {
		return {
			isStartRecognise: ref(false)
		};
	},
	computed: {
		voice: {
			get() {
				return this.$store.state.search;
			},
			set(val) {
				this.makeRequest(val);
			}
		}
	},
	methods: {
		makeRequest: debounce(function (val) {
			this.$store.commit('ADD_SEARCH', val);
		}, 500),
		startVoice() {
			const SpeechRecognition =
				window.SpeechRecognition || window.webkitSpeechRecognition;
			const recognition = new SpeechRecognition();

			recognition.onstart = () => {
				this.isStartRecognise = true;
			};

			recognition.onresult = event => {
				const value = event.results[0][0].transcript;
				this.voice = value;
				this.$store.commit('ADD_SEARCH', this.voice);
				this.isStartRecognise = false;
			};

			recognition.start();
		}
	}
};
</script>
