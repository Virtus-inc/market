<template>
	<v-app>
		<app-bar />
		<v-container>
			<v-col class="mt-14">
				<post-list
					v-if="!isPostLoading"
					:products="products"
					:description="description"
				/>
				<v-col v-else><h3>Завантаження...</h3></v-col>
			</v-col>
		</v-container>
	</v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import PostList from '@/components/PostList.vue';
import { useStoryblok } from '@storyblok/vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		AppBar,
		PostList
	},
	data: () => ({
		isPostLoading: false
	}),
	computed: {
		...mapGetters({
			products: ['getPoducts'],
			description: ['getDescription']
		}),
		producta_list: {
			get() {
				return this.$store.state.products;
			},
			set(val) {
				this.$store.commit('ADD_PRODUCTS', val);
			}
		}
	},
	methods: {
		async fetchProducts() {
			try {
				this.isPostLoading = true;
				const response = await useStoryblok('main', {
					version: 'published',
					cv: Date.now()
				});
				this.$store.commit('ADD_PRODUCTS', response);
				this.$store.commit('ADD_DESCRIPTION_FOR_THE_PRODUCT', response);
			} catch {
				console.log('Error');
			} finally {
				this.isPostLoading = false;
			}
		}
	},
	mounted() {
		this.fetchProducts();
	}
};
</script>
