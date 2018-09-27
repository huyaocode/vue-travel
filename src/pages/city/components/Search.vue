<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        type="text"
        placeholder="请输入城市名或拼音"
      >
    </div>
      <div 
        class="search-content" 
        v-show="keyword"
      >
        <ul ref="search">
          <li v-for="item of list" :key="item.id" class="boder-bottom">{{item.name}}</li>
          <li 
            class="boder-bottom"
            v-show="isNoData"
          >这个城市不在地球上哟~</li>
        </ul>
      </div>
    </div>
</template>

<script>
import Bscorll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed:{
    isNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscorll(this.$refs.search)
  },
  watch: {
    keyword (key) {
      if (key == '') {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      let _this = this
      this.timer = setTimeout(() => {
        let result = []
        for (let i in _this.cities) {
          _this.cities[i].forEach((value) => {
            if (value.spell.indexOf(key) > -1 ||
              value.name.indexOf(key) > -1) {
              result.push(value)
            }
          })
        }
        _this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  text-align: center
  z-index 500
  background-color: $bgColor
  input
    width: 97%
    margin: 0.1rem auto
    height: 0.5rem
    border-radius: 0.05rem
    text-align: center
.search-content
  position: absolute
  top: 0.7rem
  background: #f5f5f5
  left: 0
  right: 0
  bottom: 0
  ul 
    li
      line-height .62rem
      padding: .1rem .2rem
      background: #fff
</style>
