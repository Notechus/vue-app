import Vue from 'vue/dist/vue.js'
import app from './app.vue'

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production';

const App = new Vue({
  el: '#app',
  components: {
    app
  },
});
