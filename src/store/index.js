import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const getters = {}

import home from '@/store/home'
import users from '@/store/users'
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        users
    }
})