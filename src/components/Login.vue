<template>
  <div>
    <label for="username">Username:</label>
    <input type="text" v-model="username" id="username">
    <label for="password">Password:</label>
    <input type="password" v-model="password" id="password">
    <button v-on:click="loginUser">Login</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      loginUser: function () {
        console.log(this.username + " : " + this.password);
      }
    }
  }
</script>
