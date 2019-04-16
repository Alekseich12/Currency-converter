import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultValue: null,
    dlsh: null,
    response: axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then((value) => value.data),
    shoooInput: null
  },
  mutations: {
    dlsh: function (state, value) {
      state.dlsh = value
    },
    setshoooInput: function (state, value) {
      state.shoooInput = value
    },
    resultValue: function (state, value) {
      state.dlsh = value
    }
  }
})
