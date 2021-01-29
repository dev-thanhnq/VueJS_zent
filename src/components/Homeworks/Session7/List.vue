<template>
  <div class="container">
    <div class="productList">
      <table>
        <tr>
          <th>STT</th>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
        <tr v-if="products.length === 0">
          <td colspan="6" class="textCenter">Không có dữ liệu</td>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td class="textCenter">{{index + 1}}</td>
          <td>
            <div class="productNameWrap">
              <img v-if="product.image" :src="product.image" alt="">
              <img v-else src="data:image/jpeg;base64,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" alt="">
              <div class="textMain">{{product.name}}</div>
            </div>
          </td>
          <td>{{product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}} đ</td>
          <td class="textCenter">{{product.quantity}}</td>
          <td class="textCenter">
            <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
            <span v-else class="textRed">Hết hàng</span>
          </td>
          <td>
            <button class="addToCartButton" @click="addToCart(product)">Thêm vào giỏ</button>
          </td>
        </tr>
      </table>
    </div>
    <Cart/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Cart from "@/components/Homeworks/Session7/Cart";
export default {
  name: 'Exercise',
  components: {
    Cart
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
        'products', 'cartProducts'
    ])
  },
  methods: {
    addToCart(product) {
      this.add(product)
    },
    ...mapMutations([
        'add'
    ])
  }
}
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorMain: #0080dd;
$colorDefault: #253036;
$colorGreen: #39cd74;
$colorRed: #f54b5e;
$colorTableHeader: #f2f6fe;
$colorWhite: #fff;

.container {
  height: 100vh;
  padding: 24px;
  color: $colorDefault;
  display: flex;
  align-items: flex-start;

  .productList {
    .textCenter {
      text-align: center;
    }

    .textGreen {
      color: $colorGreen;
    }

    .textRed {
      color: $colorRed;
    }

    .textMain {
      color: $colorMain;
    }

    table {
      border: 1px solid $colorStroke;
      border-spacing: 0;
      width: 900px;

      th {
        background: $colorTableHeader;
        padding: 14px;
        border-right: 1px solid $colorStroke;
        border-bottom: 1px solid $colorStroke;
      }

      td {
        text-align: left;
        padding: 12px;
        font-size: 14px;
        border-right: 1px solid $colorStroke;
      }

      .productNameWrap {
        display: flex;
        align-items: center;

        img {
          margin-right: 8px;
          width: 40px;
          height: 40px;
        }
      }

      .addToCartButton {
        background: $colorMain;
        border: unset;
        font-size: 14px;
        font-weight: bold;
        color: $colorWhite;
        width: 120px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>