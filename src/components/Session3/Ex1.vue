<template>
  <div class="hello">
    <div class="container">
      <LoginForm/>
      <LoginSuccess :userName="name" :age="age" :content="content"/>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/Session3/LoginForm";
import LoginSuccess from "@/components/Session3/LoginSuccess";
export default {
  components: {
    LoginForm,
    LoginSuccess
  },
  name: 'Login',
  data () {
    return {
      name: 'Thành',
      age: '21',
      content: 'Chưa có người yêu',
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
}
</style>
