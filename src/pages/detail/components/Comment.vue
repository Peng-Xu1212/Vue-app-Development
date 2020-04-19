<template>
    <div class="wrapper border-bottom">
        <div class="comment ">
            <div class="point">
                <span class="section1">5.0</span>
                <span class="section2">Excellent</span>
            </div>
            <div class="comment-inner">
              <span class="part1">215 Comments</span>
              <span class="part2">8 Raiders</span>
            </div>
            <div class="label">
                <span class="iconfont">&#xe6a1;</span>
            </div>
        </div>
        <div class="line">

        </div>
        <div class="intro">
            <div class="intro-inner">
                <span class="inner1">Introduction</span>
            </div>
            <div class="open-time">
              <span class="inner3">open time and tips</span>
            </div>
            <div class="label">
                <span class="iconfont">&#xe6a1;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailComment'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mix.styl'
    .wrapper
        overflow: hidden
        position: relative
        top: 0
        left: 0
        right: 0
        bottom: 0
        width: 100%
        height: 0
        padding-bottom: 1.5rem
        .line
            position: absolute
            top: 10%
            left: 50%
            right: 50%
            height: 80%
            width: .01rem
            background: #DDDEDD
        .comment
            position: absolute
            top: 0
            left: 0
            width: 50%
            height: 1
            .point
                padding: .2rem .4rem
                .section1
                    font-size: .5rem
                    color: #08F825
                .section2
                    color: #08F825
                    font-size: 100%
            .comment-inner
                  padding: 0 .2rem
                  .part1
                      color: #bbb
                      font-size: .2rem
                  .part2
                      color: #bbb
                      padding: 0 .2rem
                      font-size: .2rem
            .label
                 position: absolute
                 top: .5rem
                 right 0
        .intro
            position: absolute
            width: 50%
            height: 1
            top: 0
            right: 0
            .intro-inner
                padding: .3rem .4rem
                .inner1
                    color: black
            .open-time
                  padding: 0 .4rem
                  .inner3
                      color: #bbb
                      font-size: .2rem
            .label
                 position: absolute
                 top: .5rem
                 right: 0

</style>
