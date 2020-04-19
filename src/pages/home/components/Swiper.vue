<template>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
         <swiper-slide v-for="item in list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl"/>
         </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {              //接收来自home.vue的数据list
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }

        }
    },
    computed: {
        showSwiper () {                 // 图片切换从第一张开始
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
  .wrapper
      overflow: hidden
      width: 100%
      height: 1
      padding-bottom: 0.25%
      background: #eee
      .swiper-img
          width: 100%


</style>
