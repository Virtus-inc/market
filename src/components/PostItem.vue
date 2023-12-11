<template>
	<v-col>
		<v-card class="mx-auto" min-width="320" width="auto" height="100%">
			<v-card-item class="pa-10">
				<v-img
					class="align-end text-white"
					height="195"
					:src="item.img.url"
					cover
				/>
			</v-card-item>
			<v-card-subtitle class="pt-6 pb-2" v-if="product !== null">
				<v-row align="center" class="mx-0">
					<v-rating
						:model-value="4.5"
						color="amber"
						density="compact"
						half-increments
						readonly
						size="small"
					/>

					<div class="text-grey ms-4">4.5 (453)</div>
				</v-row>
			</v-card-subtitle>

			<v-card-text class="mb-10" v-if="product !== null">
				<div>{{ truncateString() }}</div>
			</v-card-text>

			<v-card-actions class="justify-space-between position">
				<div class="d-flex align-center text-red">
					<h3>{{ item.cost }}</h3>
					<v-icon icon="mdi-currency-uah" size="small" />
				</div>
				<v-btn color="green">
					<v-icon color="green" icon="mdi-cart" size="small" />
					<div class="pl-1">Придбати</div>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<style scoped>
.position {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	methods: {
		truncateString() {
			let maxLength = 70;
			let truncatedString = this.item?.title.substring(0, maxLength) + '...';
			return truncatedString;
		}
	}
};
</script>
