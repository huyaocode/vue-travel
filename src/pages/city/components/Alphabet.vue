<template>
  <ul class="list"
    ref="top"
  >
    <li
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props:{
    cities: Object
  },
  computed: {
    letters () {
      let letters = []
      for(let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      letterHeight: 0,
      throttleTimer: null
    }
  },
  updated () {
    this.startY = this.$refs.top.offsetTop
    this.letterHeight = parseInt(this.getStyle(this.$refs['A'][0], 'height'))
  },
  methods:{
    handleLetterClick (e) {
      const letter = e.target.innerText
      this.$emit('change', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      clearTimeout(this.throttleTimer)
      let _this = this
      this.throttleTimer = setTimeout(() => {
        if(_this.touchStatus) {
          const touchY = e.touches[0].clientY
          const index = parseInt((touchY - _this.startY) / _this.letterHeight)
          if(index < _this.letters.length && index >= 0){
            _this.$emit('change', _this.letters[index])
          }
        }
      }, 15)
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    getStyle (ele, prop) {
      if(window.getComputedStyle){
        return window.getComputedStyle(ele, null)[prop]
      } else {
        return ele.currentStyle[prop]
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top: 2rem
  right: 0
  width: .4rem
  li
    line-height .5rem
    text-align: center
    color: #09c
</style>
