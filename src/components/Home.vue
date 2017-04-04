<template>
  <div>
    <chat></chat>
    <user-list :userList="users"></user-list>
    <chat-controls></chat-controls>
  </div>
</template>

<script>
  import Chat from './Chat.vue';
  import ChatControls from './ChatControls.vue';
  import UserList from './UserList.vue';

  export default {
    data: function () {
      return {
        users: [],
        messages: [],
        message: ''
      }
    },
    components: {
      Chat,
      ChatControls,
      UserList
    }
  }
</script>
