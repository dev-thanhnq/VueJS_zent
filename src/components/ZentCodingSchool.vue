<template>
  <div class="hello">
    <div class="container">
      <div class="loginWrap">
        <div class="inputWrap">
          <div class="inputLabel">Tên đăng nhập</div>
          <input type="text" @input="changeUserName($event.target.value)">
        </div>
        <div class="inputWrap">
          <div class="inputLabel">Mật khẩu</div>
          <input type="password">
        </div>
        <button class="loginButton" @click="login()">Đăng nhập</button>
      </div>
      <div class="infoWrap">
        <div :class="{infoLabel: showClass}">
          Xin chào {{ name }}
          <img :src="imgUrl" alt="" :style="{width: imgWidth + 'px'}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZentCodingSchool',
  data () {
    return {
      name: 'Nguyễn Quang Thành',
      password: '123456',
      imgWidth: 200,
      imgHeight: 200,
      showClass: true,
      imgUrl: 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/h/o/hoi-ki-vanitas-tap-8.jpg'
    }
  },
  methods: {
    changeUserName(value) {
      this.name = value
    },
    login() {
      alert('Xin chào ' + this.name)
    }
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
        margin-bottom: 12px;
        .inputLabel {
          font-weight: bold;
          margin-bottom: 8px;
          text-align: left;
        }
        input {
          width: 292px;
          height: 30px;
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
    }
  }
</style>
