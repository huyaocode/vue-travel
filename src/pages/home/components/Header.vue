<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <span class="discribe">输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe698;</span>
    </div>
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
.header
  display: flex
  background-color: $bgColor
  height: 0.88rem
  line-height: 0.88rem
  font-size: 0.28rem
  color: #fff
  .header-left
    float: left
    width: 0.64rem
    .back-icon
      text-align: center
      font-size: 0.35rem
      font-weight: 600
  .header-input
    flex: 1
    display: flex
    align-self: center
    margin-left: 0.16rem
    cursor: pointer
    height: 0.6rem
    line-height: 0.6rem
    border-radius: 0.06rem
    padding-left: 0.2rem
    background: #fff
    color: #ddd
    .discribe
      margin-left .1rem
  .header-right
    float: right
    width: 1.3rem
    font-size: 0.28rem
    line-height: 0.88rem
    text-align: center
    .arrow-icon
      margin-left: -0.04rem
      font-size: 0.23rem
</style>


