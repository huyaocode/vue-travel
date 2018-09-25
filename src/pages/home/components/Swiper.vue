<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction : false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透，因为 scoped属性让CSS只在当前组件范围内起作用，要想修改其他组件内的样式，需要使用样式穿透
.swiper-pagination >>> .swiper-pagination-bullet.swiper-pagination-bullet-active
  background-color: #fff !important
.wrapper
  width: 100%
  // height 0
  // overflow hidden
  // padding-bottom 26.67%
  background-color: $bgColor
  .swiper-img
    width: 100%
</style>
