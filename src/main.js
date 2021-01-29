import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import viLocale from 'element-ui/lib/locale/lang/vi'
import enLocale from 'element-ui/lib/locale/lang/en'
import router from './router'
import store from './store'

Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.config.lang = 'vi'
Vue.locale('en', enLocale)
Vue.locale('vi', viLocale)
