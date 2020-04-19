<template>
    <div>
          <div class="recommend-title">
              Highly Recommended
          </div>
          <ul>
              <router-link tag="li"
                           class="item border-bottom"
                           v-for="item in list"
                           :key="item.id"
                           :to="'/detail/' + item.id"
                           @click.native="checkoutcity(item.title, item.id)"

              >
                  <img class="item-img" :src="item.imgUrl"/>
                  <div class="item-info">
                      <p class="item-title">{{item.title}}</p>
                      <p class="item-desc">{{item.des}}</p>
                      <button class="item-button">More</button>
                  </div>
              </router-link>
          </ul>
          <div class="look-more border-bottom">
              <p class="look-title">Looking for more destination</p>
          </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    },
    methods: {
       checkoutcity (e,d) {
          this.$store.commit('citycheckout', e)
          this.$store.commit('storeid', d)

       }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mix.styl'
  @import '~styles/variables.styl'
    .recommend-title
        margin-top: .2rem
        line-height: .4rem
        background: #eee
        text-indent: .3rem
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            height: 1.6rem
            width: 1.6rem
            padding: .2rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .34rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #bbb
                ellipsis()
            .item-button
                background: #16F5EF
                padding: 0 .1rem
                border-radius: .3rem
                margin-top: .2rem
                color: #aaa
    .look-more
        height: .9rem
        line-height: .8rem
        text-align: center
        .look-title
            font-size: .33rem
            color: $bgColor




</style>
