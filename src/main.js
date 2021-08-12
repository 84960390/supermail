import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js';
import toast from 'components/common/toast/index.js';
import fastclick from 'fastclick';
fastclick.attach(document.body);

Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();
Vue.use(toast);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
