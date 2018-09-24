<template>
  <div>
    <div class="title">
      <h3>周末去哪儿</h3>
    </div>
    <ul class="list">
      <li class="card" 
        v-for="card in recommendList"
        :key="card.id"
      >
        <img :src="card.imgUrl" alt="">

        <div class="introduce">
          <h4>{{card.title}}</h4>
          <p>{{card.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
          title: '慢游成都最美古镇',
          desc: '撷取一份悠闲，寻觅散落在时光里的幸福'
        },{
          id: '0234',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ea/bc9696f1d02d55.jpg_r_640x214_5c4ca381.jpg',
          title: '阿坝必游Top10',
          desc: '田秀山美，最是蜀地'
        },{
          id: '1958',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/44/5251f239d3456.jpg_r_640x214_88ab6a42.jpg',
          title: '峨眉山',
          desc: '坐竹排看大佛，还有这么多好玩的地方'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  background-color #f5f5f5
  h3
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
.list
  background-color #f5f5f5
  .card
    background-color #fff
    img
      width: 100%
    .introduce
      padding: .24rem .22rem
      width 100%
      margin-bottom .15rem
      h4 
        height .44rem
        font-size: .32rem
        line-height .44rem
      p
        padding .1rem 0
        font-size: .24rem

</style>
