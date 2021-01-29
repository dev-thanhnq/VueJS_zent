import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        todos: [

        ],
        products: [
            // Nếu chạy bài 1 thì bỏ comment
            // {
            //     id: 1,
            //     name: 'iPhone 12 Pro Max Chính Hãng',
            //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
            //     price: 32990000,
            //     quantity: 566,
            // },
            // {
            //     id: 2,
            //     name: 'iPhone 12 Chính Hãng (VN/A)',
            //     image: '',
            //     price: 21790000,
            //     quantity: 123,
            // },
            // {
            //     id: 3,
            //     name: 'iPhone 11 Chính hãng',
            //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
            //     price: 16690000,
            //     quantity: 0,
            // },
            // {
            //     id: 4,
            //     name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
            //     image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
            //     price: 12190000,
            //     quantity: 1023,
            // },
            // {
            //     id: 5,
            //     name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
            //     image: '',
            //     price: 26500000,
            //     quantity: 6,
            // }
        ],
        cartProducts: [],
        product: {},
        nameErrorMsg: '',
        priceErrorMsg: '',
        quantityErrorMsg: '',
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        spentTime: state => {
            let sum = 0
            state.todos.forEach(todo => {
                sum += todo.time
            })
            return sum
        },
        getTodoByText: state => (text) => {
            return state.todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()))
        },
        total: state =>  {
            let result = 0
            state.cartProducts.map((product) => {
                result += product.quantity * product.price
            })
            return result.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ'
        },
    },
    mutations: {
        increment (state) {
            state.count++
        },
        addTodo (state, item) {
            state.todos.push(item)
        },
        deleteTodo (state, work) {
            if (state.todos.indexOf(work) > -1) {
                state.todos.splice(state.todos.indexOf(work), 1);
            }
        },
        add (state, product) {
            if (product.quantity === 0) {
                alert('Sản phẩm hết hàng')
                return false
            }
            let inCartProducts = state.cartProducts.filter((cartProduct) => {return cartProduct.id === product.id})
            if (inCartProducts.length > 0) {
                let indexInCart = state.cartProducts.findIndex((cartProduct) => {return cartProduct.id === product.id})
                if (indexInCart !== -1) {
                    state.cartProducts[indexInCart].quantity = parseInt(state.cartProducts[indexInCart].quantity) + 1
                }
            } else {
                state.cartProducts.push({...product, quantity: 1})
            }
        },
        remove(state, cartProduct, cartIndex) {
            state.cartProducts.splice(cartIndex, 1)
        },
        //bài 2
        saveProduct (state, name, price, qty) {
            let result = true

            if (!name) {
                result = false
                state.nameErrorMsg = 'Tên sản phẩm không được để trống'
            }

            if (!price) {
                result = false
                state.priceErrorMsg = 'Giá sản phẩm không được để trống'
            }

            if (!qty) {
                result = false
                state.quantityErrorMsg = 'Số lượng sản phẩm không được để trống'
            }
            if (result) {
                if (Object.keys(state.product).length === 0) {
                    state.products.push({
                        id: `SP${new Date().getTime()}`,
                        name: this.name,
                        price: parseInt(this.price),
                        quantity: parseInt(this.quantity),
                    })
                } else {
                    this.$emit('onUpdateProduct', {
                        id: this.product.id,
                        name: this.name,
                        price: parseInt(this.price),
                        quantity: parseInt(this.quantity),
                    })
                }
                this.clearData()
            }
        },
    }
})

export default store