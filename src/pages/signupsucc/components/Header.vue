<template>
    <div class="wrapper-header">
        <div class="header-title">
            Dear Admin, Welcome back!
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="stylus" scoped>
    .wrapper-header
        position: fixed
        top: .1rem
        right: 0
        left: .2rem
        width: 95%
        height: 1rem
        border-radius: .15rem
        background: linear-gradient(left, #0CECF0, #BFF1F2)
        .header-title
            text-align: center
            margin-top: .25rem
            color: #fff
            font-size: .4rem
        

</style>
