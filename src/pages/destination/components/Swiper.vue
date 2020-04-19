<template>
    <div class="wrapper-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide>
                  <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/a10c1d000001eni4iC70C.jpg_.webp">
              </swiper-slide>
              <swiper-slide>
                  <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/a10m1d000001euk73FB57.jpg_.webp">
              </swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'DestinationSwiper',
    data () {
        return {
            swiperOption: {                      // 引入图片下方的指示逗点
                pagination: '.swiper-pagination',
                loop: true                        // 允许图片可以左右拖拽
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper-swiper
        overflow: hidden
        height: 1
        width: 100%
        .swiper-img
            width: 100%
</style>
