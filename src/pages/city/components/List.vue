<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <city-search 
        :cities="cities"
        @showAlphabet="handleShowAlphabet"
      ></city-search>
      <div class="area">
        <h2>热门城市</h2>
        <ul class="city-three">
          <li v-for="item of hot" 
            :key="item.id" 
            @click="handleCityClick(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="area" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key"
      >
        <h2>{{key}}</h2>
        <ul class="city-four">
          <li 
            v-for="innerItem in item" 
            :key="innerItem.id" 
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import CitySearch from './Search'

export default {
  name: 'CityList',
  components:{
    CitySearch
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods:{
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    handleShowAlphabet(isShow) {
      this.$emit('showAlphabet', isShow)
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
blockItemborder()
  border-right: 1px solid #ddd
  margin-right: -1px
  border-bottom: 1px solid #ddd
  margin-bottom: -1px
blockItem()
  height: 0.9rem
  line-height: 0.9rem
  font-size: 0.28rem
  text-align: center
  float: left

.list
  position: absolute
  overflow: hidden
  top: $headerHeight
  left: 0
  bottom: 0
  right: 0
  .area
    font-size: 0.28rem
    h2
      background-color: #f5f5f5
      font-size: 0.24rem
      padding: 0.24rem 0.3rem
    .city-three
      overflow: hidden
      li
        width: 33.33%
        blockItem()
        blockItemborder()
    .alphabet
      overflow: hidden
      li
        width: 16.66%
        blockItem()
    .city-four
      overflow: hidden
      li
        width: 25%
        blockItem()
        blockItemborder()
        ellipsis()
</style>
