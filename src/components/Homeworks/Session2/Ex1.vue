<template>
  <div class="hello">
    <div class="container">
      <div class="main">
        <input v-model="keyword" type="text" @keydown.enter="search()" placeholder="Tìm kiếm sản phẩm theo tên">
        <span v-if="keyword.length > 0" class="clear" @click="clear()">X</span>
        <table cellspacing="1px #dbe2ec">
          <tr class="table-head">
            <td>STT</td>
            <td>Tên sản phẩm</td>
            <td>Giá</td>
            <td>Số lượng</td>
            <td>Trạng thái</td>
            <td>Hành động</td>
          </tr>
          <tr v-if="key.length > 0 && searchList.length == 0">
            <td colspan="6">Không có sản phẩm</td>
          </tr>
          <tr v-else-if="key.length == 0 && searchList.length == 0" v-for="(product, index) in products" :key="index">
            <td>{{ ++index }}</td>
            <td class="product-name" style="color: #2a9ae7">
              <img v-if="product.image.length > 0" :src="product.image" alt="">
              <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=" alt="">
              {{ product.name}}
            </td>
            <td>{{ product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}} đ</td>
            <td>{{ product.quantity}}</td>
            <td v-if="product.isAvailable" style="color: #41d2b5">
              Còn hàng
            </td>
            <td v-else style="color: red">
              Hết hàng
            </td>
            <td>
              <button @click="addToCart(product.name)">Thêm vào giỏ</button>
            </td>
          </tr>
          <tr v-else-if="key.length > 0 && searchList.length > 0" v-for="(product, index) in searchList" :key="index">
            <td>{{ ++index }}</td>
            <td class="product-name" style="color: #2a9ae7">
              <img v-if="product.image.length > 0" :src="product.image" alt="">
              <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=" alt="">
              {{ product.name}}
            </td>
            <td>{{ product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}} đ</td>
            <td>{{ product.quantity}}</td>
            <td v-if="product.isAvailable" style="color: #41d2b5">
              Còn hàng
            </td>
            <td v-else style="color: red">
              Hết hàng
            </td>
            <td>
              <button @click="addToCart(product.name)">Thêm vào giỏ</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="cart">
        <h3>Giỏ hàng</h3>
        <div class="cart-item" v-for="(product, index) in cart" :key="index">
          <img v-if="product.image.length > 0" :src="product.image" alt="">
          <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=" alt="">
          <div class="name-price">
            <h3>{{ product.name }}</h3>
            <span>{{ product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}} đ</span>
          </div>
          <input type="number" :value="product.qty">
          <button class="cart-delete" @click="removeFromCart(product)">Xóa</button>
        </div>
        <h3 class="sum">Tổng tiền: {{ sum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") }} đ</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      key: '',
      products: [
        {
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true
        },
        {
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false
        },
        {
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 45,
          isAvailable: true
        }
      ],
      searchList: [],
      cart: [],
      sum: 0
    }
  },
  methods: {
    search() {
      this.key = this.keyword
      this.searchList = []
      this.products.forEach(product => {
        if (product.name.toLowerCase().includes(this.keyword.toLowerCase())) {
          this.searchList.push(product)
        }
      })
    },
    clear() {
      this.searchList = []
      this.keyword = ''
      this.key = ''
    },
    addToCart(name) {
      this.products.forEach(product => {
        if (product.name === name) {
          if (product.quantity == 0) alert('Sản phẩm đã hết hàng!')
          else if (this.cart.indexOf(product) == -1) {
            this.cart.push(product)
            product.quantity -=1
            this.sum += product.price
            product['qty'] = 1
          } else {
            product.quantity -=1
            product.qty += 1
            this.sum += product.price
          }

        }
      })
    },
    changeQty() {

    },
    removeFromCart(e) {
      if (this.cart.indexOf(e) > -1) {
        this.products.forEach(product => {
          if (product.name === e.name) {
            product.quantity += this.cart[this.cart.indexOf(e)].qty
          }
        })
        this.sum -= e.price *  this.cart[this.cart.indexOf(e)].qty
        this.cart.splice(this.cart.indexOf(e), 1);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 1700px;
    height: auto;
    overflow: hidden;
    margin: auto;
    .main {
      width: 1000px;
      float: left;
      input {
        float: left;
        width: 300px;
        height: 30px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAZlBMVEX///9kZGRlZWVWVlZgYGBcXFxZWVlhYWFVVVX7+/vc3Nz19fWjo6OoqKjv7+/Q0NC0tLSWlpbY2Nji4uK9vb3Hx8eDg4NycnKampp+fn6vr6/o6OiMjIzr6+vAwMB4eHhubm5NTU1c/aIQAAAEcUlEQVR4nO3b6XbjKBAGUIlV8qbFtrzEiXve/yWHAjkz7aQ7kpBt4Hz3b+wccEGBEJVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAELtNdW5OeUHY6VhXm1c3aF6L1YErKUTuaCGVOqwXr27WXDbnnAud39OCs3MKkXy7cPG/XpHP3mqpmrdXN9BLmS2bW/9Mbwp9vTRNc7mKQsm+m6I4Ll/dTB+1cv0TSnZ1+19Xlm3dCeU6KeTuhS30szlx2wdZdFX55a/LfVfInJm/qy7SMFZKmPYzoVZ/yifvRxdjodqntmwmNadRqPlf59mm4ZrCyCMcqSs7QuVh+8PnFr8kfbA4P6VVM1opajdfDfjokYLNBn00IGtlR2g16MP7wv4a5+xrOgrWjoao1j+NUKfMtnYTUHw8uFUzWrgODt+Svdm1UQ37RQJQCrtBex/xlTdKN5o9rEkzu4jxAWkLs2jI5kEtmlnFTWP52Em1o9xURLHyl7SCT4iGjXwU47Q2U0rn4xP/0o7tCPY2S8oZAxfC3+3tJiH8NbGWLNenSV+96iiCaLcn0xa2VsUwEyvTyokh7IMYejqljKimzEKyN3NYBL4mlrRfE5O/Tc/8IuxcUynTxOnPQUcR/DBd+TWRtkNyPWN75ncwucJjmNFiqq8ztmd2toWdxz84+f1Cj7flORM+o4wmIg/5GJw2XnLv8Q920mOxeQbbQJ9XSrStkSGfZqzNgsbHPNvf21IP69naMz+aRoXPEf3G7Bi8JvKjzdPDkE9OTQ9Z8j3MedKjdE251Gc5Mwtq2Jkm/dWCnn+V94of8sOFHWQ+08g+m4S8azM7bya8dt4i8J23PWnxfXqaesrzHCvJvJ6AVeCLRd/EpE8xSuVzEpXRebkMehr6niaq8E8T3TBN+kQ4o0tCfNq2puVRvAee/GamzK5xvF6zL/EnvV37UHQ9KvA8Q2o57TVgNG9IzUzUkzIiZeEIZiGp6O3MtJsKPPhE6jR2Ko7Lp20x7X7Da5S5nnhjKII042zpRo3O07315V7mmigObfFC0DpR+BwOPNuHpGtDQzeoe3ubWMV0h3bH+4KKIddiyyOn++xR3aDdmbzIcpHuLWh3fVasqWiEiR9vsrtgR7GX6e3sneaizVopGMVS/qUaQfbVCDEVebkOmqe8Mlt2qq/86aqvgaSKEldRE1dFCQ1Rpm/3RHfSJlWmlbzUi9+rguStYijoM+4v+gh+DrrlsXALh+kIVXZ1n5VdIs7KLpdk7BC9eW+4TZZmRjJ9V52XR1eddx9BZ3Nm6psKy1xydvZ5I/4CNf9MMncW64MyA/PWzVirZF0E//TUtKnq5sSo0JmzU1N/k1yD5yIoFzHV9ozSD9HoRt5g9S3JpBxBpieeBMeg/naZSEjtFvqEh6iLYESnLCPVVHam018mEo5g6gu9rVLWCUewrxdNN4K2LD3pCGZZefnnV9IddNIdogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOP8C6JMJrwtnvLYAAAAAElFTkSuQmCC");
        background-repeat: no-repeat;
        background-size: 30px 30px;
        padding-left: 35px;
        margin-bottom: 30px;
      }
      .clear {
        position: absolute;
        left: 420px;
        top: 70px;
        cursor: pointer;
      }
      table {
        width: 90%;
        float: left;
        height: auto;
        border: 1px #dbe2ec solid;
        border-spacing: 0px;
        padding: 0;
        color: #000000;
        .table-head {
          background-color: #f2f6fe;
          font-weight: bold;
        }
        tr {
          td {
            border-left: 1px #dbe2ec solid;
            border-right: 1px #dbe2ec solid;
            height: 50px;
            img {
              width: 30px;
              height: 30px;
              padding: 0 15px;
            }
            button {
              background-color: #0080dd;
              color: #ffffff;
              padding: 10px;
              border: 0;
              border-radius: 10px;
              cursor: pointer;
            }
          }
          .product-name {
            text-align: left;
          }
        }
      }
    }
    .cart {
      float: left;
      width: 585px;
      height: 600px;
      text-align: left;
      padding: 20px;
      margin-top: 65px;
      border: 1px #dbe2ec solid;
      position: relative;
      .cart-item {
        float: left;
        border-bottom: 1px #dbe2ec solid;
        padding-bottom: 15px;
        margin-bottom: 15px;
        img {
          width: 50px;
          float: left;
          margin-right: 10px;
        }
        .name-price {
          float: left;
          width: 350px;
          h3 {
            margin-top: 0;
            margin-bottom: 10px;
          }
        }
        input {
          width: 80px;
          height: 40px;
          float: left;
        }
        .cart-delete {
          background-color: red;
          border: 0;
          border-radius: 5px;
          color: #ffffff;
          padding: 10px 15px;
          margin: 5px 0 5px 10px;
        }
      }
      .sum {
        position: absolute;
        bottom: 20px;
        right: 30px;
        color: red;
      }
    }
  }
</style>