<template>
  <div class="hello">
    <div class="container">
      <div class="trigger" ref="bg">
        <input type="number" v-model="nb">
      </div>
      <button>click</button>
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
      ],
      divBg: '',
      nb: '',
      bg: ''
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
  },
  mounted() {
    this.$refs.bg.style.backgroundColor = 'blue'
  },
  updated() {
    this.$refs.bg.style.backgroundColor = 'red'
  },
  destroyed() {
    this.$refs.bg.style.backgroundColor = 'green'
  }
  // watch: {
  //   nb (value) {
  //     if (91 <= value && value <= 100) {
  //       this.$refs.bg.style.backgroundColor = 'red'
  //     }
  //     if (71 <= value && value <= 90) {
  //       this.$refs.bg.style.backgroundColor = 'blue'
  //     }
  //     if (51 <= value && value <= 70) {
  //       this.$refs.bg.style.backgroundColor = 'gray'
  //     }
  //     if (31 <= value && value <= 50) {
  //       this.$refs.bg.style.backgroundColor = 'yellow'
  //     }
  //     if (10 <= value && value <= 30) {
  //       this.$refs.bg.style.backgroundColor = 'white'
  //     }
  //     if (0 <= value && value <= 9) {
  //       this.$refs.bg.style.backgroundColor = 'green'
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  .trigger {
    width: 300px;
    height: 300px;
    border: 2px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
