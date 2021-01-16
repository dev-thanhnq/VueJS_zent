<template>
  <div class="product-form">
    <h3 class="title">Sản phẩm</h3>
    <div class="label">Tên sản phẩm <span>(*)</span></div>
    <input v-if="editProduct" type="text" v-model="editProduct.name" @input="onChangeName($event.target.value)" placeholder="Nhập tên sản phẩm">
    <input v-else type="text" v-model="productName" @input="onChangeName($event.target.value)" placeholder="Nhập tên sản phẩm">
    <span v-if="nameError">Tên sản phẩm không được bỏ trống</span>
    <div class="label">Đơn giá <span>(*)</span></div>
    <input v-if="editProduct" type="number" v-model="editProduct.price" @input="onChangePrice($event.target.value)" placeholder="Nhập đơn giá sản phẩm">
    <input v-else type="number" v-model="productPrice" @input="onChangePrice($event.target.value)" placeholder="Nhập đơn giá sản phẩm">
    <span v-if="priceError">Đơn giá không được bỏ trống</span>
    <div class="label">Số lượng <span>(*)</span></div>
    <input v-if="editProduct" type="number" v-model="editProduct.qty" @input="onChangeQty($event.target.value)" placeholder="Nhập số lượng sản phẩm">
    <input v-else type="number" v-model="productQty" @input="onChangeQty($event.target.value)" placeholder="Nhập số lượng sản phẩm">
    <span v-if="qtyError">Số lượng không được bỏ trống</span>
    <button class="clear" @click="clear()">Hủy</button>
    <button class="create" v-if="!editProduct" @click="addProduct()">Tạo mới</button>
    <button class="create" v-else @click="update()">Cập nhật</button>
  </div>
</template>

<script>
  export default {
    props: ['editProduct'],
    data () {
      return {
        productId: 0,
        productName: '',
        productPrice: '',
        productQty: '',
        nameError: false,
        priceError: false,
        qtyError: false,
      }
    },
    methods: {
      addProduct() {
        if (this.productName.length === 0) {
          this.nameError = true
        }
        if (this.productPrice.length === 0) {
          this.priceError = true
        }
        if (this.productQty.length === 0) {
          this.qtyError = true
        }
        if (!this.nameError && !this.priceError && !this.qtyError) {
          this.productId += 1
          this.$emit('createProduct', {id: this.productId, name: this.productName, qty: this.productQty, price: this.productPrice})
          this.productName =''
          this.productPrice = ''
          this.productQty = ''
        }
      },
      onChangeName() {
        this.nameError = false
      },
      onChangePrice() {
        this.priceError = false
      },
      onChangeQty() {
        this.qtyError = false
      },
      clear() {
        this.productName =''
        this.productPrice = ''
        this.productQty = ''
      },
      update() {
        this.editProduct.name = ''
        // this.$emit('updateProduct', )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-form {
    width: 460px;
    height: 460px;
    border: 1px solid #c5d9f1;
    padding: 20px;
    text-align: left;
    .title {
      margin-top: 0;
      color: #0080dd;
    }
    .label {
      font-weight: bold;
      margin-top: 10px;
      span {
        color: #f54b5e;
      }
    }
    input {
      width: 452px;
      height: 32px;
      margin: 10px 0 5px 0;
    }
    span {
      color: #f54b5e;
      font-size: 14px;
    }
    button {
      width: 80px;
      height: 40px;
      float: right;
      margin: 20px 0 0 10px;
      border: 0;
      border-radius: 5px;
      font-weight: bold;
    }
    .create {
      background-color: #0080dd;
      color: #ffffff;
    }
  }
</style>