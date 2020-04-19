<template>
    <div>
        <div class="title">
            <p class="title-content">[From Cairns] Half-Day Whitewater Rafting on the Barron River</p>
        </div>
        <div class="label-cross" @click="handleClose">
            <span class="iconfont">&#xe705;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailPop',
    props: {
        show: Boolean
    },
    methods: {
        handleClose () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
  .title
      width: 85%
      padding: .3rem .2rem
      line-height: .5rem
      .title-content
          font-size: .35rem
  .label-cross
      position: absolute
      top: .35rem
      right: .35rem

</style>
