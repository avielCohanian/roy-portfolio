import Vue from 'vue';
import Vuex from 'vuex';
import { itemStore } from './item.store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    itemStore,
  },
});
