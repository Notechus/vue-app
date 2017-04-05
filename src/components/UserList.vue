<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3>Connected Users</h3>
    </div>
    <div class="panel-body">
      <ul>
        <li v-for="user in users">{{ user.username }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      users: 'users'
    })
  }
</script>

<style>
  #userlist {
    list-style: none;
    background: #f0f0f9;
    padding: 5px 10px;
  }
</style>
