<template>
  <div class="main">
    <home v-if="currentView === 'Home'"></home>
    <login v-if="currentView === 'Login'"></login>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Login from './components/Login.vue';

  export default {
    replace: false,
    data() {
      return {
        currentView: 'Login'
      }
    },
    components: {
      Home,
      Login
    }
  }
</script>
