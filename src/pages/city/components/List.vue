<template >
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
          <div class="title border-topbottom">
              Current city
          </div>
          <div class="button-list">
              <div class="button-wapper">
                  <div class="button">
                      {{this.$store.state.city}}
                  </div>
              </div>
          </div>
      </div>
      <div class="area border-topbottom">
          <div class="title">
              Hot Places
          </div>
          <div class="button-list">
              <div class="button-wapper"
                   v-for="item in city"
                   :key="item.id"
                   @click="handleCity(item.name)"
               >
                    <div class="button">
                        {{item.name}}
                    </div>
              </div>
          </div>
      </div>
      <div class="area" v-for="(item, key) in acity" :key="key" :ref="key">
          <div class="title border-topbottom">
              {{key}}
          </div>
          <div class="city-list">
              <div class="city border-bottom"
                   v-for="innerItem in item"
                   :key="innerItem.id"
                   @click="handleCity(innerItem.name)"
               >
                  {{innerItem.name}}
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        city: Array,
        acity: Array,
        letter: String
    },
    methods: {
        handleCity (city) {
            this.$store.dispatch('changeCity', city)
            if (city == "Sydney") {
                this.$router.push('/destination')
            } else {
                this.$router.push('/')
            }
        }

    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            if (this.letter) {
              const element = this.$refs[this.letter][0]
              this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            color: #ccc
        &:after
            color: #ccc
    .border-bottom
        &:before
            color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.5rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            font-size: .27rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wapper
                float: left
                width: 33.33%
                .button
                    padding: .1rem
                    text-align: center
                    border: .02rem solid #ccc
                    margin: .1rem
                    border-radius: .1rem
        .city-list
            .city
                line-height: .72rem
                padding-left: .2rem

</style>
