<template>
    <div class="icons">
       <swiper>
         <swiper-slide v-for="(page, index) of pages" :page="index">
            <div class="icon" v-for="item in page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" />
                </div>
                <p class="icon-desc">{{item.des}}</p>
            </div>
          </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    computed: {
        pages () {
            const pages = []
            for (var i = 0; i < this.list.length; i++) {
              const page = Math.floor(i / 8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(this.list[i])
            }
            return pages
            // this.list.forEach((item, index) => {
            //     const page = Math.floor(index / 8)
            //     if (!pages[page]) {
            //         pages[page] = []
            //     }
            //     pages[page].push(item)
            // })
            // return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mix.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .1rem
        .icon
            position: relative
            overflow: hidden
            height: 0
            float: left
            width: 25%
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                   display: block
                   margin: 0 auto
                   height: 100%
            .icon-desc
              position: absolute
              left: 0
              right: 0
              bottom: 0
              height: .44rem
              line-height: .44rem
              text-align: center
              color: $darkTextColor
              ellipsis()

</style>
