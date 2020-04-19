<template>
    <div>
          <div class="recommend-title">
              Where do we go on the weekend?
          </div>
          <ul>
              <li class="item border-bottom" v-for="item in list" :key="item.id">
                  <div class="item-img-wrapper">
                      <img class="item-img" :src="item.imgUrl" />
                  </div>
                  <div class="item-info">
                      <p class="item-title">{{item.title}}</p>
                      <p class="item-desc">{{item.des}}</p>
                  </div>
              </li>
          </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mix.styl'
  @import '~styles/variables.styl'
    .recommend-title
        line-height: .4rem
        background: #eee
        text-indent: .3rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        padding: .1em
        .item-title
            line-height: .54rem
            font-size: .34rem
            ellipsis()
        .item-desc
            line-height: .35rem
            color: #bbb
            ellipsis()
</style>
