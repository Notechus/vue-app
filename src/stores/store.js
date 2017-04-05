import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
      users: [],
      messages: [],
      currentView: 'Login',
      auth: false,
      username: 'Notechus',
      websock: null
    },
    getters: {
      users: state => state.users,
      messages: state => state.messages,
      currentView: state => state.currentView,
      websock: state => state.websock
    },
    mutations: {
      addUser(state, user)
      {
        state.users.push(user);
      }
      ,
      addMessage(state, message)
      {
        state.messages.push(message);
      }
      ,
      changeView(state, view)
      {
        state.currentView = view;
      }
      ,
      initWebsock(state, url)
      {
        state.websock = new WebSocket("ws://" + url);
        state.websock.onopen = function () {
          console.log("Opened socket");
          state.websock.send("{username:" + state.username + "}");
        };
        state.websock.onmessage = function (msg) {
          var parsed = JSON.parse(msg.data);
          state.messages.push({msg: parsed.message, type: 'message'});
          state.users = parsed.userList;
        };
        state.websock.onerror = function (data) {
          state.messages.push({msg: data.data.message, type: 'error'});
        };
      }
      ,
      sendMessage(state, msg)
      {
        state.websock.send(msg);
      }
      ,
      setOnOpenHandler(state, handler)
      {
        state.websock.onopen = handler;
      }
      ,
      setOnMessageHandler(state, handler)
      {
        state.websock.onmessage = handler;
      }
      ,
      setOnCloseHandler(state, handler)
      {
        state.websock.onclose = handler;
      }
      ,
      setOnErrorHandler(state, handler)
      {
        state.websock.onerror = handler;
      }
    }
  })
;
