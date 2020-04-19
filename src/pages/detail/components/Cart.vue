<template >
    <div class="cart-canvas">
        <div class="header">
            <span class="iconfont header-return" @click="returnpage">&#xe624;</span>

            <div class="header-content">
                <h1 >Finalise Your Payment</h1>
            </div>
        </div>

        <div class="wrapper-additem" v-for="item in this.$store.state.cartname" @click="plus1(item.productId)" :date="date" :tdate="tdate">

            <ul>
                <li  class="cn-loop">
                   {{item.productName}}
                </li>
            </ul>

            <div class="cn-date border-bottom">
                <span class="iconfont">&#xe61f;</span>
                 {{item.productDate}}&nbsp;
                <span class="iconfont">&#xe654;</span>
                <span class="notice">FREE AMENDMENTS</span>
            </div>

            <div class="cn-remove" @click="$store.commit('removeItem', item), recount(item.productPrice, item.productQuanlity)">
                <span class="iconfont remove">&#xe705;</span>
            </div>

            <div class="cn-price">
                <span class="dollor-label">$</span>
                <span class="cn-price-inner">{{item.productPrice}}</span>
                <span class="cn-unit">/pp</span>
            </div>

            <div class="cn-quanlity">
                <span class="iconfont cn-label1" @click="minus(item.productId, item.productDate, item.productName, item.productPrice)">&#xe65a;</span>
                {{item.productQuanlity}}
                <span class="iconfont cn-label2" @click="plus(item.productId, item.productDate, item.productName, item.productPrice)">&#xe66f;</span>
            </div>

            <div class="cn-show-quanlity">
                <span class="show-quanlity">Quanlity</span>
            </div>

        </div>

        <div class="payment-bottom">
            <div class="total-amount">
                <span class="total">Total:</span>
                <span class="dollor-label">$</span>
                <span class="number">{{this.$store.state.totalAmount}}</span>
            </div>

            <div class="confirm-button" >
                <button class="submit" @click="checkout">Checkout</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Cart',
    props: {
        itemname: String,
        itemprice: String,
        date: String,
        tdate: String,
        tranmoney: Number
    },
    data () {
        return {
            checkoutshow: true
        }
    },
    methods: {
        addToCart () {
            this.checkoutshow = !this.checkoutshow
        },
        recount (p,q) {
            this.$store.commit('recountAccount', Number(p)*Number(q))
        },
        returnpage () {
            this.$emit('returnpage')
        },
        plus (id, date, name, price) {
            var packdata = {
                dataId: id,
                dataDate: date,
                dataName: name
            }
            this.$store.commit('itemplus', packdata)
            this.$store.commit('totalAmount', Number(price))
        },
        minus (id, date, name, price) {
          var packdata = {
              dataId: id,
              dataDate: date,
              dataName: name
          }
          this.$store.commit('itemminus', packdata)
          this.$store.commit('recountAccount', Number(price))
        },
        checkout () {
            this.$router.push('/payment')
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .cart-canvas
        width: 100%
        height: 18.5rem
        background: linear-gradient(to top, #ffffff, $bgColor)
        .header
            display: flex
            position: fixed
            top: 0
            left: 0
            right: 0
            background: $bgColor
            width: 100%
            height: .8rem
            .header-return
                color: #ffffff
                padding: .2rem
                line-height: .4rem
            .header-content
                text-align: center
                display: inline
                color: #ffffff
                line-height: .7rem
                font-size: .4rem
                width: 80%
        .wrapper-additem
            z-index: 1
            display: flex
            position: relative
            top:1.5rem
            left: .2rem
            right: 0
            width: 95%
            height: 2.3rem
            margin-top: .2rem
            background: #ffffff
            border-radius: .25rem
            .cn-loop
                overflow: hidden
                margin: .1rem
                font-size: .3rem
                width: 78%
                color: #047274
            .cn-date
                position: absolute
                left: .22rem
                bottom: .8rem
                width: 90%
                color: #bbb
                padding-bottom: .1rem
                .notice
                    font-size: .22rem
            .cn-quanlity
                position: absolute
                right: .01rem
                bottom: .2rem
                .cn-label1
                    padding: 0 .3rem
                    color: #bbb
                .cn-label2
                    padding: 0 .3rem
                    color: $bgColor
            .cn-show-quanlity
                position: absolute
                left: .3rem
                bottom: .25rem
                .show-quanlity
                    color: $ftColor
                    opacity: .5
            .cn-remove
                position: absolute
                top: .05rem
                right: .2rem
                .remove
                    font-size: .2rem
                    color: $ftColor
                    opacity: .6
            .cn-price
                position: absolute
                top: .4rem
                right: .25rem
                .dollor-label
                    font-size: .2rem
                    color: $ftColor
                .cn-price-inner
                    color: $ftColor
                    font-size: .3rem
                .cn-unit
                    color:#bbb
                    font-size: .25rem
        .payment-bottom
            display: flex
            z-index: 2
            position: fixed
            bottom: 0
            left: 0
            right: 0
            width: 100%
            height: 1.6rem
            background: #ffffff
            border-radius: .1rem
            .total-amount
                margin:.6rem .1rem
                color: $ftColor
                .dollor-label
                    padding-left: .15rem
                    font-size: .2rem
                .number
                    font-size: .4rem
            .confirm-button
                position: absolute
                top: .5rem
                right:.3rem
                .submit
                    height: .65rem
                    width: 2rem
                    border-radius: .15rem
                    background: linear-gradient(to right, #04C7FB, #4CD5F9)
                    font-size: .3rem
                    color: #fff
</style>
