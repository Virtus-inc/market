<template>
	<v-col>
		<h3 class="mb-4">Ігрові монітори</h3>
		<v-row>
			<post-item v-for="item in products" :key="item" :item="item" />
		</v-row>
	</v-col>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
	props: {
		products: {
			type: Array,
			required: true
		}
	},
	components: {
		PostItem
	}
};
</script>
