<template>
    <div>
          <div class="addToCart" v-show="!showpayment">
               <Cart :itemname="itemname"
                     :itemprice="itemprice"
                     @returnpage="returnpage"
                     :date="date"
                     :tdate="tdate"
                     :tranmoney="tranmoney"
               >
               </Cart>
               <!-- <div class="return" @click="returnpage">
                  last page
               </div> -->
          </div>
          <DetailBanner :name="name"
                        :img="img"
                        :imgs="imgs"

          >
          </DetailBanner>
          <DetailHeader :name="name"
                        @checkoutshoppingcart="checkoutshoppingcart"
          >
          </DetailHeader>
          <div class="page-extend">
              <DetailComment></DetailComment>

              <DetailLocation :name="name"
                              :extractid="extractid"
              >
              </DetailLocation>

              <DetailList :list="list"
                          @changeval="changeval"
                          @titlevalue="titlevalue"
                          @pricevalue="pricevalue"
                          @datefunction="datefunction"
                          @tdatefunction="tdatefunction"
              >
              </DetailList>
          </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailComment from './components/Comment'
import DetailLocation from './components/Location'
import DetailPop from './components/Pop'
import Cart from './components/Cart'
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
        DetailComment,
        DetailLocation,
        DetailPop,
        Cart
    },
    data () {
        return {
            name: '',
            list: {},
            img: '',
            imgs: [],
            showtop: false,
            extractid: 0,
            showpayment:true,
            itemname:'',
            itemprice:'',
            date: '',
            tdate: '',
            tranmoney: 0
        }
    },
    methods: {
        checkoutshoppingcart() {
           this.showpayment = !this.showpayment
        },
        tdatefunction (d) {
            this.tdate = d
        },
        datefunction (d) {
            this.date = d
        },
        returnpage () {
            this.showpayment = !this.showpayment
        },
        pricevalue (p) {
            this.itemprice = p
        },
        titlevalue (e) {
            this.itemname = e
        },
        changeval (v) {
            this.tranmoney = v
            this.showpayment = !this.showpayment
        },
        getData () {
            axios.get('/api/photo.json/id=' + this.$route.params.id)
              .then(this.getDataDone)
        },
        getImgs () {
          axios.get('/api/imgs.json/id=' + this.$route.params.id)
            .then(this.getImgsSucc)
        },
        getList () {
          axios.get('/api/test.json?id=' + this.$route.params.id)
            .then(this.getListSucc)
        },
        getDataDone (res) {
            res = res.data
            this.img = res[0].img
            this.name = res[0].name

            this.$store.commit('latchange', res[0].lat)
            this.$store.commit('lngchange', res[0].lng)

            // if (res.ret && res.data) {
            //     const data = res.data
            //     this.name = data.name
            //     this.list = data.list
            //     this.img = data.img
            //     this.imgs = data.imgs
            // }
        },
        getImgsSucc (res) {
            res = res.data
            this.imgs = res
        },
        getListSucc (res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.list = data.list
          }
        }
    },
    mounted () {
        this.getData()
        this.getImgs()
        this.getList()
    }
}
</script>

<style lang="stylus" scoped>
    .page-extend
        height: 50rem
    .addToCart
        z-index: 2
        position: fixed
        overflow: hidden
        top: 0
        left: 0
        right: 0
        width: 100%
        background: #fff
</style>
