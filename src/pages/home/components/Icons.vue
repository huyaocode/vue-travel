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
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      },
      categoryList: [
        {
          id: '0001',
          desc: '景点门票',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        }, {
          id: '0002',
          desc: '夏日玩水',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png'
        }, {
          id: '0003',
          desc: '绵阳必游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        }, {
          id: '0004',
          desc: '漂流',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png'
        }, {
          id: '0005',
          desc: '温泉',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
        }, {
          id: '0006',
          desc: '直通车',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png'
        }, {
          id: '0007',
          desc: '公园',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png'
        }, {
          id: '0008',
          desc: '文化古迹',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png'
        }, {
          id: '0009',
          desc: '生活休闲',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png'
        }, {
          id: '0010',
          desc: '全部玩乐',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
        }
      ]
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
</style>
