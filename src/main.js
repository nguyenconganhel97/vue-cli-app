import Vue from 'vue';
import App from './App.vue';

console.log(Vue.version);

new Vue({
  el: '#app',
  render: h => h(App),
});