export default {
    namespaced: true,
    state: {
        bills: [
            {name: 'HD01', id: 1},
            {name: 'HD02', id: 2}
        ]
    },
    getters: {
        // Khai báo getters
    },
    mutations: {
        deleteBill(state, bill) {
            if (state.bills.indexOf(bill) > -1) {
                state.bills.splice(state.bills.indexOf(bill), 1);
            }
        },
    },
}