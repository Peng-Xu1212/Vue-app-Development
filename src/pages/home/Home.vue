<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeFooter from './components/Footer'
import axios from 'axios'                       //ajax请求本地数据json
import {mapState} from 'vuex'     // 不同组件之间数据共享，利用store/index.js(actions(dispatch), mutations(commit), state)

export default {
  name: 'Home',
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      HomeFooter
    },
    data () {                       // 定义数据
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            place: []
        }
    },
    methods: {
        getHomeInfo () {              // 访问数据，请求数据
            axios.get('/api/recommend.json')
              .then(this.getHomeInfoSucc) // 请求成功
        },
        getSearchInfo () {
            axios.get('/api/swiper.json')
              .then(this.getSearchInfoSucc)
        },
        getIconInfo () {
            axios.get('/api/icon.json')
            .then(this.getIconInfoSucc)
        },
        getWeekendInfo (){
            axios.get('/api/weekend.json')
            .then(this.getWeekendInfoSucc)
        },
        getHomeInfoSucc (res) {         //接收ajax传来的数据
            res = res.data
            this.recommendList = res
            // if (res.ret && res.data){
            //     const data = res.data
            //     this.swiperList = data.swiperList
            //     this.iconList = data.iconList
            //     this.recommendList = data.recommendList
            //     this.weekendList = data.weekendList
            // }

        },
        getSearchInfoSucc (res) {
            res = res.data
            this.swiperList = res
            // if (res.ret && res.data) {
            //     const value = res.data
            //     this.place = value.place
            // }
        },
        getIconInfoSucc (res) {
            res = res.data
            this.iconList = res
            // if (res.ret && res.data) {
            //     const value = res.data
            //     this.place = value.place
            // }
        },
        getWeekendInfoSucc (res) {
          res = res.data
          this.weekendList = res
        }
    },
    computed: {
        ...mapState(['city'])
    },
    mounted () {                           //页面载入后挂载
        this.lastCity = this.city
        this.getHomeInfo()                //make sure页面已经挂载
        this.getSearchInfo()
        this.getIconInfo ()
        this.getWeekendInfo ()
    },
    activated () {                      //component加载后就会挂载
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
            this.getSearchInfo()
            this.getIconInfoSucc ()
            this.getWeekendInfoSucc ()
        }
    }
}
</script>

<style lang="css" scoped>

</style>
