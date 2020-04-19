<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="input the name of city" />
    </div>
    <div class="search-content" v-show="keyword">
        <ul>
            <li class="search-advice">
                Search Recommend
            </li>
            <li class="search-item border-bottom"
                v-for="item in list"
                @click="handleCity(item.name)"
            >
                {{item.name}}
            </li>
            <li class="search-item" v-show="!list.length">
                No infomation matched
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'CitySearch',
    props: {
        acity: Object,
    },
    data () {
      return {
          keyword: '',
          list: [],
          timer: null
      }
    },
    methods: {
        handleCity (city) {
            this.$store.dispatch('changeCity', city)
            if ( city == "Sydney"){
                this.$router.push('/destination')
            }else{
                this.$router.push('/')
            }
        }
    },
    watch: {
        keyword () {
            // if (this.timer) {
            //     clearTimeout(this.timer)
            // }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.acity) {
                    this.acity[i].forEach((value) => {
                        // if we are able to find the keyword
                        if (value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .search
        height: .72rem
        background: $bgColor
        padding: 0 .1rem
        .search-input
            height: .62rem
            line-height: .62rem
            text-align: center
            border-radius: .1rem
            width: 100%
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.5rem
        left: 0
        right: 0
        bottom: 0
        background: #ffffff
        .search-item
            line-height: .5rem
            margin-left: .15rem
            font-size: .3rem
            color: $bgColor
        .search-advice
            line-height:.4rem
            background: #eee
            text-indent: .2rem

</style>
