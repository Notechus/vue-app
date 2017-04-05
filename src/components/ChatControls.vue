<template>
  <div id="chatControls" class="row">
    <div class="col-md-4">
      <input class="form-control" v-model="message">
    </div>
    <div class="col-md-4">
      <button class="btn btn-default" v-on:click="send">Send</button>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex';

  export default {
    data() {
      return {
        message: ''
      }
    },
    methods: {
      send: function () {
        this.$store.commit('sendMessage', this.message);
        this.message = '';
      }
    },
    computed: mapGetters({
      websock: 'websock'
    })
  }
</script>

<style>

</style>
