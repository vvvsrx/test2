import Vue from 'vue';
import Hello from './app/Hello.vue';

import './index.css';

export default new Vue({
  el: '#root',
  render: h => h(Hello)
});
