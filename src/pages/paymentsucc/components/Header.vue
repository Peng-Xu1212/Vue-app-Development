<template>
    <div class="paymentsucc-canvas">
        <div class="wrapper-header border-bottom">
              <h1 class="header"><span class="iconfont tick">&#xe67e;</span>Payment successful</h1>
        </div>
        <div class="payment-detail">
              <ul>
                  <li class="detail">CARDHOLDER</li>
                  <li class="client-detail">{{this.$store.state.cardname}}</li>
                  <li class="detail">CARD NUMBER</li>
                  <li class="client-detail">4242****4242</li>
                  <li class="detail">REFERENCE</li>
                  <li class="client-detail">00000097809</li>
              </ul>
        </div>
        <div class="back-to-store border-top">
            <button class="back-button" @click="backtostore">CONTINUE BROWSING</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      backtostore () {
          this.$router.push('/')
      }
    }
}
</script>

<style lang="stylus" scoped>
    .paymentsucc-canvas
        width: 100%
        height: 13.5rem
        background: #073365
        .wrapper-header
            position: absolute
            top: 3rem
            right: 0
            left: 0
            width: 100%
            height: 1
            text-align: center
        .border-bottom
            width: 80%
            margin: 0 .8rem
            .header
              color: #fff
              font-size: .5rem
              margin-bottom: .7rem
              .tick
                  font-size: .7rem
                  margin: 0 .2rem
        .payment-detail
            position: absolute
            top: 5rem
            left: .6rem
            .detail
                color: #7B92AC
                padding: .2rem
            .client-detail
                color: #fff
                padding: .2rem
        .back-to-store
            position: absolute
            top: 11rem
            left: 0
            right: 0
            text-align: center
        .border-top
            margin: 0 1rem
            padding-top: .4rem
            .back-button
                height: 1rem
                width: 100%
                background: #0AACF4
                color: #fff
</style>
