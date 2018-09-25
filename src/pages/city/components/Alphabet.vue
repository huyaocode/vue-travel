<template>
  <ul class="list">
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
</template>

<script>

export default {
  name: 'CityAlphabet'
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
