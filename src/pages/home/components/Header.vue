<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <span class="discribe">输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe698;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: ['city']
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header
  display: flex
  background-color: $bgColor
  height: $headerHeight
  line-height: $headerHeight
  font-size: 0.28rem
  color: #fff
  .header-left
    float: left
    width: 0.84rem
    .back-icon
      returnButton()
  .header-input
    flex: 1
    display: flex
    align-self: center
    cursor: pointer
    height: 0.6rem
    line-height: 0.6rem
    border-radius: 0.06rem
    padding-left: 0.2rem
    background: #fff
    color: #ddd
    .discribe
      margin-left: 0.1rem
  .header-right
    color: #fff
    float: right
    width: 1.3rem
    font-size: 0.28rem
    line-height: 0.88rem
    text-align: center
    .arrow-icon
      margin-left: -0.04rem
      font-size: 0.23rem
</style>


