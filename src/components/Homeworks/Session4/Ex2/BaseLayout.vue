<template>
  <div class="hello">
    <div class="container">
      <div class="banner">
        <slot name="banner">

        </slot>
      </div>
      <el-menu :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Trang trủ</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Thể thao</template>
          <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
          <el-menu-item index="2-2">Ngoại hạng Anh</el-menu-item>
          <el-menu-item index="2-3">Các môn khác</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">Sức khỏe</template>
          <el-menu-item index="3-1">Ung thư</el-menu-item>
          <el-menu-item index="3-2">Tiêu chảy</el-menu-item>
          <el-menu-item index="3-3">Người cao tuổi</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">Pháp luật</el-menu-item>
        <el-menu-item index="5">Du lịch</el-menu-item>
        <el-menu-item index="6">Giáo dục</el-menu-item>
        <el-menu-item index="7">Văn hóa</el-menu-item>
        <el-menu-item index="8">Công nghệ</el-menu-item>
        <el-menu-item index="9">Giải trí</el-menu-item>
      </el-menu>
      <el-col span="6">
        <slot name="ad1">

        </slot>
      </el-col>
      <el-col span="12">
        <slot name="main">

        </slot>
      </el-col>
      <el-col span="6">
        <slot name="ad2">

        </slot>
      </el-col>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 2
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hello {
    background-color: #d8e0ea;
    .container {
      width: 1200px;
      margin: 0 auto;
      height: auto;
      overflow: hidden;
      background-color: #ffffff;
      .banner {
        width: 100%;
      }
    }
  }
</style>