<template>
    <div class="header-main">
        <div class="header border-bottom">
            select your city
            <router-link to="/">
                <span class="iconfont arrow-down">&#xe624;</span>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        position: relative
        overflow: hidden
        height: .86rem
        line-height: .86rem
        text-align: center
        color: #fff
        background: $bgColor
        font-size: .32rem
        .arrow-down
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff



</style>
