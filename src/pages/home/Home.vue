<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :categoryList="categoryList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      categoryList: [],
      recommendList: [],
      weekendList:[],
    }
  },
  methods:{
    getHomeInfo () {
      axios.get('api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data){
        const {city, swiperList, categoryList,recommendList,weekendList} = res.data
        this.city = city
        this.swiperList = swiperList
        this.recommendList = recommendList
        this.categoryList = categoryList
        this.weekendList = weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>