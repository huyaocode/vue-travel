<template>
  <div>
    <div class="title">
      <h3>周末去哪儿</h3>
    </div>
    <ul class="list">
      <li class="card" 
        v-for="card in weekendList"
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
  props:{
    weekendList: Array
  },
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
