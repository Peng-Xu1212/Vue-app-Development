<template >
    <div class="header-main">
        <div class="header-content border-bottom">
            <div class="iconfont back-icon" @click="handleClickBack">&#xe624;</div>
            <p class="content">Travel on Holiday</p>
            <p class="location" @click="handleClick">{{this.$store.state.city}}</p>
            <span class="iconfont arrow" @click="handleClick">&#xe6aa;</span>
            <span class="iconfont message">&#xe636;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DestinationTop',
    methods: {
        handleClick () {
            this.$router.push('/city')
        },
        handleClickBack () {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .header-content
        position: relative
        overflow: hidden
        height: .84rem
        line-height: .84rem
        background: #ffffff
        .back-icon
            position: absolute
            top: 0
            bottom: 0
            left: .17rem
        .content
            position: absolute
            top: 0
            left: 20%
            right: 0
            bottom: 0
            color: #bbb
            font-size: 90%
        .location
            position: absolute
            top: 0
            right: 30%
            bottom: 0
            font-size: 90%
        .arrow
            position: absolute
            top: .01rem
            right: 25%
            bottom: 0
        .message
            position: absolute
            top: 0
            right: .21rem
            bottom: 0
            text-align: center

</style>
