<template>
   <transition enter-active-class="animated slideInUp v-enter-active"
               leave-active-class="animated slideOutDown v-leave-active"
   >
      <slot></slot>
   </transition>
</template>

<script>
import animated from './animated.css'
export default {
    name: 'Fadedetail',
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
