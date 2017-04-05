<template>
  <div class="panel panel-default">
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password">
    </div>
    <div>
      <button v-on:click="loginUser">Login</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import {store} from './../stores/store.js'

  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    computed: mapGetters({
      currentView: 'currentView'
    }),
    methods: {
      loginUser: function () {
        console.log(this.username + " : " + this.password);
        this.$store.commit('changeView', 'Home');
      }
    },
    mutations: mapMutations({})
  }
</script>
