<template>
  <div class="hello">
    <div class="container">
      <div class="mainWrap">
        <div class="inputWrap">
          <div class="inputLabel">Họ và tên</div>
          <input v-model="inputName" type="text">
        </div><div class="inputWrap">
          <div class="inputLabel">Ngày sinh</div>
          <input v-model="inputBirth" type="text">
        </div><div class="inputWrap">
          <div class="inputLabel">Số điện thoại</div>
          <input v-model="inputPhone" type="text">
        </div><div class="inputWrap">
          <div class="inputLabel">Link Facebook</div>
          <input v-model="inputFacebook" type="text">
        </div>
        <button class="btn-save" @click="save()">save</button>
        <button class="btn-clear" @click="clear()">clear</button>
      </div>
      <div class="content">
        <div class="title">Họ tên: {{ name }}</div>
        <div class="title">Ngày sinh: {{ birth }}</div>
        <div class="title">Số điện thoại{{ phone }}</div>
        <div class="title">Link facebook:
          <a :href="facebook" target="_blank">{{ facebook }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      birth: '',
      phone: '',
      facebook: '',
      inputName: '',
      inputBirth: '',
      inputPhone: '',
      inputFacebook: '',
    }
  },
  methods: {
    save() {
      this.name = this.inputName
      this.birth = this.inputBirth
      this.phone = this.inputPhone
      this.facebook = this.inputFacebook
    },
    clear() {
      this.name = ''
      this.birth = ''
      this.phone = ''
      this.facebook = ''
      this.inputName = ''
      this.inputBirth = ''
      this.inputPhone = ''
      this.inputFacebook = ''
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
  .mainWrap {
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 320px;
    width: 300px;
    .inputWrap {
      margin-bottom: 10px;
      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        float: left;
      }
      input {
        width: 292px;
        height: 30px;
      }
      textarea {
        width: 292px;
        height: 200px;
      }
    }
    button {
      width: 60px;
      height: 30px;
      margin: 5px;
      border: 0px;
      color: #ffffff;
    }
    .btn-save {
      background: #0080dd;
    }
    .btn-clear {
      background: red;
    }
  }
  .content {
    width: 400px;
    height: 320px;
    border: 1px solid #6E6E6E;
    padding: 24px;
    margin-left: 10px;
    text-align: left;
    .title {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
</style>
