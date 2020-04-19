<template>
    <div class="container" @click="handleOutside">
        <div class="wrapper">
          <swiper :options="swiperOption"
                  ref="mySwiper"
          >
              <swiper-slide v-for="item in image" :key="item.id">
                  <img class="img" :src="item.imgUrl">
              </swiper-slide>

              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    props: {
        image: []
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleOutside () {
            this.$emit('trigglered')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-pagination
        position: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        overflow: hidden
        z-index: 1
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 80%
            .img
                width: 100%
            .swiper-pagination
                color: #eee
                bottom: 0

</style>
