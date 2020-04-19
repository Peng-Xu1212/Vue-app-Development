import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

//let cartname = window.localStorage.getItem('cartname')

export default new Vuex.Store ({
    state,
    actions: {
        changeCity(value, city) {
            value.commit('changedCity', city)
        }
    },
    mutations
})
