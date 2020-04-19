<template>
    <div class="wrapper border-bottom">
        <div class="label">
            <span class="iconfont">&#xe792;</span>
        </div>
        <router-link :to="'/view/' + this.$store.state.id" class="content">
            {{this.name}}, {{ this.currentCity }}
        </router-link>
        <div class="arrow">
              <span class="iconfont">&#xe6a1;</span>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'DetailLocation',
    props: {
        name: String,
        extractid: Number
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    }

}
</script>

<style lang="stylus" scoped>
    .wrapper
        position: relative
        overflow: hidden
        top: 0
        left: 0
        right: 0
        width: 100%
        height: 1
        padding-bottom: 12%
        line-height: .78rem
        .label
          position: absolute
          top: 0
          left: .5rem
        .content
            position: absolute
            top: 0
            left: 1rem
            font-size: 80%
        .arrow
            position: absolute
            top: 0
            right: 0

</style>
