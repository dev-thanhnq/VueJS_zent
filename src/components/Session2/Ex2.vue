<template>
  <div class="hello">
    <div class="container">
      <table>
        <tr v-for="product in products">
          <td></td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Session',
  data () {
    return {
      name: '',
      errorNameMess: '',
      password: '',
      errorPassMess: '',
      check: false,
      imgWidth: 100,
      imgHeight: 100,
      showClass: true,
      imgUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/h/o/hoi-ki-vanitas-tap-8.jpg',
      products: [
        {name: 'Iphone 12', price: '30000000', qty: '4'},
        {name: 'Iphone 11', price: '20000000', qty: '4'},
        {name: 'Iphone X', price: '10000000', qty: '4'},
      ]
    }
  },
  methods: {
    changeUserName(value) {
      this.name = value
      this.errorNameMess = ''
    },
    changePassword(value) {
      this.password = value
      this.errorPassMess = ''
    },
    login () {
      if (this.name.length === 0) {
        this.errorNameMess = 'Tên đăng nhập không được để trống'
      }
      if (this.password.length < 6) {
        this.errorPassMess = 'Mật khẩu phải có độ dài ít nhất 6 ký tự'
      }
      if (this.password.length === 0) {
        this.errorPassMess = 'Mật khẩu không được để trống'
      }
      if (this.name === 'admin' && this.errorPassMess === '') {
        this.check = true
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  .loginWrap {
    background: #f5f5f5;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
    width: 300px;
    .inputWrap {
      margin-bottom: 25px;
      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }
      input {
        width: 292px;
        height: 30px;
      }
      span {
        font-size: 15px;
        color: red;
        float: left;
      }
    }
    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      background: #0080dd;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .infoWrap {
    background: #fff;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 24px;
    .infoLabel {
      font-weight: bold;
      color: #00AAAA;
    }
    .avatar {
      border-radius: 50%;
    }
  }
}
</style>
