<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3>Chat Service</h3>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-9">
          <chat></chat>
        </div>
        <div class="col-md-3">
          <user-list></user-list>
        </div>
      </div>
      <chat-controls></chat-controls>
    </div>
  </div>
</template>

<script>
  import Chat from './Chat.vue';
  import ChatControls from './ChatControls.vue';
  import UserList from './UserList.vue';

  export default {
    components: {
      Chat,
      ChatControls,
      UserList
    },
    created: function () {
      this.$store.commit('initWebsock', "localhost:4567/chat");
    }
  }
</script>
