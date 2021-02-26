export default {
    namespaced: true,
    state: {
        count: 1
    },
    getters: {
        // Khai báo getters
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
}