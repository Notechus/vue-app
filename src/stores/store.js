import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    users: [],
    messages: [],
    auth: false
  },
  getters: {
    users: state => state.users,
    messages: state => state.messages
  },
  mutations: {
    addUser(user){
      this.users.push(user);
    }
  }
});
