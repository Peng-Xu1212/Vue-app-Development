<template>
  <div>
      <CityHeader></CityHeader>
      <CitySearch :acity="acity"
      >
      </CitySearch>
      <CityList :city="city"
                :acity="acity"
                :letter="letter"
      >
      </CityList>
      <CityAlphabet :acity="acity"
                    @change="handleLetter"
      >
      </CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {                       // 定义数据
        return {
            city: [],
            acity: [],
            letter: ''
        }
    },
    methods: {
        getHomeInfo () {              // 访问数据，请求数据
            axios.get('/api/city.json')
              .then(this.getHomeInfoSucc) // 请求成功
        },
        getAcity () {
            axios.get('/api/acity.json')
              .then(this.getHomeAcitySucc)
        },
        getHomeInfoSucc (res) {         //接收ajax传来的数据
            res = res.data

            this.city = res
            // this.acity = res
            // if (res.ret && res.data){
            //     const data = res.data
            //     console.log(data.city[0])
            //     this.city = data.city
            //     this.acity = data.acity
            // }
        },
        getHomeAcitySucc(res) {
            res = res.data
            if (res.ret && res.data){
                const data = res.data
                this.acity = data.acity
            }
        },

        handleLetter (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getHomeInfo()
        this.getAcity()
    }
}

</script>

<style lang="stylus" scoped>
</style>
