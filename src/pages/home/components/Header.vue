<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            绵阳 <span class="iconfont arrow-icon">&#xe698;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display flex
    background-color $bgColor
    height .88rem
    line-height .88rem
    font-size: .28rem;
    color: #fff
    .header-left
        float left
        width .64rem
        .back-icon
            text-align: center
            font-size .35rem
            font-weight 600
    .header-input
        flex 1
        display flex
        align-self center
        margin-left .16rem
        cursor pointer
        height .6rem
        line-height .6rem
        border-radius .06rem
        padding-left .2rem
        background #fff
        color #ddd
    .header-right
        float right
        width 1.3rem
        font-size .28rem
        line-height .88rem
        text-align center
        .arrow-icon
            margin-left -.04rem
            font-size .23rem

</style>


