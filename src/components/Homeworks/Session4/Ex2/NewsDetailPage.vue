<template>
  <base-layout>
    <template v-slot:banner>
      <el-carousel ind icator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <template v-slot:ad1>
      <img src="https://i.pinimg.com/564x/28/c3/99/28c3998361879691103163309fe07943.jpg" alt="">
    </template>
    <template v-slot:main>
      <router-view/>
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