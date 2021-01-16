<template>
  <div class="hello">
    <div class="container">
      <LoginForm @submitForm="getInfo"/>
      <LoginSuccess :name="name" :birth="birth" :phone="phone" :facebook="facebook" />
    </div>
  </div>
</template>

<script>
  import LoginForm from "@/components/Session3/Ex2/LoginForm";
  import LoginSuccess from "@/components/Session3/Ex2/LoginSuccess";

export default {
  components: {
    LoginForm,
    LoginSuccess
  },
  data () {
    return {
      name: '',
      birth: '',
      phone: '',
      facebook: ''
    }
  },
  methods: {
    getInfo(data) {
      this.name = data[0]
      this.birth = data[1]
      this.phone = data[2]
      this.facebook = data[3]
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
}
</style>
