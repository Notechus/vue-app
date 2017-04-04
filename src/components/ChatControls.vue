<template>
  <div id="chatControls">
    <input v-model="message">
    <p>{{ message }}</p>
    <button v-on:click="sendMessage">Send</button>
  </div>
</template>

<script>
  import Websock from '../services/websock.js';
  export default {
    data() {
      return {
        message: ''
      }
    },
    methods: {
      sendMessage: function () {
        if (Websock.isConnected()) Websock.send(this.message);
      }
    }
  }
</script>
