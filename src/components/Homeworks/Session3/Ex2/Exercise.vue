<template>
  <div class="hello">
    <div class="container">
      <ProductForm @createProduct="addProduct" :editProduct="editProduct"/>
      <ProductList :listProducts="listProduct" @editProduct="edit"/>
    </div>
  </div>
</template>

<script>
  import ProductForm from "./ProductForm";
  import ProductList from "./ProductList";
  export default {
    components: {
      ProductForm,
      ProductList
    },
    data () {
      return {
        listProduct: [],
        editProduct: ''
      }
    },
    methods: {
      addProduct(data) {
        this.listProduct.push(data)
      },
      edit(data) {
        this.editProduct = data
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    height: 600px;
  }
</style>