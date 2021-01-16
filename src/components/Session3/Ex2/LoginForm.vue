<template>
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
    <button class="btn-save" @click="submit()">save</button>
    <button class="btn-clear">clear</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputName: '',
        inputBirth: '',
        inputPhone: '',
        inputFacebook: '',
      }
    },
    methods: {
      submit() {
        this.$emit('submitForm', [this.inputName, this.inputBirth, this.inputPhone, this.inputFacebook])
      }
    }
  }
</script>

<style lang="scss" scoped>
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
</style>