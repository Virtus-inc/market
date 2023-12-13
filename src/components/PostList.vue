<template>
	<v-col>
		<h3 class="mb-4">Ігрові монітори</h3>
		<v-row>
			<post-item
				v-for="(item, index) in products"
				:key="index"
				:item="item"
				:description="description"
			/>
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
		},
		description: {
			type: Array,
			required: true
		}
	},
	components: {
		PostItem
	}
};
</script>
