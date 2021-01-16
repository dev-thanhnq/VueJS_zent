<template>
  <div class="content">
    <div class="title">Họ tên: {{name}}</div>
    <div class="title">Ngày sinh: {{birth}}</div>
    <div class="title">Số điện thoại {{phone}}</div>
    <div class="title">Link facebook:
      <a :href="facebook" target="_blank">https://www.facebook.com/thanh.quang.200100/</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'birth', 'phone', 'facebook']
}
</script>

<style lang="scss" scoped>
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
</style>