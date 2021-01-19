<template>
  <base-layout>
    <template v-slot:banner>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <template v-slot:ad1>
      <img src="https://i.pinimg.com/564x/28/c3/99/28c3998361879691103163309fe07943.jpg" alt="">
    </template>
    <template v-slot:main>
      <div class="main">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>Trang trủ</el-breadcrumb-item>
          <el-breadcrumb-item>Công nghệ</el-breadcrumb-item>
          <el-breadcrumb-item>Trên tay Samsung Galaxy Buds Pro: đẹp và nhiều công nghệ</el-breadcrumb-item>
        </el-breadcrumb>
        <img class="main-img" src="https://cnet3.cbsistatic.com/img/eWv1xWzkGfK6G1QyQaZN2TGCGDU=/940x0/2021/01/15/30b9c7f4-156f-4be3-b7a1-e859f09f09c0/samsung-galaxy-buds-pro-vs-buds-plus.jpg" alt="">
        <div class="description">
          Tai nghe True Wireless Samsung Galaxy Buds Pro là dòng sản phẩm tai nghe không dây thế hệ mới nhất từ Samsung.
          Với phiên bản lần này được lột xác hoàn toàn về thiết kế cũng như chất âm xứng đáng là lựa chọn hàng đầu cho
          người dùng đang mong muốn tìm cho mình một chiếc tai nghe không dây cao cấp để đồng hành cùng mình trong công việc và giải trí.
        </div>
      </div>
    </template>
    <template v-slot:ad2>
      <img src="https://i.pinimg.com/564x/28/c3/99/28c3998361879691103163309fe07943.jpg" alt="">
    </template>
  </base-layout>
</template>

<script>
  import BaseLayout from "@/components/Homeworks/Session4/Ex2/BaseLayout";
  export default {
    components: {
      BaseLayout
    },
    data() {
      return {
        banners: [
            'https://img.fpt.shop/w_1200/h_300/cmpr_10/m_letterbox_ffffff_100/https://fptshop.com.vn/Uploads/Originals/2021/1/9/637457906850156354_F-H6_1190x300.png',
            'https://img.fpt.shop/w_1200/h_300/cmpr_10/m_letterbox_ffffff_100/https://fptshop.com.vn/Uploads/Originals/2021/1/18/637465739182202928_F-H6_1190x300.png',
            'https://img.fpt.shop/w_1200/h_300/cmpr_10/m_letterbox_ffffff_100/https://fptshop.com.vn/Uploads/Originals/2021/1/14/637462592718780949_F-H6_1190x300.png'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  .main {
    padding: 15px;
    .main-img {
      border-radius: 10px;
      margin: 20px 0;
    }
    .description {
      font-size: 14px;
      text-align: justify;
    }
  }
</style>