<template>
	<v-row justify="center">
		<v-dialog :model-value="statusDialog" width="800">
			<template v-slot:activator="{ props }">
				<v-btn v-bind="props" icon="mdi-cart-variant" />
			</template>
			<v-card>
				<v-card-title>
					<span class="text-h5" v-if="productsInCart.length > 0">Кошик</span>
					<span v-else />
				</v-card-title>
				<v-card-text>
					<v-table v-if="productsInCart.length > 0">
						<thead>
							<tr>
								<th class="text-left">Назва товару</th>
								<th class="text-left">Ціна</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in productsInCart" :key="index">
								<td>
									<v-alert class="mt-3 mb-3">{{ item.title }}</v-alert>
								</td>
								<td>
									<div style="width: 64px">
										{{ item.cost }}
										<v-icon icon="mdi-currency-uah" size="small" />
									</div>
								</td>
								<td>
									<v-btn
										icon="mdi-close"
										variant="text"
										@click="removeItemFromCard(index)"
									/>
								</td>
							</tr>
						</tbody>
					</v-table>
					<h3 class="text-center mb-4" v-else>Не має товару</h3>
				</v-card-text>
				<v-card-actions v-if="productsInCart.length > 0">
					<v-spacer></v-spacer>
					<v-btn color="green-darken-1" variant="text" @click="multiTask()">
						Замовити
					</v-btn>
				</v-card-actions>
				<div v-else />
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { useToast } from 'vue-toastification';
const toast = useToast();

export default {
	props: {
		statusDialog: {
			type: Boolean
		}
	},
	computed: {
		...mapGetters({
			productsInCart: ['getPoductsInCart']
		})
	},
	methods: {
		multiTask() {
			toast.success('Замовлення підтверджено', {
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
			this.closeDialog();
			this.removeListCard();
		},
		removeListCard() {
			this.$store.commit('REMOVE_PRODUCTS_FROM_CART');
		},
		removeItemFromCard(index) {
			toast.error('Замовлення скасовано', {
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
			this.$store.commit('REMOVE_PRODUCT_FROM_CART', index);
		},
		closeDialog() {
			this.$emit('closeDialogCart');
		}
	}
};
</script>
