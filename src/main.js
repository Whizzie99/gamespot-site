import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router from './routes';
import store from './Store/store';
import vuelidate from 'vuelidate';

import {MdCard} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import Button from './components/ui/Button.vue';

Vue.component('app-button', Button)


// Vue material
Vue.use(MdCard)

// vue resource
Vue.use(VueResource);
Vue.http.options.root = ''

// misc
Vue.use(vuelidate)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
