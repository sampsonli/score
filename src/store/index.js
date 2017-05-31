/**
 * Created by lichun on 2017/1/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import zqdetail from './zqdetail'
// import axios from '~common/axios'
Vue.use(Vuex)

const state = {
    name: 'lichun'
}
const mutations = {

}
const actions = {
    fetchItem ({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello world')
            }, 2000)
        })
    }
}

export function createStore () {
    return new Vuex.Store({
        state,
        actions,
        mutations,
        modules: {
            home, zqdetail
        }
    })
}
