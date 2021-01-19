<template>
  <el-container>
    <el-col :span="4">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100vh">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>Tổng quan</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-shop"></i>
          <span>Quản lí sản phẩm</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span>Quản lí hóa đơn</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-data"></i>
          <span>Báo cáo thống kê</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Quản lí chi nhánh</span>
          </template>
          <el-menu-item-group title="Hoạt động">
            <el-menu-item index="1-1">Sản phẩm</el-menu-item>
            <el-menu-item index="1-2">Đơn hàng</el-menu-item>
            <el-menu-item index="1-3">Khách hàng</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Báo cáo">
            <el-menu-item index="1-4">Doanh thu</el-menu-item>
            <el-menu-item index="1-5">Tồn kho</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span>Cài đặt hệ thống</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-container style="height: 500px">
      <el-header style="text-align: right; font-size: 20px; background-color: #f2f6fe">
        <div style="float: left; font-weight: bold">
          <slot name="title">

          </slot>
        </div>
        <i class="el-icon-bell" style="margin-right: 15px"></i>
        <el-dropdown>
          <span><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></span>
          <el-dropdown-menu slot="dropdown" style="padding: 10px">
            <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
            <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
            <el-dropdown-item>Cấu hình</el-dropdown-item>
            <hr>
            <el-dropdown-item>Đăng xuất</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <slot name="data"></slot>
    </el-container>
  </el-container>
</template>

<script>
export default {

};
</script>

<style>
  .el-menu-vertical-demo {
    text-align: left;
    overflow: auto;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #eee;
  }
  .el-main {
    height: 500px;
  }
</style>
