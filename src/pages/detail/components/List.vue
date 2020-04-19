<template>
    <div>
        <FadeDown>
          <div class="downlist" v-show="show" @click="offshade">

          </div>
        </FadeDown>

        <div class="list-select" v-for="(item, index) in list" :key="index">

            <div class="select-inner  border-bottom" @click="handleClick(item.title,item.price)">
                  <div class="logo">

                  </div>

                  <div class="title">
                      <span class="title-desc">{{item.title}}</span>
                      <div class="advice"><span class="iconfont notice" v-if="item.advice">&#xe654;</span>{{item.advice}}</div>
                  </div>

                  <div class="dollor">
                      {{item.dollor}}
                  </div>

                  <div class="price-tag">
                      {{item.price}}
                  </div>

                  <button type="button" class="button" @click.stop="click(item.title, item.price, item.id)">
                      {{item.status}}
                  </button>
            </div>

            <div class="list-secondary" v-if="item.secondary" v-show="showList">
                <div class="list-secondary-inner">
                  <DetailList :list="item.secondary">
                  </DetailList>
                </div>
            </div>

        </div>

        <FadeDetail>
            <div class="pop-up" v-show="show">
                <div class="pop-title">
                    {{this.name}}
                </div>

                <div class="pop-price">
                    <span class="pop-price-dollor">$</span>
                    {{this.price}}
                </div>

                <div class="date-select-title">
                    Select a day what you like
                </div>

                <div class="pop-cross" @click="clickCross">
                    <span class="iconfont">&#xe705;</span>
                </div>

                <div class="date-select">
                    <button class="button1" @click="todaydate(year)">
                        Today </br>
                       {{this.year}}
                    </button>

                    <button class="button1" @click="tomorrowdate(tyear)">
                        Tomorrow </br>
                        {{this.tyear}}
                    </button>

                    <button class="button1" type="button" name="button">
                        Other Dates
                    </button>
                </div>

                <div class="booking" @click.stop="paymentPage">
                    <p class="booking-now">BOOK YOUR JOURNEY</p>
                </div>
            </div>
        </FadeDetail>
    </div>
</template>

<script>
import FadeDetail from 'commons/fadeanimated/Fadedetail'
import FadeDown from 'commons/fadeanimated/Fadedown'

export default {
    name: 'DetailList',
    props: {
        list: Object,
    },
    data () {
        return {
            showpayment: true,
            showList: false,
            show: false,
            name: '',
            price:'',
            id: 0,
            year: '',
            tyear: '',
            currentyear:''
        }
    },
    components: {
        FadeDetail,
        FadeDown,
    },
    methods: {
        todaydate (d) {
            this.currentyear = d
        },
        tomorrowdate (d) {
            this.currentyear = d
        },
        handleClick (title) {
            if (title == 'Adult Ticket'){
              this.showList = !this.showList
          }

        },
        click (e,p,i) {
            this.name = e
            this.price = p
            this.id = i
            this.$parent.$emit('titlevalue',e)
            this.$parent.$emit('pricevalue',p)

            this.show = true
            var d = new Date()
            this.year = d.toLocaleDateString() // date
            d.setDate(d.getDate()+ 1)         // date of Tomorrow
            this.tyear= d.toLocaleDateString()
        },
        clickCross () {
            this.show = !this.show
        },
        offshade () {
            this.show = !this.show
        },
        paymentPage () {
            var item = {
                productId: this.id,
                productName: this.name,
                productPrice: this.price,
                productDate: this.currentyear,
                productQuanlity: 1
            }
            this.$store.commit('addToCart', item)
            this.$store.commit('totalAmount', Number(item.productPrice))
            this.$parent.$emit('changeval', Number(item.productPrice))
        }

    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
        .select-inner
            position: relative
            overflow: hidden
            top: 0
            left: 0
            right: 0
            bottom: 0
            line-height: .37rem
            height: .8rem
            width: 100%
            padding: .3rem .4rem
            .logo
                position: absolute
                top: .3rem
                left: .2rem
                height: .2rem
                width: .03rem
                border-radius: .2rem
                background: #0EECE8
            .title
                position: absolute
                top: .2rem
                left: .3rem
                width: 70%
                .advice
                    font-size: .22rem
                    color: #F58C07
                    .notice
                        font-size: .25rem
                        color: $bgColor

            .dollor
                position: absolute
                top: .25rem
                right: 1.2rem
                color: #F39008
                font-size: .25rem
            .price-tag
                position: absolute
                top: 0
                right: .4rem
                color: #F39008
                font-size: .4rem
                line-height: .5rem
                padding: .2rem .1rem
                .dollor
                    font-size: .25rem
                    margin-right: 2rem
            .button
                position: absolute
                bottom: .2rem
                right: .4rem
                background: linear-gradient(left, #F76E09, #FA9605)
                border-radius: .1rem
                padding: 0 .1rem
    .list-secondary
      line-height: .2rem
      width: 85%
      padding: 0 .6rem
  .pop-up
      z-index: 1
      position: fixed
      left: 0
      right: 0
      bottom:0
      width: 100%
      height: 5rem
      background: #ffffff
      .pop-title
          width: 80%
          font-size: .4rem
          line-height: .4rem
          margin: .1rem .25rem
      .pop-price
          margin-top: .3rem
          font-size: .4rem
          color: $ftColor
          .pop-price-dollor
              font-size: .3rem
              margin-left: .25rem
      .date-select-title
          position: absolute
          top: 2rem
          left: .3rem
          color: #bbb
      .pop-cross
          position: absolute
          top: .15rem
          right: .4rem
      .date-select
          position: absolute
          display: flex
          left: 0
          right: 0
          bottom: 1.5rem
          .button1
              flex: 1
              height: 1rem
              width: 2rem
              border-radius: .2rem
              background: #eee
              margin: 0 .3rem
          .button1:hover
              background: #F58C07
              color: #ffffff
      .booking
          position: absolute
          left: 0
          right: 0
          bottom: 0
          width: 100%
          height: 1rem
          background: #08F3EF
          .booking-now
              text-align: center
              margin-top: .4rem
    .downlist
        z-index: 1
        position: fixed
        overflow: hidden
        top:0
        left: 0
        right: 0
        width: 100%
        height: 12.5rem
        opacity: 0.7
        background: #4E4949

</style>
