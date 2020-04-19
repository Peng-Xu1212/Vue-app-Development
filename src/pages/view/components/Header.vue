<template>
    <div>
        <div class="header">
              <div @click="back">
                  <div class="iconfont back-icon1">&#xe624;</div>
                  <div class="title">
                      {{this.$store.state.location}}
                  </div>
              </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewHeader',
    props: {
        name: String,
        parkname: String
    },
    methods: {
        back () {
            this.$router.push('/detail/' + this.$store.state.id)
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
    .header
        z-index: 1
        overflow: hidden
        position: fixed
        display: flex
        top: 0
        left: 0
        right: 0
        line-height: .7rem
        width: 100%
        font-size: .35rem
        color: #fff
        background: $bgColor
        opacity: 0
        .back-icon1
            color: #fff
            text-indent: .2rem
        .title
            position: absolute
            top: 0
            left: 0
            right: 0
            text-align: center
    .header:hover
        opacity: 0.9

</style>
