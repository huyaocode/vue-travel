<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <h2>热门城市</h2>
        <ul class="city-three">
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="area">
        <h2>字母排序</h2>
        <ul class="alphabet">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
        </ul>
      </div>
      <div class="area">
        <h2>A</h2>
        <ul class="city-four">
          <li>阿坝藏族羌族自治州</li>
          <li>安顺</li>
          <li>安顺</li>

          <li>安顺</li>
          <li>安顺</li>
          <li>安顺</li>

          <li>安顺</li>
          <li>安顺</li>
          <li>安顺</li>

          <li>安顺</li>
          <li>安顺</li>
        </ul>
      </div>
      <div class="area">
        <h2>B</h2>
        <ul class="city-four">
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
        </ul>
      </div>
      <div class="area">
        <h2>C</h2>
        <ul class="city-four">
          <li>阿坝藏族羌族自治州</li>
          <li>安顺</li>
          <li>安顺</li>

          <li>安顺</li>
          <li>安顺</li>
          <li>安顺</li>

          <li>安顺</li>
          <li>安顺</li>
          <li>安顺</li>

          <li>安顺</li>
          <li>安顺</li>
        </ul>
      </div>
      <div class="area">
        <h2>D</h2>
        <ul class="city-four">
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
          <li>北京</li>
          <li>北京</li>

          <li>北京</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
  bottom 0
  right 0
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
