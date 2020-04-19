<template>
    <div>
        <router-link tag="div"
                     to="/"
                     class="back-button"
                     v-show="showTag"

        >
              <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="checkout-shopping-cart" @click="checkoutcart">
            <div class="iconfont shopping-cart">&#xe805;</div>
        </div>
        <div class="header" v-show="!showTag" :style="opacityChange">
              <router-link to="/">
                  <div class="iconfont back-icon1">&#xe624;</div>
              </router-link>
            <h2 class="title">{{this.name}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    props: {
        name: String
    },
    data () {
        return {
            showTag: true,
            opacityChange: {
              opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const distance = document.documentElement.scrollTop   //获取下滑的距离
            if (distance > 0){
                let opacity = distance / 150
                this.opacityChange = {opacity}
                this.showTag = false
            }else{
                this.showTag = true
            }
        },
        checkoutcart () {
           this.$emit('checkoutshoppingcart')
        }
    },
    mounted () {    //监听窗口的变化
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .back-button
        position: absolute
        top: .2rem
        left: .2rem
        height: .8rem
        width: .8rem
        line-height: .8rem
        text-align: center
        border-radius: .4rem
        background: rgba(0, 0, 0, 0.5)
        .back-icon
            color: #fff
    .checkout-shopping-cart
        position: absolute
        top: .2rem
        right: .3rem
        height: .8rem
        width: .8rem
        line-height: .8rem
        text-align: center
        border-radius: .4rem
        background: rgba(0, 0, 0, 0.35)
        .shopping-cart
            color: $bgColor
    .header
        z-index: 1
        position: fixed
        display: flex
        top: 0
        left: 0
        right: 0
        line-height: .86rem
        font-size: .35rem
        color: #fff
        background: $bgColor
        .back-icon1
            color: #fff
            text-indent: .2rem
        .title
            position: absolute
            top: 0
            left: .7rem

</style>
