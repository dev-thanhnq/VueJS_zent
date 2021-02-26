export default {
    namespaced: true,
    state: {
        products: [
            {name: 'xe máy', id: 1},
            {name: 'ô tô', id: 2}
        ]
    },
    getters: {
        // Khai báo getters
    },
    mutations: {
        deleteProduct(state, product) {
            if (state.products.indexOf(product) > -1) {
                state.products.splice(state.products.indexOf(product), 1);
            }
        },
        deleteProductById(state, id) {
            state.products.filter(product => (product.id != id))
        },
    },
}