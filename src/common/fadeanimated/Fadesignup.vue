<template>
   <transition enter-active-class="animated zoomIn v-enter-active"
               leave-active-class="animated zoomOut v-leave-active"
   >
      <slot></slot>
   </transition>
</template>

<script>
import animated from './animated.css'
export default {
    name: 'Fadedsignup',
    components: {
        animated
    }
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
      opacity: 0
  .v-enter-active, .v-leave-active
      transition: opacity 0.9 .5s
</style>
