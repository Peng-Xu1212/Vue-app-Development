<template >
    <div>
        <DestinationTop></DestinationTop>
        <DestinationSwiper></DestinationSwiper>
        <DestinationHeader></DestinationHeader>
    </div>
</template>

<script>
import DestinationHeader from './components/Header'
import DestinationTop from './components/Top'
import DestinationSwiper from './components/Swiper'

export default {
    name: 'Destination',
    components: {
        DestinationHeader,
        DestinationTop,
        DestinationSwiper
    }
}
</script>

<style lang="stylus" scoped>
</style>
