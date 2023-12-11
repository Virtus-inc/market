import { createStore } from 'vuex';

const store = createStore({
	state: {
		products: [],
		search: ''
	},
	mutations: {
		ADD_PRODUCTS(state, payload) {
			state.products = payload;
		},
		ADD_SEARCH(state, payload) {
			state.search = payload;
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
		}
	},
	actions: {},
	modules: {}
});

export default store;
