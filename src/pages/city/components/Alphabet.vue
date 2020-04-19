<template>
    <ul class="list">
        <li class="item"
            v-for="(item, key) in acity"
            :key="item"
            @click="handleClick(key)"
        >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        acity: Array
    },
    methods: {
        handleClick (e) {
            this.$emit('change', e)
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.2rem
    right: 0
    bottom: 0
    width: .3rem
    .item
        line-height: .45rem
        color: $bgColor
</style>
