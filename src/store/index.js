import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home';
import products from './modules/products';
import bills from  './modules/bills'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    modules: {
      home, products, bills
    }
})

export default store