<template>
  <div>
      <div class="banner" @click="handleBanner">
          <img class="banner-img" :src="img" />
          <div class="banner-inner">
              <div class="banner-title">
                  {{this.name}}
              </div>
              <div class="banner-pages">
                  <span class="iconfont arrow-down">&#xe64a;</span>
                  {{this.imgs.length}}
              </div>
          </div>
      </div>
      <FadeAnimated>
          <Gallery v-show="picture"
                   @trigglered="trigglered"
                   :image="imgs"
          >
          </Gallery>
      </FadeAnimated>
  </div>
</template>

<script>
import Gallery from 'commons/gallery/Gallery'
import FadeAnimated from 'commons/fadeanimated/Fade'

export default {
    name: 'DetailBanner',
    props: {
        name: String,
        img: String,
        imgs: Array
    },
    data () {
        return {
            picture: false
        }
    },
    components: {
        Gallery,
        FadeAnimated
    },
    methods: {
        handleBanner () {
            this.picture = true
        },
        trigglered () {
            this.picture = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-inner
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .7rem
            padding: 0 .2rem
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
            .banner-title
                flex: 1
                color: #eee
                font-size: 100%
            .banner-pages
                color: #eee
                padding: 0 .4rem
                border-radius: .2rem
                line-height: .5rem
                background: rgba(0, 0, 0, 1)
</style>
