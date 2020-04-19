<template>
  <div>
      <ViewHeader :parkname="parkname"></ViewHeader>
      <ViewSet :latt="latt"
               :lngg="lngg"
      >
      </ViewSet>
  </div>
</template>

<script>
import ViewSet from './components/Set'
import ViewHeader from './components/Header'
import axios from 'axios'

export default {
    name: 'View',
    components: {
        ViewSet,
        ViewHeader
    },
    data () {
        return {
            parkname: '',
            latt: '',
            lngg: ''
        }
    },
    methods: {
        getInfo () {
            axios.get('/api/photo.json/id=' + this.$route.params.id)
              .then(this.getInfoSucc)
        },
        getInfoSucc(res){
            res = res.data
            this.latt = res[0].lat
            this.lngg = res[0].lng

            // console.log(this.$store.state.lat)
            // console.log(this.$store.state.lng)
            // if(res.ret && res.data){
            //     const data = res.data
            //     this.parkname = data.title
            // }
        }
    },
    activated () {
        this.getInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
