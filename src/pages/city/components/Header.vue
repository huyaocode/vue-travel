<template>
  <div class="header">
    <router-link to="/">
      <div class="return-page">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
    <div class="header-title">
      <h1>城市选择</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.header
  background-color: $bgColor
  height: $headerHeight
  line-height: $headerHeight
  color: #fff
  position: relative
  .return-page
    position: absolute
    width: 0.84rem
    .back-icon
      returnButton()
  .header-title
    text-align: center
    font-size: 0.32rem
</style>
