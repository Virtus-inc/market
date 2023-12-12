import { createStore } from 'vuex';

const store = createStore({
	state: {
		products: [],
		search: '',
		cart: []
	},
	mutations: {
		ADD_PRODUCTS(state, payload) {
			state.products = payload;
		},
		ADD_SEARCH(state, payload) {
			state.search = payload;
		},
		ADD_PRODUCT_TO_CART(state, payload) {
			state.cart.push(payload);
		},
		REMOVE_PRODUCT_FROM_CART(state, payload) {
			state.cart.splice(payload, 1);
		},
		REMOVE_PRODUCTS_FROM_CART(state) {
			state.cart = [];
		}
	},
	getters: {
		getPoducts: state => {
			const serchProducts = !state.search
				? state?.products?.content?.product
				: state?.products?.content?.product.filter(item => {
						return item?.title
							.toLowerCase()
							.includes(state?.search.toLowerCase());
				  });
			return serchProducts;
		},
		getPoductsInCart: state => {
			return state?.cart;
		}
	},
	actions: {},
	modules: {}
});

export default store;
