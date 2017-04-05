<template>
  <div class="panel panel-info" id="chat-window">
    <div class="panel-heading">
      <h3>Messages</h3>
    </div>
    <div class="panel-body">
      <article v-for="item in messages">
        <p v-if="item.type === 'error'" class="error-msg">{{ item.msg }}</p>
        <p v-if="item.type === 'message'" class="msg">{{ item.msg }}</p>
      </article>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      messages: 'messages'
    })
  }
</script>

<style>
  #chat-window {
    overflow-y: scroll;
    max-height: 500px;
  }

  .error-msg {
    color: red;
  }

  .msg {
    color: black;
  }
</style>
