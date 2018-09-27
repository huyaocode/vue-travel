<template>
  <div class="city">
    <city-header></city-header>
    <city-alphabet 
      :cities="cities"
      @change="handleLetterChange"
      v-show="showAlphabet"
    ></city-alphabet>
        <city-list 
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
      @showAlphabet="handleShowAlphabet"
    ></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      showAlphabet: true
    }
  },
  methods: {
    getCity () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if(res.ret && res.data) {
        const {cities, hotCities} = res.data
        this.cities = cities
        this.hotCities =hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    handleShowAlphabet (isShow) {
      this.showAlphabet = isShow
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>


