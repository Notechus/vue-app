<template>
  <home></home>
  <!--<login v-if="currentView === 'Login'"></login>-->
</template>

<script>
  import Home from './components/Home.vue';
  import Login from './components/Login.vue';
  import {store} from './stores/store.js';
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    replace: false,
    components: {
      Home,
      Login
    },
    computed: mapGetters({
      currentView: 'currentView'
    })
  }
</script>
