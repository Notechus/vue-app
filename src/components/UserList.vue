<template>
  <ul id="userlist">
    <li v-for="user in userList" :key="user.id">{{ user.username }}</li>
  </ul>
</template>

<script>
  export default {
    props: ['userList']
  }
</script>

<style>
  #userlist {
    position: fixed;
    left: 50%;
    list-style: none;
    margin-left: 250px;
    background: #f0f0f9;
    padding: 5px 10px;
    width: 150px;
    top: 11px;
  }
</style>
