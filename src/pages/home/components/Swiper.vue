<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/e5/fc2bfc8bfcccd402.jpg_750x200_1218ab5f.jpg"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1808/6a/f7b6d041f291b902.jpg_750x200_931e952a.jpg"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1808/83/7d0a5cbb1c641002.jpg_750x200_4278e47d.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透，因为 scoped属性让CSS只在当前组件范围内起作用，要想修改其他组件内的样式，需要使用样式穿透
.swiper-pagination >>> .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.wrapper {
  width: 100%;
  // height 0
  // overflow hidden
  // padding-bottom 26.67%
  background-color: $bgColor;

  .swiper-img {
    width: 100%;
  }
}
</style>
