<template>
    <div>
        <Header></Header>
        <User :alluser="alluser"></User>
    </div>
</template>

<script>
import Header from './components/Header'
import User from './components/Usermanage'
import axios from 'axios'

export default {
    name: 'Signupsucc',
    components: {
      Header,
      User
    },
    data () {
        return {
            alluser: []
        }
    },
    methods: {
      view () {
          axios.get('/api/viewall')
            .then(this.getView)
      },
      getView (res) {
          res = res.data
          this.alluser = res
      }
    },
    mounted() {
      this.view()
    }
}
</script>

<style lang="stylus" scoped>
</style>
