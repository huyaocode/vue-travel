<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="category-item" v-for="item in page" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    categoryList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    }
  }, 
  computed: {
    pages () {
      const pages = []
      this.categoryList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.wrapper >>> .swiper-container
  height: 0
  margin-top: 0.1rem
  padding-bottom: 50%

.category-item
  text-align: center
  width: 25%
  height: 0
  padding-top: 0.1rem
  padding-bottom: 20%
  box-sizing: border-box
  float: left
  img
    width: 1.1rem
  p
    color: darkTextColor
    margin-top: 0.1rem
    font-size: 0.28rem
    ellipsis()
</style>
