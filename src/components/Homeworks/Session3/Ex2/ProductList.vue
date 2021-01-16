<template>
  <div class="product-list">
    <table>
      <tr class="table-head">
        <td>Mã sản phẩm</td>
        <td>Tên sản phẩm</td>
        <td>Giá</td>
        <td>Số lượng</td>
        <td>Trạng thái</td>
        <td>Hành động</td>
      </tr>
      <tr v-if="listProducts.length === 0">
        <td colspan="6">Không có dữ liệu</td>
      </tr>
      <tr v-else v-for="(product, index) in listProducts" :key="index">
        <td>SP{{product.id}}</td>
        <td style="color: #0080dd">{{ product.name }}</td>
        <td>{{ product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") }} đ</td>
        <td>{{ product.qty }}</td>
        <td v-if="product.qty > 0" style="color: #39cd75">Còn hàng</td>
        <td v-else style="color: #f54b5e">Hết hàng</td>
        <td>
          <button class="btn-edit" @click="edit(product)">Sửa</button>
          <button class="btn-delete" @click="deleteProduct(product)">Xóa</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['listProducts'],
    data() {
      return {

      }
    },
    methods: {
      deleteProduct(product) {
        if (this.listProducts.indexOf(product) > -1) {
          this.listProducts.splice(this.listProducts.indexOf(product), 1);
        }
      },
      edit(product) {
        this.$emit('editProduct', product)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-list {
    width: 1000px;
    margin-left: 30px;
    table {
      width: 990px;
      border-spacing: 0px;
      border: 1px solid #c5d9f1;
      border-left: 0;
      .table-head {

        background-color: #f2f6fe;
        font-weight: bold;
        td {
          border-bottom: 1px solid #c5d9f1;
        }
      }
      tr {
        height: 60px;
        td {
          border-left: 1px solid #c5d9f1;
          .btn-edit, .btn-delete {
            width: 60px;
            height: 40px;
            font-weight: bold;
            color: #ffffff;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-edit {
            background-color: #f2994a;
            margin-right: 5px;
          }
          .btn-delete {
            background-color: #f54b5e;
            margin-left: 5px;
          }
        }
      }
    }
  }
</style>