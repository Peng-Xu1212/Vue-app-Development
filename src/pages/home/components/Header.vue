<template>
  <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            {{this.userValue}}
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.currentCity}}
                <span class="iconfont arrow-down">&#xe6aa;</span>
            </div>
        </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Bus from './bus.js'

export default {
    name: 'Header',
    data () {
        return {
            userValue: ''
        }
    },
    computed: {
        ...mapState ({
            currentCity: 'city'
        })
    },
    mounted() {
        Bus.$on('useroradmin', (v) => {
            this.userValue = v
            if (v == 'admin'){
                this.$router.push('/signupsucc')
            }else{
                
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mix.styl'
    .header
        z-index: 3
        position: fixed
        top: 0
        left: 0
        right: 0
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            padding-left: .25rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .25rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            min-width: 1.04rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: .24rem
</style>
