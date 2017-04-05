import Vue from 'vue/dist/vue.js'
import app from './app.vue'
import {store} from './stores/store.js'

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production';

const App = new Vue({
  store,
  el: '#app',
  render: h => h(app)
});
