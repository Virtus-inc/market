<template>
	<v-col class="pa-0">
		<h3 class="mb-4">Ігрові монітори</h3>
		<v-row class="ma-0 gap-10">
			<post-item
				class="ma-0 gap-10"
				v-for="(item, index) in products"
				:key="index"
				:item="item"
				:description="description"
			/>
		</v-row>
	</v-col>
</template>

<style scoped>
.gap-10 {
	gap: 10px;
}
</style>

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
