<template>
  <div>
    <div class="title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <h3>猜你喜欢</h3>
    </div>
    <ul class="list">
      <li class="card border-bottom" 
        v-for="card in recommendList"
        :key="card.id"
      >
        <div class="picture">
          <img :src="card.imgUrl" alt="">
          <div class="tag" v-if="card.tag">{{card.tag}}</div>
        </div>
        <div class="introduce">
          <h4>{{card.title}}</h4>
          <div class="comment">
            <span class="stars">{{card.star}}💗</span>
            <span class="com-num">{{card.commentNum}}条评论</span>
          </div>
          <div class="bottom">
            <div class="price">￥{{card.price}}起</div>
            <div class="pos">{{card.pos | limitLen}}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="exploreAll">
      查看所有产品
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  filters: {
    limitLen: function (value) {
      if(value.length > 5){
        value = value.slice(0,4)+ '...'
      }
      return value
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  padding: 0.24rem 0 0.26rem 0.2rem
  img
    width: 0.3rem
    height: 0.3rem
    display: inline-block
    vertical-align: top
  h3
    display: inline-block
    margin-left: 0.08rem
    height: 0.44rem
    font-size: 0.32rem
    line-height: 0.44rem
.list
  padding-left: 0.24rem
  .card
    display flex
    overflow: hidden
    padding: 0.2rem 0
    position: relative
    .picture
      img
        width: 2rem
        height: 2rem
      .tag
        position: absolute
        width .9rem
        // height .18rem
        left: 0
        top: .2rem
        color #ffffff
        font-size .2rem
        background-color: orange
        border-bottom-right-radius .25rem
        padding .06rem
    .introduce
      padding-left: .22rem
      padding-right: .22rem
      width 100%
      h4 
        margin-top: .26rem
        height .44rem
        font-size: .32rem
        line-height .44rem
      .comment
        margin-top: .14rem
        height .24rem
        .com-num
          margin-left: .2rem
          color: #616161;
          font-size: .24rem;
          line-height: .34rem;
          vertical-align: text-bottom;
      .bottom
        margin-top: .22rem
        color: #616161;
        font-size .24rem
        line-height .4rem
        width 100%
        .price
          float left
        .pos
          float right
.exploreAll
  padding: .2rem 0;
  color: #00afc7;
  font-size: .28rem;
  line-height: .4rem;
  text-align: center;
</style>
