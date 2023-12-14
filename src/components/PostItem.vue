<template>
	<v-col class="pa-0">
		<v-card class="mx-auto custom_width" height="100%" style="overflow-y: auto">
			<v-btn
				v-if="reveal"
				class="btn_top"
				variant="text"
				@click.stop="reveal = !reveal"
			>
				<v-icon
					color="blue"
					icon="mdi-arrow-up-circle-outline"
					size="x-large"
				/>
			</v-btn>
			<v-card-item v-if="!reveal" class="pa-lg-10">
				<v-img
					class="align-end text-white"
					height="195"
					:src="item.img.url"
					cover
				/>
			</v-card-item>
			<v-card-subtitle v-if="!reveal && product !== null" class="pt-6 pb-2">
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

			<v-card-text v-if="!reveal && product !== null" class="mb-10">
				<div>{{ truncateString() }}</div>
			</v-card-text>

			<v-card-actions
				v-if="!reveal"
				class="justify-space-between position pr-3 pl-5"
			>
				<div class="d-flex align-center text-red">
					<h3>{{ item.cost }}</h3>
					<v-icon icon="mdi-currency-uah" size="small" />
				</div>
				<div>
					<v-btn
						class="ma-0 pa-0"
						variant="text"
						@click.stop="reveal = !reveal"
					>
						<v-icon
							color="blue"
							icon="mdi-information-outline"
							size="x-large"
						/>
					</v-btn>
					<v-btn class="ma-0 pa-0" color="green" @click="buyProduct(item)">
						<v-icon color="green" icon="mdi-cart-plus" size="x-large" />
					</v-btn>
				</div>
			</v-card-actions>

			<v-expand-transition>
				<v-card v-if="reveal" class="v-card--reveal pt-5">
					<v-card-text>
						<v-table density="compact" class="text-caption">
							<tbody>
								<tr align="right">
									<th class="text-left">Діагональ дисплея</th>
									<td>{{ description.display }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Частота оновлення</th>
									<td>{{ description.updates }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">
										Максимальна роздільна здатність дисплея
									</th>
									<td>{{ description.resolution }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Час реакції матриці</th>
									<td>{{ description.time_reaction }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Вбудований тюнер</th>
									<td>{{ description.tuner }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Яскравість дисплея</th>
									<td>{{ description.brightness }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Тип матриці</th>
									<td>{{ description.matrix_type }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Інтерфейси</th>
									<td>{{ description.interfaces }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Підсвітка матриці</th>
									<td>{{ description.backlight }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Контрастність дисплея</th>
									<td>{{ description.display_contrast }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Особливості</th>
									<td>{{ description.peculiarities }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Кут огляду горизонтальний</th>
									<td>{{ description.angle }}</td>
								</tr>
								<tr align="right">
									<th class="text-left">Ігрові технології</th>
									<td>{{ description.gaming_tech }}</td>
								</tr>
							</tbody>
						</v-table>
					</v-card-text>
				</v-card>
			</v-expand-transition>
		</v-card>
	</v-col>
</template>

<style scoped>
.position {
	position: absolute;
	bottom: 0;
	width: 100%;
}

.btn_top {
	position: absolute !important;
	z-index: 100;
	top: 0;
	width: 100%;
}

.custom_width {
	width: 320px;
	@media screen and (max-width: 900px) {
		width: 265px;
	}
}
</style>

<script>
import { useToast } from 'vue-toastification';
const toast = useToast();

export default {
	props: {
		item: {
			type: Object,
			required: true
		},
		description: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		reveal: false
	}),
	methods: {
		truncateString() {
			let maxLength = 70;
			let truncatedString = this.item?.title.substring(0, maxLength) + '...';
			return truncatedString;
		},
		buyProduct(item) {
			this.$store.commit('ADD_PRODUCT_TO_CART', item);

			toast.success('Товар доданий у кошик', {
				position: 'top-center',
				closeOnClick: true,
				pauseOnFocusLoss: true,
				pauseOnHover: true,
				draggable: true,
				draggablePercent: 0.6,
				showCloseButtonOnHover: false,
				hideProgressBar: true,
				closeButton: 'button',
				icon: true,
				rtl: false
			});
		}
	}
};
</script>
